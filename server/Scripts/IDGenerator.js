const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");

async function getDocTotal(collectionName) {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/test?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    let count = await client.db("test").collection(collectionName).count({});
    return count + 1;
  } catch (e) {
    console.error(e);
  } finally {
    client.close();
  }
}

// function to generate id

// user id generation
// by firebase

// inventory batch id generation

// admin
// admin id - ADMIN+001 based on registration time
// process id -
// task id -

// profit center id
// rj06bhl-pc001  zone then pc + number // rj20kot-pc001  zone then pc + number

// membership id
// GPCM0001 - Ghost profit center membership + 0001

// merchant id (profit center manager ) (ghost-merchant-role)
// GMR00001 - ghost-merchant-role 00001

// product id generation -
// FOODPRD000001 - Food product 000001
// GSTRPRD000001 - General Store product 000001 // SSTRPRD000001 - Speciality Store product 000001
// EVNTPRD000001 - Event product 000001
// COMBPRD000001 - Combination product 000001
// FNDNPRD000001 - Fine Dine product 000001

// category id generation
// GS-CAT001 - ghost signature category 001 ;
// BS001-CAT001 - brand signature category (brandid- BR001, Catid- CAT001) ;
// RJ06BHL-PC001-CAT001 - profit center category (pcid- PC001, Catid- 001)
// RJ06BHL-EV001-CAT001 - Event food category

// Discount ID generation
// price cut disc - merchant to prod - 10% => "PCD-MTP-10" ; price cut disc - merchant to category - 10% => "PCD-MTP-10" ; price cut disc - merchant to all - 10% => "PCD-MTA-10" ; price cut disc - merchant to menu - 10% => "PCD-MTM-10"
// cart disc - zone type - 10% => "ZONE10" ; cart disc - user type - 10% => "USER10" ; cart disc - admin type - 15% => "ADMIN15"
// super discount - delivery type - SUPERDELIVERY ; super discount - side-quest type - SUPERQUEST

// Menu id generation
// for food - Profit center id + menu no. M01
// for store - Profit center id + menu no. M01
// for event - event id + menu no. M01

// reward point code generation
// order loyalty point generation - RWDPT-GEN-ORD + 001
// event check in points - RWDPT-TRN-EVT + 001
// restaurant check in points - RWDPT-TRN-FDN + 001
// loyalty redemption - RWDPT-RED-WLT + 001

// additional cost
// gift card - ADD-GFTCRD-001
// packaging cost - ADD-PKGCST-001
// ambience cost - ADD-AMBCST-001
// donation channel - ADD-DONCHL-001

// ---------------------------------------------------------------------------------------------

// geo id ( zone + key + no. )

// geo.users - rj06bhl + geous + 000001
// geo.center - rj06bhl + geopc + 001
// geo.events - rj06bhl + geoev + 001


async function createUserGeoID(collectionName, Zoneid, IDstr) {

  try {
    let nextid = await getDocTotal(collectionName);
    let nextidwithpad = nextid.toString().padStart(6, "0");
    let newid = Zoneid + IDstr + nextidwithpad;
    return newid;
  } catch (e) {
    console.error(e);
  } finally {
  }
}

createUserGeoID("geo.users", "RJ06BHL", "-GEOUS-");

// ---------------------------------------------------------------------------------------------

async function createPaymentID(collectionName, IDstr) {

  try {
    let nextid = await getDocTotal(collectionName);
    let nextidwithpad = nextid.toString().padStart(6, "0");
    let newid = IDstr + nextidwithpad;
    return newid;
  } catch (e) {
    console.error(e);
  } finally {
  }
}


// event id
// events - zone + ev + 001 - RJ06BHL-EV001

// support ticket
// user support ticket - 'USER-INC-000001'
// internal support ticket - 'ITRL-INC-0001'

// teams
// zonal ops -

// orderid

async function createOnlineOrderID(collectionName, IDstr) {

  try {
    let nextid = await getDocTotal(collectionName);
    let nextidwithpad = nextid.toString().padStart(6, "0");
    let newid = IDstr + nextidwithpad;
    console.log(newid);
    return newid;
  } catch (e) {
    console.error(e);
  } finally {
  }
}

module.exports = { createUserGeoID, createOnlineOrderID, createPaymentID, getDocTotal }