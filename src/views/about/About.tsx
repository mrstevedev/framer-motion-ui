import { Fragment } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "motion/react";
import AboutBanner from "@/components/Banner/AboutBanner";

export default function About() {
    const [blur, setBlur] = useState("4px");
    const containerRef = useRef(null);
    const containerRef2 = useRef(null);
    const mainControls = useAnimation();
    const isInView = useInView(containerRef, { once: true });
    const isInView2 = useInView(containerRef2, { once: true });

    useEffect(() => {
        if (isInView || isInView2) mainControls.start("visible");
    }, [isInView, isInView2, mainControls]);

    setTimeout(() => setBlur("0px"), 1000);

    return (
        <Fragment>
            <section className="lg:flex mb-16 mt-18">
                <div className="lg:w-[50%] lg:p-16">
                    <motion.h1 initial={{ y: 5, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="font-black text-lg">
                        About Us
                    </motion.h1>
                    <p className="mb-6 leading-8">
                        Welcome to [<strong>SD Steaks & Raw Milk</strong>], your local source for premium steaks and raw milk in
                        the heart of San Diego. We are a family-owned business dedicated to providing the finest, sustainably
                        sourced meats and dairy straight from local farms to your table. Whether you're a steak connoisseur or
                        someone seeking the pure goodness of raw milk, we’re here to offer top-quality products that support both
                        your health and our community.
                    </p>

                    <h2 className="font-black text-lg">Our Story</h2>
                    <p className="mb-3 leading-8">
                        Founded by a team of passionate food lovers and advocates for clean, honest food, we set out to bring
                        something special to San Diego: steaks that are juicy, tender, and full of flavor, paired with the
                        wholesome, unprocessed goodness of raw milk. We partner with local ranches and dairies that share our
                        commitment to ethical practices, pasture-based farming, and hormone-free products.
                    </p>
                    <p className="mb-3 leading-8">
                        We believe in a direct connection between the farmer and the consumer. That’s why we work closely with
                        small, sustainable farms that prioritize animal welfare and the environment, ensuring that every cut of
                        steak and every bottle of milk is crafted with care and respect for the land.
                    </p>
                </div>
                <AboutBanner blur={blur} image="about_img.jpg" />
            </section>
            <section className="lg:flex mt-46">
                <AboutBanner blur={blur} image="about_img2.jpg" />
                <div className="lg:w-[40%] lg:p-16">
                    <motion.h1 className="font-black text-lg">What We Offer</motion.h1>
                    <p className="mb-6 leading-8">
                        <strong>Premium Steaks:</strong> From mouth-watering ribeyes to perfectly marbled filets, we offer a
                        variety of cuts sourced from grass-fed, free-range cattle. Our steaks are dry-aged to perfection and ready
                        to impress your taste buds.
                    </p>
                    <p className="mb-3 leading-8">
                        <strong>Raw Milk:</strong> Our raw milk is non-homogenized, minimally processed, and packed with the
                        natural nutrients and enzymes that pasteurization can strip away. Delivered fresh from local dairies that
                        pride themselves on ethical and sustainable farming practices, it’s as close to nature as you can get.
                    </p>

                    <h2 className="font-black text-lg">Our Story</h2>
                    <p className="mb-3 leading-8">
                        Founded by a team of passionate food lovers and advocates for clean, honest food, we set out to bring
                        something special to San Diego: steaks that are juicy, tender, and full of flavor, paired with the
                        wholesome, unprocessed goodness of raw milk. We partner with local ranches and dairies that share our
                        commitment to ethical practices, pasture-based farming, and hormone-free products.
                    </p>
                    <p className="mb-3 leading-8">
                        We believe in a direct connection between the farmer and the consumer. That’s why we work closely with
                        small, sustainable farms that prioritize animal welfare and the environment, ensuring that every cut of
                        steak and every bottle of milk is crafted with care and respect for the land.
                    </p>
                </div>
            </section>
            <div className="lg:flex" ref={containerRef}>
                <div className="lg:w-[800px] lg:p-16 m-auto">
                    <motion.h1
                        initial="hidden"
                        animate={mainControls}
                        variants={{
                            hidden: { y: 5, opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }}
                        transition={{ delay: 0.8 }}
                        className="font-black text-2xl mb-3 text-center"
                    >
                        Why Choose Us?
                    </motion.h1>
                    <p className="mb-6 leading-8">
                        <strong>Locally Sourced:</strong> Every product we sell comes from trusted farms right here in California,
                        supporting local agriculture and reducing the carbon footprint of your food.
                    </p>
                    <p className="mb-3 leading-8">
                        <strong>Quality You Can Taste:</strong> From the richness of our grass-fed steaks to the creamy,
                        full-bodied taste of our raw milk, you’ll taste the difference in every bite and sip.
                    </p>

                    <h2 className="font-black text-lg">Our Story</h2>
                    <p className="mb-3 leading-8">
                        <strong>Sustainability Matters:</strong> We believe in giving back to the land and supporting sustainable
                        farming practices that respect both the environment and the animals.
                    </p>
                    <p className="mb-3 leading-8">
                        We believe in a direct connection between the farmer and the consumer. That’s why we work closely with
                        small, sustainable farms that prioritize animal welfare and the environment, ensuring that every cut of
                        steak and every bottle of milk is crafted with care and respect for the land.
                    </p>
                </div>
            </div>
            <div className="lg:flex pb-36" ref={containerRef2}>
                <div className="lg:w-[800px] lg:p-16 m-auto">
                    <motion.h1
                        initial="hidden"
                        animate={mainControls}
                        variants={{
                            hidden: { y: 5, opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }}
                        transition={{ delay: 0.8 }}
                        className="font-black text-2xl mb-3 text-center"
                    >
                        Join Us in the Pursuit of Great Food
                    </motion.h1>
                    <p className="mb-6 leading-8">
                        At [<strong>SD Steaks & Raw Milk</strong>], we don’t just sell food—we sell an experience. Whether you’re
                        stocking up for a backyard barbecue, creating a gourmet meal, or enjoying a refreshing glass of raw milk,
                        we’re here to help you make every meal unforgettable.
                    </p>
                    <p className="mb-3 leading-8">
                        Thank you for choosing us to be a part of your table. We look forward to serving you and your family for
                        many years to come.
                    </p>

                    <h2 className="font-black text-lg">Contact Us:</h2>
                    <p className="mb-3 leading-8">
                        Have questions or need a recommendation? Don’t hesitate to reach out! We’d love to help you discover the
                        perfect steak or answer any questions about our raw milk.
                    </p>
                    <p className="mb-3 leading-8">
                        We believe in a direct connection between the farmer and the consumer. That’s why we work closely with
                        small, sustainable farms that prioritize animal welfare and the environment, ensuring that every cut of
                        steak and every bottle of milk is crafted with care and respect for the land.
                    </p>
                </div>
            </div>
        </Fragment>
    );
}
