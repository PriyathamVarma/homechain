import { NextApiRequest, NextApiResponse } from "next";
import { Polybase } from "@polybase/client";

// For connecting to the database
import db from "../../../polybase/config";

export default async function handler(req, res) {
  if (req.method === "POST") {
    /* 
    Info: URL to the database
    URL : /api/schemas/PropertySchema
    */
    const createResponse = await db.applySchema(`
      
      @public    
      collection PropertyCollection {
        id: string;
        name: string;
        location: string;
        broker: string;     
        price: number;
        image_link: string;
        address: string;
        area: number;
        bedrooms: number;
        bathrooms: number;
        garages: number;
        description: string;    
        type: string;
        posted_on: string;
        
        @index(price,location);
        
        constructor(id: string, name: string, location: string, broker: string, price: number, image_link: string, address: string, area: number, bedrooms: number, bathrooms: number, garages: number, description: string, type: string, posted_on: string) {
          this.id = id;
          this.name = name;
          this.location = location;
          this.broker = broker;
          this.price = price;
          this.image_link = image_link;
          this.address = address;
          this.area = area;
          this.bedrooms = bedrooms;
          this.bathrooms = bathrooms;
          this.garages = garages;
          this.description = description;
          this.type = type;
          this.posted_on = posted_on;
          
        }
      }
    `);

    res
      .status(200)
      .json({ message: "Database PropertyCollection created successfully." });
    console.log(res);
  } else {
    res.status(400).json({ message: "Invalid request method." });
  }
}
