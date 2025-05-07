import {CounterAction, CounterState} from "@/types";
import {FC, PropsWithChildren, useReducer} from "react";
import {CounterContext} from "@/context/counter-context";

const initialState: CounterState = {
    count: 0
}

function counterReducer(state: CounterState, action: CounterAction): CounterState {
    switch (action.type) {
        case "increment":
            return {
                count: state.count + 1
            }
        case "decrement":
            return {
                count: state.count - 1
            }
        default:
            return state;
    }
}

export const CounterProvider: FC<PropsWithChildren> = ({ children } ) => {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <CounterContext.Provider value={{state, dispatch}}>
            {children}
        </CounterContext.Provider>
    )
};
