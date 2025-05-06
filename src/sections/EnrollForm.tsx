import Button from "@/components/Button"

const EnrollForm = () => {
  return (
    <section className="section-my section-mx section-px">
      <div className="flex max-w-[1100px] sm:p-20 m-auto flex-col items-center shadow-md">
        <h2>
          Enroll <span className="text-brand">Now!</span>
        </h2>
        <p className="max-w-lg text-center mt-4">Join thousands of successful students who have transformed 
        their careers with our training programs.</p>

        <form className="flex flex-col md:gap-8 gap-4 sm:my-14 my-8 w-full max-md:max-w-lg">
            <div className="flex md:flex-row flex-col gap-4 justify-between">
                <div className="flex flex-1 flex-col gap-2 max-w-lg">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" className="border-2 focus:border-brand border-gray-300 px-4 py-2 rounded-xs" name="firstName" id="firstName" placeholder="Enter your first name" required/>
                </div>
                <div className="flex flex-1 flex-col gap-2 max-w-lg">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" className="border-2 focus:border-brand border-gray-300 px-4 py-2 rounded-xs" name="lastName" id="lastName" placeholder="Enter your last name" required />
                </div>
            </div>
            
            <div className="flex md:flex-row flex-col gap-4 justify-between">
                <div className="flex flex-1 flex-col gap-2 max-w-lg">
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" className="border-2 focus:border-brand border-gray-300 px-4 py-2 rounded-xs"  name="email" id="email" placeholder="you@example.com" required/>
                </div>
                <div className="flex flex-1 flex-col gap-2 max-w-lg">
                    <label htmlFor="tel" >Phone Number:</label>
                    <input type="tel" className="border-2 focus:border-brand border-gray-300 px-4 py-2 rounded-xs"  name="tel" id="tel" placeholder="+234..." required/>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <label htmlFor="interest"> Area of interest </label>
                <select name="interest" id="interest" className="px-4 py-2 border-2 font-poppins rounded-xs" required>
                    <option value="" disabled selected className="" >Select your primary interest</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Frontend Development">Frontend Development</option>
                    <option value="Backend Development">Backend Development</option>
                    <option value="Blockchain Technology">Blockchain Technology</option>
                </select>
            </div>

            <div className="flex gap-4 items-start leading-snug max-sm:mt-2">
                <input type="checkbox" name="emailConsent" id="emailConsent" className="w-4 h-4 mt-1" />
                <label htmlFor="emailConsent" className="font-poppins sm:text-base text-sm font-normal ">I agree to receive emails about TechSkillsPro courses, promotions, and updates. You can unsubscribe at any time.</label>
            </div>
            
            <Button type="submit" children="Enroll" borderRadius="border-none" className="text-white py-2 font-semibold hover:bg-white hover:text-brand mt-4 transotion-all duration-200" />
        </form>
      </div>
    </section>
  );
};

export default EnrollForm;
