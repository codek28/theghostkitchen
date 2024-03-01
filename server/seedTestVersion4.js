const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");

// CATEGORY SEED

{
  /*

async function category_seed() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const categoryCollection = client.db("test").collection("foodcategories");
    let categories = [
      {
        ID: "GS-CAT012",
        Name: "SIDES",
        Description: "",
        Contents: [
          "FOODPRD000076",
          "FOODPRD000077", // POTATO WEDGES & CHEESE BALLS
        ],
        CategoryOwnership: {
          OwnershipType: "GHOST-SIGNATURE",
          MerchantID: "",
        },
        SubClassification: {},
        CategoryType: {
          FoodType: "VEG",
          CategoryAccreditions: ["SNACKS"],
          Instructions: "Eat warm for best experience",
        },
        CategoryVisibilityStatus: true,
        CategoryKeywords: ["POTATO", "CHEESE"],
        Illustration: {},
      },
      {
        ID: "GS-CAT013",
        Name: "FRIES",
        Description: "",
        Contents: [
          "FOODPRD000078",
          "FOODPRD000079",
          "FOODPRD000080",
          "FOODPRD000081",
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
        CategoryKeywords: ["POTATO", "CHEESE"],
        Illustration: {},
      },
      {
        ID: "GS-CAT014",
        Name: "GARLIC BREAD",
        Description: "",
        Contents: [
          "FOODPRD000082",
          "FOODPRD000083",
          "FOODPRD000084",
          "FOODPRD000085",
          "FOODPRD000086",
          "FOODPRD000087",
        ],
        CategoryOwnership: {
          OwnershipType: "GHOST-SIGNATURE",
          MerchantID: "",
        },
        SubClassification: {
          Basis: [
            {
              Superclass: "BREAD LOAF",
              ProductsIncluded: [
                "FOODPRD000082",
                "FOODPRD000083",
                "FOODPRD000084",
              ],
              Availibility: true,
            },
            {
              Superclass: "CIRCULAR BREAD",
              ProductsIncluded: [
                "FOODPRD000085",
                "FOODPRD0000086",
                "FOODPRD000087",
              ],
              Availibility: true,
            },
          ],
        },
        CategoryType: {
          FoodType: "VEG",
          CategoryAccreditions: ["CONTINENTAL"],
          Instructions: "Eat warm for best experience",
        },
        CategoryVisibilityStatus: true,
        CategoryKeywords: ["CHEESE", "GARLIC", "BREAD", "STUFFED"],
        Illustration: {},
      },
      {
        ID: "GS-CAT015",
        Name: "MAGGI",
        Description: "",
        Contents: [
          "FOODPRD000088",
          "FOODPRD000089",
          "FOODPRD000090",
          "FOODPRD000091",
          "FOODPRD000092",
        ],
        CategoryOwnership: {
          OwnershipType: "GHOST-SIGNATURE",
          MerchantID: "",
        },
        SubClassification: {},
        CategoryType: {
          FoodType: "VEG",
          CategoryAccreditions: ["SNACKS"],
          Instructions: "Eat warm for best experience",
        },
        CategoryVisibilityStatus: true,
        CategoryKeywords: ["VEG", "MAGGI", "BOILED"],
        Illustration: {},
      },
      {
        ID: "GS-CAT016",
        Name: "MOMOS",
        Description: "",
        Contents: [
          "FOODPRD000093",
          "FOODPRD000094",
          "FOODPRD000095",
          "FOODPRD000096",
          "FOODPRD000097",
          "FOODPRD000098",
        ],
        CategoryOwnership: {
          OwnershipType: "GHOST-SIGNATURE",
          MerchantID: "",
        },
        SubClassification: {
          Basis: [
            {
              Superclass: "STEAM",
              ProductsIncluded: [
                "FOODPRD000093",
                "FOODPRD000094",
                "FOODPRD000095",
              ],
              Availibility: true,
            },
            {
              Superclass: "FRIED",
              ProductsIncluded: [
                "FOODPRD000096",
                "FOODPRD0000097",
                "FOODPRD000098",
              ],
              Availibility: true,
            },
          ],
        },
        CategoryType: {
          FoodType: "VEG",
          CategoryAccreditions: ["SNACKS"],
          Instructions: "Eat warm for best experience",
        },
        CategoryVisibilityStatus: true,
        CategoryKeywords: ["VEG", "MOMOS", "BOILED"],
        Illustration: {},
      },
      {
        ID: "GS-CAT017",
        Name: "SANDWICH",
        Description: "",
        Contents: [
          "FOODPRD000099",
          "FOODPRD000100",
          "FOODPRD000101",
          "FOODPRD000102",
          "FOODPRD000103",
          "FOODPRD000104",
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
        CategoryKeywords: ["BREAD", "VEG", "SANDWICH"],
        Illustration: {},
      },
      {
        ID: "GS-CAT018",
        Name: "BURGER",
        Description: "",
        Contents: [
          "FOODPRD000105",
          "FOODPRD000106",
          "FOODPRD000107",
          "FOODPRD000108",
          "FOODPRD000109",
          "FOODPRD000110",
          "FOODPRD000111",
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
        CategoryKeywords: ["BUNS", "VEG", "BURGER"],
        Illustration: {},
      },
      {
        ID: "GS-CAT019",
        Name: "SOFT-DRINKS",
        Description: "",
        Contents: [
          "FOODPRD000112",
          "FOODPRD000113",
          "FOODPRD000114",
          "FOODPRD000115",
          "FOODPRD000116",
          "FOODPRD000117",
        ],
        CategoryOwnership: {
          OwnershipType: "GHOST-SIGNATURE",
          MerchantID: "",
        },
        SubClassification: {
          Basis: [
            {
              Superclass: "350-ML",
              ProductsIncluded: [
                "FOODPRD000112",
                "FOODPRD000113",
                "FOODPRD000114",
              ],
              Availibility: true,
            },
            {
              Superclass: "500-ML",
              ProductsIncluded: [
                "FOODPRD000115",
                "FOODPRD000116",
                "FOODPRD000117",
              ],
              Availibility: true,
            },
          ],
        },
        CategoryType: {
          FoodType: "VEG",
          CategoryAccreditions: ["DRINKS"],
          Instructions: "Drink cold for best experience",
        },
        CategoryVisibilityStatus: true,
        CategoryKeywords: ["SOFT", "COLD", "DRINK"],
        Illustration: {},
      },
      {
        ID: "GS-CAT020",
        Name: "FRUIT-DRINKS",
        Description: "",
        Contents: [
          "FOODPRD000118",
          "FOODPRD000119",
          "FOODPRD000120",
          "FOODPRD000121",
          "FOODPRD000122",
          "FOODPRD000123",
          "FOODPRD000124",
          "FOODPRD000125",
        ],
        CategoryOwnership: {
          OwnershipType: "GHOST-SIGNATURE",
          MerchantID: "",
        },
        SubClassification: {},
        CategoryType: {
          FoodType: "VEG",
          CategoryAccreditions: ["DRINKS"],
          Instructions: "",
        },
        CategoryVisibilityStatus: true,
        CategoryKeywords: ["HEALTHY", "FRUITS", "DRINK"],
        Illustration: {},
      },
      {
        ID: "GS-CAT021",
        Name: "SHAKES",
        Description: "",
        Contents: [
          "FOODPRD000126",
          "FOODPRD000127",
          "FOODPRD000128",
          "FOODPRD000129",
          "FOODPRD000130",
          "FOODPRD000131",
          "FOODPRD000132",
          "FOODPRD000133",
        ],
        CategoryOwnership: {
          OwnershipType: "GHOST-SIGNATURE",
          MerchantID: "",
        },
        SubClassification: {},
        CategoryType: {
          FoodType: "VEG",
          CategoryAccreditions: ["DRINKS"],
          Instructions: "Drink cold for best experience",
        },
        CategoryVisibilityStatus: true,
        CategoryKeywords: ["SWEET", "HEALTHY", "SHAKES", "DRINK"],
        Illustration: {},
      },
    ];
    await categoryCollection.insertMany(categories);
    console.log("food categories 3 Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

category_seed();

*/
}

// SINGLE CATEGORY SEED

{
  /*

async function category_seed() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const categoryCollection = client.db("test").collection("foodcategories");
    let category = [
      {
        ID: "GS-CAT019",
        Name: "SOFT-DRINKS",
        Description: "",
        Contents: [
          "FOODPRD000112",
          "FOODPRD000113",
          "FOODPRD000114",
          "FOODPRD000115",
          "FOODPRD000116",
          "FOODPRD000117",
        ],
        CategoryOwnership: {
          OwnershipType: "GHOST-SIGNATURE",
          MerchantID: "",
        },
        SubClassification: {
          Basis: [
            {
              Superclass: "350-ML",
              ProductsIncluded: [
                "FOODPRD000112",
                "FOODPRD000113",
                "FOODPRD000114",
              ],
              Availibility: true,
            },
            {
              Superclass: "500-ML",
              ProductsIncluded: [
                "FOODPRD000115",
                "FOODPRD000116",
                "FOODPRD000117",
              ],
              Availibility: true,
            },
          ],
        },
        CategoryType: {
          FoodType: "VEG",
          CategoryAccreditions: ["DRINKS"],
          Instructions: "Drink cold for best experience",
        },
        CategoryVisibilityStatus: true,
        CategoryKeywords: ["SOFT", "COLD", "DRINK"],
        Illustration: {},
      },
    ];
    await categoryCollection.insertMany(category);
    console.log("ONLY food categorY - soft drinks -  Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

category_seed();

*/
}

// SINGLE PRODUCT SEED

{/*

async function single_product_seed() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const productscollection = client.db("test").collection("foodproducts");
    let product = [
      {
        ID: "FOODPRD000017",
        Name: "DAL TADKA",
        Description: "",
        CategoryID: "GS-CAT003",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
          FoodInstructions: "Eat warm for best experience"
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          Variant: [
            {
              VariantSubject: "SIZE",
              VariantConfig: [
                {
                  ProductDefault: true,
                  VariantName: "REGULAR",
                  VariantPrice: 160
                },
                {
                  ProductDefault: false,
                  VariantName: "LARGE",
                  VariantPrice: 210
                }
              ]
            }
          ],
          AddOn: [
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20
            }
          ]
        },
        PriceOriginal: 160,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: [],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {}
        },
        ProductImage: {}
      }
    ];
    await productscollection.insertMany(product);
    console.log("ONLY food product - dal tadka -  Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

single_product_seed();

*/}

// PRODUCTS SEED

{
  /*

async function product_seed() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const productscollection = client.db("test").collection("foodproducts");
    let products = [
      {
        ID: "FOODPRD000076",
        Name: "POTATO WEDGES",
        Description: "",
        CategoryID: "GS-CAT012",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 99,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["POTATO", "CUTS", "WEDGES"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000077",
        Name: "CHEESE BALLS",
        Description: "",
        CategoryID: "GS-CAT012",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 119,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["CHEESE", "BALLS"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000078",
        Name: "CHEESE FRIES",
        Description: "",
        CategoryID: "GS-CAT013",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
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
                  VariantName: "REGULAR FRIES BOX",
                  VariantPrice: 109,
                },
                {
                  ProductDefault: false,
                  VariantName: "FRIES BUCKET",
                  VariantPrice: 179,
                },
              ],
            },
          ],
          AddOn: [
            {
              AddOnName: "MAYO-DIP",
              AddOnPrice: 20,
            },
            {
              AddOnName: "MUSTARD-DIP",
              AddOnPrice: 30,
            },
          ],
        },
        PriceOriginal: 109,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: [],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000079",
        Name: "SALTED FRIES",
        Description: "",
        CategoryID: "GS-CAT013",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
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
                  VariantName: "REGULAR FRIES BOX",
                  VariantPrice: 79,
                },
                {
                  ProductDefault: false,
                  VariantName: "FRIES BUCKET",
                  VariantPrice: 149,
                },
              ],
            },
          ],
          AddOn: [
            {
              AddOnName: "MAYO-DIP",
              AddOnPrice: 20,
            },
            {
              AddOnName: "MUSTARD-DIP",
              AddOnPrice: 30,
            },
          ],
        },
        PriceOriginal: 79,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: [],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000080",
        Name: "PERI PERI FRIES",
        Description: "",
        CategoryID: "GS-CAT013",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
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
                  VariantName: "REGULAR FRIES BOX",
                  VariantPrice: 89,
                },
                {
                  ProductDefault: false,
                  VariantName: "FRIES BUCKET",
                  VariantPrice: 159,
                },
              ],
            },
          ],
          AddOn: [
            {
              AddOnName: "MAYO-DIP",
              AddOnPrice: 20,
            },
            {
              AddOnName: "MUSTARD-DIP",
              AddOnPrice: 30,
            },
          ],
        },
        PriceOriginal: 89,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: [],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000081",
        Name: "MONSTER FINGERS",
        Description: "",
        CategoryID: "GS-CAT013",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
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
                  VariantName: "REGULAR FRIES BOX",
                  VariantPrice: 129,
                },
                {
                  ProductDefault: false,
                  VariantName: "FRIES BUCKET",
                  VariantPrice: 199,
                },
              ],
            },
          ],
          AddOn: [
            {
              AddOnName: "MAYO-DIP",
              AddOnPrice: 20,
            },
            {
              AddOnName: "MUSTARD-DIP",
              AddOnPrice: 30,
            },
          ],
        },
        PriceOriginal: 129,
        PreparationTime: 30,
        ProductVisibilityStatus: true,
        ProductKeywords: [],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000082",
        Name: "CHEESE GARLIC BREAD",
        Description: "",
        CategoryID: "GS-CAT014",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 139,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["CIRCULAR", "GARLIC", "BREAD"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000083",
        Name: "STUFFED GARLIC BREAD",
        Description: "",
        CategoryID: "GS-CAT014",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 149,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["CIRCULAR", "GARLIC", "BREAD"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000084",
        Name: "PUL-APART GARLIC BREAD",
        Description: "",
        CategoryID: "GS-CAT014",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 159,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["CIRCULAR", "GARLIC", "BREAD"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000085",
        Name: "CHEESE GARLIC BREAD",
        Description: "",
        CategoryID: "GS-CAT014",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 149,
        PreparationTime: 30,
        ProductVisibilityStatus: true,
        ProductKeywords: ["CIRCULAR", "GARLIC", "BREAD"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000086",
        Name: "STUFFED GARLIC BREAD",
        Description: "",
        CategoryID: "GS-CAT014",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 159,
        PreparationTime: 30,
        ProductVisibilityStatus: true,
        ProductKeywords: ["CIRCULAR", "GARLIC", "BREAD"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000087",
        Name: "PULL-APART GARLIC BREAD",
        Description: "",
        CategoryID: "GS-CAT014",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 179,
        PreparationTime: 30,
        ProductVisibilityStatus: true,
        ProductKeywords: ["CIRCULAR", "GARLIC", "BREAD"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      // MAGGI
      {
        ID: "FOODPRD000088",
        Name: "MASALA MAGGI",
        Description: "",
        CategoryID: "GS-CAT015",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 69,
        PreparationTime: 20,
        ProductVisibilityStatus: true,
        ProductKeywords: ["LIGHT", "BOILED", "SPICY", "MAGGI"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000089",
        Name: "TADKA MAGGI",
        Description: "",
        CategoryID: "GS-CAT015",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 79,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["LIGHT", "BOILED", "TADKA", "MAGGI"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000090",
        Name: "VEG MAGGI",
        Description: "",
        CategoryID: "GS-CAT015",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 89,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["LIGHT", "BOILED", "VEG", "MAGGI"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000091",
        Name: "CHEESE MAGGI",
        Description: "",
        CategoryID: "GS-CAT015",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 99,
        PreparationTime: 30,
        ProductVisibilityStatus: true,
        ProductKeywords: ["LIGHT", "BOILED", "CHEESE", "MAGGI"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000092",
        Name: "VEG CHEESE MAGGI",
        Description: "",
        CategoryID: "GS-CAT015",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 109,
        PreparationTime: 30,
        ProductVisibilityStatus: true,
        ProductKeywords: ["LIGHT", "BOILED", "VEG", "CHEESE", "MAGGI"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      // MOMOS
      {
        ID: "FOODPRD000093",
        Name: "VEG MOMOS",
        Description: "",
        CategoryID: "GS-CAT016",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 89,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["MOMOS", "BOILED", "VEG", "STEAM"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000094",
        Name: "PANEER MOMOS",
        Description: "",
        CategoryID: "GS-CAT016",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 99,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["MOMOS", "BOILED", "VEG", "STEAM"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000095",
        Name: "VEG CHEESE MOMOS",
        Description: "",
        CategoryID: "GS-CAT016",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 109,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["MOMOS", "BOILED", "VEG", "STEAM"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000096",
        Name: "VEG MOMOS FRIED",
        Description: "",
        CategoryID: "GS-CAT016",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 99,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["MOMOS", "FRIED", "VEG"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000097",
        Name: "PANEER MOMOS FRIED",
        Description: "",
        CategoryID: "GS-CAT016",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 109,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["MOMOS", "FRIED", "VEG"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000098",
        Name: "VEG CHEESE MOMOS FRIED",
        Description: "",
        CategoryID: "GS-CAT016",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 119,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["MOMOS", "FRIED", "VEG"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      // SANDWICH
      {
        ID: "FOODPRD000099",
        Name: "FRENCH TOAST SANDWICH",
        Description: "",
        CategoryID: "GS-CAT017",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 89,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["SANDWICH", "BREAD", "VEG", "TOAST", "FRENCH"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000100",
        Name: "VEG CHEESE SANDWICH",
        Description: "",
        CategoryID: "GS-CAT017",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 99,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["SANDWICH", "BREAD", "VEG", "TOAST", "VEG", "CHEESE"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000101",
        Name: "PANEER TIKKA",
        Description: "",
        CategoryID: "GS-CAT017",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 109,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: [
          "SANDWICH",
          "BREAD",
          "VEG",
          "TOAST",
          "PANEER",
          "TIKKA",
        ],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000102",
        Name: "CHEESE CORN SANDWICH",
        Description: "",
        CategoryID: "GS-CAT017",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 119,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: [
          "SANDWICH",
          "BREAD",
          "VEG",
          "TOAST",
          "CHEESE",
          "CORN",
        ],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000103",
        Name: "BOMBAY STYLE SANDWICH",
        Description: "",
        CategoryID: "GS-CAT017",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 129,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["SANDWICH", "BREAD", "VEG", "TOAST", "BOMBAY"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000104",
        Name: "GHOST SPECIAL SANDWICH",
        Description: "",
        CategoryID: "GS-CAT017",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 149,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: [
          "SANDWICH",
          "BREAD",
          "VEG",
          "TOAST",
          "GHOST",
          "SPECIAL",
        ],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      // BURGER
      {
        ID: "FOODPRD000105",
        Name: "ALOO TIKKI BURGER",
        Description: "",
        CategoryID: "GS-CAT018",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 69,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["BURGER", "BUN", "VEG", "POTATO", "TIKKI"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000106",
        Name: "CHEESE ALOO TIKKI",
        Description: "",
        CategoryID: "GS-CAT018",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 79,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["BURGER", "BUN", "VEG", "ALOO", "CHEESE", "TIKKI"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000107",
        Name: "CHIPOTLE",
        Description: "",
        CategoryID: "GS-CAT018",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 89,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["BURGER", "BUN", "VEG", "CHIPOTLE"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000108",
        Name: "CORN CAPSICUM BURGER",
        Description: "",
        CategoryID: "GS-CAT018",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 99,
        PreparationTime: 30,
        ProductVisibilityStatus: true,
        ProductKeywords: ["BURGER", "BUN", "VEG", "CORN", "CAPSICUM"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000109",
        Name: "VEG CHEESE BURGER",
        Description: "",
        CategoryID: "GS-CAT018",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 109,
        PreparationTime: 30,
        ProductVisibilityStatus: true,
        ProductKeywords: ["BURGER", "BUN", "VEG", "CHEESE"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000110",
        Name: "PANEER PATAKA",
        Description: "",
        CategoryID: "GS-CAT018",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 119,
        PreparationTime: 30,
        ProductVisibilityStatus: true,
        ProductKeywords: ["BURGER", "BUN", "VEG", "PANEER"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000111",
        Name: "GHOST SPECIAL BURGER",
        Description: "",
        CategoryID: "GS-CAT018",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 159,
        PreparationTime: 30,
        ProductVisibilityStatus: true,
        ProductKeywords: ["BURGER", "BUN", "VEG", "GHOST"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      // COLD-DRINK
      {
        ID: "FOODPRD000112",
        Name: "SPRITE 350ML",
        Description: "",
        CategoryID: "GS-CAT019",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 40,
        PreparationTime: 0,
        ProductVisibilityStatus: true,
        ProductKeywords: ["DRINK", "SOFT", "COLD"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000113",
        Name: "COKE 350ML",
        Description: "",
        CategoryID: "GS-CAT019",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 40,
        PreparationTime: 0,
        ProductVisibilityStatus: true,
        ProductKeywords: ["DRINK", "SOFT", "COLD"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000114",
        Name: "THUMBS-UP 350ML",
        Description: "",
        CategoryID: "GS-CAT019",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 40,
        PreparationTime: 0,
        ProductVisibilityStatus: true,
        ProductKeywords: ["DRINK", "SOFT", "COLD"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000115",
        Name: "SPRITE 650 ML",
        Description: "",
        CategoryID: "GS-CAT019",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 45,
        PreparationTime: 0,
        ProductVisibilityStatus: true,
        ProductKeywords: ["DRINK", "SOFT", "COLD"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000116",
        Name: "COKE 650 ML",
        Description: "",
        CategoryID: "GS-CAT019",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 45,
        PreparationTime: 0,
        ProductVisibilityStatus: true,
        ProductKeywords: ["DRINK", "SOFT", "COLD"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000117",
        Name: "THUMBS-UP 650 ML",
        Description: "",
        CategoryID: "GS-CAT019",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 45,
        PreparationTime: 0,
        ProductVisibilityStatus: true,
        ProductKeywords: ["DRINK", "SOFT", "COLD"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      // FRUIT JUICE
      {
        ID: "FOODPRD000118",
        Name: "STRAWBERRY JUICE",
        Description: "",
        CategoryID: "GS-CAT020",
        FoodCategory: {
          FoodType: "DRINK",
          FoodAccredition: ["DRINK"],
          FoodInstructions: "",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          Variant: [
            {
              VariantSubject: "SIZE",
              VariantConfig: [
                {
                  ProductDefault: true,
                  VariantName: "330 ML",
                  VariantPrice: 129,
                },
                {
                  ProductDefault: false,
                  VariantName: "500 ML",
                  VariantPrice: 209,
                },
              ],
            },
          ],
        },
        PriceOriginal: 129,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["FRUIT", "HEALTHY", "JUICE"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000119",
        Name: "LITCHI JUICE",
        Description: "",
        CategoryID: "GS-CAT020",
        FoodCategory: {
          FoodType: "DRINK",
          FoodAccredition: ["DRINK"],
          FoodInstructions: "",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          Variant: [
            {
              VariantSubject: "SIZE",
              VariantConfig: [
                {
                  ProductDefault: true,
                  VariantName: "330 ML",
                  VariantPrice: 129,
                },
                {
                  ProductDefault: false,
                  VariantName: "500 ML",
                  VariantPrice: 209,
                },
              ],
            },
          ],
        },
        PriceOriginal: 129,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["FRUIT", "HEALTHY", "JUICE"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000120",
        Name: "BLACK CURRANT",
        Description: "",
        CategoryID: "GS-CAT020",
        FoodCategory: {
          FoodType: "DRINK",
          FoodAccredition: ["DRINK"],
          FoodInstructions: "",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          Variant: [
            {
              VariantSubject: "SIZE",
              VariantConfig: [
                {
                  ProductDefault: true,
                  VariantName: "330 ML",
                  VariantPrice: 129,
                },
                {
                  ProductDefault: false,
                  VariantName: "500 ML",
                  VariantPrice: 209,
                },
              ],
            },
          ],
        },
        PriceOriginal: 129,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["FRUIT", "HEALTHY", "JUICE"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000121",
        Name: "KIWI JUICE",
        Description: "",
        CategoryID: "GS-CAT020",
        FoodCategory: {
          FoodType: "DRINK",
          FoodAccredition: ["DRINK"],
          FoodInstructions: "",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          Variant: [
            {
              VariantSubject: "SIZE",
              VariantConfig: [
                {
                  ProductDefault: true,
                  VariantName: "330 ML",
                  VariantPrice: 129,
                },
                {
                  ProductDefault: false,
                  VariantName: "500 ML",
                  VariantPrice: 209,
                },
              ],
            },
          ],
        },
        PriceOriginal: 129,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["FRUIT", "HEALTHY", "JUICE"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000122",
        Name: "PINEAPPLE JUICE",
        Description: "",
        CategoryID: "GS-CAT020",
        FoodCategory: {
          FoodType: "DRINK",
          FoodAccredition: ["DRINK"],
          FoodInstructions: "",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          Variant: [
            {
              VariantSubject: "SIZE",
              VariantConfig: [
                {
                  ProductDefault: true,
                  VariantName: "330 ML",
                  VariantPrice: 129,
                },
                {
                  ProductDefault: false,
                  VariantName: "500 ML",
                  VariantPrice: 209,
                },
              ],
            },
          ],
        },
        PriceOriginal: 129,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["FRUIT", "HEALTHY", "JUICE"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000123",
        Name: "APPLE JUICE",
        Description: "",
        CategoryID: "GS-CAT020",
        FoodCategory: {
          FoodType: "DRINK",
          FoodAccredition: ["DRINK"],
          FoodInstructions: "",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          Variant: [
            {
              VariantSubject: "SIZE",
              VariantConfig: [
                {
                  ProductDefault: true,
                  VariantName: "330 ML",
                  VariantPrice: 129,
                },
                {
                  ProductDefault: false,
                  VariantName: "500 ML",
                  VariantPrice: 209,
                },
              ],
            },
          ],
        },
        PriceOriginal: 129,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["FRUIT", "HEALTHY", "JUICE"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000124",
        Name: "MANGO JUICE",
        Description: "",
        CategoryID: "GS-CAT020",
        FoodCategory: {
          FoodType: "DRINK",
          FoodAccredition: ["DRINK"],
          FoodInstructions: "",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          Variant: [
            {
              VariantSubject: "SIZE",
              VariantConfig: [
                {
                  ProductDefault: true,
                  VariantName: "330 ML",
                  VariantPrice: 129,
                },
                {
                  ProductDefault: false,
                  VariantName: "500 ML",
                  VariantPrice: 209,
                },
              ],
            },
          ],
        },
        PriceOriginal: 129,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["FRUIT", "HEALTHY", "JUICE"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000125",
        Name: "BLUEBERRY JUICE",
        Description: "",
        CategoryID: "GS-CAT020",
        FoodCategory: {
          FoodType: "DRINK",
          FoodAccredition: ["DRINK"],
          FoodInstructions: "",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          Variant: [
            {
              VariantSubject: "SIZE",
              VariantConfig: [
                {
                  ProductDefault: true,
                  VariantName: "330 ML",
                  VariantPrice: 149,
                },
                {
                  ProductDefault: false,
                  VariantName: "500 ML",
                  VariantPrice: 229,
                },
              ],
            },
          ],
        },
        PriceOriginal: 149,
        PreparationTime: 30,
        ProductVisibilityStatus: true,
        ProductKeywords: ["FRUIT", "HEALTHY", "JUICE"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      // SHAKES
      {
        ID: "FOODPRD000126",
        Name: "COLD COFFEE",
        Description: "",
        CategoryID: "GS-CAT021",
        FoodCategory: {
          FoodType: "DRINK",
          FoodAccredition: ["DRINK"],
          FoodInstructions: "",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          Variant: [
            {
              VariantSubject: "SIZE",
              VariantConfig: [
                {
                  ProductDefault: true,
                  VariantName: "330 ML",
                  VariantPrice: 79,
                },
                {
                  ProductDefault: false,
                  VariantName: "500 ML",
                  VariantPrice: 159,
                },
              ],
            },
          ],
        },
        PriceOriginal: 79,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["MILK", "SWEET", "COFFEE", "COLD"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000127",
        Name: "VANILLA SHAKE",
        Description: "",
        CategoryID: "GS-CAT021",
        FoodCategory: {
          FoodType: "DRINK",
          FoodAccredition: ["DRINK"],
          FoodInstructions: "",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          Variant: [
            {
              VariantSubject: "SIZE",
              VariantConfig: [
                {
                  ProductDefault: true,
                  VariantName: "330 ML",
                  VariantPrice: 119,
                },
                {
                  ProductDefault: false,
                  VariantName: "500 ML",
                  VariantPrice: 189,
                },
              ],
            },
          ],
        },
        PriceOriginal: 119,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["SHAKE", "MILK", "SWEET"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000128",
        Name: "CHOCOLATE SHAKE",
        Description: "",
        CategoryID: "GS-CAT021",
        FoodCategory: {
          FoodType: "DRINK",
          FoodAccredition: ["DRINK"],
          FoodInstructions: "",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          Variant: [
            {
              VariantSubject: "SIZE",
              VariantConfig: [
                {
                  ProductDefault: true,
                  VariantName: "330 ML",
                  VariantPrice: 129,
                },
                {
                  ProductDefault: false,
                  VariantName: "500 ML",
                  VariantPrice: 189,
                },
              ],
            },
          ],
        },
        PriceOriginal: 129,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["SHAKE", "MILK", "SWEET"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000129",
        Name: "BUTTERSCOTCH SHAKE",
        Description: "",
        CategoryID: "GS-CAT020",
        FoodCategory: {
          FoodType: "DRINK",
          FoodAccredition: ["DRINK"],
          FoodInstructions: "",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          Variant: [
            {
              VariantSubject: "SIZE",
              VariantConfig: [
                {
                  ProductDefault: true,
                  VariantName: "330 ML",
                  VariantPrice: 139,
                },
                {
                  ProductDefault: false,
                  VariantName: "500 ML",
                  VariantPrice: 199,
                },
              ],
            },
          ],
        },
        PriceOriginal: 139,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["SHAKE", "MILK", "SWEET"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000130",
        Name: "OREO SHAKE",
        Description: "",
        CategoryID: "GS-CAT021",
        FoodCategory: {
          FoodType: "DRINK",
          FoodAccredition: ["DRINK"],
          FoodInstructions: "",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          Variant: [
            {
              VariantSubject: "SIZE",
              VariantConfig: [
                {
                  ProductDefault: true,
                  VariantName: "330 ML",
                  VariantPrice: 149,
                },
                {
                  ProductDefault: false,
                  VariantName: "500 ML",
                  VariantPrice: 209,
                },
              ],
            },
          ],
        },
        PriceOriginal: 149,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["SHAKE", "MILK", "SWEET"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000131",
        Name: "KITKAT SHAKE",
        Description: "",
        CategoryID: "GS-CAT021",
        FoodCategory: {
          FoodType: "DRINK",
          FoodAccredition: ["DRINK"],
          FoodInstructions: "",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          Variant: [
            {
              VariantSubject: "SIZE",
              VariantConfig: [
                {
                  ProductDefault: true,
                  VariantName: "330 ML",
                  VariantPrice: 159,
                },
                {
                  ProductDefault: false,
                  VariantName: "500 ML",
                  VariantPrice: 219,
                },
              ],
            },
          ],
        },
        PriceOriginal: 159,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["SHAKE", "MILK", "SWEET"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000132",
        Name: "NUTELLA SHAKE",
        Description: "",
        CategoryID: "GS-CAT021",
        FoodCategory: {
          FoodType: "DRINK",
          FoodAccredition: ["DRINK"],
          FoodInstructions: "",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          Variant: [
            {
              VariantSubject: "SIZE",
              VariantConfig: [
                {
                  ProductDefault: true,
                  VariantName: "330 ML",
                  VariantPrice: 169,
                },
                {
                  ProductDefault: false,
                  VariantName: "500 ML",
                  VariantPrice: 239,
                },
              ],
            },
          ],
        },
        PriceOriginal: 169,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["SHAKE", "MILK", "SWEET"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000133",
        Name: "FERRERO ROCHER SHAKE",
        Description: "",
        CategoryID: "GS-CAT021",
        FoodCategory: {
          FoodType: "DRINK",
          FoodAccredition: ["DRINK"],
          FoodInstructions: "",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          Variant: [
            {
              VariantSubject: "SIZE",
              VariantConfig: [
                {
                  ProductDefault: true,
                  VariantName: "330 ML",
                  VariantPrice: 179,
                },
                {
                  ProductDefault: false,
                  VariantName: "500 ML",
                  VariantPrice: 249,
                },
              ],
            },
          ],
        },
        PriceOriginal: 179,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["SHAKE", "MILK", "SWEET"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
    ];

    await productscollection.insertMany(products);
    console.log("food products 3 Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

product_seed();

*/
}
