import { useState } from "react";
import { projectsData } from "../data/data";
import Container from "./Container";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="bg-lightGray text-white py-[80px]">
      <Container>
        <div className="font-bold">
          <h3 className="text-center uppercase font-bold sm:text-xl text-lg">
            Discover a Broad Range Of Units That Will Suit Your Needs
          </h3>

          <div className="flex items-start gap-[20px] flex-wrap mt-[40px] mx-auto">
            {projectsData.map((p) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  key={p.id}
                  className="bg-[#E5E8EB] hover:bg-[#CBD5E1] md:w-[calc(50%-20px)] w-full md:min-h-[300px] min-h-[400px] transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
                  onClick={() => setSelectedProject(p)}
                >
                  <img
                    src={p.image}
                    alt={p.description}
                    className="w-full sm:h-[300px] h-auto object-cotain"
                  />
                  <div className="p-[20px] ">
                    <h4 className="uppercase text-xl font-bold">{p.title}</h4>
                    <p className="my-[20px] text-gray md:text-base text-sm">
                      {p.description}
                    </p>
                    {/* <Link to={p.to} onClick={e => e.stopPropagation()}>
                      <Button>See More!</Button>
                    </Link> */}
                  </div>
                </div>
              );
            })}
          </div>

          {selectedProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedProject(null);
              }
            }}
          >
            <div className="bg-lightGray text-black p-8 rounded-lg shadow-lg max-w-md w-full relative">
              <button
                className="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>
              <div className="card-content">
                <p className="card-subtitle mb-4">{selectedProject.description}</p>
              </div>
              <img
                src={selectedProject.image}
                alt={selectedProject.description}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="card-subtitle mb-4">Blueprint:</p>
              <img
                src={selectedProject.blueprint_image}
                alt={selectedProject.description}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            </div>
          </div>
        )}
        </div>
      </Container>
    </div>
  );
}

export default Projects;