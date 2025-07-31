import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import annonceRoutes from './routes/annonceRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
connectDB()
app.use(cors());
app.use(express.json());

app.use('/api/annonces', annonceRoutes);



 
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
