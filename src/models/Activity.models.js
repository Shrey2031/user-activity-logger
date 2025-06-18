import mongoose, {Schema} from "mongoose";


const activitySchema = new Schema(

    {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    action: {
      type: String,
      enum: ['login', 'logout', 'view'],
      required: true
    },
    page: {
      type: String, // optional, only used if action = 'view'
      default: null
    },
    timestamp: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);


export const Activity = mongoose.model("Activity",activitySchema);










