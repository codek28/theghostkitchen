const mongoose = require("mongoose");

// Support Ticket is by user to profit center for food/safety/quality issues
// Refund column is for special cases only where order manager approves of refund to customer a specific percent of bill amount
// Action Taken Type - could be repeat order / refund amount / user declined action

const UserSupportTicketSchema = new mongoose.Schema({
  TicketID: { type: String, required: true },
  OrderID: { type: String, required: true },
  TicketBy: { type: String, required: true }, // User ID
  TicketTo: { type: String, required: true }, // Profit Center ID
  TicketPriority: { type: Number, max: 5, min: 0, default: 5 }, // Food Safety incident will be of highest Priority (5) , Minor Food Spill will be rated (1)
  ComplaintText: { type: String },
  ComplaintImages: {},
  TicketFlagged:{type: Boolean, default: false}, // For Serious mistakes flagged could be turn true by organization zonal operations
  ActionTaken: {
    ActionApprovedByUser: { type: Boolean, default: false }, // Action Approval will close support ticket
    ActionType: { type: String },
    ActionNotes: { type: String },
  },
  RefundCase: {
    RefundApproval: { type: Boolean, default: false }, // Refund apporval only by order manager or higher
    RefundStatus: { type: String }, // It could be provided-on-upi/added-to-wallet/pendidng
    RefundPercentage: { type: Number },
    RefundAmount: { type: Number },
  },
  TicketResolution: {
    ResolutionComments: { type: String },
    ResolutionRatings: { type: Number, max: 5, min: 0, default: 5 },
  },
});

module.exports = mongoose.model("usersupporttickets", UserSupportTicketSchema);

// Internal Support Ticket is by profit center's merchant to ghost kitchen organization for special demand/request, issues or complaints.
// Action Taken Type - could be purchase order creation / team change requested / zonal/application team request

const InternalSupportTicketSchema = new mongoose.Schema({
  TicketID: { type: String, required: true },
  TicketBy: { type: String, required: true },
  RequestText: { type: String },
  RequestImages: {},
  ActionTaken: {
    ActionApproved: { type: Boolean, default: false }, // Action Approval will close support ticket
    ActionType: { type: String },
    ActionNotes: { type: String },
  },
  RequestResolution: {
    ResolutionComments: { type: String },
    ResolutionStatus: { type: String }, // Could be pending, fulfilled, denied
  },
});

module.exports = mongoose.model(
  "internalsupporttickets",
  InternalSupportTicketSchema
);
