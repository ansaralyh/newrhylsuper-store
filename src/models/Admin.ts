import mongoose, { Schema, Document, Model } from "mongoose";

export interface IAdmin extends Document {
  email: string;
  password: string;
  name: string;
  role: "super-admin" | "admin" | "editor";
  status: "active" | "suspended";
  createdAt: Date;
}

const AdminSchema = new Schema<IAdmin>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: { 
      type: String, 
      enum: ["super-admin", "admin", "editor"], 
      default: "admin" 
    },
    status: { 
      type: String, 
      enum: ["active", "suspended"], 
      default: "active" 
    },
  },
  { timestamps: true }
);

export const Admin: Model<IAdmin> =
  mongoose.models.Admin || mongoose.model<IAdmin>("Admin", AdminSchema);
