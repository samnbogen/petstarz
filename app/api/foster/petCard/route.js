import clientPromise from "../../../lib/mongodb";
import { NextResponse } from "next/server";

//to handle the POST request to the database
export async function POST(request) {
 console.log("Incoming request body:", request.body);

  try {
    // Get the username and review from the request body
    const data = await request.json();

    console.log(request.body);
    const client = await clientPromise;

    // Connect to the MongoDB database
    const db = client.db("supplier");

    // Insert the comment into the "review" collection
    await db.collection("petCard").insertOne({
      email: data.email,
       name: data.name,
       age: data.age,
       species: data.species,
       breedAndType: data.breedAndType,
       sex: data.sex,
       size: data.size,
       fixed: data.fixed,
       additionalInfo: data.additionalInfo,
    
    });
    
    // Respond with the inserted comment
    return new Response(JSON.stringify(data), { status: 201 });
  } catch (error) {
    console.error("Error handling comment submission:", error);
    return new NextResponse(500, { error: "Internal Server Error" });
  }
}

//to handle the GET request to the database
export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db("supplier");
    const collection = db.collection("petCard");
    //this is to include the _id, name, age, species, breedAndType fields
    //1 to include, 0 to exclude
    const projection = { _id: 1, name: 1, age: 1, species: 1, breedAndType: 1 };
    const pets = await collection.find({}, { projection }).toArray();

    //const pets = await collection.find({}).toArray();
    return new Response(JSON.stringify(pets), { status: 200 });
  } catch (error) {
    console.error("Error getting reviews:", error);
    return new NextResponse(500, { error: "Internal Server Error" });
  }
}