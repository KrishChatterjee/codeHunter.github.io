import { NextResponse } from "next/server";



// To handle a GET request to /api/getblogs/[slug]
// eg:-http://localhost:3000/api/getblogs/krish?slug=harrypotter
export async function GET(request,{params}) {

    console.log(params) //krish

    const slug=request.nextUrl.searchParams.get("slug")
    console.log(slug)  //harrypotter
  return NextResponse.json({name:"harry potter"}, { status: 200 })

}