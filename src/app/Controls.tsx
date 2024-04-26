"use client";
import React, { useContext } from "react";
import { CameraContext } from "./CameraContextProvider";
import { REDUCER_ACTION_TYPE } from "./cameraReducer";

export default function Controls() {
  const cameraContext = useContext(CameraContext);
  return (
    <>
      <div className="absolute z-10 top-3 flex gap-3 justify-around p-2">
        <button
          onClick={() => cameraContext?.setCamera(REDUCER_ACTION_TYPE.FRONT)}
          className="px-6 py-2 border-gray-300 text-gray-500 border-2 rounded-md"
        >
          FRONT
        </button>
        <button
          onClick={() => cameraContext?.setCamera(REDUCER_ACTION_TYPE.REAR)}
          className="px-6 py-2 border-gray-300 text-gray-500 border-2 rounded-md"
        >
          REAR
        </button>
        <button
          onClick={() => cameraContext?.setCamera(REDUCER_ACTION_TYPE.LEFT)}
          className="px-6 py-2 border-gray-300 text-gray-500 border-2 rounded-md"
        >
          LEFT
        </button>
        <button
          onClick={() => cameraContext?.setCamera(REDUCER_ACTION_TYPE.RIGHT)}
          className="px-6 py-2 border-gray-300 text-gray-500 border-2 rounded-md"
        >
          RIGHT
        </button>
        <button
          onClick={() => cameraContext?.setCamera(REDUCER_ACTION_TYPE.TOP)}
          className="px-6 py-2 border-gray-300 text-gray-500 border-2 rounded-md"
        >
          TOP
        </button>
        <button
          onClick={() => cameraContext?.setCamera(REDUCER_ACTION_TYPE.BOTTOM)}
          className="px-6 py-2 border-gray-300 text-gray-500 border-2 rounded-md"
        >
          BOTTOM
        </button>
      </div>
    </>
  );
}
