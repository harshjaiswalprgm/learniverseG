import React from "react";
import "./Invite.css"; // custom cloud text style

export default function InvitationSection() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-white px-4">
      {/* Logo/Icon */}
      <div className="mb-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png"
          alt="Logo"
          className="w-16 h-16"
        />
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-serif mb-6">
        Start growing your legacy with{" "}
        <span className="italic">TheLearniverse</span>.
      </h2>

      {/* Email Form */}
      <form className="flex gap-2 mb-12 flex-wrap justify-center">
        <input
          type="email"
          placeholder="Your email"
          className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-black"
        />
        <button
          type="submit"
          className="px-6 py-2 rounded-full bg-black text-white hover:bg-gray-800"
        >
          Request Invitation
        </button>
      </form>

      {/* Big stylized text */}
   <h1 className="cloud-text font-bold tracking-wide leading-tight">
  TheLearniverse
</h1>



    </section>
  );
}
