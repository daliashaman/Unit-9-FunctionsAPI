import express, { Request, Response } from "express";
import { getClient } from "../db";
import ShoutOut from "../models/ShoutOut";

export const shoutOutRoutes = express.Router();

//shoutout CRUD stuff gets handled here

//GET - return all shoutouts
shoutOutRoutes.get("/", async (req:Request, res:Response) => {
    try {
        //connect to database (db.ts)
        const client = await getClient();

        const result = client.db("test").collection<ShoutOut>("shoutouts").find({}).toArray();

        return res.status(200).json(result);
    }
    catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
})