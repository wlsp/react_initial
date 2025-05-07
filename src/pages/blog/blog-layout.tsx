import Title from "@/components/ui/title";
import BlogPost from "@/components/layout/blog-post";
import blogPosts from "../../../data/blogposts.json";
import {HeadingTag} from "@/types";
import LayoutContainer from "@/components/ui/layout-container";

const BlogPage = () => {
    const posts = blogPosts;
    return (
        <LayoutContainer>
            <Title as={HeadingTag.h3}>Blog Page</Title>
            <div className="flex flex-wrap gap-x-4 gap-y-8 mt-8">
                {posts.length > 0 && (
                    posts.map(({title, subtitle, content, author, image, date, tags, likes}, index) => {
                        return (
                            <BlogPost
                                key={index}
                                title={title}
                                subtitle={subtitle}
                                content={content}
                                author={author}
                                image={image}
                                date={date}
                                tags={tags}
                                likes={likes}
                            />
                        )
                    })
                )}
            </div>
        </LayoutContainer>
    );
};

export default BlogPage;