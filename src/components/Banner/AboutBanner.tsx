export default function AboutBanner({ image, blur }: { image: string; blur: string }) {
    return (
        <div
            className={`lg:w-[1160px] transition duration-500 ease-in-out hover:opacity-80 h-210 overflow-hidden rounded-xl`}
            style={{
                filter: `blur(${blur})`,
                background: `url(/${image}) no-repeat center center / cover`
            }}
        ></div>
    );
}
