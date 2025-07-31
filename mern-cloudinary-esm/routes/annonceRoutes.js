import express from 'express';
 
import { createAnnonce, getAnnonces } from '../controllers/annonceController.js';

const router = express.Router();

router.post('/',  createAnnonce);
router.get('/', getAnnonces);

export default router;
