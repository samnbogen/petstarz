import DOMPurify from 'dompurify';
import Link from "next/link";
//npm install dompurify

export default function Supplier ({Company, location, phone, email, website, _id}) {
    
    return (
        <Link href={`/tab/suppliers/${_id}`}>
        <div className="flex flex-col w-60 h-52 items-center justify-center border-green border-2 p-4 m-2 rounded-3xl hover:scale-110 transition-transform duration-300">

            <div className="text-center mt-4">
                <h1 className="text-4xl font-bold">{Company}</h1>          
            </div>
        </div>
        </Link>
    );
}