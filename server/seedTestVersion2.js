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
        ID: "GS-CAT001",
        Name: "PARANTHA",
        Description: "",
        Contents: [
          "FOODPRD000001",
          "FOODPRD000002",
          "FOODPRD000003",
          "FOODPRD000004",
          "FOODPRD000005",
          "FOODPRD000006",
          "FOODPRD000007",
          "FOODPRD000008",
        ],
        CategoryOwnership: {
          OwnershipType: "GHOST-SIGNATURE",
          MerchantID: "",
        },
        SubClassification: {
          Basis: [
            {
              Superclass: "REGULAR",
              ProductsIncluded: [
                "FOODPRD000001",
                "FOODPRD000002",
                "FOODPRD000003",
                "FOODPRD000004",
              ],
              Availibility: true,
            },
            {
              Superclass: "JUMBO",
              ProductsIncluded: [
                "FOODPRD000005",
                "FOODPRD000006",
                "FOODPRD000007",
                "FOODPRD000008",
              ],
              Availibility: true,
            },
          ],
        },
        CategoryType: {
          FoodType: "VEG",
          CategoryAccreditions: ["MAIN-COURSE"],
          Instructions: "Eat warm for best experience",
        },
        CategoryVisibilityStatus: true,
        CategoryKeywords: [
          "PARANTHA",
          "ALOO",
          "PYAAZ",
          "PANEER",
          "CHEESE-CORN",
          "HEALTHY",
        ],
        Illustration: {},
      },
      {
        ID: "GS-CAT002",
        Name: "RICE BOWL",
        Description: "",
        Contents: [
          "FOODPRD000009",
          "FOODPRD000010",
          "FOODPRD000011",
          "FOODPRD000012",
          "FOODPRD000013",
          "FOODPRD000014",
        ],
        CategoryOwnership: {
          OwnershipType: "GHOST-SIGNATURE",
          MerchantID: "",
        },
        SubClassification: {
          Basis: [
            {
              Superclass: "REGULAR BOWL",
              ProductsIncluded: [
                "FOODPRD000009",
                "FOODPRD000010",
                "FOODPRD000011",
              ],
              Availibility: true,
            },
            {
              Superclass: "LARGE BOWL",
              ProductsIncluded: [
                "FOODPRD000012",
                "FOODPRD000013",
                "FOODPRD000014",
              ],
              Availibility: true,
            },
          ],
        },
        CategoryType: {
          FoodType: "VEG",
          CategoryAccreditions: ["MAIN-COURSE"],
          Instructions: "",
        },
        CategoryVisibilityStatus: true,
        CategoryKeywords: ["RICE", "JEERA", "MATAR", "VEG", "HEALTHY"],
        Illustration: {},
      },
      {
        ID: "GS-CAT003",
        Name: "VEGETABLE COUNTER",
        Description: "",
        Contents: [
          "FOODPRD000015",
          "FOODPRD000016",
          "FOODPRD000017",
          "FOODPRD000018",
          "FOODPRD000019",
          "FOODPRD000020",
          "FOODPRD000021",
          "FOODPRD000022",
          "FOODPRD000023",
          "FOODPRD000024",
          "FOODPRD000025",
          "FOODPRD000026",
          "FOODPRD000027",
          "FOODPRD000028",
        ],
        CategoryOwnership: {
          OwnershipType: "GHOST-SIGNATURE",
          MerchantID: "",
        },
        SubClassification: {},
        CategoryType: {
          FoodType: "VEG",
          CategoryAccreditions: ["MAIN-COURSE"],
          Instructions: "",
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
        ID: "GS-CAT004",
        Name: "PANEER DELICACY",
        Description: "",
        Contents: [
          "FOODPRD000029",
          "FOODPRD000030",
          "FOODPRD000031",
          "FOODPRD000032",
          "FOODPRD000033",
          "FOODPRD000034",
          "FOODPRD000035",
        ],
        CategoryOwnership: {
          OwnershipType: "GHOST-SIGNATURE",
          MerchantID: "",
        },
        SubClassification: {
        },
        CategoryType: {
          FoodType: "VEG",
          CategoryAccreditions: ["MAIN-COURSE"],
          Instructions: "",
        },
        CategoryVisibilityStatus: true,
        CategoryKeywords: ["RICE", "JEERA", "MATAR", "VEG", "HEALTHY"],
        Illustration: {},
      },
      {
        ID: "GS-CAT005",
        Name: "BREADS",
        Description: "",
        Contents: [
          "FOODPRD000036",
          "FOODPRD000037",
          "FOODPRD000038",
          "FOODPRD000039",
        ],
        CategoryOwnership: {
          OwnershipType: "GHOST-SIGNATURE",
          MerchantID: "",
        },
        SubClassification: {
        },
        CategoryType: {
          FoodType: "VEG",
          CategoryAccreditions: ["MAIN-COURSE"],
          Instructions: "",
        },
        CategoryVisibilityStatus: true,
        CategoryKeywords: ["ROTI", "BREAD", "NAAN", "CHAPATI", "PARANTHA"],
        Illustration: {},
      },
      {
        ID: "GS-CAT006",
        Name: "ACCOMPANIMENTS",
        Description: "",
        Contents: [
          "FOODPRD000040",
          "FOODPRD000041",
          "FOODPRD000042",
          "FOODPRD000043",
          "FOODPRD000044",
        ],
        CategoryOwnership: {
          OwnershipType: "GHOST-SIGNATURE",
          MerchantID: "",
        },
        SubClassification: {},
        CategoryType: {
          FoodType: "VEG",
          CategoryAccreditions: ["MAIN-COURSE"],
          Instructions: "",
        },
        CategoryVisibilityStatus: true,
        CategoryKeywords: [
          "SIDES",
          "SALAD",
          "RAITA",
          "SWEET",
          "BUTTERMILK",
          "LASSI",
        ],
        Illustration: {},
      },
    ];
    await categoriesCollection.insertMany(categories);
    console.log("food categories seed 1 Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

category_seed();

*/
}

// Product seed - updated once

{/*
async function product_seed() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const productsCollection = client.db("test").collection("foodproducts");
    let products = [
      // parantha
      {
        ID: "FOODPRD000001",
        Name: "ALOO PARANTHA",
        Description: "",
        CategoryID: "GS-CAT001",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          AddOn: [
            {
              AddOnName: "GHEE-DIP",
              AddOnPrice: 10,
            },
            {
              AddOnName: "YOGHURT",
              AddOnPrice: 20,
            },
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 80,
        PreparationTime: 15,
        ProductVisibilityStatus: true,
        ProductKeywords: ["ALOO", "PARANTHA", "POTATO"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000002",
        Name: "PYAAZ PARANTHA",
        Description: "",
        CategoryID: "GS-CAT001",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          AddOn: [
            {
              AddOnName: "GHEE-DIP",
              AddOnPrice: 10,
            },
            {
              AddOnName: "YOGHURT",
              AddOnPrice: 20,
            },
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 90,
        PreparationTime: 20,
        ProductVisibilityStatus: true,
        ProductKeywords: ["PYAAZ", "PARANTHA", "ONION"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000003",
        Name: "PANEER PARANTHA",
        Description: "",
        CategoryID: "GS-CAT001",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          AddOn: [
            {
              AddOnName: "GHEE-DIP",
              AddOnPrice: 10,
            },
            {
              AddOnName: "YOGHURT",
              AddOnPrice: 20,
            },
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 100,
        PreparationTime: 20,
        ProductVisibilityStatus: true,
        ProductKeywords: ["PANEER", "PARANTHA", "COTTAGE", "CHEESE"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000004",
        Name: "CHEESE-CORN PARANTHA",
        Description: "",
        CategoryID: "GS-CAT001",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          AddOn: [
            {
              AddOnName: "GHEE-DIP",
              AddOnPrice: 10,
            },
            {
              AddOnName: "YOGHURT",
              AddOnPrice: 20,
            },
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 120,
        PreparationTime: 20,
        ProductVisibilityStatus: true,
        ProductKeywords: ["PANEER", "PARANTHA", "CHEESE", "CORN"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000005",
        Name: "ALOO PARANTHA XL",
        Description: "",
        CategoryID: "GS-CAT001",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          AddOn: [
            {
              AddOnName: "GHEE-DIP",
              AddOnPrice: 10,
            },
            {
              AddOnName: "YOGHURT",
              AddOnPrice: 20,
            },
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 100,
        PreparationTime: 20,
        ProductVisibilityStatus: true,
        ProductKeywords: ["ALOO", "PARANTHA", "POTATO"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000006",
        Name: "PYAAZ PARANTHA XL",
        Description: "",
        CategoryID: "GS-CAT001",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          AddOn: [
            {
              AddOnName: "GHEE-DIP",
              AddOnPrice: 10,
            },
            {
              AddOnName: "YOGHURT",
              AddOnPrice: 20,
            },
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 110,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["PYAAZ", "PARANTHA", "ONION"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000007",
        Name: "PANEER PARANTHA XL",
        Description: "",
        CategoryID: "GS-CAT001",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          AddOn: [
            {
              AddOnName: "GHEE-DIP",
              AddOnPrice: 10,
            },
            {
              AddOnName: "YOGHURT",
              AddOnPrice: 20,
            },
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 120,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["PANEER", "PARANTHA", "COTTAGE", "CHEESE"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000008",
        Name: "CHEESE-CORN PARANTHA XL",
        Description: "",
        CategoryID: "GS-CAT001",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: [],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          AddOn: [
            {
              AddOnName: "GHEE-DIP",
              AddOnPrice: 10,
            },
            {
              AddOnName: "YOGHURT",
              AddOnPrice: 20,
            },
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 140,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["PANEER", "PARANTHA", "CHEESE", "CORN"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      // rice
      {
        ID: "FOODPRD000009",
        Name: "JEERA RICE",
        Description: "",
        CategoryID: "GS-CAT002",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          AddOn: [
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 99,
        PreparationTime: 10,
        ProductVisibilityStatus: true,
        ProductKeywords: ["JEERA", "RICE", "PULAO", "MAIN-COURSE", "BIRYANI"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000010",
        Name: "MATAR PULAO",
        Description: "",
        CategoryID: "GS-CAT002",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          AddOn: [
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 119,
        PreparationTime: 15,
        ProductVisibilityStatus: true,
        ProductKeywords: [
          "MATAR",
          "PEAS",
          "RICE",
          "PULAO",
          "MAIN-COURSE",
          "BIRYANI",
        ],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000011",
        Name: "VEG BIRYANI",
        Description: "",
        CategoryID: "GS-CAT002",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          AddOn: [
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 149,
        PreparationTime: 20,
        ProductVisibilityStatus: true,
        ProductKeywords: ["VEG", "BIRYANI", "PULAO", "RICE"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000012",
        Name: "JEERA RICE XL",
        Description: "",
        CategoryID: "GS-CAT002",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          AddOn: [
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 119,
        PreparationTime: 15,
        ProductVisibilityStatus: true,
        ProductKeywords: ["JEERA", "RICE", "PULAO", "MAIN-COURSE", "BIRYANI"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000013",
        Name: "MATAR PULAO XL",
        Description: "",
        CategoryID: "GS-CAT002",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          AddOn: [
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 139,
        PreparationTime: 20,
        ProductVisibilityStatus: true,
        ProductKeywords: ["PANEER", "PARANTHA", "COTTAGE", "CHEESE"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000014",
        Name: "VEG BIRYANI XL",
        Description: "",
        CategoryID: "GS-CAT002",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          AddOn: [
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 169,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: ["PANEER", "PARANTHA", "CHEESE", "CORN"],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      // vegetable counter
      {
        ID: "FOODPRD000015",
        Name: "ALOO MATAR",
        Description: "",
        CategoryID: "GS-CAT003",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
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
                  VariantName: "REGULAR",
                  VariantPrice: 140,
                },
                {
                  ProductDefault: false,
                  VariantName: "LARGE",
                  VariantPrice: 180,
                },
              ],
            },
          ],
          AddOn: [
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 140,
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
        ID: "FOODPRD000016",
        Name: "DAL FRY",
        Description: "",
        CategoryID: "GS-CAT003",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
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
                  VariantName: "REGULAR",
                  VariantPrice: 140,
                },
                {
                  ProductDefault: false,
                  VariantName: "LARGE",
                  VariantPrice: 180,
                },
              ],
            },
          ],
          AddOn: [
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 140,
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
        ID: "FOODPRD000017",
        Name: "DAL TADKA",
        Description: "",
        CategoryID: "GS-CAT003",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          Variant: [
            {
              VariantSubject: "SIZE",
              VariantConfig: {
                ProductDefault: true,
                VariantName: "REGULAR",
                VariantPrice: 160,
              },
              VariantConfig: {
                ProductDefault: false,
                VariantName: "LARGE",
                VariantPrice: 210,
              },
            },
          ],
          AddOn: [
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 160,
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
        ID: "FOODPRD000018",
        Name: "ALOO LEHSUNIYA",
        Description: "",
        CategoryID: "GS-CAT003",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
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
                  VariantName: "REGULAR",
                  VariantPrice: 160,
                },
                {
                  ProductDefault: false,
                  VariantName: "LARGE",
                  VariantPrice: 210,
                },
              ],
            },
          ],
          AddOn: [
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 160,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: [],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      }, // yet to edit customization below
      {
        ID: "FOODPRD000019",
        Name: "CHANA MASALA",
        Description: "",
        CategoryID: "GS-CAT003",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
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
                  VariantName: "REGULAR",
                  VariantPrice: 160,
                },
                {
                  ProductDefault: false,
                  VariantName: "LARGE",
                  VariantPrice: 210,
                },
              ],
            },
          ],
          AddOn: [
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 160,
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
        ID: "FOODPRD000020",
        Name: "MIX VEG",
        Description: "",
        CategoryID: "GS-CAT003",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
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
                  VariantName: "REGULAR",
                  VariantPrice: 160,
                },
                {
                  ProductDefault: false,
                  VariantName: "LARGE",
                  VariantPrice: 210,
                },
              ],
            },
          ],
          AddOn: [
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 160,
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
        ID: "FOODPRD000021",
        Name: "RAJASTHANI GATTA CURRY",
        Description: "",
        CategoryID: "GS-CAT003",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
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
                  VariantName: "REGULAR",
                  VariantPrice: 160,
                },
                {
                  ProductDefault: false,
                  VariantName: "LARGE",
                  VariantPrice: 210,
                },
              ],
            },
          ],
          AddOn: [
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 160,
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
        ID: "FOODPRD000022",
        Name: "DAL MAKHANI",
        Description: "",
        CategoryID: "GS-CAT003",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
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
                  VariantName: "REGULAR",
                  VariantPrice: 180,
                },
                {
                  ProductDefault: false,
                  VariantName: "LARGE",
                  VariantPrice: 240,
                },
              ],
            },
          ],
          AddOn: [
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 180,
        PreparationTime: 35,
        ProductVisibilityStatus: true,
        ProductKeywords: [],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000023",
        Name: "SEV TAMATAR",
        Description: "",
        CategoryID: "GS-CAT003",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
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
                  VariantName: "REGULAR",
                  VariantPrice: 180,
                },
                {
                  ProductDefault: false,
                  VariantName: "LARGE",
                  VariantPrice: 240,
                },
              ],
            },
          ],
          AddOn: [
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 180,
        PreparationTime: 35,
        ProductVisibilityStatus: true,
        ProductKeywords: [],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000024",
        Name: "MALAI PYAAZ",
        Description: "",
        CategoryID: "GS-CAT003",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
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
                  VariantName: "REGULAR",
                  VariantPrice: 180,
                },
                {
                  ProductDefault: false,
                  VariantName: "LARGE",
                  VariantPrice: 240,
                },
              ],
            },
          ],
          AddOn: [
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 180,
        PreparationTime: 35,
        ProductVisibilityStatus: true,
        ProductKeywords: [],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000025",
        Name: "BHINDI MASALA",
        Description: "",
        CategoryID: "GS-CAT003",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
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
                  VariantName: "REGULAR",
                  VariantPrice: 180,
                },
                {
                  ProductDefault: false,
                  VariantName: "LARGE",
                  VariantPrice: 240,
                },
              ],
            },
          ],
          AddOn: [
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 180,
        PreparationTime: 35,
        ProductVisibilityStatus: true,
        ProductKeywords: [],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000026",
        Name: "BHINDI MASALA",
        Description: "",
        CategoryID: "GS-CAT003",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
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
                  VariantName: "REGULAR",
                  VariantPrice: 190,
                },
                {
                  ProductDefault: false,
                  VariantName: "LARGE",
                  VariantPrice: 250,
                },
              ],
            },
          ],
          AddOn: [
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 190,
        PreparationTime: 35,
        ProductVisibilityStatus: true,
        ProductKeywords: [],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000027",
        Name: "KAJU CURRY",
        Description: "",
        CategoryID: "GS-CAT003",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
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
                  VariantName: "REGULAR",
                  VariantPrice: 200,
                },
                {
                  ProductDefault: false,
                  VariantName: "LARGE",
                  VariantPrice: 260,
                },
              ],
            },
          ],
          AddOn: [
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 200,
        PreparationTime: 35,
        ProductVisibilityStatus: true,
        ProductKeywords: [],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000028",
        Name: "DAHI FRY",
        Description: "",
        CategoryID: "GS-CAT003",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
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
                  VariantName: "REGULAR",
                  VariantPrice: 140,
                },
                {
                  ProductDefault: false,
                  VariantName: "LARGE",
                  VariantPrice: 180,
                },
              ],
            },
          ],
          AddOns: [
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 140,
        PreparationTime: 25,
        ProductVisibilityStatus: true,
        ProductKeywords: [],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      // paneer delicacy
      {
        ID: "FOODPRD000029",
        Name: "PALAK PANEER",
        Description: "",
        CategoryID: "GS-CAT004",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
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
                  VariantName: "REGULAR",
                  VariantPrice: 190,
                },
                {
                  ProductDefault: false,
                  VariantName: "LARGE",
                  VariantPrice: 250,
                },
              ],
            },
          ],
          AddOn: [
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 190,
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
        ID: "FOODPRD000030",
        Name: "MATAR PANEER",
        Description: "",
        CategoryID: "GS-CAT004",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
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
                  VariantName: "REGULAR",
                  VariantPrice: 190,
                },
                {
                  ProductDefault: false,
                  VariantName: "LARGE",
                  VariantPrice: 250,
                },
              ],
            },
          ],
          AddOn: [
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 190,
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
        ID: "FOODPRD000031",
        Name: "PANEER BHURJI",
        Description: "",
        CategoryID: "GS-CAT004",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
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
                  VariantName: "REGULAR",
                  VariantPrice: 200,
                },
                {
                  ProductDefault: false,
                  VariantName: "LARGE",
                  VariantPrice: 260,
                },
              ],
            },
          ],
          AddOn: [
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 200,
        PreparationTime: 35,
        ProductVisibilityStatus: true,
        ProductKeywords: [],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000032",
        Name: "PANEER BUTTER MASALA",
        Description: "",
        CategoryID: "GS-CAT004",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
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
                  VariantName: "REGULAR",
                  VariantPrice: 200,
                },
                {
                  ProductDefault: false,
                  VariantName: "LARGE",
                  VariantPrice: 260,
                },
              ],
            },
          ],
          AddOn: [
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 200,
        PreparationTime: 35,
        ProductVisibilityStatus: true,
        ProductKeywords: [],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000033",
        Name: "SHAHI PANEER",
        Description: "",
        CategoryID: "GS-CAT004",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
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
                  VariantName: "REGULAR",
                  VariantPrice: 200,
                },
                {
                  ProductDefault: false,
                  VariantName: "LARGE",
                  VariantPrice: 260,
                },
              ],
            },
          ],
          AddOn: [
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 200,
        PreparationTime: 35,
        ProductVisibilityStatus: true,
        ProductKeywords: [],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000034",
        Name: "KADHAI PANEER",
        Description: "",
        CategoryID: "GS-CAT004",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
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
                  VariantName: "REGULAR",
                  VariantPrice: 210,
                },
                {
                  ProductDefault: false,
                  VariantName: "LARGE",
                  VariantPrice: 260,
                },
              ],
            },
          ],
          AddOn: [
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 210,
        PreparationTime: 35,
        ProductVisibilityStatus: true,
        ProductKeywords: [],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000035",
        Name: "PANEER TIKKA MASALA",
        Description: "",
        CategoryID: "GS-CAT004",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
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
                  VariantName: "REGULAR",
                  VariantPrice: 220,
                },
                {
                  ProductDefault: false,
                  VariantName: "LARGE",
                  VariantPrice: 270,
                },
              ],
            },
          ],
          AddOn: [
            {
              AddOnName: "MASALA-PAPAD",
              AddOnPrice: 50,
            },
            {
              AddOnName: "FRY-PAPAD",
              AddOnPrice: 30,
            },
            {
              AddOnName: "ROASTED-PAPAD",
              AddOnPrice: 20,
            },
          ],
        },
        PriceOriginal: 220,
        PreparationTime: 35,
        ProductVisibilityStatus: true,
        ProductKeywords: [],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      // breads
      {
        ID: "FOODPRD000036",
        Name: "PLAIN CHAPATI",
        Description: "",
        CategoryID: "GS-CAT005",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          AddOn: [{
            AddOnName: "GHEE-DIP",
            AddOnPrice: 10,
          },]
        },
        PriceOriginal: 10,
        PreparationTime: 5,
        ProductVisibilityStatus: true,
        ProductKeywords: [],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000037",
        Name: "BUTTER CHAPATI",
        Description: "",
        CategoryID: "GS-CAT005",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          AddOn: [{
            AddOnName: "GHEE-DIP",
            AddOnPrice: 10,
          },]
        },
        PriceOriginal: 15,
        PreparationTime: 5,
        ProductVisibilityStatus: true,
        ProductKeywords: [],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000038",
        Name: "PLAIN PARANTHA",
        Description: "",
        CategoryID: "GS-CAT005",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          AddOn: [{
            AddOnName: "GHEE-DIP",
            AddOnPrice: 10,
          }],
        },
        PriceOriginal: 40,
        PreparationTime: 10,
        ProductVisibilityStatus: true,
        ProductKeywords: [],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000039",
        Name: "LACHHA PARANTHA",
        Description: "",
        CategoryID: "GS-CAT005",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
          FoodInstructions: "Eat warm for best experience",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {
          AddOn: [{
            AddOnName: "GHEE-DIP",
            AddOnPrice: 10,
          },]
        },
        PriceOriginal: 80,
        PreparationTime: 10,
        ProductVisibilityStatus: true,
        ProductKeywords: [],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      // sides
      {
        ID: "FOODPRD000040",
        Name: "BUTTER-MILK",
        Description: "",
        CategoryID: "GS-CAT006",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
          FoodInstructions: "",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 30,
        PreparationTime: 5,
        ProductVisibilityStatus: true,
        ProductKeywords: [],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000041",
        Name: "SWEET LASSI",
        Description: "",
        CategoryID: "GS-CAT006",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
          FoodInstructions: "",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 60,
        PreparationTime: 10,
        ProductVisibilityStatus: true,
        ProductKeywords: [],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000042",
        Name: "VEG SALAD",
        Description: "",
        CategoryID: "GS-CAT006",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
          FoodInstructions: "",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 50,
        PreparationTime: 10,
        ProductVisibilityStatus: true,
        ProductKeywords: [],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000043",
        Name: "BOONDI RAITA",
        Description: "",
        CategoryID: "GS-CAT006",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
          FoodInstructions: "",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 80,
        PreparationTime: 10,
        ProductVisibilityStatus: true,
        ProductKeywords: [],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
      {
        ID: "FOODPRD000044",
        Name: "VEG RAITA",
        Description: "",
        CategoryID: "GS-CAT006",
        FoodCategory: {
          FoodType: "VEG",
          FoodAccredition: ["HEALTHY"],
          FoodInstructions: "",
        },
        ProviderBasis: ["DELIVERY", "TAKEAWAY", "SERVE"],
        ProductCustomization: {},
        PriceOriginal: 100,
        PreparationTime: 10,
        ProductVisibilityStatus: true,
        ProductKeywords: [],
        ProductAdditionalDetails: {
          nutritionalValue: {},
          Indegredients: {},
        },
        ProductImage: {},
      },
    ];
    await productsCollection.insertMany(products);
    console.log("food Products seed 1 Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

product_seed();
*/}