import mongoose from "mongoose"; // import mongoose

const MONGODB_URL = process.env.MONGODB_URL; // variable runs our .env variable

// async await function to connect to DB
const connect = async () => {
  // variable return db connection status  returns 1 if CONNECTED  or 0 if not connected to db
  const connectionState = mongoose.connection.readyState;
  // conditional check if we have a connection to db or not
  // 1 means already connected to db
  // 2 means connecting  to db
  // else will connect to db
  if (connectionState == 1) {
    console.log("Already connected to db");
  }

  if (connectionState == 2) {
    console.log("Connecting...");
  }

  // establish connection to db

  try {
    mongoose.connect(MONGODB_URL!, {
      dbName: "restapinext14", // DB name
      bufferCommands: false, // configuration
    });
    console.log("connected to DB");
  } catch (error) {
    console.log("Error while connecting to DB",error)// gives us the error con the console
    throw new Error("Error while connecting to DB");  // throw a message
  }
};


export default connect; // exports function 
