import LayoutContainer from "@/components/ui/layout-container";
import Title from "@/components/ui/title";
import {Outlet, useOutletContext} from "react-router-dom";
import {CharacterProps} from "@/types";

interface CharactersContext {
    characters: CharacterProps[];
}
const RickAndMortyLayout = () => {
    const {characters} = useOutletContext<CharactersContext>();
    return (
        <LayoutContainer>
            <Title>Rick & Morty Universe</Title>
            <Outlet context={{characters}}/>
        </LayoutContainer>
    )
}

export default RickAndMortyLayout;