const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");

// membership seed

{/*
async function membership_seed() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const membershipcollection = client.db("test").collection("memberships");
    let membershipobjects = [
      {
        ID: 'GPCM0001',
        Name: 'GHOST CLOUD KITCHEN BHILWARA',
        Type: 'GHOST-ALLOTTED-MEMBERSHIP',
        Plan:'GHOST',
        DateOfJoin: new Date("<2023-10-31T12:00:00>"),
        MerchantID: "GMR00001",
        ProfitCenterID: "RJ06BHL-PC001",
        FSSAIcertificate: {
          RegistrationID: '',
          ValidUpto: new Date("<2024-12-31T12:00:00>"),
        },
        Documents: {},
      },
      {
        ID: 'GPCM0002',
        Name: 'GHOST CLOUD KITCHEN KOTA',
        Type: 'GHOST-ALLOTTED-MEMBERSHIP',
        Plan:'GHOST',
        DateOfJoin: new Date("<2023-10-31T12:00:00>"),
        MerchantID: "GMR00002",
        ProfitCenterID: "RJ06BHL-PC001",
        FSSAIcertificate: {
          RegistrationID: '',
          ValidUpto:new Date("<2024-12-31T12:00:00>"),
        },
        Documents: {},
      },
    ];
    await membershipcollection.insertMany(membershipobjects);
    console.log("membership Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

membership_seed();
*/}

// loyalty generation seed

{/*
async function reward_model_seed() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const orderloyaltygenerationcollection = client
      .db("test")
      .collection("reward.orderloyaltygenerationmodels");
    const eventcheckinpointcollection = client
      .db("test")
      .collection("reward.eventcheckinpointmodels");
    const finedinecheckinpointcollection = client
      .db("test")
      .collection("reward.finedinecheckinpointmodels");
    const loyaltyredemptioncollection = client
      .db("test")
      .collection("reward.loyaltyredemptionmodels");

    let orderloyaltyobjects = [
      {
        Name: 'POINTGENERATE-0.05',
        Code: 'RWDPT-GEN-ORD-001',
        ConversionRate: 0.05,
        Description: 'one rupee order will convert to 0.05 points',
        Illustration: {},
      },
      {
        Name: 'POINTGENERATE-0.1',
        Code: 'RWDPT-GEN-ORD-002',
        ConversionRate: 0.1,
        Description: 'one rupee order will convert to 0.1 points',
        Illustration: {},
      },
      {
        Name: 'POINTGENERATE-0.15',
        Code: 'RWDPT-GEN-ORD-003',
        ConversionRate: 0.15,
        Description: 'one rupee order will convert to 0.15 points',
        Illustration: {},
      },
    ];

    let eventcheckinobjects = [
      {
        Name: 'EV-CHECKING-5',
        Code: 'RWDPT-TRN-EVT-001',
        PointTransfer: 5,
        Description: 'once checkin will add 5 points to user',
        Illustration: {},
      },
      {
        Name: 'EV-CHECKING-10',
        Code: 'RWDPT-TRN-EVT-002',
        PointTransfer: 10,
        Description: 'once checkin will add 10 points to user',
        Illustration: {},
      },
      {
        Name: 'EV-CHECKING-20',
        Code: 'RWDPT-TRN-EVT-003',
        PointTransfer: 20,
        Description: 'once checkin will add 20 points to user',
        Illustration: {},
      },
    ];

    let finedinecheckinobjects = [
      {
        Name: 'FD-CHECKIN-2',
        Code: 'RWDPT-TRN-FDN-001',
        PointTransfer: 2,
        Description: 'once checkin will add 2 points to user',
        Illustration: {},
      },
      {
        Name: 'FD-CHECKIN-5',
        Code: 'RWDPT-TRN-FDN-002',
        PointTransfer: 5,
        Description: 'once checkin will add 5 points to user',
        Illustration: {},
      },
      {
        Name: 'FD-CHECKIN-10',
        Code: 'RWDPT-TRN-FDN-003',
        PointTransfer: 10,
        Description: 'once checkin will add 10 points to user',
        Illustration: {},
      },
    ];

    let loyaltyredemptionobjects = [
      {
        Name: 'POINTS-REDEEM-500',
        Code: 'RWDPT-RED-WLT-001',
        PointRedeem: 500, // Subtract From User
        RewardedWalletMoney: 30, // Add to User Wallet
        Description: 'on redeeming 500 points, 30 rs. to user wallet',
        Illustration: {},
      },
      {
        Name: 'POINTS-REDEEM-1000',
        Code: 'RWDPT-RED-WLT-001',
        PointRedeem: 1000, // Subtract From User
        RewardedWalletMoney: 75, // Add to User Wallet
        Description: 'on redeeming 1000 points, 75 rs. to user wallet',
        Illustration: {},
      },
      {
        Name: 'POINTS-REDEEM-2500',
        Code: 'RWDPT-RED-WLT-001',
        PointRedeem: 2500, // Subtract From User
        RewardedWalletMoney: 250, // Add to User Wallet
        Description: 'on redeeming 2500 points, 250 rs. to user wallet',
        Illustration: {},
      },
    ];

    await orderloyaltygenerationcollection.insertMany(orderloyaltyobjects);
    await eventcheckinpointcollection.insertMany(eventcheckinobjects);
    await finedinecheckinpointcollection.insertMany(finedinecheckinobjects);
    await loyaltyredemptioncollection.insertMany(loyaltyredemptionobjects);

    console.log("reward Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

reward_model_seed();
*/}

// additional cost seed

{/*
async function additional_cost_seed() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const giftcardcollection = client
      .db("test")
      .collection("additionalcost.giftcardmodels");
    const packagingcostcollection = client
      .db("test")
      .collection("additionalcost.packagingcostmodels");
    const ambiencechargecollection = client
      .db("test")
      .collection("additionalcost.ambiencechargemodels");
    const donationchannelcollection = client
      .db("test")
      .collection("additionalcost.donationchannelmodels");

    let giftcardobjects = [
      {
        Name: 'GIFTCARD-NOTE',
        Code: 'ADD-GFTCRD-001',
        AmountToBill:5,
        Description: 'a note gift-card worth 5rs. to bill',
        Illustration: {},
      },
      {
        Name: 'GIFTCARD-DAIRYMILK',
        Code: 'ADD-GFTCRD-002',
        AmountToBill:15,
        Description: 'a dairy milk and note gift-card worth 15rs. to bill',
        Illustration: {},
      },
      {
        Name: 'GIFTCARD-DESSERT',
        Code: 'ADD-GFTCRD-003',
        AmountToBill:40,
        Description: 'an ice-cream and note gift-card worth 40rs. to bill',
        Illustration: {},
      },
    ];

    let packagingcostobjects = [
      {
        Name: 'PACKAGING-COST-5',
        Code: 'ADD-PKGCST-001',
        AmountToBill:5,
        Description: 'add 5 rs. to bill each time as packaging cost',
        Illustration: {},
      },
      {
        Name: 'PACKAGING-COST-10',
        Code: 'ADD-PKGCST-002',
        AmountToBill:10,
        Description: 'add 10 rs. to bill each time as packaging cost',
        Illustration: {},
      },
      {
        Name: 'PACKAGING-COST-15',
        Code: 'ADD-PKGCST-003',
        AmountToBill:15,
        Description: 'add 15 rs. to bill each time as packaging cost',
        Illustration: {},
      },
    ];

    let ambiencechargeobjects = [
      {
        Name: 'AMBIENCE-20',
        Code: 'ADD-AMBCST-001',
        AmountToBill: 20,
        Description: 'add 20 rs. to bill each time as ambience cost',
        Illustration: {},
      },
      {
        Name: 'AMBIENCE-50',
        Code: 'ADD-AMBCST-002',
        AmountToBill: 50,
        Description: 'add 50 rs. to bill each time as ambience cost',
        Illustration: {},
      },
      {
        Name: 'AMBIENCE-100',
        Code: 'ADD-AMBCST-003',
        AmountToBill: 100,
        Description: 'add 100 rs. to bill each time as ambience cost',
        Illustration: {},
      },
    ];

    let donationchannelobjects = [
      {
        Name: 'FEED THE HUNGRY',
        Code: 'ADD-DONCHL-001',
        AvailableDenomination: [5,10,20],
        Description: 'donate in available denominations to feed the poor.',
        Illustration: {},
      },
      {
        Name: 'GAU-SEVA',
        Code: 'ADD-DONCHL-002',
        AvailableDenomination: [2,5,10,20],
        Description: 'donate in available denominations to service of mother-cow.',
        Illustration: {},
      },
    ];

    await giftcardcollection.insertMany(giftcardobjects);
    await packagingcostcollection.insertMany(packagingcostobjects);
    await ambiencechargecollection.insertMany(ambiencechargeobjects);
    await donationchannelcollection.insertMany(donationchannelobjects);

    console.log("additional cost Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

additional_cost_seed();
*/}