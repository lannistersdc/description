const Faker = require('faker');
const fs = require('fs');

const writeDesc = fs.createWriteStream("database/descriptions.csv");
const writeTags = fs.createWriteStream("database/tags.csv");
const writePhotos = fs.createWriteStream("database/photos.csv");

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


function generateData(writer, mode, callback) {
  let i = 10000000;
  let counter = 0;
  let tableCount = 0;
  switch(mode) {
    case 0:
      writer.write("restaurantId|restaurantName|restaurantRating|restaurantReviews|restaurantPrice|restaurantCuisine|restaurantDescription\n");
      break;
    case 1:
      writer.write("tag|restaurantId\n")
      break;
    case 2:
      writer.write("photo|restaurantId\n")
      break;
  }
  writeToStream();
  function writeToStream() {
    let ok = true;
    do {
      let row;
      switch(mode) {
        case 0:
          let restaurant = {
            restaurantId: counter,
            restaurantName: Faker.company.companyName(),
            restaurantRating: Math.floor(Math.random() * 50) / 10,
            restaurantReviews: Math.floor(Math.random() * 5000),
            restaurantPrice: price[Math.floor(Math.random() * 3)],
            restaurantCuisine: Faker.address.country(),
            restaurantDescription: Faker.lorem.paragraph(),
          }
          row = Object.values(restaurant).join('|');
          break;
        case 1:
          row = [];
          for (let j = 0; j < 3; j++) {
            let restaurantTag = [
              tableCount,
              tags[Math.floor(Math.random() * tags.length)],
              counter
            ];
            row.push(restaurantTag.join('|'));
            tableCount++;
          }
          row = row.join('\n');
          break;
        case 2:
          row = [];
          for (let k = 0; k < (20 + Math.floor(Math.random() * 80)); k++) {
            let restaurantPhoto = [
              tableCount,
              Faker.image.food(),
              counter
            ];
            row.push(restaurantPhoto.join('|'));
            tableCount++;
          }
          row = row.join('\n');
          break;
      }
      i--;
      counter++;
      if (i === 0) {
        // last time!
        writer.write(row + '\n', callback);
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        ok = writer.write(row + '\n');
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', writeToStream);
    }
  }
}

generateData(writeDesc, 0, () => {
  console.log("Seeded descriptions.")
  generateData(writeTags, 1, () => {
    console.log("Seeded tags.")
    generateData(writePhotos, 2, () => {
      console.log("Done seeding CSVs.");
    });
  });
});