// Fill this in
let restaurantData = [
    {
        id: 1,
        name: "My Restaurant",
        phone: "(415) 555-5555",
        address: "1600 Holloway Ave, San Francisco, CA 94132",
        photo: "https://picsum.photos/150/150" 
    },
    {
        id: 2,
        name: "My Restaurant",
        phone: "(415) 555-5555",
        address: "1600 Holloway Ave, San Francisco, CA 94132",
        photo: "https://picsum.photos/150/150" 
    },
    {
        id: 3,
        name: "My Restaurant",
        phone: "(415) 555-5555",
        address: "1600 Holloway Ave, San Francisco, CA 94132",
        photo: "https://picsum.photos/150/150" 
    },
];

let lastId = restaurantData.length;

const getNextId = () => {
    lastId += 1;
    return lastId;
}

// Get a list of restaurants
const getRestaurants = () => {
};


// Get a restaurant by id
const getRestaurant = (id) => {
};

// Create a new restaurant entry
const createRestaurant = (newRestaurant) => {
};

// Delete a restaurant by id
const deleteRestaurant = (id) => {
};

export default restaurantData;

export { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant };