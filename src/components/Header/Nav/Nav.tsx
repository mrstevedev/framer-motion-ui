import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingBag } from "react-icons/md";

export type NavProps = {
    tabs: { id: string; label: string }[];
    activeTab: string;
    onTabClick: (tabId: string) => void;
};

export default function Nav({ tabs, activeTab, onTabClick }: NavProps) {
    return (
        <div className="flex z-10 capitalize items-center">
            <div className="mx-2">
                {tabs.map((tab) => (
                    <Link
                        key={tab.id}
                        to={tab.id}
                        onClick={() => onTabClick(tab.id)}
                        className={`${
                            activeTab === tab.id ? "" : "hover:text-white/60"
                        } relative rounded-full px-2 py-1.5 text-xs font-medium text-white transition focus-visible:outline-2`}
                        style={{
                            WebkitTapHighlightColor: "transparent"
                        }}
                    >
                        {activeTab === tab.id && (
                            <motion.span
                                layoutId="bubble"
                                className="absolute inset-0 z-10 bg-white mix-blend-difference rounded-3xl"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            ></motion.span>
                        )}
                        {tab.label}
                    </Link>
                ))}
            </div>
            <Link to="#" className="relative">
                {/* <span className="absolute left-4 top-0 bg-fuchsia-300 w-2 h-2 inset-0 z-10 mix-blend-difference rounded-full"></span> */}
                <MdOutlineShoppingBag className="w-6 h-6 hover:text-white/60" />
            </Link>
        </div>
    );
}
