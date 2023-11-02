import express from 'express';
import axios from 'axios';

const router = express.Router();

const options = { 
	headers: { 
			'Content-Type': 'application/json', 
			'Accept': 'application/json' 
  } 
}; 
 
const queryObj = { name: 'Example' }; 

router.get ('/', function(req, res, nexti){(async () => {
  try {
    const response = await axios.get('http://localhost:8080/PersonService?id=6&fname=Varad&lname=Salvi', options)
    res.json(response.data);
  } catch (error) {
    console.log(error.response.body);
  }
})()});

export default router;