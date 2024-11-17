import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Projects = () => {
  useGSAP(() => {
    gsap.to("#projects", {
      opacity: 1,
      delay: 0.2,
    });
  }, []);
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
