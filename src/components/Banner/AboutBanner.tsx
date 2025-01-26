export default function AboutBanner({ image, blur }: { image: string; blur: string }) {
    console.log("blur", blur);
    return (
        <div className={`lg:w-[1160px] transition duration-500 ease-in-out hover:opacity-80 h-210 overflow-hidden rounded-xl`}>
            <img src={image} alt="sd steakhouse" className={`w-full h-full object-cover blur-[${blur}]`} />
        </div>
    );
}
