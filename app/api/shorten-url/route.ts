import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    const apiEndpoint = 'https://cleanuri.com/api/v1/shorten';
    const data = new URLSearchParams({ url });

    const response = await axios.post(apiEndpoint, data.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    return NextResponse.json(response.data); // Return shortened URL to the client
  } catch (error: any) {
    console.error('Error in API route:', error.message);
    return NextResponse.json({ error: 'Failed to shorten URL' }, { status: 500 });
  }
}
