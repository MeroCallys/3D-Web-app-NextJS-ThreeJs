"use client";
import React, { createContext, useContext, useMemo, useReducer } from "react";
import { Vector3 } from "three";
import {
  initialValue,
  reducer,
  REDUCER_ACTION_TYPE,
  type StateProps,
} from "./cameraReducer";

interface CameraContextProviderProps extends StateProps {
  setCamera: (actionType: string) => StateProps | undefined;
}
export const CameraContext = createContext<
  CameraContextProviderProps | undefined
>(undefined);

export default function CameraContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const setCamera = (actionType: string) => {
    const type = actionType;
    switch (type) {
      case REDUCER_ACTION_TYPE.FRONT:
        dispatch({ type, payload: { ...state, position: [0, 0, 10] } });
        break;
      case REDUCER_ACTION_TYPE.REAR:
        dispatch({ type, payload: { ...state, position: [0, 0, -10] } });
        break;
      case REDUCER_ACTION_TYPE.LEFT:
        dispatch({ type, payload: { ...state, position: [-10, 0, 0] } });
        break;
      case REDUCER_ACTION_TYPE.RIGHT:
        dispatch({ type, payload: { ...state, position: [10, 0, 0] } });
        break;
      case REDUCER_ACTION_TYPE.TOP:
        dispatch({ type, payload: { ...state, position: [0, 10, 0] } });
        break;
      case REDUCER_ACTION_TYPE.BOTTOM:
        dispatch({ type, payload: { ...state, position: [0, -10, 0] } });
        break;
      default:
        return state;
    }
  };

  const message = "Hello World";

  const value = useMemo(
    () => ({
      fov: state.fov,
      near: state.near,
      far: state.far,
      position: state.position,
      setCamera,
      message,
    }),
    [state]
  );

  return (
    <CameraContext.Provider value={value}>{children}</CameraContext.Provider>
  );
}

export function useCameraContext() {
  const context = useContext(CameraContext);

  if (context === undefined)
    throw new Error(
      "useCameraContext can only be used inside the CameraContextProvider components"
    );
  else return context;
}
