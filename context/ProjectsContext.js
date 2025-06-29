import { createContext, useContext, useEffect, useState } from 'react';

const ProjectsContext = createContext();

const projectUrls = [
  'https://github.com/RuskyDev/bloxstrap-optimization-flags',
  'https://github.com/RuskyDev/ruskydev.github.io',
];

export function ProjectsProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/github/getRepos');
      const json = await res.json();

      if (!json.success) throw new Error('Fetch failed');

      setProjects(json.data);
    } catch (error) {
      console.error('Error fetching GitHub repos:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchProjects();
}, []);

  return (
    <ProjectsContext.Provider value={{ projects, loading }}>
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjects() {
  return useContext(ProjectsContext);
}
