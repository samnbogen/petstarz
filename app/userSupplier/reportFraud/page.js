"use client";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Page(){
    const [userFirstName, setUserFirstName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userInteractions, setUserInteractions] = useState("");
    const [userAttachment, setUserAttachment] = useState("");
    const [supplierName, setSupplierName] = useState("");
    const [supplierInteractions, setSupplierInteractions] = useState("");
    const [supplierAttachment, setSupplierAttachment] = useState("");
    const [companyName, setCompanyName] = useState([]);

    const fetchCompany = async () => {
        try {
            const response = await fetch("/api/supplier", {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                setCompanyName(data);
            } else {
                console.error("Company fetch failed:", response);
            }
        } catch (error) {
            console.error("Company fetch failed:", error);
        }
    }

    useEffect(() => {
        fetchCompany();}, []);
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/supplier/reportFraud", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userFirstName, userLastName, userInteractions,
                     userAttachment, supplierName, supplierInteractions, supplierAttachment}),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Report submitted:", data);
                setUserFirstName("");
                setUserLastName("");
                setUserInteractions("");
                setUserAttachment("");
                setSupplierName("");
                setSupplierInteractions("");
                setSupplierAttachment("");
            } else {
                console.error("Report submission failed:", response);
            }
        } catch (error) {
            console.error("Report submission failedd:", error);
        }
    }

    // <option value="">Select Supplier</option>
    //                         {companyName.map((company) => (
    //                             <option key={company.email} value={company.Company}>
    //                                 {company.Company}
    //                             </option>
    //                         ))}

    // return (
    //     <div className="p-32">
    //         <h1 className="text-xl font-bold mb-4">Report Fraud</h1>
    //         <form onSubmit={handleSubmit}>
    //             <div className="mb-4">
    //                 <label className="block mb-1"> User First Name: </label>
    //                 <input
    //                     className="border border-light-gray rounded px-3 py-2"
    //                     type="text"
    //                     value={userFirstName}
    //                     onChange={(e) => setUserFirstName(e.target.value)}
    //                 />
    //             </div>
    //             <div className="mb-4">
    //                 <label className="block mb-1"> User Last Name: </label>
    //                 <input
    //                     className="border border-light-gray rounded px-3 py-2"
    //                     type="text"
    //                     value={userLastName}
    //                     onChange={(e) => setUserLastName(e.target.value)}
    //                 />
    //             </div>
    //             <div className="mb-4">
    //                 <label className="block mb-1"> User Interactions with the Supplier: </label>
    //                 <textarea
    //                     className="border border-light-gray rounded px-3 py-2"
    //                     value={userInteractions}
    //                     onChange={(e) => setUserInteractions(e.target.value)}
    //                 />
    //             </div>
    //             <div className="mb-4">
    //             <label className="block mb-1"> User Attachments: </label>
    //                 <ReactQuill
    //                     type="file"
    //                     value={userAttachment}
    //                     onChange={setUserAttachment}
    //                 /> 
    //                 {/*<input
    //                     type="file"
    //                     value={userAttachment}
    //                     onChange={(e) => setUserAttachment(e.target.value)}
    //             />*/}
    //             </div>
    //             <div className="mb-4">
    //             <label className="block mb-1"> Supplier Name: </label>
    //                 <select
    //                     className="border border-light-gray rounded"
    //                     value={supplierName}
    //                     onChange={(e) => setSupplierName(e.target.value)}>
    //                         <option value="">Select Supplier</option>
    //                         {companyName.map((company) => (
    //                             <option key={company.email} value={company.Company}>
    //                                 {company.Company}
    //                             </option>
    //                         ))}
    //                     </select>
    //             </div>
    //             <label>
    //                 Supplier Interactions:
    //                 <textarea
    //                     className="border border-light-gray rounded"
    //                     value={supplierInteractions}
    //                     onChange={(e) => setSupplierInteractions(e.target.value)}
    //                 />
    //             </label>
    //             <label>
    //                 Supplier Attachments:
    //                 <ReactQuill
    //                     value={supplierAttachment}
    //                     onChange={setSupplierAttachment}
    //                     modules={{
    //                         toolbar: [
    //                             [{ header: "1" }, { header: "2" }, { font: [] }],
    //                             [{ size: [] }],
    //                             ["bold", "italic", "underline", "strike", "blockquote"],
    //                             [
    //                                 { list: "ordered" },
    //                                 { list: "bullet" },
    //                                 { indent: "-1" },
    //                                 { indent: "+1" },
    //                             ],
    //                             ["link", "image", "video"],
    //                             ["clean"],
    //                             ["code-block"],
    //                         ],
                        
    //                     }}
    //                         />
    //                 {/*<input
    //                     type="file"
    //                     value={supplierAttachment}
    //                     onChange={(e) => setSupplierAttachment(e.target.value)}
    //                     />*/}
    //             </label>
    //             <button className="border border-light-gray rounded" type="submit">Submit</button>
    //         </form>
    //     </div>
    // );

    return (
        <div className="p-32 text-center">
          <h1 className="text-xl font-bold mb-4">Report Fraud</h1>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="border-2 border-gray p-4 rounded-lg mb-8">
              <h2 className="text-lg font-bold mb-2">User Information</h2>
              <div className="mb-4">
                <label htmlFor="userFirstName" className="block mb-1">First Name:</label>
                <input
                  id="userFirstName"
                  className="w-full border rounded-md px-3 py-2"
                  type="text"
                  value={userFirstName}
                  onChange={(e) => setUserFirstName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="userLastName" className="block mb-1">Last Name:</label>
                <input
                  id="userLastName"
                  className="w-full border rounded-md px-3 py-2"
                  type="text"
                  value={userLastName}
                  onChange={(e) => setUserLastName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="userInteractions" className="block mb-1">Interactions with Supplier:</label>
                <textarea
                  id="userInteractions"
                  className="w-full border rounded-md px-3 py-2"
                  value={userInteractions}
                  onChange={(e) => setUserInteractions(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="userAttachment" className="block mb-1">User Attachments:</label>
                <ReactQuill
                         type="file"
                         value={userAttachment}
                         onChange={setUserAttachment}
                     />
              </div>
            </div>
            <div className="border-2 border-gray p-4 rounded-lg mb-4">
              <h2 className="text-lg font-bold mb-2">Supplier Information</h2>
              <div className="mb-4">
                <label htmlFor="supplierName" className="block mb-1">Supplier Name:</label>
                <select
                  id="supplierName"
                  className="w-full border rounded-md px-3 py-2"
                  value={supplierName}
                  onChange={(e) => setSupplierName(e.target.value)}
                >
                  <option value="">Select Supplier</option>
                             {companyName.map((company) => (
                                 <option key={company.email} value={company.Company}>
                                    {company.Company}
                                 </option>
                            ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="supplierInteractions" className="block mb-1">Supplier Interactions:</label>
                <textarea
                  id="supplierInteractions"
                  className="w-full border rounded-md px-3 py-2"
                  value={supplierInteractions}
                  onChange={(e) => setSupplierInteractions(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="supplierAttachment" className="block mb-1">Attachments:</label>
                <ReactQuill
                         type="file"
                         value={supplierAttachment}
                         onChange={setSupplierAttachment}
                     />
              </div>
            </div>
            <div className="flex justify-center">
                <button className="mt-4 font-bold py-2 px-4 border-solid border-2 rounded-md items-center" type="submit">Submit</button>
            </div>
          </form>
        </div>
      );
}