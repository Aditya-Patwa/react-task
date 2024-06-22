import { NextResponse, NextRequest } from "next/server";
import axios from "axios";


export async function GET(request: NextRequest) {
    const response = await axios.get(`https://api.unsplash.com/photos/random?count=30&collections=beauty`, {
        headers: {
            Authorization: `Client-ID ${process.env.UNSPLASH_API}`
        }
    })

    return NextResponse.json(response.data);
}