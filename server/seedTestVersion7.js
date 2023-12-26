const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");

// admin related db not complete
// all admin entries to be re-seeded with arrays

// event seed
{/*
async function event_seed() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const eventscollection = client.db("test").collection("events");
    let eventobj = [
      {
        EventID: 'RJ06BHL-EV001',
        EventName: 'NAVRATRI BASH - By Creator Events',
        EventDescription: 'Celebrate Navratri Vibes by divine mothers blessings, lots of dancing and eating at your favorite kitchen.',
        EventZone: 'RJ06BHL',
        EventLocationID: { type: String },
        EventMenuID: { type: String },
        EventDetails: {
          EventType: 'FESTIVAL-EVENT',
          EventOrderBatchID: { type: String },
          EventCheckInPoints: 'RWDPT-TRN-EVT-002',
          EventContact: 7426977377,
        },
        EventTime: {
          EventDurationDays: 3,
          EventRepeatFrequencyDays: null,
          EventStart: { type: Date },
          EventEnd: { type: Date },
        },
        EventIllustrations: {},
      }
    ];
    await eventscollection.insertMany(eventobj);
    console.log("event Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

event_seed();
*/}

// event teams seed
{/*
async function event_teams_seed() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const eventteamscollection = client.db("test").collection("event.teams");
    let eventteamsobj = [
      {
        EventID: 'RJ06BHL-EV001',
        EventTeam: {
          EventManagerID: 'ADMIN003',
          EventTeamMember: {
            Name: 'KANISHK CHOUDHARY',
            TeamRole: 'APPLICATION SUPPORT',
            AdminID: 'ADMIN001',
          },
        },
        EventPartnerDetails: {
          OrganisingCompanyName: 'CREATOR EVENTS',
          OrganisingManagerName: 'BABU BHAI',
        },
        EventPartnerFeedback: {
          EventRating: { type: Number, max: 5, min: 0 },
          EventFeedback: { type: String },
          EventSupportID: { type: String },
        },
      }
    ];
    await eventteamscollection.insertMany(eventteamsobj);
    console.log("event teams Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

event_teams_seed();
*/}

// admin roles seed
{/*
async function admin_profile_seed() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const adminprofilecollection = client.db("test").collection("admin.profiles");
    let adminprofileobj = [
      {
        ID: { type: String, required: true, unique: true },
        WorkProfile: {
          DOJ: { type: Date },
          Profile: { type: String },
          AllottedMentor: { type: String, required: true },
          Designation: { type: String, required: true },
        },
        AdminProcess: {
          OperationsProcess: {
            Access: { type: Boolean },
            ProcessID: { type: String },
          },
          BusinessDevelopementProcess: {
            Access: { type: Boolean },
            ProcessID: { type: String },
          },
          ZonalProcess: {
            Access: { type: Boolean },
            ProcessID: { type: String },
          },
          AdminManagementProcess: {
            Access: { type: Boolean },
            ProcessID: { type: String },
          },
        },
      }
    ];
    await adminprofilecollection.insertMany(adminprofileobj);
    console.log("admin profile Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

admin_profile_seed();
*/}

// admin pc ops seed

{/*

async function admin_pcops_seed() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const adminpcopscollection = client.db("test").collection("admin.pcoperations");
    let adminpcopsobj = [
      {
        ID: "ADMIN001",
        ProcessID: "PS001",
        ProfitCenterOperationsProcess: {
          ConfigurationManagement: {
            Access: false,
            TaskID: "",
          },
          DeliveryManagement: {
            Access: true,
            TaskID: "PS001TS02",
          },
          SupportManagement: {
            Access: false,
            TaskID: "",
          },
          OrderManagement: {
            Access: true,
            TaskID: "PS001TS04",
          },
        },
      },
      {
        ID: "ADMIN002",
        ProcessID: "PS002",
        ProfitCenterOperationsProcess: {
          ConfigurationManagement: {
            Access: false,
            TaskID: "",
          },
          DeliveryManagement: {
            Access: true,
            TaskID: "PS002TS02",
          },
          SupportManagement: {
            Access: false,
            TaskID: "",
          },
          OrderManagement: {
            Access: true,
            TaskID: "PS002TS04",
          },
        },
      },
      {
        ID: "ADMIN003",
        ProcessID: "PS003",
        ProfitCenterOperationsProcess: {
          ConfigurationManagement: {
            Access: false,
            TaskID: "",
          },
          DeliveryManagement: {
            Access: true,
            TaskID: "PS003TS02",
          },
          SupportManagement: {
            Access: false,
            TaskID: "",
          },
          OrderManagement: {
            Access: true,
            TaskID: "PS003TS04",
          },
        },
      }
    ];
    await adminpcopscollection.insertMany(adminpcopsobj);
    console.log("admin pc ops Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

admin_pcops_seed();

*/}

// admin zonal ops seed
{/*
async function admin_zonalops_seed() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const adminzonalopscollection = client.db("test").collection("admin.zonaloperations");
    let adminzonalopsobj = [
      {
        ID: { type: String, required: true, unique: true },
        ProcessID: { type: String },
        ZonalOperationsProcess: {
          OrderManagement: {
            Access: { type: Boolean },
            TaskID: { type: String },
          },
          DeliveryManagement: {
            Access: { type: Boolean },
            TaskID: { type: String },
          },
          SupportManagement: {
            Access: { type: Boolean },
            TaskID: { type: String },
          },
          FinanceManagement: {
            Access: { type: Boolean },
            TaskID: { type: String },
          },
          HRManagement: {
            Access: { type: Boolean },
            TaskID: { type: String },
          },
        },
      }
    ];
    await adminzonalopscollection.insertMany(adminzonalopsobj);
    console.log("admin zonal ops Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

admin_zonalops_seed();
*/}

// admin business developers seed
{/*
async function admin_businessdev_seed() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const adminbizdevcollection = client.db("test").collection("admin.businessdevelopers");
    let adminbizdevobj = [
      {
        ID: { type: String, required: true, unique: true },
        ProcessID: { type: String },
        BusinessDevelopementProcess: {
          FeedbackManagement: {
            Access: { type: Boolean },
            TaskID: { type: String },
          },
          EventManagement: {
            Access: { type: Boolean },
            TaskID: { type: String },
          },
          MarketingManagement: {
            Access: { type: Boolean },
            TaskID: { type: String },
          },
          ResearchandDevelopement: {
            Access: { type: Boolean },
            TaskID: { type: String },
          },
        },
      }
    ];
    await adminbizdevcollection.insertMany(adminbizdevobj);
    console.log("admin business dev Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

admin_businessdev_seed();
*/}

// admin business developers seed
{/*
async function admin_control_seed() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const admincontrolcollection = client.db("test").collection("admin.admincontrols");
    let admincontrolobj = [
      {
        ID: { type: String, required: true, unique: true },
        ProcessID: { type: String },
        AdminControlsProcess: {
          AdminFunctions: {
            Access: { type: Boolean },
            TaskID: { type: String },
          },
          EmployeeFunctions: {
            Access: { type: Boolean },
            TaskID: { type: String },
          },
        },
      }
    ];
    await admincontrolcollection.insertMany(admincontrolobj);
    console.log("admin control Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

admin_control_seed();
*/}

// geolocation pc seed
{/*
async function geo_pc_seed() {
    const uri =
      "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
  
    try {
      await client.connect();
  
      const centergeocollection = client.db("test").collection("geo.centers");
      let centergeoobj = [
        {
            GeoID:'RJ06BHL-GEOPC-001',
            TaggedToProfitCenter: {
              CenterID: 'RJ06BHL-PC001',
              CenterContact: 7426977377,
            },
            Address: {
              Line1Name: 'Opposite Kanak Petroleum',
              Line2Street: 'Near L2C',
              Line3Locality: 'Shastri Nagar',
            },
            Coordinates: {
              Latitude: 25.325116,
              Longitude: 74.648691,
            },
            Zone: {
              Zone: 'RJ06BHL',
              ZonalArea: 'BHILWARA',
              Pincode: 311001,
            },
            Accuracy: null,
        },
        {
            GeoID:'RJ20KOT-GEOPC-001',
            TaggedToProfitCenter: {
              CenterID: 'RJ20KOT-PC001',
              CenterContact: 7425033151,
            },
            Address: {
              Line1Name: '32, Nanta Rd.',
              Line2Street: 'Kunadi',
              Line3Locality: 'Electricity Board Area',
            },
            Coordinates: {
              Latitude: 25.200249,
              Longitude: 75.828804,
            },
            Zone: {
              Zone: 'RJ20KOT',
              ZonalArea: 'KOTA',
              Pincode: 324008,
            },
            Accuracy: null,
        },
      ];
      await centergeocollection.insertMany(centergeoobj);
      console.log("GEO.CENTER Updated successfully");
    } catch (e) {
      console.error(e);
    } finally {
      await client.close();
    }
  }
  
 geo_pc_seed();
*/}

// geolocation event seed
{/*
async function geo_ev_seed() {
  const uri =
    "mongodb+srv://kanishk28:kanishk28@cluster0.ewm5wgx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const eventgeocollection = client.db("test").collection("geo.events");
    let evgeoobj = [
      {
        GeoID:'RJ06BHL-GEOEV-001',
        EventID: 'RJ06BHL-EV001',
        Address: {
          Line1Name: 'Opposite Kanak Petroleum',
              Line2Street: 'Near L2C',
              Line3Locality: 'Shastri Nagar',
        },
        Coordinates: {
          Latitude: 25.325116,
          Longitude: 74.648691,
        },
        Zone: {
          Zone: 'RJ06BHL',
              ZonalArea: 'BHILWARA',
              Pincode: 311001,
        },
        Accuracy: null,
      }
    ];
    await eventgeocollection.insertMany(evgeoobj);
    console.log("GEO.EVENT Updated successfully");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

geo_ev_seed();
*/}