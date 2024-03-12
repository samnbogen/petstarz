import DOMPurify from 'dompurify';
//npm install dompurify

export default function Supplier ({company, location, phone, email, website}) {
    
    return (
        <div className="flex flex-col items-center justify-center border-green border-2 p-4 m-2 rounded-lg">

            <div className="text-center mt-4">
                <h1 className="text-lg font-bold">Company: {company}</h1>
                <h1 className="text-lg">Location: {location}</h1>
                <h1 className="text-lg">Phone: {phone}</h1>
                <h1 className="text-lg">Email: {email}</h1>
                <h1 className="text-lg">Website: {website}</h1>                
            </div>
        </div>
    );
}