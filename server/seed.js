const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");

// seeding 1st into category

{
  /*

async function main() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const categoryCollection = client.db("fcc-db-tut").collection("categories");
    let categories = [
      {
        ID: "CAT001",
        name: "PIZZA",
        description: "delicious White circular bread with toppings",
        contents: [],
        categoryKeywords: ["pizza", "pizzeria", "italy"],
      },
      {
        ID: "CAT002",
        name: "BURGER",
        description: "sandwich with buns on top and bottom",
        contents: [],
        categoryKeywords: ["ham", "bun", "burger"],
      },
      {
        ID: "CAT003",
        name: "TACOS",
        description: "wrap with spicy fillings",
        contents: [],
        categoryKeywords: ["wrap", "tacos", "fillings"],
      },
      {
        ID: "CAT004",
        name: "SHAKES",
        description: "tasty drinks of different flavours",
        contents: [],
        categoryKeywords: ["milk", "shake", "sweet"],
      },
    ];
    await categoryCollection.insertMany(categories);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

//main();

*/
}

//results -- went correctly

// seeding 2nd into product

{
  /*

async function insertproduct1() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const productCollection = client.db("fcc-db-tut").collection("products");
    let products = [
      {
        ID: "PRO0101",
        name: "MARGHARITA PIZZA",
        description: "cheese pizza with extra cheese",
        productKeywords: ["cheese", "pizza", "margharita"],
        categoryID: "CAT001",
        priceOriginal: 300,
        discount: 15,
        servingStatus: true,
      },
      {
        ID: "PRO0102",
        name: "GHOST PIZZA",
        description: "ghost pizza with extra ghost",
        productKeywords: ["ghost", "pizza", "veg"],
        categoryID: "CAT001",
        priceOriginal: 500,
        discount: 15,
        servingStatus: true,
      },
      {
        ID: "PRO0201",
        name: "TIKKI BURGER",
        description: "bun burger with extra tikki",
        productKeywords: ["tikki", "burger", "veg"],
        categoryID: "CAT002",
        priceOriginal: 100,
        discount: 20,
        servingStatus: true,
      },
      {
        ID: "PRO0202",
        name: "GHOST BURGER",
        description: "bun burger with extra ghost",
        productKeywords: ["ghost", "burger", "veg"],
        categoryID: "CAT002",
        priceOriginal: 150,
        discount: 20,
        servingStatus: true,
      },
      {
        ID: "PRO0301",
        name: "VEG TACOS",
        description: "cheese pizza with extra cheese",
        productKeywords: ["veg", "tacos", "mexican"],
        categoryID: "CAT003",
        priceOriginal: 180,
        discount: 10,
        servingStatus: true,
      },
      {
        ID: "PRO0302",
        name: "PANEER TACOS",
        description: "cheese pizza with extra cheese",
        productKeywords: ["paneer", "tacos", "indian"],
        categoryID: "CAT003",
        priceOriginal: 240,
        discount: 10,
        servingStatus: true,
      },
      {
        ID: "PRO0401",
        name: "CHOCOLATE SHAKE",
        description: "cheese pizza with extra cheese",
        productKeywords: ["shake", "milk", "sweet", ""],
        categoryID: "CAT004",
        priceOriginal: 80,
        discount: 8,
        servingStatus: true,
      },
      {
        ID: "PRO0402",
        name: "BUTTERSCOTCH SHAKE",
        description: "cheese pizza with extra cheese",
        productKeywords: ["shake", "milk", "sweet", ""],
        categoryID: "CAT004",
        priceOriginal: 90,
        discount: 8,
        servingStatus: true,
      },
      {
        ID: "PRO0403",
        name: "ELAICHI SHAKE",
        description: "cheese pizza with extra cheese",
        productKeywords: ["shake", "milk", "sweet", "elaichi"],
        categoryID: "CAT004",
        priceOriginal: 70,
        discount: 8,
        servingStatus: true,
      },
      {
        ID: "PRO0404",
        name: "COCONUT SHAKE",
        description: "cheese pizza with extra cheese",
        productKeywords: ["shake", "milk", "sweet", "coconut"],
        categoryID: "CAT004",
        priceOriginal: 100,
        discount: 8,
        servingStatus: true,
      },
      {
        ID: "PRO0405",
        name: "BADAM SHAKE",
        description: "cheese pizza with extra cheese",
        productKeywords: ["shake", "milk", "sweet", "badam"],
        categoryID: "CAT004",
        priceOriginal: 110,
        discount: 8,
        servingStatus: true,
      },
      {
        ID: "PRO0406",
        name: "PISTA SHAKE",
        description: "cheese pizza with extra cheese",
        productKeywords: ["shake", "milk", "sweet", "pista"],
        categoryID: "CAT004",
        priceOriginal: 100,
        discount: 8,
        servingStatus: true,
      },
    ];
    await productCollection.insertMany(products);
    console.log("insertion succesful");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

// insertproduct1();

*/
}

// result -- successful insertion

// updating content of categories 1

{
  /*

async function updatecategory1() {
  const uri =
  "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const updatecontent = client.db("fcc-db-tut").collection("categories");
    var myquery = { ID: "CAT001" };
    var newvalues = { $set: { contents: ["PRO0101", "PRO0102"] } };
    await updatecontent.updateOne(myquery, newvalues);
    console.log("insertion successful");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

//updatecategory1();

*/
}

// result --successful updation

// updating content of categories 2

{
  /*

async function updatecategory2() {
  const uri =
  "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const updatecontent = client.db("fcc-db-tut").collection("categories");

    var myquery2 = { ID: "CAT002" };
    var newvalues2 = { $set: { contents: ["PRO0201", "PRO0202"] } };
    await updatecontent.updateOne(myquery2, newvalues2);

    var myquery3 = { ID: "CAT003" };
    var newvalues3 = { $set: { contents: ["PRO0301", "PRO0302"] } };
    await updatecontent.updateOne(myquery3, newvalues3);

    var myquery4 = { ID: "CAT004" };
    var newvalues4 = { $set: { contents: ["PRO0401", "PRO0402", "PRO0403", "PRO0404", "PRO0405", "PRO0406"] } };
    await updatecontent.updateOne(myquery4, newvalues4);

    console.log("insertion successful");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

updatecategory2()

*/
}

// result --successful updation

// db feeding for zone and profit center

{/*

async function Profit_Center_seed() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const profitCenterCollection = client
      .db("fcc-db-tut")
      .collection("Profit Center");
    let centers = [
      {
        ID: "BHLPC001",
        name: "Ghost Kitchen",
        zone: "BHILWARA",
        zonal_area: "SHASTRI NAGAR",
        tagline: "Delicious Fast Food wrapped in Desi Touch",
        profit_center_type: "GKO",
        food_type: ["VEG"],
        order_type_provider_basis: ["DELIVERY", "TAKEAWAY"],
        order_type_payment_basis: ["COD", "ONLINE"],
        accredition: ["FAST FOOD"],
        discount: ["TASTEKITCHEN5","TASTEKITCHEN10","OG15"],
        rating: 5,
      },
      {
        ID: "BHLPC002",
        name: "Ghost Mess",
        zone: "BHILWARA",
        zonal_area: "RC VYAS",
        tagline: "Tasty Mess Price Food available for daily delivery",
        profit_center_type: "GFM",
        food_type: ["VEG"],
        order_type_provider_basis: ["DELIVERY", "TAKEAWAY"],
        order_type_payment_basis: ["COD", "ONLINE", "SUBSCRIPTION"],
        accredition: ["RAJASTHANI"],
        discount: ["STUDENT5","STUDENT10"],
        rating: 5,
      },
      {
        ID: "BHLPC003",
        name: "Old Age Cafe",
        zone: "BHILWARA",
        zonal_area: "BUS STAND",
        tagline: "Amazing Finger-licking Tasty Fast Food",
        profit_center_type: "GKO",
        food_type: ["VEG"],
        order_type_provider_basis: ["DELIVERY", "TAKEAWAY"],
        order_type_payment_basis: ["COD", "ONLINE"],
        accredition: ["CONTINENTAL"],
        discount: ["TASTEKITCHEN5","TASTEKITCHEN10"],
        rating: 5,
      },
      {
        ID: "KOTPC001",
        name: "Ghost Kitchen",
        zone: "KOTA",
        zonal_area: "IIT NAGAR",
        tagline: "Tasty Food available for night delivery",
        profit_center_type: "GFO",
        food_type: ["VEG"],
        order_type_provider_basis: ["DELIVERY", "TAKEAWAY"],
        order_type_payment_basis: ["COD", "ONLINE"],
        accredition: ["SATVIK"],
        discount: ["TASTEKITCHEN5","TASTEKITCHEN10"],
        rating: 5,
      },
      {
        ID: "PATPC001",
        name: "Ghost Mess",
        zone: "PATIALA",
        zonal_area: "THAPAR UNIVERSITY",
        tagline: "Tasty Mess Price Food only for Thapar Students",
        profit_center_type: "GFM",
        food_type: ["VEG"],
        order_type_provider_basis: ["DELIVERY"],
        order_type_payment_basis: ["COD", "ONLINE", "SUBSCRIPTION"],
        accredition: ["PUNJABI"],
        discount: ["STUDENT5","STUDENT10"],
        rating: 5,
      },
      {
        ID: "PATPC002",
        name: "Lucky's Haunted Kitchen",
        zone: "PATIALA",
        zonal_area: "SHASTRI NAGAR",
        tagline: "Lucky Fast Food serving since 2019 Batch",
        profit_center_type: "GFO",
        food_type: ["VEG"],
        order_type_provider_basis: ["DELIVERY"],
        order_type_payment_basis: ["COD", "ONLINE"],
        accredition: ["FAST FOOD"],
        discount: ["TASTEKITCHEN5","TASTEKITCHEN10"],
        rating: 5,
      },
    ];
    await profitCenterCollection.insertMany(centers);
    console.log("profit center seeding success")
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

Profit_Center_seed();

async function Zone_seed() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const zoneCollection = client.db("fcc-db-tut").collection("zone");
    let zones = [
      {
        ID: "RJ06BHL",
        pincode: [311001,311602],
        name: "BHILWARA",
        state: "RAJASTHAN",
        zonal_areas: ["SHASTRI NAGAR","RC VYAS","BUS STAND"],
        profit_centers: ["BHLPC001","BHLPC002","BHLPC003"],
      },
      {
        ID: "RJ20KOTA",
        pincode: [324001, 324002, 324003],
        name: "KOTA",
        state: "RAJASTHAN",
        zonal_areas: ["IIT NAGAR"],
        profit_centers: ["KOTPC001"],
      },
      {
        ID: "PB11PAT",
        pincode: [147001,147002,147003],
        name: "PATIALA",
        state: "PUNJAB",
        zonal_areas: ["PREM NAGAR"],
        profit_centers: ["PATPC001","PATPC002"],
      },
    ];
    await zoneCollection.insertMany(zones);
    console.log("zone seeding success")
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

Zone_seed();

*/}

// result - data seeding successful

// update mongo schema

{/*

async function update_zone_details() {
  const uri =
  "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const updatecontent = client.db("fcc-db-tut").collection("zone");

    var myquery1 = { ID: "RJ06BHL" };
    var newvalues1 = { $set: { zone_tagline: "The home to food culture in almighty mewar." } };
    await updatecontent.updateOne(myquery1, newvalues1);

    var myquery2 = { ID: "RJ20KOTA" };
    var newvalues2 = { $set: { zone_tagline: "The learning ground for greatest, brilliant minds globally." } };
    await updatecontent.updateOne(myquery2, newvalues2);

    var myquery3 = { ID: "PB11PAT" };
    var newvalues3 = { $set: { zone_tagline: "The royal and culturally rich voice of punjab." } };
    await updatecontent.updateOne(myquery3, newvalues3);

    console.log("insertion successful");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

update_zone_details()

*/}

//