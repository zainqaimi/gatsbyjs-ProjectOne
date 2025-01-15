import React from "react";
import { BsBuildings } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import clubsGroups from "../../images/handsGroup.png";
import Groups from "../../images/usersIcon.png";
import buildings from "../../images/building.png";

const Community = () => {
  return (
    <section className="py-20 px-6 bg-[#F9FAFB]">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Manage your entire community in a single system
        </h2>
        <p className="text-gray-500 mt-2">Who is Nextcent suitable for?</p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
          <div className="mb-4">
          <div className="inline-block">
              <img
                src={Groups}
                alt="Groups"
                className="w-20"
              />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            Membership Organisations
          </h3>
          <p className="text-gray-500 mt-2">
            Our membership management software provides full automation of
            membership renewals and payments.
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
          <div className="mb-4">
          <div className="inline-block">
              <img
                src={buildings}
                alt="buildings"
                className="w-20"
              />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            National Associations
          </h3>
          <p className="text-gray-500 mt-2">
            Our membership management software provides full automation of
            membership renewals and payments.
          </p>
        </div>
        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
          <div className="mb-4">
            <div className="inline-block">
              <img
                src={clubsGroups}
                alt="Clubs And Groups"
                className="w-20"
              />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            Clubs And Groups
          </h3>
          <p className="text-gray-500 mt-2">
            Our membership management software provides full automation of
            membership renewals and payments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Community;
