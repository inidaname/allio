import React, { FunctionComponent, ReactElement } from "react";
import { PlanProps } from "../types";


const PlanItem: FunctionComponent<PlanProps> = ({plan, editPlanItem, deletePlanItem}: PlanProps): ReactElement => {
  return (
    <div>
      <div>{plan.text}</div>
      <div>
        <i>
          <button onClick={() => editPlanItem(plan)}>
            Edit
          </button>
        </i>
        <i>
          <button onClick={() => deletePlanItem(plan)}>
            Del
          </button>
        </i>
      </div>
    </div>
  );
};

export default PlanItem;
