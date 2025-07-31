import mongoose from 'mongoose';

const annonceSchema = new mongoose.Schema({
  titre: String,
  description: String,
  prix: Number,
 
});

const Annonce = mongoose.model('Annonce', annonceSchema);
export default Annonce;
