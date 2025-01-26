import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Shop() {
    return (
        <div>
            <h1 className="text-2xl font-black text-center">Shop</h1>
            <section className="flex justify-center gap-4 mt-4">
                <motion.section>
                    <div className="w-[250px] h-[250px] relative">
                        <Link to="/shop/rib-eye">
                            <motion.button
                                initial={{ y: 5, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-xs px-4 z-10 absolute bg-white text-black p-2 rounded-md bottom-6 left-0 right-0 m-auto w-[100px]"
                            >
                                Buy Now
                            </motion.button>
                        </Link>
                        <img src="/steak1.jpg" className="rounded-2xl hover:opacity-80 transition duration-500 ease-in-out" />
                        <div className="flex justify-between p-2">
                            <p className="font-bold">Rib Eye</p>
                            <div className="flex gap-2">
                                <p className="text-slate-400">$12.99lbs</p>
                            </div>
                        </div>
                    </div>
                </motion.section>
                <motion.section>
                    <div className="w-[250px] h-[250px] relative">
                        <Link to="/shop/carene-asada">
                            <motion.button
                                initial={{ y: 5, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-xs px-4 z-10 absolute bg-white text-black p-2 rounded-md bottom-6 left-0 right-0 m-auto w-[100px]"
                            >
                                Buy Now
                            </motion.button>
                        </Link>
                        <img src="/about_img.jpg" className="rounded-2xl hover:opacity-80 transition duration-500 ease-in-out" />
                        <div className="flex justify-between p-2">
                            <p className="font-bold">Carne Asada</p>
                            <div className="flex gap-2">
                                <p className="text-slate-400">$12.99lbs</p>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </section>
        </div>
    );
}
