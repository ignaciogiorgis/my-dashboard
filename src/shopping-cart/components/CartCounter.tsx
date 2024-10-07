"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import {
  addOne,
  initCounterState,
  resetCount,
  subtractOne,
} from "@/store/counter/counterSlice";
import { useEffect, useState } from "react";

interface Props {
  value?: number;
}

export interface CounteResponse {
  method: string;
  count: number;
}

const getApiCounter = async (): Promise<CounteResponse> => {
  const data = await fetch("/api/counter").then((res) => res.json());
  console.log(data);
  return data;
};

const CartCounter = ({ value = 0 }: Props) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(initCounterState(value));
  // }, [dispatch, value]);
  useEffect(() => {
    getApiCounter().then(({ count }) => dispatch(initCounterState(count)));
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => dispatch(addOne())}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => dispatch(subtractOne())}
        >
          -1
        </button>
      </div>
    </div>
  );
};

export default CartCounter;
