"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Review({supplierID}) {
    const [listReview, setListReview] = useState([]);
    const [username, setUsername] = useState("");
    const [review, setReview] = useState("");
    const { data: session } = useSession();
    const role = session?.user?.role;

    //have to add a supplierId so that each review
    //can be linked to a supplier

    const handleSubmit = async (e) => {
        e.preventDefault();

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
            const response = await fetch(`/api/review/${supplierID}`);
            if (response.ok) {
                const reviewData = await response.json();
                setListReview(reviewData);
            } else {
                console.error("Fetching reviews failed:", response);
            }
        } catch (error) {
            console.error("Fetching reviews failed:", error);
        }
    }

    useEffect(() => {
        fetchReviews();
    }, [supplierID]);

    return(
        <main>
            <div className="flex flex-col items-center justify-center">
               
               { role === "user" &&
               <>
                    <h1 className="text-3xl text-center text-black" style={{ fontFamily: 'Pacifico' }}>
                        Leave Supplier Review
                    </h1>
                    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Your Name"
                            className="w-1/2 p-2 m-2 text-black border-2 border-black"
                        />
                        <textarea
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            placeholder="Your Review"
                            className="w-1/2 p-2 m-2 text-black border-2 border-black"
                        />
                        <button
                            type="submit"
                            className="w-1/2 p-2 m-2 bg-blue-500 hover:bg-blue-700 text-black border-2 border-black font-bold py-2 px-4 rounded"
                        >
                            Add supplier Review
                        </button>
                    </form>
                </>}
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-3xl text-center text-black" style={{ fontFamily: 'Pacifico' }}>
                        Reviews
                    </h2>
                    <ul>
                        {listReview.map((review, index) => (
                            <li key={index} className="text-black">
                                <div>
                                    <p>Username: {review.username}</p>
                                    <p>Date: {review.date}</p>
                                    <p>Reviews: {review.review}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>

    );
}