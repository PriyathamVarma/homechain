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
      collection NotificationCollection {
        id: string;
        buyer: string;
        broker: string;
        property_id: string;
        

        constructor(id: string, buyer: string, broker: string, property_id: string) {
            this.id = id;
            this.buyer = buyer;
            this.broker = broker;
            this.property_id = property_id;
          
        }
      }
    `);

    res.status(200).json({
      message: "Database NotificationCollection created successfully.",
    });
    console.log(res);
  } else {
    res.status(400).json({ message: "Invalid request method." });
  }
}
