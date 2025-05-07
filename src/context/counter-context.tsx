import {CounterAction, CounterState} from "@/types";
import {createContext, Dispatch} from "react";

export const CounterContext = createContext<{
    state: CounterState,
    dispatch: Dispatch<CounterAction>;
} | undefined>(undefined);


