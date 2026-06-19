import mongoose, { Schema, model, models } from "mongoose";

export interface IContact {
  fullName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    fullName: { type: String, required: [true, "Full name is required"], trim: true },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"],
      lowercase: true,
      trim: true,
    },
    phoneNumber: { type: String, required: [true, "Phone number is required"], trim: true },
    subject: { type: String, required: [true, "Subject is required"], trim: true },
    message: { type: String, required: [true, "Message is required"], trim: true },
  },
  { timestamps: true }
);

const Contact = models.Contact || model<IContact>("Contact", ContactSchema);
export default Contact;
