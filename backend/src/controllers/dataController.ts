import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllData = async (req: Request, res: Response) => {
    try {
        const data = await prisma.data.findMany();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve data' });
    }
};

export const getDataById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const data = await prisma.data.findUnique({
            where: { id },
        });

        if (!data) {
            return res.status(404).json({ error: "Data not found" });
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrive data!' });
    }
};

export const createData = async (req: Request, res: Response) => {
    try {
        const { name, value} = req.body;
        
        if (!name || !value) {
            return res.status(400).json({ error: "Name and Value are Required" });
        }

        const newData = await prisma.data.create({
            data: {
                name,
                value,
            },
        });
        res.status(201).json(newData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create data' });
    }
};