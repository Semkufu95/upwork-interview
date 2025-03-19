import express, { Express, Request, Response } from 'express';
import { getAllData, getDataById, createData } from "../controllers/dataController";

const router = express.Router();

// Get all data
router.get("/", getAllData);

//GET data by Id
router.get('/:id', getDataById);

//POSTnew data
router.post('/', createData);

export default router;