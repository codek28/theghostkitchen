const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");

// Category seed - updated once

{
  /*

async function category_seed() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const categoriesCollection = client.db("test").collection("foodcategories");
    let categories = [
      {
        ID: "GS-CAT007",
        Name: "PASTA",
        Description: "",
        Contents: [
          "FOODPRD000045",
          "FOODPRD000046",
          "FOODPRD000047",
          "FOODPRD000048",
          "FOODPRD000049",
        ],
        CategoryOwnership: {
          OwnershipType: "GHOST-SIGNATURE",
          MerchantID: "",
        },
        SubClassification: {},
        CategoryType: {
          FoodType: "VEG",
          CategoryAccreditions: ["CONTINENTAL"],
          Instructions: "Eat warm for best experience",
        },
        CategoryVisibilityStatus: true,
        CategoryKeywords: ["PASTA", "ITALIAN", "CONTINENTAL"],
        Illustration: {},
      },
      {
        ID: "GS-CAT008",
        Name: "PIZZA",
        Description: "",
        Contents: [
          "FOODPRD000050",
          "FOODPRD000051",
          "FOODPRD000052",
          "FOODPRD000053",
          "FOODPRD000054",
          "FOODPRD000055",
          "FOODPRD000056",
          "FOODPRD000057",
        ],
        CategoryOwnership: {
          OwnershipType: "GHOST-SIGNATURE",
          MerchantID: "",
        },
        SubClassification: {},
        CategoryType: {
          FoodType: "VEG",
          CategoryAccreditions: ["CONTINENTAL"],
          Instructions: "Eat warm for best experience",
        },
        CategoryVisibilityStatus: true,
        CategoryKeywords: ["PIZZA", "ITALIAN", "CONTINENTAL"],
        Illustration: {},
      },
      {
        ID: "GS-CAT009",
        Name: "CHINESE",
        Description: "",
        Contents: [
          "FOODPRD000058",
          "FOODPRD000059",
          "FOODPRD000060",
          "FOODPRD000061",
          "FOODPRD000062",
          "FOODPRD000063",
          "FOODPRD000064",
          "FOODPRD000065",
        ],
        CategoryOwnership: {
          OwnershipType: "GHOST-SIGNATURE",
          MerchantID: "",
        },
        SubClassification: {},
        CategoryType: {
          FoodType: "VEG",
          CategoryAccreditions: ["CONTINENTAL"],
          Instructions: "Eat warm for best experience",
        },
        CategoryVisibilityStatus: true,
        CategoryKeywords: [
          "VEGETABLE",
          "SABJI",
          "GRAVY",
          "THAALI",
          "MAIN-COURSE",
        ],
        Illustration: {},
      },
      {
        ID: "GS-CAT010",
        Name: "WRAPS",
        Description: "",
        Contents: [
          "FOODPRD000066",
          "FOODPRD000067",
          "FOODPRD000068",
          "FOODPRD000069",
          "FOODPRD000070",
          "FOODPRD000071",
          "FOODPRD000072",
        ],
        CategoryOwnership: {
          OwnershipType: "GHOST-SIGNATURE",
          MerchantID: "",
        },
        SubClassification: {},
        CategoryType: {
          FoodType: "VEG",
          CategoryAccreditions: ["CONTINENTAL"],
          Instructions: "Eat warm for best experience",
        },
        CategoryVisibilityStatus: true,
        CategoryKeywords: ["TACOS", "ROTI", "WRAPS", "ROLLS"],
        Illustration: {},
      },
      {
        ID: "GS-CAT011",
        Name: "CHAKHNA",
        Description: "",
        Contents: ["FOODPRD000073", "FOODPRD000074", "FOODPRD000075"],
        CategoryOwnership: {
          OwnershipType: "GHOST-SIGNATURE",
          MerchantID: "",
        },
        SubClassification: {},
        CategoryType: {
          FoodType: "VEG",
          CategoryAccreditions: ["SNACKS"],
          Instructions: "",
        },
        CategoryVisibilityStatus: true,
        CategoryKeywords: ["SIDES", "EXTRAS", "SNACKS"],
        Illustration: {},
      },
    ];
    await categoriesCollection.insertMany(categories);
    console.log("food categories 2 Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

category_seed();

*/
}

// product seed - updated once

{/*
async function products_seed() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const FoodProductCollection = client.db("test").collection("foodproducts");
    let products = [
      {
        ID: "FOODPRD000045",
        Name: "BROWN SAUCE PASTA",
        Description: "",
        CategoryID: "GS-CAT007",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["TASTY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 149,
        PreparationTime: 30,
        ProductVisibilityStatus: true,
        ProductKeywords: ["PASTA", "ITALIAN", "SAUCE", "BROWN"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000046",
        Name: "RED SAUCE PASTA",
        Description: "",
        CategoryID: "GS-CAT007",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["TASTY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 149,
        PreparationTime: 30,
        ProductVisibilityStatus: true,
        ProductKeywords: ["PASTA", "ITALIAN", "SAUCE", "RED", "CHILLI"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000047",
        Name: "WHITE SAUCE PASTA",
        Description: "",
        CategoryID: "GS-CAT007",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["TASTY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 159,
        PreparationTime: 30,
        ProductVisibilityStatus: true,
        ProductKeywords: ["PASTA", "ITALIAN", "SAUCE", "ALFREDO", "WHITE"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000048",
        Name: "MAC & CHEESE PASTA",
        Description: "",
        CategoryID: "GS-CAT007",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["TASTY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 169,
        PreparationTime: 30,
        ProductVisibilityStatus: true,
        ProductKeywords: ["PASTA", "ITALIAN", "SAUCE", "CHEESE"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000049",
        Name: "LASAGNA PASTA",
        Description: "",
        CategoryID: "GS-CAT007",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["TASTY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 329,
        PreparationTime: 40,
        ProductVisibilityStatus: true,
        ProductKeywords: ["PASTA", "ITALIAN", "SAUCE", "LASAGNA"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000050",
        Name: "MARGHARITA PIZZA",
        Description: "",
        CategoryID: "GS-CAT008",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["TASTY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          Variant: [
            {
              VariantSubject: "SIZE",
              VariantConfig: [
                {
                  ProductDefault: true,
                  VariantName: "8-INCH",
                  VariantPrice: 159,
                },
                {
                  ProductDefault: false,
                  VariantName: "12-INCH",
                  VariantPrice: 219,
                },
              ],
            },
          ],
        },
        PriceOriginal: 159,
        PreparationTime: 45,
        ProductVisibilityStatus: true,
        ProductKeywords: ["PIZZA", "ITALIAN", "CHEESE"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000051",
        Name: "CHEESE-CORN PIZZA",
        Description: "",
        CategoryID: "GS-CAT008",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["TASTY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          Variant: [
            {
              VariantSubject: "SIZE",
              VariantConfig: [
                {
                  ProductDefault: true,
                  VariantName: "8-INCH",
                  VariantPrice: 169,
                },
                {
                  ProductDefault: false,
                  VariantName: "12-INCH",
                  VariantPrice: 239,
                },
              ],
            },
          ],
        },
        PriceOriginal: 169,
        PreparationTime: 45,
        ProductVisibilityStatus: true,
        ProductKeywords: ["PIZZA", "ITALIAN", "CHEESE"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000052",
        Name: "MUSHROOM PIZZA",
        Description: "",
        CategoryID: "GS-CAT008",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["TASTY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          Variant: [
            {
              VariantSubject: "SIZE",
              VariantConfig: [
                {
                  ProductDefault: true,
                  VariantName: "8-INCH",
                  VariantPrice: 179,
                },
                {
                  ProductDefault: false,
                  VariantName: "12-INCH",
                  VariantPrice: 279,
                },
              ],
            },
          ],
        },
        PriceOriginal: 179,
        PreparationTime: 45,
        ProductVisibilityStatus: true,
        ProductKeywords: ["PIZZA", "ITALIAN", "CHEESE"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000053",
        Name: "INDIAN TADKA PIZZA",
        Description: "",
        CategoryID: "GS-CAT008",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["TASTY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          Variant: [
            {
              VariantSubject: "SIZE",
              VariantConfig: [
                {
                  ProductDefault: true,
                  VariantName: "8-INCH",
                  VariantPrice: 189,
                },
                {
                  ProductDefault: false,
                  VariantName: "12-INCH",
                  VariantPrice: 249,
                },
              ],
            },
          ],
        },
        PriceOriginal: 189,
        PreparationTime: 45,
        ProductVisibilityStatus: true,
        ProductKeywords: ["PIZZA", "ITALIAN", "CHEESE"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000054",
        Name: "FARM-HOUSE PIZZA",
        Description: "",
        CategoryID: "GS-CAT008",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["TASTY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          Variant: [
            {
              VariantSubject: "SIZE",
              VariantConfig: [
                {
                  ProductDefault: true,
                  VariantName: "8-INCH",
                  VariantPrice: 189,
                },
                {
                  ProductDefault: false,
                  VariantName: "12-INCH",
                  VariantPrice: 259,
                },
              ],
            },
          ],
        },
        PriceOriginal: 189,
        PreparationTime: 45,
        ProductVisibilityStatus: true,
        ProductKeywords: ["PIZZA", "ITALIAN", "CHEESE"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000055",
        Name: "CHEESE BURST PIZZA",
        Description: "",
        CategoryID: "GS-CAT008",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["TASTY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          Variant: [
            {
              VariantSubject: "SIZE",
              VariantConfig: [
                {
                  ProductDefault: true,
                  VariantName: "8-INCH",
                  VariantPrice: 199,
                },
                {
                  ProductDefault: false,
                  VariantName: "12-INCH",
                  VariantPrice: 269,
                },
              ],
            },
          ],
        },
        PriceOriginal: 199,
        PreparationTime: 45,
        ProductVisibilityStatus: true,
        ProductKeywords: ["PIZZA", "ITALIAN", "CHEESE"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000056",
        Name: "PANEER TANDOORI PIZZA",
        Description: "",
        CategoryID: "GS-CAT008",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["TASTY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          Variant: [
            {
              VariantSubject: "SIZE",
              VariantConfig: [
                {
                  ProductDefault: true,
                  VariantName: "8-INCH",
                  VariantPrice: 199,
                },
                {
                  ProductDefault: false,
                  VariantName: "12-INCH",
                  VariantPrice: 299,
                },
              ],
            },
          ],
        },
        PriceOriginal: 199,
        PreparationTime: 45,
        ProductVisibilityStatus: true,
        ProductKeywords: ["PIZZA", "ITALIAN", "CHEESE"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000057",
        Name: "GHOST SPECIAL PIZZA",
        Description: "",
        CategoryID: "GS-CAT008",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["TASTY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          Variant: [
            {
              VariantSubject: "SIZE",
              VariantConfig: [
                {
                  ProductDefault: true,
                  VariantName: "8-INCH",
                  VariantPrice: 219,
                },
                {
                  ProductDefault: false,
                  VariantName: "12-INCH",
                  VariantPrice: 329,
                },
              ],
            },
          ],
        },
        PriceOriginal: 219,
        PreparationTime: 45,
        ProductVisibilityStatus: true,
        ProductKeywords: ["PIZZA", "ITALIAN", "CHEESE"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000058",
        Name: "CHOWMEIN",
        Description: "",
        CategoryID: "GS-CAT009",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["TASTY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 89,
        PreparationTime: 30,
        ProductVisibilityStatus: true,
        ProductKeywords: ["CONTINENTAL", "CHINESE"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000059",
        Name: "MANCHURIAN",
        Description: "",
        CategoryID: "GS-CAT009",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["TASTY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 99,
        PreparationTime: 30,
        ProductVisibilityStatus: true,
        ProductKeywords: ["CONTINENTAL", "CHINESE"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000060",
        Name: "CHINESE BHEL",
        Description: "",
        CategoryID: "GS-CAT009",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["TASTY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 99,
        PreparationTime: 30,
        ProductVisibilityStatus: true,
        ProductKeywords: ["CONTINENTAL", "CHINESE"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000061",
        Name: "FRIED RICE",
        Description: "",
        CategoryID: "GS-CAT009",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["TASTY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 119,
        PreparationTime: 30,
        ProductVisibilityStatus: true,
        ProductKeywords: ["CONTINENTAL", "CHINESE"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000062",
        Name: "SHEZWAN NOODLES",
        Description: "",
        CategoryID: "GS-CAT009",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["TASTY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 129,
        PreparationTime: 30,
        ProductVisibilityStatus: true,
        ProductKeywords: ["CONTINENTAL", "CHINESE"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000063",
        Name: "HAKKA/CHILLY GARLIC",
        Description: "",
        CategoryID: "GS-CAT009",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["TASTY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 139,
        PreparationTime: 30,
        ProductVisibilityStatus: true,
        ProductKeywords: ["CONTINENTAL", "CHINESE"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000064",
        Name: "RICE MANCHURIAN",
        Description: "",
        CategoryID: "GS-CAT009",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["TASTY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 149,
        PreparationTime: 30,
        ProductVisibilityStatus: true,
        ProductKeywords: ["CONTINENTAL", "CHINESE"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000065",
        Name: "CHILLY PANEER",
        Description: "",
        CategoryID: "GS-CAT009",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["TASTY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 159,
        PreparationTime: 30,
        ProductVisibilityStatus: true,
        ProductKeywords: ["CONTINENTAL", "CHINESE"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000066",
        Name: "VEGETABLE WRAP",
        Description: "",
        CategoryID: "GS-CAT010",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["TASTY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          AddOn: [
            {
              AddOnName: "MAYO DIP",
              AddOnPrice: 20,
            },
            {
              AddOnName: "ORANGE DIP",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 99,
        PreparationTime: 35,
        ProductVisibilityStatus: true,
        ProductKeywords: ["CONTINENTAL", "TACOS", "MEXICAN", "WRAP", "ROLLS"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000067",
        Name: "VEGETABLE MAYONNAISE WRAP",
        Description: "",
        CategoryID: "GS-CAT010",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["TASTY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          AddOn: [
            {
              AddOnName: "MAYO DIP",
              AddOnPrice: 20,
            },
            {
              AddOnName: "ORANGE DIP",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 109,
        PreparationTime: 35,
        ProductVisibilityStatus: true,
        ProductKeywords: ["CONTINENTAL", "TACOS", "MEXICAN", "WRAP", "ROLLS"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000068",
        Name: "CHEESE AND CREAMY WRAP",
        Description: "",
        CategoryID: "GS-CAT010",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["TASTY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          AddOn: [
            {
              AddOnName: "MAYO DIP",
              AddOnPrice: 20,
            },
            {
              AddOnName: "ORANGE DIP",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 119,
        PreparationTime: 35,
        ProductVisibilityStatus: true,
        ProductKeywords: ["CONTINENTAL", "TACOS", "MEXICAN", "WRAP", "ROLLS"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000069",
        Name: "CHEESE CORN WRAP",
        Description: "",
        CategoryID: "GS-CAT010",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["TASTY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          AddOn: [
            {
              AddOnName: "MAYO DIP",
              AddOnPrice: 20,
            },
            {
              AddOnName: "ORANGE DIP",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 129,
        PreparationTime: 35,
        ProductVisibilityStatus: true,
        ProductKeywords: ["CONTINENTAL", "TACOS", "MEXICAN", "WRAP", "ROLLS"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000070",
        Name: "TANDOORI PANEER WRAP",
        Description: "",
        CategoryID: "GS-CAT010",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["TASTY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          AddOn: [
            {
              AddOnName: "MAYO DIP",
              AddOnPrice: 20,
            },
            {
              AddOnName: "ORANGE DIP",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 149,
        PreparationTime: 35,
        ProductVisibilityStatus: true,
        ProductKeywords: ["CONTINENTAL", "TACOS", "MEXICAN", "WRAP", "ROLLS"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000071",
        Name: "PANEER SHAWRMA WRAP",
        Description: "",
        CategoryID: "GS-CAT010",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["TASTY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          AddOn: [
            {
              AddOnName: "MAYO DIP",
              AddOnPrice: 20,
            },
            {
              AddOnName: "ORANGE DIP",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 169,
        PreparationTime: 35,
        ProductVisibilityStatus: true,
        ProductKeywords: ["CONTINENTAL", "TACOS", "MEXICAN", "WRAP", "ROLLS"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000072",
        Name: "GHOST SPECIAL CREPES",
        Description: "",
        CategoryID: "GS-CAT010",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["TASTY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          AddOn: [
            {
              AddOnName: "MAYO DIP",
              AddOnPrice: 20,
            },
            {
              AddOnName: "ORANGE DIP",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 189,
        PreparationTime: 35,
        ProductVisibilityStatus: true,
        ProductKeywords: ["CONTINENTAL", "TACOS", "MEXICAN", "WRAP", "ROLLS"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000073",
        Name: "PEANUT MASALA",
        Description: "",
        CategoryID: "GS-CAT011",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["TASTY"],
          FoodInstructions: "",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 89,
        PreparationTime: 15,
        ProductVisibilityStatus: true,
        ProductKeywords: ["SIDES", "CHAKHNA", "SNACKS"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000074",
        Name: "CRISPY CORN",
        Description: "",
        CategoryID: "GS-CAT011",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["TASTY"],
          FoodInstructions: "",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 109,
        PreparationTime: 15,
        ProductVisibilityStatus: true,
        ProductKeywords: ["SIDES", "CHAKHNA", "SNACKS"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000075",
        Name: "MUSHROOM TIKKA",
        Description: "",
        CategoryID: "GS-CAT011",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["TASTY"],
          FoodInstructions: "",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 129,
        PreparationTime: 15,
        ProductVisibilityStatus: true,
        ProductKeywords: ["SIDES", "CHAKHNA", "SNACKS"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
    ];
    await FoodProductCollection.insertMany(products);
    console.log("food products 2 Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

products_seed();
*/}