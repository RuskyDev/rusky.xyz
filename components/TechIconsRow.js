'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function TechIconsRow({ label, icons }) {
    const [loaded, setLoaded] = useState(false);
    const iconsArray = icons.split(',');

    return (
        <div className="flex items-center gap-3">
            <div className="bg-white px-3 py-1 rounded-full text-black text-sm font-medium w-24 text-center">
                {label}
            </div>

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
}
