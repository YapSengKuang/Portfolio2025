import React from 'react';
import info from "@/content/info.json";

type IntroProps = {
    name: string;
    about: string;
  };
  
  const Intro: React.FC<IntroProps> = ({ name, about }) => {
    return (
      <div className="p-6 flex">
        <div className='basis-1/2 p-10'>
            <h1 className="text-3xl font-bold text-right">{name}</h1>
        </div>
        <div className='basis-1/2'>
            <p className="mt-2 text-gray-600">{about}</p>
        </div>
        
        
      </div>
    );
  };
  
  export default Intro;
  