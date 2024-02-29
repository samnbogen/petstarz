//for displaying the list of pets
//will have search bar

import PetList from "./pet-list";

export default function Page() {

    return (
        <div className="pt-36">
            <h1>Pets</h1>
            <PetList />
        </div>
    );
}