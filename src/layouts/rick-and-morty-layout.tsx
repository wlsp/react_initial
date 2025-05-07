import LayoutContainer from "@/components/ui/layout-container";
import Title from "@/components/ui/title";
import {Outlet} from "react-router";

const RickAndMortyLayout = () => {
    return (
        <LayoutContainer>
            <Title>Rick & Morty Universe</Title>
            <Outlet/>
        </LayoutContainer>
    )
}

export default RickAndMortyLayout;