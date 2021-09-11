import React, { FunctionComponent, ReactElement } from 'react'
import PlanItem from '../components/PlanItem'
import { PlanDetail, PlanProps } from '../types'

const ListPlans: FunctionComponent<PlanProps<PlanDetail[]>> = ({plan: plans, editPlanItem, deletePlanItem}: PlanProps<PlanDetail[]>): ReactElement => {
  return (
    <div>
      <div>Todos</div>
      {plans
        // .sort((a, b) => b.created_at.localeCompare(a.created_at))
        .map((plan: PlanDetail, i: number) => (
          <PlanItem
            plan={plan}
            key={`plans-${i}`}
            deletePlanItem={deletePlanItem}
            editPlanItem={editPlanItem}
          />
        ))}
    </div>
  )
}

export default ListPlans
