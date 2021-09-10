import React from "react";
import { render, screen } from "@testing-library/react";
import PlanItem from "../components/PlanItem";

describe("Plan Item", () => {
  it("renders a plan item", () => {
    render(
      <PlanItem
        plan={{
          text: "Laundry",
          status: false,
          createdAt: "02/12/2020",
          updatedAt: "02/12/2020",
        }}
        deletePlanItem={() => {}}
        editPlanItem={() => {}}
      />
    );

    const heading = screen.getByText("Laundry");

    expect(heading).toBeInTheDocument();
  });
  it('calls the edit plan function with correct argument', () => {
    const mockEditPlan = jest.fn()
    const plan = {
      text: "Laundry",
      status: false,
      createdAt: "02/12/2020",
      updatedAt: "02/12/2020",
    }
    render(
      <PlanItem
        plan={plan}
        deletePlanItem={() => {}}
        editPlanItem={mockEditPlan}
      />
    );

    screen.getByText("Edit").click();
    expect(mockEditPlan).toBeCalledWith(plan)
  })
  it('calls the delete plan function with correct argument', () => {
    const mockDeletePlan = jest.fn()
    const plan = {
      text: "Laundry",
      status: false,
      createdAt: "02/12/2020",
      updatedAt: "02/12/2020",
    }
    render(
      <PlanItem
        plan={plan}
        deletePlanItem={mockDeletePlan}
        editPlanItem={() => {}}
      />
    );

    screen.getByText("Del").click();
    expect(mockDeletePlan).toBeCalledWith(plan)
  })
});
