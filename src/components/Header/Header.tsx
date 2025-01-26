import Logo from "@/components/Header/Logo/Logo";
import Nav from "@/components/Header/Nav/Nav";
import { useState } from "react";

const tabs = [
    { id: "", label: "Home" },
    { id: "about", label: "About" },
    { id: "shop", label: "Shop" },
    { id: "login", label: "Login" },
    { id: "register", label: "Register" }
];

export default function Header() {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    const handleTabClick = (tabId: string) => {
        console.log(tabId);
        setActiveTab(tabId);
    };

    return (
        <header className="mt-2 text-white bg-black !opacity-90 w-[98.42%] mx-4 rounded-xl lg:fixed text-sm top-0 z-10 uppercase">
            <div className="p-4 flex justify-between items-center">
                <Logo />
                <Nav tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} />
            </div>
        </header>
    );
}
