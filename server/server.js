import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import restaurantData from "./data/restaurants.js";

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//set view engine
//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

//index.html route 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//attractions route 
app.get('/attractions', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'attractions.html'));
});

// restaurant form route
app.get('/form', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'restaurant_form.html'));
});



// Serve restaurant data as JSON via an API endpoint
app.get('/api/restaurants', (req, res) => {
    res.json(restaurantData); // Serve the restaurant data as JSON
});

// Delete restaurant data
app.delete('/data/restaurantData/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = restaurantData.findIndex(restaurant => restaurant.id === id);
    if (index !== -1) {
        restaurantData.splice(index, 1);
        res.status(200).json({ message: 'Restaurant deleted successfully' });
    } else {
        res.status(404).json({ message: 'Restaurant not found' });
    }
});

//restaurants route rendering ejs template with restaurantData
app.get('/restaurants', (req, res) => {
    res.render('restaurants', { restaurants: restaurantData });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
