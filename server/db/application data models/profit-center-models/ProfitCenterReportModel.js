const mongoose = require("mongoose");

// Profit Center reports generation

const ProfitCenterMonthlyReportSchema = new mongoose.Schema({
    ID: { type: String, required: true, unique: true },
    ReportingMonth: { type: Date },
    MonthlyCollection: {
      TotalOrders: { type: Number },
      Offline: { type: Number },
      Online: { type: Number },
    },
    OrderIDList: [String],
    AverageOrderRating: { type: Number },
    StaffPerformance: {
      StaffMember: {
        AdminID: { type: String },
        AttendenceDays: { type: Number },
        PerformanceRating: { type: Number },
        AdditionalNotes: { type: String },
      },
    },
    ReviewsReport: {
      TicketsReceived: { type: Number },
      TicketsResolved: { type: Number },
      TicketsEscalated: { type: Number },
      FlaggedTicketsIDs: [String],
    },
    Feedback: { type: String },
  });
  
  module.exports = mongoose.model(
    "profitcenter.monthlyreports",
    ProfitCenterMonthlyReportSchema
  );
  