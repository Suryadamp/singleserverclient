const express = require('express');
const Movie = require('../models/Movie');

const router = express.Router();

// Get movies grouped by category
router.get('/', async (req, res) => {
  try {
const searchQuery = req.query.query
    const pipleline = [
      {
        $unwind: "$genres"
      },
      {
        $group: {
          _id: "$genres",
          movies: {
            $push: {
              director: "$director",
              imdb_rating: "$imdb_rating",
              length: "$length",
              poster: "$poster",
              title: "$title",
              slug: "$slug"
            }
          }
        }
      },
      {
        $project: {
          _id: 0,
          category: "$_id",
          movies: 1
        }
      }
    ]

    if(searchQuery){
      pipleline.unshift({
        $match:{
          title:{$regex:searchQuery, $options: 'i'}
        }
      })
    }
  
    res.json(await Movie.aggregate(pipleline) );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
