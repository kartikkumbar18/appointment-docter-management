import React from "react";
import Navbar from "../Navbar/navbar";
import Carousel from "../carousel/carosel";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div>
          <Navbar />
        </div>

        <div className="mt-28 flex-grow">
          <Carousel />
        </div>

        <div className="pt-10 pb-6 fixed bottom-0 w-full bg-gray-800 text-white">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
