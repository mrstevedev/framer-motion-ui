import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="p-4 bg-black text-white fixed bottom-0 w-full flex justify-between text-xs uppercase">
            <p>&copy; {new Date().getFullYear()} SD Steakhouse</p>
            <p>
                UI Developed by{" "}
                <Link to="https://stevenpulido.netlify.app/" target="_blank" className="font-bold text-slate-500">
                    SP
                </Link>
            </p>
        </footer>
    );
}
