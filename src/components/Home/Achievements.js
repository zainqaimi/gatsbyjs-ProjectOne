import React from "react";
import hands from "../../images/hands.png";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { MdOutlinePayment } from "react-icons/md";
import tochfig from "../../images/tochFing.png"
const Achievements = () => {
  return (
    <section className="py-20 px-10 bg-[#F5F7FA]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Helping a local{" "}
              <span className="text-green-500">business reinvent itself</span>
            </h2>
            <p className="text-gray-500 mt-4">
              We reached here with our hard work and dedication
            </p>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-6 md:gap-12 lg:grid-cols-4 lg:gap-8">
            {/* Stat 1 */}
            <div className="flex items-center space-x-1">
              
                <AiOutlineUsergroupDelete className="w-12 h-12 text-green-500" />
              <div>
                <p className="text-xl font-bold text-gray-800">2,245,341</p>
                <p className="text-gray-500">Members</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center space-x-3">
              <div>
                <img src={hands} alt="hands" className="w-12 h-12" />
                
              </div>
              <div>
                <p className="text-xl font-bold text-gray-800">46,328</p>
                <p className="text-gray-500">Clubs</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center space-x-3">
            <div>
                <img src={tochfig} alt="hands" className="w-12 h-12" />
                
              </div>
              <div>
                <p className="text-xl font-bold text-gray-800">828,867</p>
                <p className="text-gray-500">Event Bookings</p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center space-x-3">
              <div className="text-green-500 text-3xl">
              <MdOutlinePayment />
              </div>
              <div>
                <p className="text-xl font-bold text-gray-800">1,926,436</p>
                <p className="text-gray-500">Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
