import {NavbarProps} from "@/types";
import {NavLink} from "react-router";
import Spinner from "@/components/ui/spinner";
import {cn} from "@/lib/utils";
import {useCounter} from "@/hooks/userCounter";

const Navbar = ({navItems}: NavbarProps) => {
    const { state } = useCounter();
    return(
        <nav className="flex gap-10 items-center py-4 bg-gray-100 max-w-7xl mx-auto h-full">
            {navItems.map((navItem) => (
                <NavLink
                    key={navItem.url}
                    to={navItem.url}>
                    {({isActive, isPending}) => (
                        <span className={cn(
                        "flex items-center gap-1 relative transition-all",
                        isActive ? "text-indigo-600 border-b-2 border-indigo-400" : "text-gray-400 border-b-2 border-transparent hover:text-indigo-500")}>
                            {navItem.link} {isPending && <Spinner />}
                            {navItem.link === "Counter" && (
                                <small className={cn(
                                    state.count !== 0 && (state.count > 0 ? "text-green-500" : "text-red-500"),
                                    "absolute font-bold rounded-full flex justify-center items-center",
                                    state.count === 0 && "text-black",
                                    "transition-all -top-2 -right-3"
                                )}>{state.count}</small>
                            )}
                        </span>
                    )}
                </NavLink>
            ))}
        </nav>
    )
}

export default Navbar;