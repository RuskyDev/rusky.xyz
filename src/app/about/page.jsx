import TechIconsRow from "@/components/TechIconsRow";

const techStack = [
  { label: "Backend", icons: "python,nodejs" },
  { label: "Frontend", icons: "html,css,js,nextjs,tailwindcss" },
  { label: "Database", icons: "mysql,postgres,mongodb" },
  { label: "BaaS", icons: "firebase,supabase" },
  { label: "Linux", icons: "bash" },
  { label: "DevOps", icons: "git,docker" },
  { label: "Hosting", icons: "vercel" },
];

export default function AboutPage() {
  return (
    <main className="mt-24 px-4 sm:px-6 md:px-12 lg:px-28">
      <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
      <p className="text-base text-white max-w-2xl">
        I started programming in 2019 with basic HTML. Now in 2025, I can build
        apps using any tech stack and create almost anything I set my mind to.
      </p>

      <section className="mt-6">
        <h2 className="text-3xl font-bold text-white mb-6">Tech Stack</h2>
        <div className="flex flex-col gap-1.5">
          {techStack.map((tech) => (
            <TechIconsRow key={tech.label} label={tech.label} icons={tech.icons} />
          ))}
        </div>
      </section>
    </main>
  );
}
