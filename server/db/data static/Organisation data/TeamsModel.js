const mongoose = require("mongoose");

// incomplete , need profit center teams also

// Zonal ops team Schema

const ZonalOpsTeamSchema = new mongoose.Schema({
  ID: { type: String, required: true, unique: true },
  ZoneID:{type: String},
  ZoneOrderManagement: {
    ZoneManager: [String],
    ZoneManagementL2: [String],
    ZoneManagementL1: [String],
  },
  ZoneDeliveryManagement: {
    ZoneDeliveryManager: [String],
    ZoneDeliveryL1: [String],
    ZoneDeliveryPartners: [String],
  },
  ZoneSupportManagement: {
    ZoneSupportManager: [String],
    ZoneSupportL2: [String],
    ZoneSupportL1: [String],
  },
  ZoneHRMangement:{
    ZoneHRManager: [String],
    ZoneHRL1: [String],
  },
  ZoneFinanceMangement:{
    ZoneFinanceManager: [String],
    ZoneFinanceL1: [String],
  },
});

module.exports = mongoose.model("teams.zonalops", ZonalOpsTeamSchema);

