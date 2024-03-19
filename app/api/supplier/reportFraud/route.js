import clientPromise from '../../../lib/mongodb';
import { NextResponse } from 'next/server';

//to handle the POST request to the database
export async function GET(request) {
    try {
        const client = await clientPromise;
        const db = client.db('supplier');
        const collection = db.collection('reportFraud');
        const fraud = await collection.find({}).toArray();
        return new Response(JSON.stringify(fraud), { status: 200 });
    } catch (error) {
        console.error('Error getting reviews:', error);
        return new NextResponse(500, { error: 'Internal Server Error' });
    }
}