export default function PedigreeForm(){
    return (
        <div class="border border-black w-2/5">
            <h1 class="text-lg">Pedigree</h1>
            <p>Placeholder text.</p>
            <div>
                <div class="flex flex-col border border-black m-2">
                <h1 class="p-2 text-lg bg-green text-white">Pet Information</h1>
                    <div class="p-2">
                        <label class="text-gray block" for="sire">Sire</label>
                        <input class="border border-gray rounded" type="text" id="sire" name="sire" />
                    </div>
                    <div class="p-2">
                        <label class="text-gray block" for="dam">Dam</label>
                        <input class="border border-gray rounded" type="text" id="dam" name="dam" />
                    </div>
                </div>
            </div>
        </div>
    )
}