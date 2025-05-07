import LayoutContainer from "@/components/ui/layout-container";
import {useParams} from "react-router-dom";
import Title from "@/components/ui/title";

const CharacterDetailPage = () => {
    const { id } = useParams();

    return (
        <LayoutContainer>
            Character Detail Page
            <Title>Character with the id: {id}</Title>
        </LayoutContainer>
    )
}

export default CharacterDetailPage;