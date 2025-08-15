import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectsSection() {
  const scrollRef = useRef(null);

  const projects = [
    {
      title: "Hands That Shape",
      description: "A boutique ceramics workshop",
      image:
        "https://images.unsplash.com/photo-1752407828685-f94b6c5377ac?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Morning Rituals",
      description: "A handcrafted kitchenware",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      title: "The Modern Table",
      description: "Minimalist and sustainable tableware",
      image:
        "https://images.unsplash.com/photo-1601935111744-f3d2d94c2b74?w=800&q=80",
    },
    {
      title: "Clay & Form",
      description: "Organic forms inspired by nature",
      image:
        "https://images.unsplash.com/photo-1604335399105-bb9a60f932d1?w=800&q=80",
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-12 px-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm text-gray-500">Our projects</p>
          <h2 className="text-3xl font-semibold">
            Handcrafted ceramic projects and creative collaborations.
          </h2>
        </div>
        <button className="flex items-center gap-1 px-4 py-2 border rounded-full text-sm hover:bg-gray-100">
          View all <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Scroll Buttons */}
      <div className="flex justify-end gap-2 mb-3">
        <button
          onClick={() => scroll("left")}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Cards */}
      <motion.div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex-none w-80 bg-white rounded-xl shadow-sm overflow-hidden border hover:shadow-lg transition-shadow"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="flex justify-between items-center p-4">
              <div>
                <h3 className="font-medium">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.description}</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
