import {Outlet} from "react-router";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import navigation from "../../data/navigation.json";
import ErrorFallback from "@/components/ui/error-fallback";
import ErrorBoundary from "@/lib/utils/boundaries/error-boundary";

const RootLayout = () => {
    const navItems = navigation.navItems;
    return (
        <>
        <ErrorBoundary fallback={<ErrorFallback />}>
            <header className="h-16 bg-gray-100">
                <Navbar navItems={navItems}/>
            </header>
        </ErrorBoundary>
            <main className="flex flex-col max-w-7xl mx-auto min-h-[calc(100dvh-128px)]">
                <Outlet/>
            </main>
            <Footer company="wlsp.tech"/>
        </>
    )
}

export default RootLayout;