import { useRouter } from "next/router";

import Button from "@/components/ui/Button";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-center min-h-screen text-center relative">
        <div className="relative">
          <h1 className="text-3xl text-white font-bold mb-2">
            Hi, I'm{" "}
            <span
              title="Also known as Rusky on the internet."
              className="underline decoration-dotted cursor-help"
            >
              Ayaan
            </span>
            <span className="inline-block ml-2 align-middle relative">
              <img
                src="/icons/WavingHeartBuddy.png"
                alt="Waving Heart Buddy Icon"
                className="w-10 h-10"
              />
            </span>
          </h1>

          <h2 className="text-xl text-gray-300 mb-6 px-4">
            I build code that works for web, mobile, desktop, and beyond.
          </h2>

          <div className="flex justify-center gap-4">
            <Button onClick={() => router.push("/projects")}>
              See My Work
            </Button>
            <button
              onClick={() => router.push("/contact")}
              className="text-white cursor-pointer hover:text-cyan-400 transition-colors duration-500 ease-in-out"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
