import { motion } from "motion/react";
import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";

export default function ProductDetails() {
    const [blur, setBlur] = useState("4px");

    setTimeout(() => setBlur("none"), 1000);

    return (
        <div className="mt-2 p-4 flex">
            <div className={`transition duration-500 ease-in-out hover:opacity-80 blur-[${blur}] `}>
                <img src="/steak1.jpg" alt="Ribeye" className="w-[680px] rounded-xl" />
            </div>
            <div className="p-26">
                <h1 className="font-bold text-3xl">Rib Eye</h1>
                <div className="flex gap-2">
                    <p className="text-slate-400">$12.99lb.</p>
                </div>
                <div className="my-4 w-[600px]">
                    <p className="">
                        Treat yourself to the ultimate steak experience with our Premium Ribeye Steak. Sourced from the finest,
                        ethically-raised cattle, this cut is renowned for its rich marbling, ensuring each bite is bursting with
                        flavor and tenderness.
                    </p>
                    <br />
                    <p className="">
                        Perfectly balanced with a combination of lean meat and buttery fat, our ribeye is ideal for grilling,
                        searing, or roasting to your preferred doneness. Whether you're a steak enthusiast or a casual dinner
                        host, this premium cut elevates any meal.
                    </p>
                    <h2 className="font-bold mt-4">Why You'll Love It:</h2>

                    <ul className="list-disc ml-4 mt-2 leading-8">
                        <li>
                            <strong>Superior Marbling:</strong> The melt-in-your-mouth fat ensures a juicy, flavorful steak every
                            time.
                        </li>
                        <li>
                            <strong>Versatile:</strong> Grill, sear, or roast – perfect for any cooking style.
                        </li>
                        <li>
                            <strong>Ethically Raised:</strong> We prioritize quality and sustainability in every step of
                            production.
                        </li>
                        <li>
                            <strong> Ready to Cook:</strong> Flash-frozen to lock in freshness and flavor, so it arrives in
                            perfect condition.
                        </li>
                    </ul>
                    <div className="mt-4">
                        <p>
                            Each steak is carefully hand-cut and packaged to order, ensuring you receive the highest-quality
                            ribeye available.
                        </p>
                        <p className="mt-4">
                            <strong>Serving Suggestions:</strong> Pair with a glass of bold red wine, roasted vegetables, or a
                            classic baked potato for the perfect meal.
                        </p>
                        <p>Indulge in steakhouse-quality dining at home – order your Premium Ribeye Steak today!</p>
                    </div>

                    <div className="mt-4">
                        <motion.button
                            whileTap={{ scale: 0.9, backgroundColor: "whitesmoke", color: "black" }}
                            whileHover={{ scale: 1.1, backgroundColor: "thistle", color: "black" }}
                            className="flex items-center justify-center gap-1 text-center cursor-pointer font-black w-[150px] bg-white text-black py-2 rounded-lg"
                        >
                            Add to Cart <IoAddOutline />
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
}
