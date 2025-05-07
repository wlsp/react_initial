import {FC} from "react";
import {BlogPostProps, HeadingTag} from "@/types";
import dateFormat from "@/lib/utils";
import Title from "@/components/ui/title";

const BlogPost: FC<BlogPostProps> = ({title, subtitle, content, author, image, date, tags, likes}) => {
    return (
        <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden flex flex-col min-h-[600px]">
            <img className="w-full h-48 object-cover" src={image} alt="Desk workspace"/>

            <div className="flex flex-col p-4 flex-1">
                <div className="text-gray-500 text-sm mb-2">
                    <p>{dateFormat(date)}</p>
                    <div className="my-2">
                        {tags.map((tag, index) => (
                            <small
                                key={index}
                                className="ml-2 inline-block bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">{tag}</small>
                        ))}
                    </div>
                </div>

                <Title as={HeadingTag.h1} className="font-semibold text-gray-900 mb-2">{title}</Title>
                <Title as={HeadingTag.h3} className="text-gray-600 text-md mb-2 font-medium">{subtitle}</Title>

                <div className="mt-2">
                    <p>{content}</p>
                </div>

                <div className="flex justify-between items-center mt-auto">
                    <div className="flex items-center">
                        <img className="w-10 h-10 rounded-full mr-3" src={author.image} alt="Author avatar"/>
                        <div className="text-sm">
                            <p className="text-gray-900 font-semibold">{author.name}</p>
                        </div>
                    </div>

                    <small className="text-gray-500 text-sm flex items-center gap-1">
                        👍 <span>{likes}</span>
                    </small>
                </div>
            </div>
        </div>
    )
}

export default BlogPost;