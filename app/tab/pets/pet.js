export default function Pet ({name, age, species, breed, supplierID, petID}) {
    return (
        <div className="w-28 h-28 bg-green">
            <h1>{name}</h1>
            <h1>{species}</h1>
            <h1>{breed}</h1>
            <h1>{age}</h1>
        </div>
    );
}