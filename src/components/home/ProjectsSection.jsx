import Projects from "../Projects";
import MainHead from "../mainHead/MainHead";

function ProjectsSection() {
  return (
    <div className="bg-lightGray text-white py-[40px]" id="projects-section">
      <MainHead>Projects</MainHead>
      <Projects />
    </div>
  );
}

export default ProjectsSection;
