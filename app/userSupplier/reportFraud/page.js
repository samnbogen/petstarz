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

    return (
        <div className="p-32">
            <h1>Report Fraud</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    User First Name:
                    <input
                        className="border border-light-gray rounded"
                        type="text"
                        value={userFirstName}
                        onChange={(e) => setUserFirstName(e.target.value)}
                    />
                </label>
                <label>
                    User Last Name:
                    <input
                        className="border border-light-gray rounded"
                        type="text"
                        value={userLastName}
                        onChange={(e) => setUserLastName(e.target.value)}
                    />
                </label>
                <label>
                    User Interactions with the Supplier:
                    <textarea
                        className="border border-light-gray rounded"
                        value={userInteractions}
                        onChange={(e) => setUserInteractions(e.target.value)}
                    />
                </label>
                <label>
                    User Attachments:
                    <ReactQuill
                        type="file"
                        value={userAttachment}
                        onChange={setUserAttachment}
                    /> 
                    {/*<input
                        type="file"
                        value={userAttachment}
                        onChange={(e) => setUserAttachment(e.target.value)}
                />*/}
                </label>
                <label>
                    Supplier Name:
                    <select
                        className="border border-light-gray rounded"
                        value={supplierName}
                        onChange={(e) => setSupplierName(e.target.value)}>
                            <option value="">Select Supplier</option>
                            {companyName.map((company) => (
                                <option key={company.email} value={company.Company}>
                                    {company.Company}
                                </option>
                            ))}
                        </select>
                </label>
                <label>
                    Supplier Interactions:
                    <textarea
                        className="border border-light-gray rounded"
                        value={supplierInteractions}
                        onChange={(e) => setSupplierInteractions(e.target.value)}
                    />
                </label>
                <label>
                    Supplier Attachments:
                    <ReactQuill
                        value={supplierAttachment}
                        onChange={setSupplierAttachment}
                        modules={{
                            toolbar: [
                                [{ header: "1" }, { header: "2" }, { font: [] }],
                                [{ size: [] }],
                                ["bold", "italic", "underline", "strike", "blockquote"],
                                [
                                    { list: "ordered" },
                                    { list: "bullet" },
                                    { indent: "-1" },
                                    { indent: "+1" },
                                ],
                                ["link", "image", "video"],
                                ["clean"],
                                ["code-block"],
                            ],
                        
                        }}
                            />
                    {/*<input
                        type="file"
                        value={supplierAttachment}
                        onChange={(e) => setSupplierAttachment(e.target.value)}
                        />*/}
                </label>
                <button className="border border-light-gray rounded" type="submit">Submit</button>
            </form>
        </div>
    );
}