import { useState, ChangeEvent, FormEvent } from "react";
import Button from "@/components/Button";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  tel: string;
  interest: string;
  emailConsent: boolean;
};

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  tel: "",
  interest: "",
  emailConsent: false,
};

const EnrollForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setFormData(initialFormData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section id="enrollForm" className="section-my section-mx section-px">
      <div className="flex max-w-[1100px] sm:p-20 m-auto flex-col items-center shadow-md">
        <h2>
          Enroll <span className="text-brand">Now!</span>
        </h2>
        <p className="max-w-lg text-center mt-4">
          Join thousands of successful students who have transformed their
          careers with our training programs.
        </p>

        <form className="flex flex-col max-sm:px-4 md:gap-8 gap-4 sm:my-14 my-8 w-full max-md:max-w-lg" onSubmit={handleSubmit}>
          {/* First & Last name */}
          <div className="flex md:flex-row flex-col gap-4 justify-between">
            <div className="flex flex-1 flex-col gap-2 max-w-lg">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                className="border-2 focus:border-brand border-gray-300 px-4 py-2 rounded-xs"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="flex flex-1 flex-col gap-2 max-w-lg">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                className="border-2 focus:border-brand border-gray-300 px-4 py-2 rounded-xs"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="flex md:flex-row flex-col gap-4 justify-between">
            <div className="flex flex-1 flex-col gap-2 max-w-lg">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                className="border-2 focus:border-brand border-gray-300 px-4 py-2 rounded-xs"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="flex flex-1 flex-col gap-2 max-w-lg">
              <label htmlFor="tel">Phone Number:</label>
              <input
                type="tel"
                className="border-2 focus:border-brand border-gray-300 px-4 py-2 rounded-xs"
                name="tel"
                id="tel"
                value={formData.tel}
                onChange={handleChange}
                placeholder="+234..."
                required
              />
            </div>
          </div>

          {/* Course Interest */}
          <div className="flex flex-col gap-4">
            <label htmlFor="interest"> Area of interest </label>
            <select
              name="interest"
              id="interest"
              className="px-4 py-2 border-2 font-poppins rounded-xs"
              value={formData.interest}
              onChange={handleChange}
              required
            >
              <option value="" disabled selected>
                Select your primary interest
              </option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Frontend Development">Frontend Development</option>
              <option value="Backend Development">Backend Development</option>
              <option value="Blockchain Technology">
                Blockchain Technology
              </option>
            </select>
          </div>

          {/* Email Consent */}
          <div className="flex gap-4 items-start leading-snug max-sm:mt-2">
            <input
              type="checkbox"
              name="emailConsent"
              id="emailConsent"
              className="w-4 h-4 mt-1"
              checked={formData.emailConsent}
              onChange={handleChange}
            />
            <label
              htmlFor="emailConsent"
              className="font-poppins sm:text-base text-sm font-normal "
            >
              I agree to receive emails about TechSkillsPro courses, promotions,
              and updates. You can unsubscribe at any time.
            </label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            children="Enroll"
            borderRadius="border-none"
            className="text-white py-2 font-semibold opacity-70 hover:opacity-100 active:bg-white active:text-brand mt-4 transotion-all"
          />
        </form>
      </div>
    </section>
  );
};

export default EnrollForm;
