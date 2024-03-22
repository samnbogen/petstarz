import React from 'react';
import DOMPurify from 'dompurify';

const PetCard = ({ photo, name, species, breed, age }) => {
  const sanitizedPhoto = DOMPurify.sanitize(photo);

  return (
    <div className="flex flex-col w-48 h-64 items-center justify-start border-green border-2 rounded-3xl">
      
      <div className="h-44 w-48 rounded-t-3xl flex items-center justify-center overflow-hidden object-fit"
          dangerouslySetInnerHTML={{ __html: sanitizedPhoto }}>
        </div>
      <div className="text-center p-2" >
        <h1 className="text-2xl font-bold">{name}</h1>  
        <h1 className="text-lg">Age: {age}</h1>
      </div>
    </div>
  );
};

export default PetCard;


