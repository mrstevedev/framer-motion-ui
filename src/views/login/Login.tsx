import { useRef } from "react";
import { motion } from "motion/react";
import { MdLogin } from "react-icons/md";

export default function Login() {
    const handleOnSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <motion.h2
                        initial={{ y: 25, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-slate-400"
                    >
                        Sign in to your account
                    </motion.h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST" onSubmit={handleOnSubmit}>
                        <div>
                            <div className="mt-2">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    required
                                    placeholder="Email"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-end">
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-slate-400 hover:text-slate-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    autoComplete="current-password"
                                    required
                                    placeholder="Password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center items-center gap-2 rounded-md bg-black active:bg-black/80 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-slate-500 focus-visible:outline-2 focus-visible:outline-offset-2"
                            >
                                Sign in <MdLogin />
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-slate-400">
                        Not a member?
                        <a href="#" className="font-semibold text-slate-200 hover:text-slate-300">
                            {" "}
                            Start a 14 day free trial
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}
