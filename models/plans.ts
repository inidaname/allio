import mongoose, { Schema } from 'mongoose';
import { PlanDetail } from '../types';

const plansScheme: Schema<PlanDetail> = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

export default mongoose.model('plans', plansScheme, 'Plans');