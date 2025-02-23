import { aboutUsData } from "../data/data";

function AboutUs() {
  return (
    <div className="flex text-white md:flex-row flex-col ">
      {aboutUsData.map((el) => {
        return (
          <div
            key={el.id}
            className={`text-center sm:px-[50px] bg-[#E5E8EB] sm:py-[70px] p-[30px] hover:bg-[#CBD5E1]`} // hover:bg-[#2E3A47] hover:text-whitee
          >
            <img
              src={el.image}
              alt={el.description}
              style={{
                filter:
                  "invert(77%) sepia(12%) saturate(900%) hue-rotate(105deg) brightness(25%) contrast(60%)",
              }}
              className="mx-auto"
            />
            <h2 className="text-2xl font-bold uppercase my-[20px]">
              {el.title}
            </h2>
            {
              <p className="text-gray">
                {el.description}
              </p> /* //hover:text-whitee */
            }
          </div>
        );
      })}
    </div>
  );
}

export default AboutUs;
