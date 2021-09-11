import { ObjectId } from "mongoose";

export interface PlanProps<I=PlanDetail> {
  plan: I;
  editPlanItem(plan: PlanDetail): void;
  deletePlanItem(plan: PlanDetail): void;
}

export type PlanDetail = {
  _id?: ObjectId
  text: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
}
