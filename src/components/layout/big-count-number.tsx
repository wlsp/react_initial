import {CountType} from "@/types";

const BigCountNumber = ({ count } : CountType) => {
    return (
        <p className="text-2xl font-bold m-4">
            <span className="prefix">counting:</span> {count}
        </p>
    )
}

export default BigCountNumber;