import { NextResponse } from "next/server";

//get method route
export const GET = async () =>{
  return new NextResponse("This is my first api");
};