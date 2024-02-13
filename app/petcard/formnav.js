export default function FormNav(){
    return (
        <div class="h-10 flex flex-row w-2/5">
            <div class=" mr-1 p-1 rounded-t-lg w-1/4 bg-green hover:cursor-pointer">
                <h1 class="text-lg text-center text-white">General</h1>
            </div>
            <div class=" mr-1 p-1 rounded-t-lg w-1/4 bg-gray hover:cursor-pointer">
                <h1 class="text-lg text-center text-white">Records</h1>
            </div>
            <div class=" mr-1 p-1 rounded-t-lg w-1/4 bg-gray hover:cursor-pointer">
                <h1 class="text-lg text-center text-white">Contacts</h1>
            </div>
            <div class="p-1 rounded-t-lg w-1/4 bg-gray hover:cursor-pointer">
                <h1 class="text-lg text-center text-white">Pedigree</h1>
            </div>
        </div>
    )
};