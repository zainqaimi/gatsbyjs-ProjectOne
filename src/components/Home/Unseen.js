import React from "react";
import lockImg from '../../images/hero.png';
const Unseen = () => {
  return (
    <section className="py-20 px-10 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between ">
        {/* Left Image Section */}
        <div className="flex justify-center mb-8 lg:mb-0 lg:flex-none">
          <img
            src={lockImg}
            alt="Unlock Illustration"
            className="w-full max-w-sm lg:max-w-lg"
          />
        </div>

        {/* Right Text Section */}
        <div className="text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className="text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta.
          </p>
          <p className="text-gray-500 mt-2">
            Nulla mattis tristique iaculis. Nullam pulvinar sit amet risus
            pretium auctor. Etam quis massa pulvinar, aliquam quam vitae, tempus
            sem. Donec elementum pulvinar odio.
          </p>
          <button className="bg-green-500 text-white px-6 py-2 mt-6 rounded-md hover:bg-green-600">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Unseen;
