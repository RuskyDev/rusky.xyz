import TechIconsRow from '@/components/TechIconsRow'

export default function AboutPage() {
  return (
    <div className="mt-24 px-4 sm:px-6 md:px-12 lg:px-28">
      <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
      <p className="text-base text-white max-w-2xl">
        I started programming in 2019 with basic HTML. Now in 2025, I can
        build apps using any tech stack and create almost anything I set my
        mind to.
      </p>

      <div className="mt-6">
        <h2 className="text-3xl font-bold text-white mb-6">Tech Stack</h2>
        <div className="flex flex-col gap-1.5">
          <TechIconsRow label="Backend" icons="php,python,fastapi,nodejs,express" />
          <TechIconsRow label="Frontend" icons="html,css,js,react,nextjs,tailwindcss,electron" />
          <TechIconsRow label="Databases" icons="sqlite,mysql,postgres,mongodb" />
          <TechIconsRow label="BaaS" icons="firebase,supabase" />
          <TechIconsRow label="Linux" icons="arch,ubuntu,bash" />
          <TechIconsRow label="DevOps" icons="git,github,docker,nginx,ngrok,postman" />
          <TechIconsRow label="Workflow" icons="obsidian,mermaid" />
          <TechIconsRow label="CMS" icons="wordpress" />
          <TechIconsRow label="Hosting" icons="vercel,netlify,cloudflare" />
        </div>
      </div>
    </div>
  )
}
