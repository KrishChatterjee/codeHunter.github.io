import { NextResponse } from "next/server";
import { promises as fs } from 'fs';

// To handle a GET request to /api/blogs
export async function GET(request) {
  let files=await fs.readdir('blogdata')
  const allblogs=[]
  for (let index = 0; index < files.length; index++) {
    const element = files[index];
    let fileContents = await fs.readFile('blogdata/'+element, 'utf8');
    allblogs.push(JSON.parse(fileContents))
  }


  return NextResponse.json(allblogs, { status: 200 })

}