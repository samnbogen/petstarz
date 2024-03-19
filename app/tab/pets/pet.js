import DOMPurify from 'dompurify';
//npm install dompurify

export default function Pet ({name, age, species, breed, photo, supplierID, petID}) {
    
    return (
        <div className="flex flex-col w-30 h-72 items-center justify-center border-green border-2 p-4 rounded-lg">
            <div className= "rounded" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(photo) }} 
                style={{width: '100px', height: '100px', objectFit: 'cover'}}/>
            <div className="text-center mt-4">
                <h1 className="text-xl font-bold">{name}</h1>
                <h1 className="text-lg">{species}</h1>
                <h1 className="text-lg">{breed}</h1>    
                <h1 className="text-lg">Age: {age}</h1>
            </div>
        </div>
    );
}