import LayoutContainer from "@/components/ui/layout-container";
import Title from "@/components/ui/title";
import {HeadingTag} from "@/types";
import {Link, Outlet} from "react-router-dom";

const RickAndMortyPage = () => {
    return (
        <LayoutContainer>
            <Title as={HeadingTag.h3}>Rick and Morty Page</Title>
            <Link to={"./characters"}>
                Here goes the characters
            </Link>
            <Outlet />
        </LayoutContainer>
    )
}

export default RickAndMortyPage;