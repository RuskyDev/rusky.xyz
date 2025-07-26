"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import { useProjects } from "@/context/ProjectsContext";

export default function Projects() {
  const { projects, loading } = useProjects();
  const [activeTab, setActiveTab] = useState("Projects");

  return (
    <>
      <div className="mt-24 px-4 sm:px-6 md:px-12 lg:px-28">
        <div className="mt-10">
          <div className="flex gap-4 mb-6">
            {["Projects", "Portfolio"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full font-semibold transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-white text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-white mb-6 leading-[1.2] tracking-wide">
            {activeTab}
          </h2>

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
                    aria-label={`Visit ${project.name}`}
                    key={idx}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                      opacity: 0.95,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="bg-white/10 border border-white/20 rounded-2xl p-4 text-white shadow-md transition-shadow cursor-pointer flex items-center gap-4"
                  >
                    {project.icon && (
                      <img
                        src={project.icon}
                        alt={`${project.name} icon`}
                        className="w-12 h-12 rounded-md object-cover"
                      />
                    )}
                    <div className="flex flex-col gap-2">
                      <h3
                        className="text-xl font-semibold"
                        title={project.name}
                      >
                        {project.name}
                      </h3>
                      <p className="text-sm text-white/80">
                        {project.description || "No description available."}
                      </p>
                    </div>
                  </motion.a>
                ))}
          </div>
        </div>
      </div>
    </>
  );
}
