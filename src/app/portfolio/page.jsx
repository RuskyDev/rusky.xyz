"use client";

import { motion } from "framer-motion";

export default function PortfolioPage() {
  const portfolio = [
    {
      name: "Video With People",
      description:
        "An anonymous video chat app that lets you instantly connect with random people around the world.",
      features: [
        "Anonymous video calls",
        "Real-time chat with WebSockets",
        "Peer-to-peer connections",
      ],
      tech: ["Express", "Socket.IO", "Simple Peer"],
      liveDemo: "https://video-with-people.rusky.xyz/",
      repo: "https://github.com/RuskyDev/video-with-people",
    },
  ];

  return (
    <div className="mt-24 px-4 sm:px-6 md:px-12 lg:px-28">
      <h2 className="text-4xl font-bold text-white mb-10">Portfolio</h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {portfolio.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="rounded-xl overflow-hidden bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-white/10 hover:border-cyan-500/40 transition-colors"
          >
            <div className="p-6 border-b border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-sm text-white/70">
                Icon
              </div>
              <h3 className="text-lg font-semibold text-white">{item.name}</h3>
            </div>

            <div className="p-6 flex flex-col gap-4">
              <p className="text-sm text-white/80">{item.description}</p>

              <ul className="list-disc list-inside text-sm text-white/70 space-y-1">
                {item.features.map((feature, fIdx) => (
                  <li key={fIdx}>{feature}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {item.tech.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="bg-cyan-500/20 text-cyan-300 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-4">
                <a
                  href={item.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-cyan-500 text-black rounded-lg text-sm font-medium hover:bg-cyan-400 transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href={item.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/20 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
