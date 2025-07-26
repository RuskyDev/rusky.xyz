import { createContext, useContext, useState, useEffect } from "react";

const ProjectsContext = createContext();

const customProjects = [
  {
    name: "Arenoi",
    url: "https://arenoi.com",
    description: "Arenoi is the world's first emotional intelligence AI for Gen Z.",
    icon: "https://framerusercontent.com/images/IonYEchwRZXK3Gm4JqD5h94UOA.png?scale-down-to=512", // <-- add icon URL
  },
];


export function ProjectsProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProjects(customProjects);
    setLoading(false);
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
