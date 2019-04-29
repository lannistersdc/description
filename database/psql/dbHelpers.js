const pg = require('pg'); 
const format = require('pg-format');
const { username, password } = require('./config.js');
const pool = new pg.Pool({   
  user: username,
  host: 'localhost',
  database: 'description',
  password,
  port: 5432, 
});

module.exports = {
  getOne: (restaurantId) => {
    let restaurant;
    return pool.query(`select * from "Descriptions" where "restaurantId" = ${restaurantId};`)
      .then((descData) => {
        restaurant = descData.rows[0];
        return pool.query(`select * from "Tags" where "Tags"."restaurantId" = ${restaurantId};`)
      })
      .then((tagData) => {
        restaurant.restaurantTags = [];
        tagData.rows.forEach((tagObj) => {
          restaurant.restaurantTags.push(tagObj.tag);
        })
        return pool.query(`select * from "Photos" where "Photos"."restaurantId" = ${restaurantId};`)

      })
    .then((photoData) => {
      restaurant.restaurantPhotos = [];
      photoData.rows.forEach((photoObj) => {
        restaurant.restaurantPhotos.push(photoObj.photo);
      })
      return restaurant;
    })
    .catch((err) => {console.error(err)})
  },

  postOne: (restaurant) => {
    let keys = Object.keys(restaurant);
    let vals = Object.values(restaurant);
    let restaurantId;
    let id;
    return pool.query(`select max("restaurantId") from "Descriptions";`)
      .then((data) => {
        restaurantId = data.rows[0].max + 1;
        let descKeys = 'restaurantId", "' + keys.slice(0,6).join('", "');
        let descVals = restaurantId.toString() + "', '" + vals.slice(0,6).join("', '");
        return pool.query(`INSERT INTO "Descriptions" ("${descKeys}") VALUES ('${descVals}');`)
      })
      .then(() => {
        return pool.query(`select max("id") from "Tags";`)
      })
      .then((data) => {
        id = data.rows[0].max + 1;
        let tagKeys = 'id, tag, "restaurantId"';
        let tags = vals[6].map((val, ind) => {
          return [id + ind, val, restaurantId];
        })

        let tagQuery = format(`INSERT INTO "Tags" (${tagKeys}) VALUES %L;`, tags)
        return pool.query(tagQuery);
      })
      .then(() => {
        return pool.query(`select max("id") from "Photos";`)
      })
      .then((data) => {
        id = data.rows[0].max + 1;
        let photoKeys = 'id, photo, "restaurantId"';
        let photos = vals[7].map((val, ind) => {
          return [id + ind, val, restaurantId];
        })

        let photoQuery = format(`INSERT INTO "Photos" (${photoKeys}) VALUES %L;`, photos)
        return pool.query(photoQuery);
      })
  },

  updateOne: (restaurantId, restaurant) => {
    // let keys = Object.keys(restaurant);
    // let vals = Object.values(restaurant);
    // return pool.query(`SELECT * FROM "Descriptions" WHERE "restaurantId" = ${restaurantId} FOR UPDATE;`)
    //   .then(() => {
    //     let descKeys = '"restaurantId", "' + keys.slice(0,6).join('", "') + '"';
    //     let descVals = restaurantId.toString() + "', '" + vals.slice(0,6).join("', '");
    //     let desc = [restaurantId, ...vals.slice(0,6)];
    //     let descQuery = format(`UPDATE "Descriptions" SET (${descKeys})`)
    //     return pool.query()
    //   })
    
  },

  deleteOne: (restaurantId) => {
    // return Description.findOneAndDelete({ restaurantId })
  }
}

let restaurant = {
  restaurantName: "SHAM",
  restaurantRating: 5.0,
  restaurantReviews: 3000,
  restaurantPrice: "$30 Under",
  restaurantCuisine: "Chins",
  restaurantDescription: "DONT EAT HERE NOOOOOOOOOOO",
  restaurantTags: ["BAD IDEA", "FOOD NOT GOOD", "NONONONONO"],
  restaurantPhotos: ["https://i.kym-cdn.com/photos/images/facebook/001/101/745/c39",
                    "https://i.kym-cdn.com/photos/images/facebook/001/101/745/c39",
                    "https://i.kym-cdn.com/photos/images/facebook/001/101/745/c39",
                    "https://i.kym-cdn.com/photos/images/facebook/001/101/745/c39",
                    "https://i.kym-cdn.com/photos/images/facebook/001/101/745/c39",
                    "https://i.kym-cdn.com/photos/images/facebook/001/101/745/c39",
                    "https://i.kym-cdn.com/photos/images/facebook/001/101/745/c39",
                    "https://i.kym-cdn.com/photos/images/facebook/001/101/745/c39",
                    "https://i.kym-cdn.com/photos/images/facebook/001/101/745/c39",
                    "https://i.kym-cdn.com/photos/images/facebook/001/101/745/c39" 
                  ]

}
// module.exports.postOne(restaurant)
//   .then((data) => {
//     console.log(data)
//     module.exports.getOne(11)
//       .then((data) => {
//         console.log(data)
//       })
//   })
// module.exports.getOne(11)
//   .then((data) => {
//     console.log(data)
//   })
// pool.query(`select max("Descriptions"."restaurantId"), max("Tags"."id") from "Descriptions", "Tags";`)
//   .then((data) => {
//     console.log(data)
//   })