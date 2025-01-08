import React, { useState } from "react";

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [ 
    { id: 1, imageUrl: "https://img.freepik.com/premium-vector/woman-see-doctor-check-herself-doctor-consulting-female-patient_134553-390.jpg?w=826"},
    { id: 2, imageUrl: "https://images.everydayhealth.com/images/is-your-psa-doctor-right-for-you-alt-1440x810.jpg?sfvrsn=49a5c2df_4" },
    { id: 3, imageUrl: "https://img.freepik.com/premium-vector/woman-see-doctor-check-herself-doctor-consulting-female-patient_134553-390.jpg"},
  ]

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0"
            style={{ width: "100%" }}
          >
            <img
              src={slide.imageUrl}
              className="w-full h-[27rem] object-fill"
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
      >
        ❯
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex
                ? "bg-gray-800"
                : "bg-gray-400 hover:bg-gray-600"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
