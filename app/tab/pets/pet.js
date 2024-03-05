export default function Pet ({name, age, species, breed, supplierID, petID}) {
    return (
        <div className="w-28 h-28 bg-green">
            <h1>Name: {name}</h1>
            <h1>Species: {species}</h1>
            <h1>Breed: {breed}</h1>
            <h1>Age: {age}</h1>
        </div>
    );
}