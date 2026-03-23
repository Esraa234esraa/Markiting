import mongoose from 'mongoose';

const settingSchema = new mongoose.Schema(
  {
    companyName: { type: String, default: 'Smart Store Inc.' },
    companyEmail: { type: String, default: 'hello@smartstore.com' },
    lowStockNotifications: { type: Boolean, default: true },
    salesDigestNotifications: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default mongoose.model('Setting', settingSchema);
