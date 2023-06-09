import { NextApiRequest, NextApiResponse } from "next";
import { Polybase } from "@polybase/client";

// For connecting to the database
import db from "../../../polybase/config";

export default async function handler(req, res) {
  if (req.method === "POST") {
    /* 
    Info: URL to the database
    URL : /api/schemas/UserSchema
    */
    const createResponse = await db.applySchema(`
      
      @public    
      collection UserCollection {
        id: string;
        name: string;
        publicKey: string;
        status: number;
        location: string;
        address: string;
        phoneNumber: string;
        

        constructor(id: string, name: string, publicKey: string, status: number, location: string, address: string, phoneNumber: string) {
            this.id = id;
            this.name = name;
            this.publicKey = publicKey;
            this.status = status;
            this.location = location;
            this.address = address;
            this.phoneNumber = phoneNumber;
          
        }
      }
    `);

    res
      .status(200)
      .json({ message: "Database UserCollections created successfully." });
    console.log(res);
  } else {
    res.status(400).json({ message: "Invalid request method." });
  }
}
