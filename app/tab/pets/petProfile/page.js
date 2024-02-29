//viewing individual pet profile

export default function PetProfile(pet) {
    const { name } = pet.name;
    const { breed } = pet.breed;
    const { age } = pet.age;
    const { species } = pet.species;


  return (
    <div>
        <h1>{name}</h1>
        <h1>{species}</h1>
        <h1>{breed}</h1>
        <h1>{age}</h1>
    </div>
  );
}