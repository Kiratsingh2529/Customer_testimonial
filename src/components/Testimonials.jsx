import React from "react";

const testimonials = [
  {
    name: "Kaushik Barman",
    feedback:
      "Quite happy and satisfied with the whole process. It was fast, hassle-free, and professional. I got the certificate in less than 30 minutes after the check up on my WhatsApp. Check-up was also very smooth, online assistance was very helpful making the process very fast and professional.",
    size: "small",
  },
  {
    name: "Hetashri Upadhyay",
    feedback:
      "I have opted for the handwritten medical sick leave certificate and shipment. After the form filling process, I got a confirmation call the next moment. In no time, I got a next call from the doctor herself asking about symptoms and condition. Within 45 min overall, they sent me my certificate. Overall, the experience was great and I would recommend it to everyone.",
    size: "medium",
  },
  {
    name: "Shreyas Singh",
    feedback:
      "I am usually the type to go to a doctor’s clinic for any health issues, but this time I decided to go with medicalcertificate.in! Firstly, the doctor was very understanding of my background and health history. His experience dealing with patients is remarkable. I was very comfortable and happy that there are such health care professionals who really work towards genuinely building people and their health.",
    size: "large",
  },
];

const Testimonials = () => {
    return (
      <section className="bg-[#1E3A5F] w-full min-h-screen flex items-center justify-center py-20 text-white">
        {/* Container */}
        <div className="max-w-7xl w-full mx-auto px-4 md:px-6 lg:px-8">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Customer Testimonials
          </h2>
  
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`bg-white text-gray-800 rounded-lg shadow-lg px-6 py-8 relative flex flex-col justify-between ${
                  item.size === "small"
                    ? "h-[325px]"
                    : item.size === "medium"
                    ? "h-[350px]"
                    : "h-[400px]"
                }`}
              >
                {/* Quote Icon with white background and black side border */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white text-black flex items-center justify-center rounded-full border-l-2 border-r-2 border-black text-2xl">
                  &#8220;
                </div>
  
                {/* Feedback */}
                <p className="text-sm md:text-base leading-snug text-center mt-8 mb-4 overflow-hidden overflow-ellipsis">
                  {item.feedback}
                </p>
  
                {/* Name */}
                <p className="text-center font-semibold text-lg mt-auto">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  

export default Testimonials;