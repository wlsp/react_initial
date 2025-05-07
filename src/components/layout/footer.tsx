import {FullYear} from "@/lib/utils";
import {FooterType} from "@/types";

const Footer = ({ company } : FooterType) => {
    return (
        <footer className="h-16 flex justify-between items-center border-t border-gray-200">
            <div className="flex w-full max-w-7xl mx-auto ">
                <small>{FullYear()} &#169; {company}</small>
            </div>
        </footer>
    )
}

export default Footer;