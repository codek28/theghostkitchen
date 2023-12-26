const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");

// event benefits are not updated correctly
// event objects menu  not updated correctly

// super discount
{/*
async function super_discount_seed() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const superdisountscollection = client
      .db("test")
      .collection("discount.superdiscounts");
    let superdiscountobj = [
      {
        Code: "SUPERDELIVERY",
        DiscountType: "DELIVERY-CUT", // Includes - Delivery-Cut/Side-Quest-Coupon
        Description: "Free delivery on orders above 250",
        DiscountApplicability: {
          ApplicabilityComponent: "DELIVERY-CHARGE", // Applicable to CartAmount/DeliveryCharge/etc.
          MaxDiscountedAmount: null,
          MinimumOrderValue: 250,
        },
        Percentage: 100,
        DiscountActive: true,
      },
      {
        Code: "FREE-MOJITO-SHOT",
        DiscountType: "SIDE-QUEST-COUPON", // Includes - Delivery-Cut/Side-Quest-Coupon
        Description: "Free Mojito shot on check-in",
        DiscountApplicability: {
          ApplicabilityComponent: "TOTAL-BILL", // Applicable to CartAmount/DeliveryCharge/etc.
          MaxDiscountedAmount: 70,
          MinimumOrderValue: 1,
        },
        Percentage: 100,
        DiscountActive: true,
      },
      {
        Code: "FREE-FRITTER-PLATE",
        DiscountType: "SIDE-QUEST-COUPON", // Includes - Delivery-Cut/Side-Quest-Coupon
        Description: "Free Fritter plate on check-in",
        DiscountApplicability: {
          ApplicabilityComponent: "TOTAL-BILL", // Applicable to CartAmount/DeliveryCharge/etc.
          MaxDiscountedAmount: 80,
          MinimumOrderValue: 1,
        },
        Percentage: 100,
        DiscountActive: true,
      },
    ];
    await superdisountscollection.insertMany(superdiscountobj);
    console.log("super discounts Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

super_discount_seed();
*/}

// event benefits schema
{/*
async function event_benefits_seed() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const eventbenefitscollection = client
      .db("test")
      .collection("event.benefits");
    let eventbenefitsobj = [
      {
        EventID: "RJ06BHL-EV001",
        EventSuperCoupons: {
          CouponProvided: {
            CouponID: "FREE-MOJITO-SHOT",
            CouponAmount: 1,
          },
          CouponProvided: {
            CouponID: "FREE-FRITTER-PLATE",
            CouponAmount: 1,
          },
        },
        CheckInPointsProvided: "RWDPT-TRN-EVT-002",
      },
    ];
    await eventbenefitscollection.insertMany(eventbenefitsobj);
    console.log("event benefits Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

event_benefits_seed();
*/}

// event category
{/*
async function event_category() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const eventcatcollection = client.db("test").collection("eventcategories");
    let eventcatobj = [
      {
        ID: "RJ06BHL-EV001-CAT001",
        Name: "MOJITO",
        Description: "",
        Contents: [],
        CategoryOwnership: {
          OwnershipType: "EVENT-FOOD-CATEGORY",
          MerchantID: "",
        },
        SubClassification: {},
        CategoryType: {
          FoodType: "DRINKS",
          CategoryAccreditions: ["DRINKS", "BEVERAGES"],
          Instructions: "",
        },
        ServingStatus: true,
        CategoryKeywords: ["MOJITO", "SWEET"],
        Illustration: {},
      },
      {
        ID: "RJ06BHL-EV001-CAT002",
        Name: "FRITTERS",
        Description: "",
        Contents: [],
        CategoryOwnership: {
          OwnershipType: "EVENT-FOOD-CATEGORY",
          MerchantID: "",
        },
        SubClassification: {},
        CategoryType: {
          FoodType: "VEG",
          CategoryAccreditions: ["SNACKS"],
          Instructions: "",
        },
        ServingStatus: true,
        CategoryKeywords: ["SNACKS", "FOOD", "FRITTERS"],
        Illustration: {},
      },
    ];
    await eventcatcollection.insertMany(eventcatobj);
    console.log("event category Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

event_category();
*/}

// event menu
{/*
async function event_menu() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const eventmenucollection = client.db("test").collection("eventmenus");
    let eventmenuobj = [
      {
        ID: "RJ06BHL-EV001-M01",
        Name: "MOJITO MADNESS",
        Description: "",
        ListedCollectionType: "SINGLE-FOOD-CATEGORY",
        Contents: ["RJ06BHL-EV001-CAT001"],
        MenuOwnership: {
          OwnershipType: "EVENT-MENU",
          EventID: "RJ06BHL-EV001",
        },
        MenuType: {
          FoodType: "DRINKS",
          MenuAccreditions: ["DRINKS"],
        },
        MenuVisibilityStatus: true,
        Illustration: {},
      },
      {
        ID: "RJ06BHL-EV001-M02",
        Name: "FRITTERS FREAK",
        Description: "",
        ListedCollectionType: "SINGLE-FOOD-CATEGORY",
        Contents: ["RJ06BHL-EV001-CAT002"],
        MenuOwnership: {
          OwnershipType: "EVENT-MENU",
          EventID: "RJ06BHL-EV001",
        },
        MenuType: {
          FoodType: "VEG",
          MenuAccreditions: ["SNACKS"],
        },
        MenuVisibilityStatus: true,
        Illustration: {},
      },
    ];
    await eventmenucollection.insertMany(eventmenuobj);
    console.log("event menu Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

event_menu();
*/}

// event product
{/*
async function event_products() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const eventprodcollection = client.db("test").collection("eventproducts");
    let eventprodobj = [
      // mojito
      {
        ID: "EVNTPRD000001",
        Name: "RED MOJITO",
        Description: "",
        CategoryID: "RJ06BHL-EV001-CAT001",
        FoodCategory: {
          FoodType: "DRINKS",
          FoodAccredition: ["SOFT-DRINKS"],
          FoodInstructions: "",
        },
        ProviderBasis: ["CHECK-IN"],
        ProductCustomization: {},
        PriceOriginal: 55,
        PreparationTime: 5, // preparation time in minutes
        ProductVisibilityStatus: true,
        ProductKeywords: ["COLD-DRINK", "SOFT-DRINK", "SODA"],
        ProductAdditionalDetails: {
          NutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "EVNTPRD000002",
        Name: "BLUE MOJITO",
        Description: "",
        CategoryID: "RJ06BHL-EV001-CAT001",
        FoodCategory: {
          FoodType: "DRINKS",
          FoodAccredition: ["SOFT-DRINKS"],
          FoodInstructions: "",
        },
        ProviderBasis: ["CHECK-IN"],
        ProductCustomization: {},
        PriceOriginal: 55,
        PreparationTime: 5, // preparation time in minutes
        ProductVisibilityStatus: true,
        ProductKeywords: ["COLD-DRINK", "SOFT-DRINK", "SODA"],
        ProductAdditionalDetails: {
          NutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "EVNTPRD000003",
        Name: "GREEN MOJITO",
        Description: "",
        CategoryID: "RJ06BHL-EV001-CAT001",
        FoodCategory: {
          FoodType: "DRINKS",
          FoodAccredition: ["SOFT-DRINKS"],
          FoodInstructions: "",
        },
        ProviderBasis: ["CHECK-IN"],
        ProductCustomization: {},
        PriceOriginal: 55,
        PreparationTime: 5, // preparation time in minutes
        ProductVisibilityStatus: true,
        ProductKeywords: ["COLD-DRINK", "SOFT-DRINK", "SODA"],
        ProductAdditionalDetails: {
          NutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "EVNTPRD000004",
        Name: "YELLOW MOJITO",
        Description: "",
        CategoryID: "RJ06BHL-EV001-CAT001",
        FoodCategory: {
          FoodType: "DRINKS",
          FoodAccredition: ["SOFT-DRINKS"],
          FoodInstructions: "",
        },
        ProviderBasis: ["CHECK-IN"],
        ProductCustomization: {},
        PriceOriginal: 55,
        PreparationTime: 5, // preparation time in minutes
        ProductVisibilityStatus: true,
        ProductKeywords: ["COLD-DRINK", "SOFT-DRINK", "SODA"],
        ProductAdditionalDetails: {
          NutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "EVNTPRD000005",
        Name: "VEG FRITTERS",
        Description: "",
        CategoryID: "RJ06BHL-EV001-CAT002",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["SNACKS"],
          FoodInstructions: "",
        },
        ProviderBasis: ["CHECK-IN"],
        ProductCustomization: {},
        PriceOriginal: 65,
        PreparationTime: 10, // preparation time in minutes
        ProductVisibilityStatus: true,
        ProductKeywords: ["FRITTERS", "VEG"],
        ProductAdditionalDetails: {
          NutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "EVNTPRD000006",
        Name: "POTATO FRITTERS",
        Description: "",
        CategoryID: "RJ06BHL-EV001-CAT002",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["SNACKS"],
          FoodInstructions: "",
        },
        ProviderBasis: ["CHECK-IN"],
        ProductCustomization: {},
        PriceOriginal: 65,
        PreparationTime: 10, // preparation time in minutes
        ProductVisibilityStatus: true,
        ProductKeywords: ["FRITTERS", "POTATO"],
        ProductAdditionalDetails: {
          NutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
    ];
    await eventprodcollection.insertMany(eventprodobj);
    console.log("event products Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

event_products();
*/}