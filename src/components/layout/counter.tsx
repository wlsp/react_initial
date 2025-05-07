import {memo} from "react";
import BigCountNumber from "@/components/layout/big-count-number";
import Button from "../ui/button";
import Title from "@/components/ui/title";
import {useCounter} from "@/hooks/userCounter";

const Counter = memo(() => {
    const { state, dispatch } = useCounter();
    return (
        <div className="p-6 border-2 border-indigo-600 w-96 text-center">
            <Title>Counter</Title>
            <BigCountNumber count={state.count} />
            <div className="flex justify-center items-center gap-8">
                <Button className="bg-red-400 text-gray-50" onClick={() => dispatch({ type: "decrement"})}>Decrement</Button>
                <Button className="bg-green-500 text-gray-50" onClick={() => dispatch({ type: "increment"})}>Increment</Button>
            </div>
        </div>
    )
})

export default Counter;