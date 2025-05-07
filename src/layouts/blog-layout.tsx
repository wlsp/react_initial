import Title from "@/components/ui/title";
import LayoutContainer from "@/components/ui/layout-container";
import {Outlet} from "react-router-dom";

const BlogLayout = () => {
    return (
        <LayoutContainer>
            <Title>Blog Layout</Title>
            <Outlet/>
        </LayoutContainer>
    );
};

export default BlogLayout;