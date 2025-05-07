import LayoutContainer from "@/components/ui/layout-container";
import Title from "@/components/ui/title";
import {Outlet} from "react-router-dom";

const CounterLayout = () => {

    return (
        <LayoutContainer>
            <Title>Counter Layout</Title>
            <Outlet/>
        </LayoutContainer>
    )
}

export default CounterLayout;