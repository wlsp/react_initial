import Counter from "@/components/layout/counter";
import LayoutContainer from "@/components/ui/layout-container";
import {HeadingTag} from "@/types";
import Title from "@/components/ui/title";

const counterPage = () => {
    return(
        <LayoutContainer>
            <Title as={HeadingTag.h3}>Counter Page</Title>
            <div className={"flex flex-col items-center justify-center mt-8 flex-1"}>
                <Counter />
            </div>
        </LayoutContainer>
    )
}

export default counterPage;