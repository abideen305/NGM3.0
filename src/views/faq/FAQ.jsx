import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FAQ = ({ title, content, isOpen, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="">
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onClick}
          className={`py-4 w-full ${isHovered ? "bg-[#fafafa]" : "text-[#000]"}`}
        >
          <div className="flex justify-between">
            <h5 className='text-start'>{title}</h5>
            <div className="">
              {isOpen ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={24} />}
            </div>
          </div>
        </button>
        {isOpen && (
          <div className="text-lg sm:text-sm text-[#337ab7] hover:text-[#23527c] py-2 font-bold">
            <p>{content}</p>
          </div>
        )}
        <hr className='border' />
      </div>
    </>
  );
}

export default FAQ;
