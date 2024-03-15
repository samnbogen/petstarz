import DOMPurify from 'dompurify';
import Link from "next/link";
//npm install dompurify

export default function Supplier ({Company, location, phone, email, website, _id}) {
    
    return (
        <Link href={`/tab/suppliers/${_id}`}>
        <div className="flex flex-col w-60 h-72 items-center justify-center border-green border-2 p-4 m-2 rounded-lg">

            <div className="text-center mt-4">
                <h1 className="text-lg font-bold">Company: {Company}</h1>
                <h1 className="text-lg">Location: {location}</h1>
                <h1 className="text-lg">Phone: {phone}</h1>
                <h1 className="text-lg">Email: {email}</h1>
                <h1 className="text-lg">Website: {website}</h1>              
            </div>
        </div>
        </Link>
    );
}