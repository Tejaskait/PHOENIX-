import mongoose from 'mongoose';

const albumSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, 
    },
    artist: {
      type: String,
      required: true,
    },
    releaseYear: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    songs: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Song', // Add a ref to the Song model
    }],
  },
  { timestamps: true }
);

// Correct the model name to 'Album' here
export const Album = mongoose.model('Album', albumSchema);
 