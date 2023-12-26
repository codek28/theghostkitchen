const mongoose = require("mongoose");

// profit center teams system

const ProfitCenterTeamSchema = new mongoose.Schema({
    ID: { type: String, required: true, unique: true },
    CenterContact: {
      ManagerContactNumber: { type: Number },
      SupportContactNumber: { type: Number },
      OrderContactNumber: { type: Number },
    },
    CenterTeam: {
      Member: {
        Name: { type: String },
        TeamRole: { type: String },
        AdminID: { type: String },
      },
    },
  });
  
  module.exports = mongoose.model("profitcenter.teams", ProfitCenterTeamSchema);
  