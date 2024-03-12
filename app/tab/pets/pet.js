import DOMPurify from 'dompurify';
//npm install dompurify

export default function Pet ({name, age, species, breed, photo, supplierID, petID}) {
    
    return (
        <div className="flex flex-col items-center justify-center bg-green p-4 rounded-lg">
            <div className= "rounded" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(photo) }} />
            <div className="text-center mt-4">
                <h1 className="text-lg font-bold">Name: {name}</h1>
                <h1 className="text-lg">Species: {species}</h1>
                <h1 className="text-lg">Breed: {breed}</h1>
                <h1 className="text-lg">Age: {age}</h1>
            </div>
        </div>
    );
}