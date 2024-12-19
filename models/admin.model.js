import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    admin_name: {
      type: String,
      required: true,
      max: 255,
      min: 6,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      max: 255,
      min: 8,
    },
    admin_role: {
      type: String,
      enum: ["super-admin", "ops-admin", "data-admin"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
