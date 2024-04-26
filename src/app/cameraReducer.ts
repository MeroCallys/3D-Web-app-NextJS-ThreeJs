import { Vector3 } from "@react-three/fiber";

export interface StateProps {
  fov: number;
  near: number;
  far: number;
  position: Vector3;
}

export interface ActionProps {
  type: string;
  payload: StateProps;
}

export const initialValue: StateProps = {
  fov: 100,
  near: 0.1,
  far: 200,
  position: [0, 0, 5],
};

export const REDUCER_ACTION_TYPE = {
  FRONT: "FRONT",
  REAR: "REAR",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
  TOP: "TOP",
  BOTTOM: "BOTTOM",
};

export const reducer = (state: StateProps, action: ActionProps) => {
  const { type, payload } = action;
  switch (type) {
    case REDUCER_ACTION_TYPE.FRONT:
      console.log(REDUCER_ACTION_TYPE.FRONT);
      return {
        ...state,
        position: payload.position,
      };
    case REDUCER_ACTION_TYPE.REAR:
      console.log(REDUCER_ACTION_TYPE.FRONT);
      return {
        ...state,
        position: payload.position,
      };

    default:
      return state;
  }
};
