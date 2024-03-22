import React from 'react';
import DOMPurify from 'dompurify';

const PetCard = ({ photo, name, species, breed, age }) => {
  const sanitizedPhoto = DOMPurify.sanitize(photo);

  return (
    <div className="flex flex-col w-30 h-72 items-center justify-center border-green border-2 p-4 rounded-lg">
      <div className="w-24 h-24 flex items-center justify-center overflow-hidden" 
           dangerouslySetInnerHTML={{ __html: sanitizedPhoto }} 
           style={{ objectFit: 'cover' }} />
      <div className="text-center mt-4">
        <h1 className="text-xl font-bold">{name}</h1>
        <h1 className="text-lg">{species}</h1>
        <h1 className="text-lg">{breed}</h1>    
        <h1 className="text-lg">Age: {age}</h1>
      </div>
    </div>
  );
};

export default PetCard;


