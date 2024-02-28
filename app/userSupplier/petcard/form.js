export default function PetCardForm() {

// "add photo" still needs to be added

    return (
        <div  className="border rounded-b-lg border-light-gray p-4 w-2/5 bg-white">
            <h1 class="text-lg p-1">General Information</h1>
            <div class="flex flex-row"> {/*border visible for flex box work*/}
                <div class="p-1">
                    <label class="text-gray block" for="petName">Pet Name</label>
                    <input class="border border-light-gray rounded" type="text" id="petName" name="petName" />
                </div>
                <div class="p-1">
                    <label class="text-gray block" for="petAge">Pet Age</label>
                    <input class="border border-light-gray rounded" type="text" id="petAge" name="petAge" />
                </div>
            </div>
            <div class="flex flex-row"> {/*border visible for flex box work*/}
                <div class="p-1">
                    <label class="text-gray block" for="species">Species</label>
                    <select class="border border-light-gray rounded" type="text" id="species" name="species">
                        <option selected></option>
                        <option value = "dog">Dog</option>
                        <option value = "cat">Cat</option>
                        <option value = "other">Other</option>
                    </select>
                </div>
                <div class="p-1">
                    <label class="text-gray block" for="breed">Breed/Type</label> {/*Find a way to make it so that, if "other" selected for species, change to "type" instead of "breed"*/}
                    <input class="border border-light-gray rounded" type="text" id="breed" name="breed" />
                </div>
            </div>
            <div class="flex flex-row"> {/*border visible for flex box work*/}
                <div class="p-1">
                    <label class="text-gray block" for="sex">Sex</label>
                    <select class="border border-light-gray rounded" type="text" id="sex" name="sex">
                        <option selected></option>
                        <option value = "male">Male</option>
                        <option value = "female">Female</option>
                    </select>
                </div>
                <div class="p-1">
                    <label class="text-gray block" for="size">Size</label>
                    <select class="border border-light-gray rounded" type="text" id="size" name="size">
                        <option selected></option>
                        <option value = "small">S</option>
                        <option value = "medium">M</option>
                        <option value = "large">L</option>
                        <option value = "extraLarge">XL</option>
                    </select>
                </div>
                <div class="p-1">
                    <label class="text-gray block" for="fixed">Fixed</label>
                    <select class="border border-light-gray rounded" type="text" id="fixed" name="fixed">
                        <option selected></option>
                        <option value = "yes">Yes</option>
                        <option value = "no">No</option>
                        <option value= "unknown">Unknown</option> {/*is it a good idea to have an "unknown" for this?*/}
                    </select>
                </div>
            </div>
            <div class="p-1">
                <label class="text-gray block" for="additionalInfo">Additional Info</label>
                <textarea class="border border-light-gray rounded-lg w-full h-32" type="text" id="additionalInfo" name="additionalInfo" />
            </div>
            {/*New form content is above this line*/}
            <div className="flex flex-row p-1">
                <div class="mr-1">
                    <div class="text-center text-white p-1 w-40 border-2 border-green bg-green rounded-lg hover:bg-white hover:cursor-pointer hover:text-green">
                        <p>Save</p>
                    </div>
                </div>
                <div class="ml-1">
                    <div class="text-center text-white p-1 w-40 border-2 border-red bg-red rounded-lg hover:bg-white hover:cursor-pointer hover:text-red">
                        <p>Cancel</p>
                    </div>
                </div>
            </div>
        </div>
    )
};