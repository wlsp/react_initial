import {FC} from "react";
import {ILayoutContainer} from "@/types";
import {cn} from "@/lib/utils";

const LayoutContainer: FC<ILayoutContainer> = ({ children, className}) => {
    return (
        <div className={cn("p-6 flex flex-col flex-1", className)}>
            {children}
        </div>
    )
}

export default LayoutContainer;