import Annonce from '../models/Annonce.js';

export const createAnnonce = async (req, res) => {
  try {
    const { titre, description, prix } = req.body;
 

    const annonce = new Annonce({ titre, description, prix });
    await annonce.save();
    res.status(201).json(annonce);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur lors de la création' });
  }
};

export const getAnnonces = async (req, res) => {
  try {
    const annonces = await Annonce.find();
    res.status(200).json(annonces);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération' , err});
  }
};
