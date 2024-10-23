import React from "react";

const Navbar = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(rolex.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-45"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className=" max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold text-white">Do you need quick cash</h1>
            <p className="mb-5 text-white">
             We get you cover, exchange your luxuries item to cash, we acctept luxuries watches, exotic cars, and other. You can sell and buy your luxuries item through us or from us, we deliver you item to your step
            </p>
            <button className="btn bg-blue-500 text-white">We Are Here</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
