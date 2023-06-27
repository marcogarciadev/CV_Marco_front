import React from 'react'
import { contactImg } from "../../assets/index";

const BannerLeft = () => {
  return (
    <div className="w-full lgl:w-[50%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-100 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
    </div>
  );
}
export default BannerLeft;