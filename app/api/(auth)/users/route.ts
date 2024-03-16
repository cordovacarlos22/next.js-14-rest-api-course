import { NextResponse } from "next/server";
import connect from "@/app/lib/db"; // imports connect function to db
import User from "@/app/lib/modals/user";

//get method route for users
export const GET = async () => {
  // return new NextResponse("This is my first api");

  try {
    await connect(); // is going to connect to db
    // will show all users in db and storage them in the users variables
    const users = await User.find();

    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching users" + error, { status: 500 });
  }
};

// post req to create a user

export const POST = async (request: Request) => {
  try {
    const body = await request.json(); // get body from request

    await connect(); // is going to connect to db
    const newUser = new User(body); // create a new user
    await newUser.save(); // save the new user

    return new NextResponse(
      JSON.stringify({ message: "User is created", user: newUser }),
      { status: 201 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: "Error in creating user",
        error,
      }),
      {
        status: 500,
      }
    );
  }
};


