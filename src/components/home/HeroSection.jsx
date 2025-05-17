import mainImage from "../../Assets/mainImage_1.png"
import { Link } from 'react-router-dom';
import Button from "../Button";


function HeroSection() {
  return (
    <div
      className="bg-cover min-h-screen text-white relative"
      style={{
        backgroundImage: `url(${mainImage})`,
        backgroundPosition: "60%",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="absolute left-0 top-0 w-full h-full"></div>
      <section className="h-[calc(100vh-80px)] ">
        <div className="container mx-auto px-[10px]">
          <div className="relative h-[100vh] w-full">
            {/* Content */}
            <div
              className="text-center h-full flex items-center justify-center flex-col
               w-[80%] mx-auto p-[20px] uppercase relative md:gap-[20px] gap-[10px]"
            >
              {/* <h2 className="md:text-7xl sm:text-4xl text-lg  font-bold" style={{color: 'white',textShadow: '0 2px 4px rgba(0, 0, 0, 0.7)'}}>
                NK CONSTRUCTION
              </h2> */}
              <h2
                className="md:text-7xl sm:text-4xl text-lg font-bold"
                style={{
                  color: 'white',
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                  letterSpacing: '0.05em',
                  borderLeft: '8px solid #F4A100', // Orange vertical bar
                  paddingLeft: '0.2em',
                }}
              >
                NK CONSTRUCTION
              </h2>
              <div>
                <Link
                  onClick={() => {
                    const section = document.getElementById("projects-section");
                    if (section) {
                      const yOffset = -40; // 40px less
                      const y =
                        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}>
                  <Button>SEE PROJECTS</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
