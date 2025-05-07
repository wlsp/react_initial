import {HeadingTag, TitleProps} from "@/types";

const Title = <T extends HeadingTag = HeadingTag.h1>(
    { as, children, ...rest }: TitleProps<T>
) => {
    const Component = as || HeadingTag.h1;
    return <Component {...rest}>{children}</Component>;
};

export default Title;
