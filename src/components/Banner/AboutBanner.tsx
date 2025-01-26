export default function AboutBanner({ image, blur }: { image: string; blur: string }) {
    return (
        <div
            className={`lg:w-[1160px] transition duration-500 ease-in-out hover:opacity-80 h-210 overflow-hidden rounded-xl bg-[url(/${image})] bg-cover bg-center`}
            style={{ filter: `blur(${blur})` }}
        ></div>
    );
}
