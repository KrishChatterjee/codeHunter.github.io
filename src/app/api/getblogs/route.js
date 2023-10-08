import { NextResponse } from "next/server";
import { promises as fs } from 'fs';



// To handle a GET request to /api/getblogs?slug=how-to-learn-javascript
export async function GET(request) {

  try {
    const slug=request.nextUrl.searchParams.get("slug")
    const fileContents = await fs.readFile(`blogdata/${slug}.json`, 'utf8');

  return NextResponse.json(JSON.parse(fileContents), { status: 200 })
    
  } catch (error) {
    if(error){
      return NextResponse.json({error:"No such blog found"}, { status: 200 })
    }
    
  }

}