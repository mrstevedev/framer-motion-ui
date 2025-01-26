import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Banner() {
    return (
        <div className="w-full h-265 overflow-hidden rounded-xl bg-[url(/steak1.jpg)] bg-cover bg-center relative">
            <motion.h1
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="p-4 text-4xl text-white font-black lg:absolute lg:right-26 lg:top-26"
            >
                San Diego Steaks <span className="love-light">&</span> Raw Milk
            </motion.h1>
            <motion.p
                initial={{ x: 25, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="p-4 text-md text-white font-bold lg:absolute lg:right-26 lg:top-36"
            >
                Your <span className="font-black underline">number one</span> source for meat{" "}
                <span className="love-light">&</span> raw milk in San Diego, California
            </motion.p>

            <Link to="/shop">
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1, backgroundColor: "thistle", color: "black" }}
                    className="text-center cursor-pointer font-black w-[130px] absolute right-32 top-52 bg-white text-black py-2 px-4 rounded-3xl"
                >
                    Shop Now
                </motion.button>
            </Link>
        </div>
    );
}
