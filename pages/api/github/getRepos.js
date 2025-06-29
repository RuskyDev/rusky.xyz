export default async function handler(req, res) {
  const projectUrls = [
    'https://github.com/RuskyDev/bloxstrap-optimization-flags',
    'https://github.com/RuskyDev/ruskydev.github.io',
  ];

  const token = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;

  if (!token) {
    return res.status(500).json({ success: false, message: "Missing GitHub token" });
  }

  try {
    const repoData = await Promise.all(
      projectUrls.map(async (url) => {
        const [owner, repo] = url.split('github.com/')[1].split('/');
        const apiUrl = `https://api.github.com/repos/${owner}/${repo}`;

        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/vnd.github.v3+json',
            'User-Agent': 'Next.js Server',
          },
        });

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();

        return {
          name: data.name,
          description: data.description,
          html_url: data.html_url,
        };
      })
    );

    res.status(200).json({ success: true, data: repoData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
}
