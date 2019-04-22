/* eslint-disable no-console */
// const mongoose = require('mongoose');
const Faker = require('faker');
const fs = require('fs');
// const Description = require('./index.js');
// const restaurantData = require('./data.json');

// const reader = fs.createReadStream();
const writer = fs.createWriteStream("database/data.json");

const price = ["$30 Under", "$31 to $50", "$50 and over"];
const tags = ["Authentic", "Bar Seating", "Book the Bar", "Charming", "Comfort Food", "Couples", "Cozy", "Craft Beer Selection",
              "Creative Cuisine", "Dancing", "Earn Bonus Points", "Eater's Essential Restaurants", "Families", "Family Style", 
              "Farm To Table", "Father's Day", "Fireplace", "Fit for Foodies", "Formal", "Fried Food", "Full Bar", "Gluten Free Options",
              "Good Value", "Good for Anniversaries", "Good for Birthdays", "Good for Groups", "Good for a Business Meeting", 
              "Good for a Date", "Great Beer", "Great Service", "Great for Brunch", "Great for Lunch", "Handcrafted Cocktails", 
              "Happy Hour", "Healthy", "Historic", "Hot Spot", "Kid-friendly", "LA Restaurant Week 2018", "Live Music", 
              "Local Ingredients", "Molecular Gastronomy", "Mother's Day", "Neighborhood Gem", "New & Hot", "Notable Wine List",
              "Open Kitchen", "OpenTable Picks", "Organic", "Outdoor Seating", "Paleo Friendly", "People Watching", "Private Room",
              "Prix Fixe Menu", "Quiet Conversation", "Romantic", "Scenic View", "Seasonal", "Special Occasion", "Spicy", "Tapas", 
              "Tasting Menu", "Tourists", "Upscale", "Valentine's Day", "Valet", "Vegan", "Vibrant Bar Scene", "Waterfront", 
              "Wood Oven", "Worth the Drive"];
const count1 = 1000;
const count2 = 10000;
// const generateData = () => {
//   for (let i = 0; i < count1; i++) {
//     let data = [];
//     for (let j = 0; j < count2; j++) {
//       let restaurantTags = [
//         tags[Math.floor(Math.random() * tags.length)],
//         tags[Math.floor(Math.random() * tags.length)],
//         tags[Math.floor(Math.random() * tags.length)],
//       ]
//       let restaurantPhotos = [];
//       for (let k = 0; k < (20 + Math.floor(Math.random() * 80)); k++) {
//         restaurantPhotos.push(Faker.image.food())
//       }
//       let restaurant = {
//         restaurantId: i*count2 + j,
//         restaurantName: Faker.company.companyName(),
//         restaurantRating: Math.floor(Math.random() * 50) / 10,
//         restaurantReviews: Math.floor(Math.random() * 5000),
//         restaurantPrice: price[Math.floor(Math.random() * 3)],
//         restaurantCuisine: Faker.address.country(),
//         restaurantDescription: Faker.lorem.paragraph(),
//         restaurantTags,
//         restaurantPhotos

//       }
//       data.push(restaurant);
//     }
    
//   }
// }

function generateData(writer, callback) {
  let i = 10000000;
  let counter = 0;
  writer.write('[')
  writeToStream();
  function writeToStream() {
    let ok = true;
    do {
      let restaurantTags = [
        tags[Math.floor(Math.random() * tags.length)],
        tags[Math.floor(Math.random() * tags.length)],
        tags[Math.floor(Math.random() * tags.length)],
      ]
      let restaurantPhotos = [];
      for (let k = 0; k < (20 + Math.floor(Math.random() * 80)); k++) {
        restaurantPhotos.push(Faker.image.food())
      }
      let restaurant = {
        restaurantId: counter,
        restaurantName: Faker.company.companyName(),
        restaurantRating: Math.floor(Math.random() * 50) / 10,
        restaurantReviews: Math.floor(Math.random() * 5000),
        restaurantPrice: price[Math.floor(Math.random() * 3)],
        restaurantCuisine: Faker.address.country(),
        restaurantDescription: Faker.lorem.paragraph(),
        restaurantTags,
        restaurantPhotos
  
      }
      data = JSON.stringify(restaurant);
      i--;
      counter++;
      if (i === 0) {
        // last time!
        writer.write(data + ']', callback);
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        ok = writer.write(data + ',');
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', writeToStream);
    }
  }
}

// const seedFunction = () => {
//   Description.insertMany(restaurantData)
//     .then(() => {
//       console.log('database seeded');
//       mongoose.connection.close();
//     })
//     .catch(err => console.error(err));
// };
const start = new Date()
generateData(writer, () => {
  const mid = new Date()
  console.log("Generation time: " + (mid - start))
});

// console.log(data)
// seedFunction();