import { instructors } from "@/constants";

const Instructors = () => {
  return (
    <section id="experts" className=" section-py">
      <div className="flex bg-brand/20 flex-col items-center text-center">
        <h2 className="mt-8 ">Meet Your Instructors</h2>
        <p className="max-w-sm mt-4">
          Learn from seasoned IT Professionals with real-world experience
        </p>
        <div className=" my-10 flex lg:px-26 px-17 flex-wrap gap-8 w-full justify-between max-sm:justify-center">
          {instructors.map((instructor, idx) => (
            <div className=" max-w-[250px] min-w-[200px] flex-1" key={idx}>
              <div className="h-[300px] relative">
                {/* background black frame */}
                <div className="absolute -inset-2.5 -z-10 bg-black" />
                <img
                  className="w-full h-full object-cover"
                  src={instructor.image}
                  alt={instructor.title}
                />
              </div>
              <h3 className="mt-4">{instructor.name}</h3>
              <p className="mt-1">{instructor.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
