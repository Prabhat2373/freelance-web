import React from "react";

const Index = () => {
  return (
    <div>
      <div className="bg-[#FF4C4A] h-[272px]">
        <div>
          <h1>Join world’s best market place</h1>
          <p>
            Find the best Talent and best works based on your skills from around
            the world.
          </p>
          <div>
            <button className="px-9 py-3 flex justify-center items-center bg-red-500 text-white font-semibold rounded-full">
              Find Talent
            </button>
            <button className="px-9 py-3 flex justify-center items-center bg-red-500 text-white font-semibold rounded-full">
              Find work
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#DDE1F3] h-[265px]"></div>
    </div>
  );
};

export default Index;
