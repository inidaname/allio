import type { NextApiRequest, NextApiResponse } from 'next'
import { PlanDetail } from '../../types'
import plansModel from '../../models/plans'
import connectDB from '../../middleware/mongodb';

interface Data {
  plans: PlanDetail[];
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {

  if (req.method === 'POST') {
    const {text} = req.body
    const createPlans = await plansModel.create({text});
    return res.status(200).json({plans: createPlans})
  }


  if (req.method === 'DELETE') {
    const {id} = req.body
    const deletePlan = await plansModel.findByIdAndDelete(id)
    return res.status(200).json({plans: deletePlan})
  }

  if (req.method === 'PUT') {
    const {id} = req.body
    const updatePlan: any = await plansModel.findByIdAndUpdate(id, {text: req.body.text})
    return res.status(200).json({plans: updatePlan})
  }

  const getPlans = await plansModel.find();

  res.status(200).json({plans: getPlans})
}

export default connectDB(handler)