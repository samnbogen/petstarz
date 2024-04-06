"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import StarRating from "./starRating";

export default function Review({supplierID, email}) {
    const [filteredReview, setFilteredReview] = useState([]);
    const [username, setUsername] = useState("");
    const [review, setReview] = useState("");
    const { data: session } = useSession();
    const role = session?.user?.role;

    

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(session?.user?.email === email){
            alert("You cannot leave a review on own company");
            return;
        }

        try {
            const response = await fetch("/api/review", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, review, date: new Date().toLocaleDateString(), supplierID}),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Review submitted:", data);
                fetchReviews();
                setUsername("");
                setReview("");
            } else {
                console.error("Review submission failed:", response);
            }
        } catch (error) {
            console.error("Review submission failed:", error);
        }
    }

    const fetchReviews = async () => {
        try {
            const response = await fetch("/api/review", {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                if (supplierID) {
                    const filteredReview = data.filter((review) => review.supplierID === supplierID);
                    setFilteredReview(filteredReview);
                }
                
            } else {
                console.error("Review fetch failed:", response);
            }
        } catch (error) {
            console.error("Review fetch failed:", error);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, [supplierID]);   

    return(
        <main>
            <div className="flex flex-col items-center justify-center">
               
               { role === "user" &&
               <>
                    <h1 className="text-3xl text-center text-black">
                        Leave Supplier Review
                    </h1>
                    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Your Name"
                            className="w-full p-2 m-2 text-black border-2 border-black"
                        />
                        <textarea
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            placeholder="Your Review"
                            className="w-full p-2 m-2 text-black border-2 border-black"
                        />
                        <button
                            type="submit"
                            className="w-full p-2 m-2 bg-blue-500 hover:bg-blue-700 text-black border-2 border-black font-bold py-2 px-4 rounded"
                        >
                            Add supplier Review
                        </button>
                    </form>
                </>}
                <div className="flex flex-col items-center justify-center">
                    <ul>
                    {filteredReview.map((review, index) => (
                            <li key={index} className="text-black">
                                <div className="flex flex-row w-full items-center justify-center p-10 mb-5 border border-light-gray rounded-lg">
                                    <div className="w-1/2">
                                        <p className="font-bold">Username:</p>
                                        <p className="font-bold">Date:</p>
                                        <p className="font-bold">Review:</p>
                                    </div>
                                    <div className="w-1/2">
                                        <p>{review.username}</p>
                                        <p>{review.date}</p>
                                        <p>{review.review}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>

    );
}
