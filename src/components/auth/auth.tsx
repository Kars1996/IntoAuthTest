"use client";
import Link from "next/link";
import { useState } from "react";
import { FaGoogle, FaMoon, FaSun } from "react-icons/fa";

/*
Copyright © 2024 Kars (github.com/kars1996)

Not to be shared, replicated or used without prior consent.
Contact Kars for any enquiries
*/

const fonts: Record<string, string> = {
    overpass: "font-sans",
    inter: "font-mono",
    playfair: "font-serif",
    default: "",
};

const colors: string[] = [
    "bg-blue-500 hover:bg-blue-600",
    "bg-purple-500 hover:bg-purple-600",
    "bg-orange-500 hover:bg-orange-600",
    "bg-green-500 hover:bg-green-600",
    "bg-yellow-500 hover:bg-yellow-600",
];

const rounding: Record<string, string> = {
    none: "rounded-none",
    small: "rounded",
    medium: "rounded-md",
    large: "rounded-lg",
    full: "rounded-full",
};

export default function AuthComponent() {
    const [font, setFont] = useState<string>("default");
    const [color, setColor] = useState<string>(colors[0]);
    const [dark, setDark] = useState<boolean>(true);
    const [radius, setRadius] = useState<string>("medium");

    function LoginForm() {
        return (
            <div
                className={`rounded-xl p-8 shadow-md ${fonts[font]} ${dark ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}
            >
                <div className="mb-6 flex items-center">
                    <div
                        className={`h-8 w-8 ${color.split(" ")[0]} mr-3 ${rounding[radius]}`}
                    ></div>
                    <span className="text-xl font-bold">SuperApp</span>
                </div>
                <h2 className="mb-6 text-2xl font-bold">Sign in to SuperApp</h2>
                <form>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className={`mb-2 block text-sm font-medium ${dark ? "text-gray-300" : "text-gray-600"}`}
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className={`w-full border p-2 ${rounding[radius]} ${dark ? "border-gray-600 bg-gray-700" : "border-gray-300 bg-white"}`}
                            placeholder="Your email address"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className={`mb-2 block text-sm font-medium ${dark ? "text-gray-300" : "text-gray-600"}`}
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className={`w-full border p-2 ${rounding[radius]} ${dark ? "border-gray-600 bg-gray-700" : "border-gray-300 bg-white"}`}
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className={`w-full px-4 py-2 ${rounding[radius]} text-white ${color}`}
                    >
                        Continue
                    </button>
                    <div
                        className={`text-center text-sm ${dark ? "text-gray-400" : "text-gray-500"} my-4`}
                    >
                        OR
                    </div>
                    <button
                        className={`w-full border px-4 py-2 ${rounding[radius]} flex items-center justify-center hover:bg-gray-900 ${dark ? "border-gray-600 text-gray-300" : "border-gray-300"}`}
                    >
                        <FaGoogle className="mr-2 size-4" />
                        Continue with Google
                    </button>
                </form>
                <p
                    className={`mt-6 text-center text-sm ${dark ? "text-gray-400" : "text-gray-600"}`}
                >
                    Don’t have an account?{" "}
                    <Link
                        href="#"
                        className={`hover:underline ${color.replace("bg-", "text-").split(" ")[0]}`}
                    >
                        {" "}
                        Sign up
                    </Link>
                </p>
            </div>
        );
    }

    return (
        <div className={`min-h-screen w-full p-8`}>
            <div className="mx-auto max-w-md">
                <div className="mb-8 flex flex-wrap justify-center gap-4">
                    <div className={`rounded-lg bg-gray-800 p-4`}>
                        <h3 className="mb-2 font-bold">Appearance</h3>
                        <div className="flex gap-2">
                            {Object.keys(fonts).map((fontKey) => (
                                <button
                                    key={fontKey}
                                    onClick={() => setFont(fontKey)}
                                    className="rounded-lg bg-gray-700 px-3 py-1 text-white hover:bg-gray-600"
                                >
                                    {fontKey}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className={`rounded-lg bg-gray-800 p-4`}>
                        <h3 className="mb-2 font-bold">Color</h3>
                        <div className="flex gap-2">
                            {colors.map((colorOption, index) => (
                                <button
                                    key={index}
                                    onClick={() => setColor(colorOption)}
                                    className={`h-8 w-8 ${colorOption.split(" ")[0]} rounded-lg`}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={`rounded-lg bg-gray-800 p-4`}>
                        <h3 className="mb-2 font-bold">Border Radius</h3>
                        <div className="flex gap-2">
                            {Object.keys(rounding).map((radiusKey) => (
                                <button
                                    key={radiusKey}
                                    onClick={() => setRadius(radiusKey)}
                                    className={`rounded-lg bg-gray-700 px-3 py-1 text-white ${radius === radiusKey ? "bg-blue-500" : "bg-gray-600"}`}
                                >
                                    {radiusKey}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className={`rounded-lg bg-gray-800 p-4`}>
                        <h3 className="mb-2 font-bold">Mode</h3>
                        <button
                            onClick={() => setDark(!dark)}
                            className={`flex items-center rounded-lg px-4 py-2`}
                        >
                            {dark ? (
                                <FaSun className="mr-2" />
                            ) : (
                                <FaMoon className="mr-2" />
                            )}
                            {dark ? "Light" : "Dark"}
                        </button>
                    </div>
                </div>
                <LoginForm />
            </div>
        </div>
    );
}
