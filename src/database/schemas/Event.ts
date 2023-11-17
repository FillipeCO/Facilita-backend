import mongoose from "mongoose";

const Event = new mongoose.Schema({
    event_name: {
        type: String,
        required: true,
    },
    number_of_participants: {
        type: Number,
        required: true,
    },
    company_name: {
        type: String,
        required: true,
    },
    event_details: {
        type: String,
        required: true,
    },
    userIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    event_organizer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

export default mongoose.model("Event", Event);