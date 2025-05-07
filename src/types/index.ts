import {ComponentPropsWithoutRef, PropsWithChildren, ReactNode} from "react";

export enum HeadingTag {
    h1 = "h1",
    h2 = "h2",
    h3 = "h3",
    h4 = "h4",
    h5 = "h5",
    h6 = "h6",
}

export enum ButtonType {
    button = "button",
    submit = "submit",
    reset = "reset",
}

export type TitleProps<T extends HeadingTag = HeadingTag.h1> = {
    as?: HeadingTag;
    children: ReactNode;
    className?: string;
} & ComponentPropsWithoutRef<T>;

export type FooterType = {
    company: string;
}

export type CountType = {
    count: number;
}

export type ButtonProps = {
    className?: string;
    onClick?: () => void;
    type?: ButtonType
    children?: ReactNode;
    label?: string;
}

export type BlogPostProps = {
    title: string;
    subtitle: string;
    content: string;
    author: {
        name: string;
        image: string;
    };
    image: string;
    date: string;
    tags: string[];
    likes: number;
}

export interface IOrigin {
    name: string;
    url: string;
}

export interface ILocation {
    name: string;
    url: string;
}

export interface CharacterProps {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: IOrigin;
    location: ILocation;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface ICharacterCard {
    character: CharacterProps;
}

export type NavbarItem = {
    link: string;
    url: string;
}

export interface NavbarProps {
    navItems: NavbarItem[];
}

export type CounterState = {
    count: number;
}

export type CounterAction = {
    type: "increment" | "decrement";
}

export interface ILayoutContainer extends PropsWithChildren {
    className?: string;
}