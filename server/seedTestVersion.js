const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");

// seeding into zones - success - updated once - updated twice

{/*
async function zone_seed() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const zoneCollection = client.db("test").collection("zones");
    let zones = [
      {
        ID: "RJ06BHL",
        Pincode: [311001],
        Name: "Bhilwara",
        State: "Rajasthan",
        ZonalAreas: ["Bhilwara"],
        ProfitCenters: ["RJ06BHL-PC001"],
        ZoneTagline: "The home to food culture of mewar.",
        ZonalTeamID: "",
        ZoneDiscount: "ZONE10",
        ZoneEvents: {
          UpcomingEventID: ["RJ06BHL-EV001"],
          CurrentEventID: [],
        },
        ZoneFoodCulture: {},
        ZoneImages: {},
      },
      {
        ID: "RJ20KOTA",
        Pincode: [324001, 324002, 324003],
        Name: "KOTA",
        State: "RAJASTHAN",
        ZonalAreas: ["KOTA"],
        ProfitCenters: ["RJ20KOT-PC001"],
        ZoneTagline:
          "The learning ground for greatest, brilliant minds globally.",
        ZonalTeamID: "",
        ZoneDiscount: "ZONE10",
        ZoneEvents: {
          UpcomingEventID: [],
          CurrentEventID: [],
        },
        ZoneFoodCulture: {},
        ZoneImages: {},
      },
    ];
    await zoneCollection.insertMany(zones);
    console.log("zones Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

zone_seed();
*/}

// seeding into discounts - success - updated once

{
  /*
async function discount_seed() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const zonediscountCollection = client.db("test").collection("discount.cartdiscount.zonediscounts");
    let zonediscounts = [
      {
        Code: "ZONE5",
        DiscountType: "ZONE-COUPON",
        Description:
          "User gets 5% Discount on ordering above certain cart amount",
        DiscountApplicability: {
          MaxDiscountedAmount: 40,
          MinimumOrderValue: 100,
        },
        Percentage: 5,
        DiscountActive: false,
      },
      {
        Code: "ZONE10",
        DiscountType: "ZONE-COUPON",
        Description:
          "User gets 10% Discount on ordering above certain cart amount",
        DiscountApplicability: {
          MaxDiscountedAmount: 60,
          MinimumOrderValue: 150,
        },
        Percentage: 10,
        DiscountActive: true,
      },
    ];
    await zonediscountCollection.insertMany(zonediscounts);
    console.log("discount 0 Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

discount_seed();

async function discount_seed1() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const usercartdiscountCollection = client.db("test").collection("discount.cartdiscount.userdiscounts");
    let userdiscounts = [
      {
        Code: "USER5",
        DiscountType: "USER-COUPON",
        Description: "User gets 5% Discount, applicable 6 times",
        DiscountApplicability: {
          MaxDiscountedAmount: 50,
          MinimumOrderValue: 150,
        },
        Percentage: 5,
        DiscountActive: true,
      },
      {
        Code: "USER8",
        DiscountType: "USER-COUPON",
        Description: "User gets 8% Discount, applicable thrice",
        DiscountApplicability: {
          MaxDiscountedAmount: 80,
          MinimumOrderValue: 150,
        },
        Percentage: 8,
        DiscountActive: true,
      },
      {
        Code: "USER15",
        DiscountType: "USER-COUPON",
        Description: "User gets 15% Discount, applicable once",
        DiscountApplicability: {
          MaxDiscountedAmount: 100,
          MinimumOrderValue: 200,
        },
        Percentage: 15,
        DiscountActive: true,
      },
    ];
    await usercartdiscountCollection.insertMany(userdiscounts);
    console.log("discount 1 Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

discount_seed1();

async function discount_seed2() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const pricecutdiscountCollection = client
      .db("test")
      .collection("discount.pricecuts");

    let pricecutdiscounts = [
      {
        Code: "PCD-MTC-5",
        DiscountType: "MerchantTowardCategory",
        Description: "Merchant Price cut toward category",
        DiscountApplicability: {},
        Percentage: 5,
        DiscountActive: true,
      },
      {
        Code: "PCD-MTC-10",
        DiscountType: "MerchantTowardCategory",
        Description: "Merchant Price cut toward category",
        DiscountApplicability: {},
        Percentage: 10,
        DiscountActive: false,
      },
      {
        Code: "PCD-MTP-5",
        DiscountType: "MerchantTowardProduct",
        Description: "Merchant Price cut toward product",
        DiscountApplicability: {},
        Percentage: 5,
        DiscountActive: false,
      },
      {
        Code: "PCD-MTP-10",
        DiscountType: "MerchantTowardProduct",
        Description: "Merchant Price cut toward product",
        DiscountApplicability: {},
        Percentage: 10,
        DiscountActive: true,
      },
      {
        Code: "PCD-MTA-5",
        DiscountType: "MerchantTowardAll",
        Description: "Merchant Price cut toward all profit center products",
        DiscountApplicability: {},
        Percentage: 5,
        DiscountActive: false,
      },
      {
        Code: "PCD-MTA-10",
        DiscountType: "MerchantTowardAll",
        Description: "Merchant Price cut toward all profit center products",
        DiscountApplicability: {},
        Percentage: 10,
        DiscountActive: false,
      },
      {
        Code: "PCD-MTM-5",
        DiscountType: "MerchantTowardMenu",
        Description: "Merchant Price cut toward menu categories",
        DiscountApplicability: {},
        Percentage: 5,
        DiscountActive: false,
      },
      {
        Code: "PCD-MTM-10",
        DiscountType: "MerchantTowardMenu",
        Description: "Merchant Price cut toward menu categories",
        DiscountApplicability: {},
        Percentage: 10,
        DiscountActive: false,
      },
    ];
    await pricecutdiscountCollection.insertMany(pricecutdiscounts);
    console.log("discount 2 Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

discount_seed2();

async function discount_seed3() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const globaldiscountCollection = client.db("test").collection("discount.cartdiscount.globaldiscounts");
    let globaldiscounts = [
      {
        Code: "GLOBAL20",
        DiscountType: "GLOBAL-COUPON",
        Description: "User gets 20% Discount on orders above 799, upto 150rs.",
        DiscountApplicability: {
          MaxDiscountedAmount: 150,
          MinimumOrderValue: 800,
        },
        Percentage: 20,
        DiscountActive: false,
      },
      {
        Code: "GLOBAL10",
        DiscountType: "GLOBAL-COUPON",
        Description: "User gets 10% Discount on orders above 299, upto 80rs.",
        DiscountApplicability: {
          MaxDiscountedAmount: 80,
          MinimumOrderValue: 300,
        },
        Percentage: 10,
        DiscountActive: true,
      },
      {
        Code: "GLOBAL15",
        DiscountType: "GLOBAL-COUPON",
        Description: "User gets 15% Discount on orders above 499, upto 100rs.",
        DiscountApplicability: {
          MaxDiscountedAmount: 100,
          MinimumOrderValue: 500,
        },
        Percentage: 15,
        DiscountActive: true,
      },
    ];
    await globaldiscountCollection.insertMany(globaldiscounts);
    console.log("discount 3 Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

discount_seed3();

async function discount_seed4() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const admincartdiscountCollection = client.db("test").collection("discount.cartdiscount.admindiscounts");
    let admindiscounts = [
      {
        Code: "ADMIN3",
        DiscountType: "ADMIN-COUPON",
        Description: "Admin provided 3% discount on bill",
        DiscountApplicability: {
          MaxDiscountedAmount: null,
          MinimumOrderValue: null,
        },
        Percentage: 3,
        DiscountActive: true,
      },
      {
        Code: "ADMIN5",
        DiscountType: "ADMIN-COUPON",
        Description: "Admin provided 5% discount on bill",
        DiscountApplicability: {
          MaxDiscountedAmount: null,
          MinimumOrderValue: null,
        },
        Percentage: 5,
        DiscountActive: true,
      },
      {
        Code: "ADMIN8",
        DiscountType: "ADMIN-COUPON",
        Description: "Admin provided 8% discount on bill",
        DiscountApplicability: {
          MaxDiscountedAmount: null,
          MinimumOrderValue: null,
        },
        Percentage: 8,
        DiscountActive: true,
      },
      {
        Code: "ADMIN10",
        DiscountType: "ADMIN-COUPON",
        Description: "Admin provided 10% discount on bill",
        DiscountApplicability: {
          MaxDiscountedAmount: null,
          MinimumOrderValue: null,
        },
        Percentage: 10,
        DiscountActive: true,
      },
    ];
    await admincartdiscountCollection.insertMany(admindiscounts);
    console.log("discount 4 Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

discount_seed4();
*/
}

// seeding for admins & merchants - success - updated once

{
  /*

async function merchant_seed() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const merchantCollection = client.db("test").collection("merchants");
    let merchants = [
      {
        MerchantID: "GMR00001",
        MerchantName: "KANISHK CHOUDHARY",
        MerchantPersonalEmailID: "kanishkchoudhary1998@gmail.com",
        MerchantContact: 8764076402,
        Memberships: [],
        ProfitCenters: [],
        AdminID: "ADMIN001",
        PaymentID: { type: String },
        MerchantStory: "",
        MerchantJoiningDate: { type: Date },
      },
      {
        MerchantID: "GMR00002",
        MerchantName: "YASH TAK",
        MerchantPersonalEmailID: "yashtak51@gmail.com",
        MerchantContact: 7425033151,
        Memberships: [],
        ProfitCenters: [],
        AdminID: "ADMIN002",
        PaymentID: "",
        MerchantStory: "Enthusiastic foodie left mauritious to serve indian.",
        MerchantJoiningDate: { type: Date },
      },
      {
        MerchantID: "GMR00003",
        MerchantName: "SOMYA PIPARA",
        MerchantPersonalEmailID: "piparasomya@gmail.com",
        MerchantContact: 7426977377,
        Memberships: [String],
        ProfitCenters: [String],
        AdminID: "ADMIN003",
        PaymentID: "",
        MerchantStory: "Ambitious enterpreneur open to connect for food multiverse",
        MerchantJoiningDate: { type: Date },
      },
    ];
    await merchantCollection.insertMany(merchants);
    console.log("merchant Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

merchant_seed();

// admin seeding

async function admin_seed() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const adminCollection = client.db("test").collection("admins");
    let admins = [
      {
        ID: "ADMIN001",
        Name: "KANISHK CHOUDHARY",
        DOB: {},
        PersonalEmail: "kanishkchoudhary1998@gmail.com",
        PersonalContactNo: 8764076402,
        WorkIdentity: {
          WorkContactNo: 8764076402,
          WorkEmail: "kanishkchoudhary1998@gmail.com",
          WorkPassword: "pass_admin001", // Use hashing to secure
        },
        WorkLocation: {
          OfficeID: "HQ-BHILWARA",
          RemoteWorking: true,
          WorkZone: ["RJ06BHL"],
          WorkZonalArea: ["BHILWARA"],
          WorkProfitCenter: ["BHLPC001"],
        },
        Documents: {
          AADHAR: {},
          PAN: {},
        },
      },
      {
        ID: "ADMIN003",
        Name: "SOMYA PIPARA",
        DOB: {},
        PersonalEmail: "piparasomya@gmail.com",
        PersonalContactNo: 8764076402,
        WorkIdentity: {
          WorkContactNo: 8764076402,
          WorkEmail: "piparasomya@gmail.com",
          WorkPassword: "pass_admin003", // Use hashing to secure
        },
        WorkLocation: {
          OfficeID: "HQ-BHILWARA",
          RemoteWorking: true,
          WorkZone: ["RJ06BHL"],
          WorkZonalArea: ["BHILWARA"],
          WorkProfitCenter: ["BHLPC001"],
        },
        Documents: {
          AADHAR: {},
          PAN: {},
        },
      },
      {
        ID: "ADMIN002",
        Name: "Yash Tak",
        DOB: {},
        PersonalEmail: "yashtak51@gmail.com",
        PersonalContactNo: 7425033151,
        WorkIdentity: {
          WorkContactNo: 7425033151,
          WorkEmail: "yashtak51@gmail.com",
          WorkPassword: "pass_admin002", // Use hashing to secure
        },
        WorkLocation: {
          OfficeID: "HQ-KOTA",
          RemoteWorking: true,
          WorkZone: ["RJ20KOTA"],
          WorkZonalArea: ["KOTA"],
          WorkProfitCenter: ["KOTPC001"],
        },
        Documents: {
          AADHAR: {},
          PAN: {},
        },
      },
    ];
    await adminCollection.insertMany(admins);
    console.log("admin Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

admin_seed();

*/
}

// menu seed - success - updated once - updated twice

{/*

async function menu_seed() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const MenuCollection = client.db("test").collection("foodmenus");
    let menus = [
      {
        ID: "RJ06BHL-PC001-M01",
        Name: "MAIN-COURSE MEALS",
        Description: "Plethora of main-course items.",
        ListedCollectionType: "MULTIPLE-FOOD-CATEGORIES",
        Contents: ["GS-CAT001","GS-CAT002","GS-CAT003","GS-CAT004","GS-CAT005","GS-CAT006"],
        MenuOwnership: {
          OwnershipType: "GHOST-SIGNATURE-MENU",
          ProfitCenterID: "RJ06BHL-PC001",
        },
        MenuType: {
          FoodType: "VEG",
          MenuAccreditions: ["NUTRITION"],
        },
        MenuVisibilityStatus: true,
        Illustration: {},
      },
      {
        ID: "RJ06BHL-PC001-M02",
        Name: "CONTINENTAL TOUR",
        Description: "Plethora of continental items.",
        ListedCollectionType: "MULTIPLE-FOOD-CATEGORIES",
        Contents: ["GS-CAT007","GS-CAT008","GS-CAT009","GS-CAT010","GS-CAT013","GS-CAT014","GS-CAT017","GS-CAT018",],
        MenuOwnership: {
          OwnershipType: "GHOST-SIGNATURE-MENU",
          ProfitCenterID: "RJ06BHL-PC001",
        },
        MenuType: {
          FoodType: "VEG",
          MenuAccreditions: ["DELICIOUS"],
        },
        MenuVisibilityStatus: true,
        Illustration: {},
      },
      {
        ID: "RJ06BHL-PC001-M03",
        Name: "QUICK SNACKS",
        Description: "Plethora of snacks and chinese items.",
        ListedCollectionType: "MULTIPLE-FOOD-CATEGORIES",
        Contents: ["GS-CAT011","GS-CAT012","GS-CAT015","GS-CAT016",],
        MenuOwnership: {
          OwnershipType: "GHOST-SIGNATURE-MENU",
          ProfitCenterID: "RJ06BHL-PC001",
        },
        MenuType: {
          FoodType: "VEG",
          MenuAccreditions: ["FAST-FOOD"],
        },
        MenuVisibilityStatus: true,
        Illustration: {},
      },
      {
        ID: "RJ06BHL-PC001-M04",
        Name: "DANGER DRINKS",
        Description: "Plethora of drinks.",
        ListedCollectionType: "MULTIPLE-FOOD-CATEGORIES",
        Contents: ["GS-CAT019","GS-CAT020","GS-CAT021",],
        MenuOwnership: {
          OwnershipType: "GHOST-SIGNATURE-MENU",
          ProfitCenterID: "RJ06BHL-PC001",
        },
        MenuType: {
          FoodType: "DRINKS",
          MenuAccreditions: ["DRINKS"],
        },
        MenuVisibilityStatus: true,
        Illustration: {},
      },
      {
        ID: "RJ20KOT-PC001-M01",
        Name: "MAIN-COURSE MEALS",
        Description: "Plethora of main-course items.",
        ListedCollectionType: "MULTIPLE-FOOD-CATEGORIES",
        Contents: ["GS-CAT001","GS-CAT002","GS-CAT003","GS-CAT005","GS-CAT006"],
        MenuOwnership: {
          OwnershipType: "GHOST-SIGNATURE-MENU",
          ProfitCenterID: "RJ20KOT-PC001",
        },
        MenuType: {
          FoodType: "VEG",
          MenuAccreditions: ["NUTRITION"],
        },
        MenuVisibilityStatus: true,
        Illustration: {},
      },
      {
        ID: "RJ20KOT-PC001-M02",
        Name: "CONTINENTAL TOUR",
        Description: "Plethora of continental items.",
        ListedCollectionType: "MULTIPLE-FOOD-CATEGORIES",
        Contents: ["GS-CAT007","GS-CAT008","GS-CAT009","GS-CAT010","GS-CAT013","GS-CAT014"],
        MenuOwnership: {
          OwnershipType: "GHOST-SIGNATURE-MENU",
          ProfitCenterID: "RJ20KOT-PC001",
        },
        MenuType: {
          FoodType: "VEG",
          MenuAccreditions: ["DELICIOUS"],
        },
        MenuVisibilityStatus: true,
        Illustration: {},
      },
      {
        ID: "RJ20KOT-PC001-M03",
        Name: "QUICK SNACKS",
        Description: "Plethora of snacks and chinese items.",
        ListedCollectionType: "MULTIPLE-FOOD-CATEGORIES",
        Contents: ["GS-CAT011","GS-CAT012","GS-CAT015","GS-CAT016",],
        MenuOwnership: {
          OwnershipType: "GHOST-SIGNATURE-MENU",
          ProfitCenterID: "RJ20KOT-PC001",
        },
        MenuType: {
          FoodType: "VEG",
          MenuAccreditions: ["FAST-FOOD"],
        },
        MenuVisibilityStatus: false,
        Illustration: {},
      },
      {
        ID: "RJ20KOT-PC001-M04",
        Name: "DANGER DRINKS",
        Description: "Plethora of drinks.",
        ListedCollectionType: "MULTIPLE-FOOD-CATEGORIES",
        Contents: ["GS-CAT019","GS-CAT020","GS-CAT021",],
        MenuOwnership: {
          OwnershipType: "GHOST-SIGNATURE-MENU",
          ProfitCenterID: "RJ20KOT-PC001",
        },
        MenuType: {
          FoodType: "DRINKS",
          MenuAccreditions: ["DRINKS"],
        },
        MenuVisibilityStatus: true,
        Illustration: {},
      },
    ];
    await MenuCollection.insertMany(menus);
    console.log("menus Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

menu_seed();

*/}