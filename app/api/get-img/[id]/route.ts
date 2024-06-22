import { NextResponse, NextRequest } from "next/server";
import axios from "axios";


export async function GET(request: NextRequest, {params}: {params: {id: String}}) {
    const response = await axios.get(`https://api.unsplash.com/photos/${params.id}`, {
        headers: {
            Authorization: `Client-ID ${process.env.UNSPLASH_API}`
        }
    })

    return NextResponse.json(response.data);
}