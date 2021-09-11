import React, { FunctionComponent, ReactElement, useEffect, useRef, useState } from "react";

interface Props {
  addPlan(value: string): void;
}

const AddPlan: FunctionComponent<Props> = ({ addPlan }: Props): ReactElement => {

  const [state, setState] = useState<string>('')


  return (
    <div>
      <input
        type="text"
        placeholder="Add new todo here..."
        id="todoText"
        onChange={(event) => setState(event.target.value)}
      />
      <input
        type="button"
        value="Add Todo"
        onClick={() => {
          addPlan(state);
        }}
      />
    </div>
  );
};

export default AddPlan;
