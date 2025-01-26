import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <main>
            <Header />
            <div className="mt-15 p-4">
                <Outlet />
            </div>
            <Footer />
        </main>
    );
}
