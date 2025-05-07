import {useContext} from "react";
import {CounterContext} from "@/context/counter-context";

export const useCounter = () => {
    const context = useContext(CounterContext)
    if(!context) {
        throw new Error("useUserCounter must be used within a CounterProvider")
    }
    return context;
}