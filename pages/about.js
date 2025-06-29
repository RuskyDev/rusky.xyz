import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/ui/Navbar';
import { useProjects } from '@/context/ProjectsContext';

// Component: TechIconsRow
const TechIconsRow = ({ label, icons }) => {
    const [loaded, setLoaded] = useState(false);
    const iconsArray = icons.split(',');

    return (
        <div className="flex items-center gap-3">
            <div className="bg-white px-3 py-1 rounded-full text-black text-sm font-medium w-24 text-center">
                {label}
            </div>

            {/* Loading Skeleton */}
            {!loaded && (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex gap-3"
                >
                    {iconsArray.map((_, idx) => (
                        <div
                            key={idx}
                            className="h-10 w-10 sm:h-12 sm:w-12 bg-gray-700 rounded-lg animate-pulse"
                        />
                    ))}
                </motion.div>
            )}

            {/* Icons Display */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: loaded ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className={`flex gap-3 ${loaded ? 'block' : 'hidden'}`}
            >
                <img
                    src={`https://go-skill-icons.vercel.app/api/icons?i=${icons}&theme=dark`}
                    className="h-10 sm:h-12"
                    onLoad={() => setLoaded(true)}
                    alt={`${label} icons`}
                />
            </motion.div>
        </div>
    );
};

// Main Component: About
export default function About() {
    const { projects, loading } = useProjects();

    return (
        <>
            <Navbar
                menuItems={[
                    { label: 'Home', href: '/' },
                    { label: 'About', href: '/about' },
                    { label: 'Contact', href: '/contact' },
                ]}
            />

            <div className="mt-24 px-4 sm:px-6 md:px-12 lg:px-28">
                {/* About Text */}
                <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
                <p className="text-base text-white max-w-2xl">
                    I absolutely love tech and open source! I have been programming since early 2020
                    and have taught myself a multitude of languages and frameworks since then.
                </p>

                {/* Tech Stack Section */}
                <div className="mt-6">
                    <h2 className="text-3xl font-bold text-white mb-6">Tech Stack</h2>
                    <div className="flex flex-col gap-1.5">
                        <TechIconsRow label="Backend" icons="python,fastapi,nodejs,express,mongodb" />
                        <TechIconsRow label="Frontend" icons="js,react,nextjs,tailwindcss,electron" />
                        <TechIconsRow label="Databases" icons="sqlite,mysql,postgres" />
                        <TechIconsRow label="Linux" icons="arch,ubuntu,bash" />
                        <TechIconsRow label="Tools" icons="git,postman,ngrok,docker,nginx" />
                    </div>
                </div>

                {/* Projects Section */}
                <div className="mt-10">
                    <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>

                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {loading
                            ? [...Array(2)].map((_, idx) => (
                                  <div
                                      key={idx}
                                      className="bg-gray-700/40 animate-pulse rounded-2xl p-4 h-32"
                                  >
                                      <div className="bg-gray-600 h-5 w-3/4 rounded mb-2" />
                                      <div className="bg-gray-600 h-3 w-full rounded" />
                                      <div className="bg-gray-600 h-3 w-5/6 rounded mt-2" />
                                  </div>
                              ))
                            : projects.map((project, idx) => (
                                  <motion.a
                                      aria-label={`Visit ${project.name} on GitHub`}
                                      key={idx}
                                      href={project.html_url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      initial={{ opacity: 0, y: 20 }}
                                      whileInView={{ opacity: 1, y: 0 }}
                                      whileHover={{
                                          scale: 1.03,
                                          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                                          opacity: 0.95,
                                      }}
                                      transition={{
                                          duration: 0.3,
                                          ease: [0.25, 0.1, 0.25, 1],
                                      }}
                                      className="bg-white/10 border border-white/20 rounded-2xl p-4 text-white shadow-md transition-shadow cursor-pointer"
                                  >
                                      <h3
                                          className="text-xl font-semibold mb-2"
                                          title={project.name}
                                      >
                                          {project.name}
                                      </h3>
                                      <p className="text-sm text-white/80">
                                          {project.description || 'No description available.'}
                                      </p>
                                  </motion.a>
                              ))}
                    </div>
                </div>
            </div>
        </>
    );
}
