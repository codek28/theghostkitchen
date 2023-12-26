const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");

// profit center seed -

{
  /*
async function pc_seed() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const PCCollection = client.db("test").collection("profitcenters");
    let centers = [
      {
        ID: "RJ06BHL-PC001",
        Name: "GHOST KITCHEN",
        Tagline: "Selling Now on the land of mewar.",
        ProfitCenterDetails: {
          BusinessLine: ["GKCK"],
          MerchantID: "GMR00001",
          MembershipID: "GPCM0001",
          Plan: "GHOST",
        },
        Address: "Opposite Kanak Petroleum, Near L2C, Bhilwara",
        LocationDetails: {
          Zone: "RJ06BHL",
          ZonalArea: "Bhilwara",
          GeolocationID: "RJ06BHL-GEOPC-001",
        },
        ServiceArea: {
          DeliveryZones: ["RJ06BHL"],
          DeliveryZonalAreas: ["Bhilwara"],
          DeliveryDisturbanceAlert: {
            Status: false,
            AlertText: "",
          },
        },
        OrderType: {
          ProviderBasis: ["Delivery", "Takeaway"],
          PaymentBasis: ["Online", "CoD"],
        },
        FoodDetails: {
          FoodType: ["VEG"],
          ProfitCenterAccredition: ["Night-Kitchen"],
        },
        CenterTimings: {
          OpeningTime: new Date("<2023-09-23T16:20:00>"),
          ClosingTime: new Date("<2024-09-23T04:20:00>"),
          CenterOpen: true,
        },
        AverageRating: 5, // By Last Business Month end
        Illustration: {},
      },
      {
        ID: "RJ20KOT-PC001",
        Name: "GHOST KITCHEN",
        Tagline: "Selling Now on the land of students.",
        ProfitCenterDetails: {
          BusinessLine: ["GKCK"],
          MerchantID: "GMR00002",
          MembershipID: "GPCM0002",
          Plan: "GHOST",
        },
        Address: "32, Nanta Rd., Kunadi, Electricity Board Area, Kota",
        LocationDetails: {
          Zone: "RJ20KOT",
          ZonalArea: "Kota",
          GeolocationID: "RJ06BHL-GEOPC-002",
        },
        ServiceArea: {
          DeliveryZones: ["RJ20KOT"],
          DeliveryZonalAreas: ["Kota"],
          DeliveryDisturbanceAlert: {
            Status: false,
            AlertText: "",
          },
        },
        OrderType: {
          ProviderBasis: ["Delivery", "Takeaway"],
          PaymentBasis: ["Online", "CoD"],
        },
        FoodDetails: {
          FoodType: ["VEG"],
          ProfitCenterAccredition: ["Night-Kitchen"],
        },
        CenterTimings: {
          OpeningTime: new Date("<2023-09-23T16:20:00>"),
          ClosingTime: new Date("<2024-09-23T04:20:00>"),
          CenterOpen: true,
        },
        AverageRating: 5, // By Last Business Month end
        Illustration: {},
      },
    ];
    await PCCollection.insertMany(centers);
    console.log("centers Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

pc_seed();
*/
}

// pc billing seed

{/*

async function pcbilling_seed() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const profitcenterbillingcollection = client
      .db("test")
      .collection("profitcenter.billings");
    let profitcenterbillingobject = [
      {
        ID: "RJ06BHL-PC001",
        DiscountandBenefits: {
          PriceCutDiscount: {
            MerchantToAll: "PCD-MTA-5",
            MerchantToMenu: [
              {
                MenuID: "RJ06BHL-PC001-M02",
                DiscountID: "PCD-MTM-10",
              },
              {
                MenuID: "RJ06BHL-PC001-M03",
                DiscountID: "PCD-MTM-5",
              },
            ],
            MerchantToCategory: [
              {
                CategoryID: "GS-CAT015",
                DiscountID: "PCD-MTC-5",
              },
              {
                CategoryID: "GS-CAT016",
                DiscountID: "PCD-MTC-5",
              },
              {
                CategoryID: "GS-CAT004",
                DiscountID: "PCD-MTC-5",
              },
              {
                CategoryID: "GS-CAT005",
                DiscountID: "PCD-MTC-5",
              },
            ],
            MerchantToProduct: [
              {
                ProductID: "FOODPRD000111",
                DiscountID: "PCD-MTP-5",
              },
              {
                ProductID: "FOODPRD000104",
                DiscountID: "PCD-MTP-5",
              },
              {
                ProductID: "FOODPRD000057",
                DiscountID: "PCD-MTP-5",
              },
            ],
          },
        },
        Rewards: {
          LoyaltyGeneration: "RWDPT-GEN-ORD-002",
          EventCheckInPoint: null,
          FineDineCheckInPoint: null, // only applicable for Fine Dine
        },
        AdditionalCosts: {
          GiftCard: ["ADD-GFTCRD-001", "ADD-GFTCRD-002", "ADD-GFTCRD-003"],
          PackagingCost: ["ADD-PKGCST-001", "ADD-PKGCST-002"],
          AmbienceCost: null,
          DonationChannel: ["ADD-DONCHL-001", "ADD-DONCHL-002"],
        },
      },
      {
        ID: "RJ20KOT-PC001",
        DiscountandBenefits: {
          PriceCutDiscount: {
            MerchantToAll: "PCD-MTA-5",
            MerchantToMenu: [
              {
                MenuID: "RJ20KOT-PC001-M04",
                DiscountID: "PCD-MTM-10",
              },
              {
                MenuID: "RJ20KOT-PC001-M01",
                DiscountID: "PCD-MTM-10",
              },
            ],
            MerchantToCategory: [
              {
                CategoryID: "GS-CAT007",
                DiscountID: "PCD-MTC-10",
              },
              {
                CategoryID: "GS-CAT008",
                DiscountID: "PCD-MTC-10",
              },
            ],
            MerchantToProduct: [
              {
                ProductID: "FOODPRD000111",
                DiscountID: "PCD-MTP-5",
              },
              {
                ProductID: "FOODPRD000104",
                DiscountID: "PCD-MTP-5",
              },
              {
                ProductID: "FOODPRD000057",
                DiscountID: "PCD-MTP-5",
              },
            ],
          },
        },
        Rewards: {
          LoyaltyGeneration: "RWDPT-GEN-ORD-001",
          EventCheckInPoint: null,
          FineDineCheckInPoint: null, // only applicable for Fine Dine
        },
        AdditionalCosts: {
          GiftCard: ["ADD-GFTCRD-001", "ADD-GFTCRD-002", "ADD-GFTCRD-003"],
          PackagingCost: ["ADD-PKGCST-001", "ADD-PKGCST-002"],
          AmbienceCost: null,
          DonationChannel: ["ADD-DONCHL-001", "ADD-DONCHL-002"],
        },
      },
    ];
    await profitcenterbillingcollection.insertMany(profitcenterbillingobject);
    console.log("profit center billings Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

pcbilling_seed();

*/}

// profit team list seed

{
  /*
async function pcteams_seed() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const profitcenterteamscollection = client
      .db("test")
      .collection("profitcenter.teams");
    let profitcenterteamsobj = [
      {
        ID: "RJ06BHL-PC001",
        CenterContact: {
          ManagerContactNumber: 7426977377,
          SupportContactNumber: 7690024511,
          OrderContactNumber: 7690024511,
        },
        CenterTeam: {
          Member: {
            Name: "SOMYA PIPARA",
            TeamRole: "PC MANAGER",
            AdminID: "ADMIN003",
          },
          Member: {
            Name: "KANISHK CHOUDHARY",
            TeamRole: "APPLICATION-SUPPORT",
            AdminID: "ADMIN001",
          },
        },
      },
      {
        ID: { type: String, required: true, unique: true },
        CenterContact: {
          ManagerContactNumber: 7425033151,
          SupportContactNumber: 7425033151,
          OrderContactNumber: 7425033151,
        },
        CenterTeam: {
          Member: {
            Name: "YASH TAK",
            TeamRole: "PC MANAGER",
            AdminID: "ADMIN002",
          },
          Member: {
            Name: "KANISHK CHOUDHARY",
            TeamRole: "APPLICATION-SUPPORT",
            AdminID: "ADMIN001",
          },
        },
      },
    ];
    await profitcenterteamscollection.insertMany(profitcenterteamsobj);
    console.log("profit center teams list successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

pcteams_seed();
*/
}

// add food property for seller list itself
// profit center seller list seed

{
  /*
async function pcselling_seed() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const profitcentersellerCollection = client
      .db("test")
      .collection("profitcenter.sellerlists");
    let profitcentersellerobj = [
      {
        ID: "RJ06BHL-PC001",
        FoodDetails: {
          FoodType: ["VEG"],
          ProfitCenterAccredition: ["NIGHT-KITCHEN"],
        },
        SellerList: {
          Menu: [
            {
              MenuName: "Maincourse Masters",
              MenuID: "RJ06BHL-PC001-M01",
            },
            {
              MenuName: "Continental Explorers",
              MenuID: "RJ06BHL-PC001-M02",
            },
            {
              MenuName: "Quick Snacks",
              MenuID: "RJ06BHL-PC001-M03",
            },
            {
              MenuName: "Danger Drinks",
              MenuID: "RJ06BHL-PC001-M04",
            },
          ],
        },
      },
      {
        ID: "RJ20KOT-PC001",
        FoodDetails: {
          FoodType: ["VEG"],
          ProfitCenterAccredition: ["NIGHT-KITCHEN"],
        },
        SellerList: {
          Menu: [
            {
              MenuName: "Maincourse Masters",
              MenuID: "RJ20KOT-PC001-M01",
            },
            {
              MenuName: "Continental Explorers",
              MenuID: "RJ20KOT-PC001-M02",
            },
            {
              MenuName: "Quick Snacks",
              MenuID: "RJ20KOT-PC001-M03",
            },
            {
              MenuName: "Danger Drinks",
              MenuID: "RJ20KOT-PC001-M04",
            },
          ],
        },
      },
    ];
    await profitcentersellerCollection.insertMany(profitcentersellerobj);
    console.log("profit center seller list Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

pcselling_seed();
*/
}
