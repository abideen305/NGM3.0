import React, { useState } from 'react';
import FAQ from './FAQ';
import accordionData from './accordion';
import design from '../../assets/images/img_logo.png';

const Index = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };

    return (
        <>
            <div className="relative">
                <div className="max-w-[70%] sm:max-w-[85%] px-[3rem] py-[5rem] sm:px-2 sm:py-4">
                    <h2 className="sm:text-center font-bold text-[32px] sm:text-[22px]">
                        Frequently Asked Questions
                    </h2>

                    <div className="pt-5">
                        {accordionData.map((item, index) => (
                            <FAQ
                                key={index}
                                title={item.title}
                                content={item.content}
                                isOpen={activeIndex === index}
                                onClick={() => handleClick(index)}
                            />
                        ))}
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-[30%] h-full flex justify-end items-center">
                    <img 
                        src={design} 
                        alt="Design" 
                        className="object-contain w-full h-full max-w-[400px] sm:max-w-[300px] md:max-w-[350px]" 
                    />
                </div>
            </div>
        </>
    );
};

export default Index;
