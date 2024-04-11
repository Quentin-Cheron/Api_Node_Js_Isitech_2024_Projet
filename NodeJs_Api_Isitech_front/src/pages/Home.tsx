import Navigation from "@/components/parts/Navigation";
import React from "react";

const Home = () => {
  return (
    <div className="grid grid-cols-[300px,1fr]">
      <Navigation />
      <main>
        <h1 className="text-center text-3xl mt-5">Home</h1>
      </main>
    </div>
  );
};

export default Home;
