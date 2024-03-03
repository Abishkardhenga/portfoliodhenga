import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          Hello, I'm an enthusiastic web developer with a wealth of experience
          in both backend and frontend programming. I have a fervor for
          enhancing my skills and exploring cutting-edge technologies.
          Currently, I'm actively taking on freelance projects and always eager
          to learn and collaborate with the latest web technologies.
        </p>

        <br />

        <p className="text-xl">
          I find joy in constructing projects from the ground up and
          transforming ideas into reality. Reach out to me to brainstorm and
          execute your project. <br /> <br />
          My focus lies in crafting minimalistic designs, establishing
          thoughtful branding, and creating a compelling, relatable customer
          experience. Let's work together to elevate your project's conversion
          rate! <br /> <br />
          I'm passionate about creating a unique identity for products or
          services, implementing effective search engine optimization
          strategies, and boosting traffic from social platforms. Moreover, I
          have a deep love for problem-solving, and I thrive on finding
          innovative solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
