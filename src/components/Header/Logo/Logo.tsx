import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link to="/" className="hover:text-white/70">
            <p className="font-bold">SD Steakhouse</p>
        </Link>
    );
}
