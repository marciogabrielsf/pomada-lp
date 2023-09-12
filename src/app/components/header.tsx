"use client";
import React, { useState } from "react";
import { useScroll } from "framer-motion";

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const { scrollYProgress } = useScroll();

	scrollYProgress.on("change", (v) => {
		if (v > 0.01) {
			setIsScrolled(true);
		} else setIsScrolled(false);
	});

	return (
		<header
			className={`transition-all duration-300 flex z-10 backdrop-blur-xl top-0 justify-center sticky -mb-[5.1rem] ${
				isScrolled && "drop-shadow-md bg-[rgba(0,0,0,0.05)]"
			}`}
		>
			<nav className=" w-full max-w-[100rem] bg-transparent text-white flex justify-around items-center p-5">
				<a className="text-xl font-bold">Cicabrev</a>
				<ul className="hidden md:flex gap-12 flex-row items-center [&>li]:transition-all hover:[&>li]:text-gray-300">
					<li>
						<a href="">INICIO</a>
					</li>
					<li>
						<a href="">PRODUTO</a>
					</li>
					<li>
						<a href="">SOBRE</a>
					</li>
					<button
						className="bg-primary
									transition-all rounded-full px-4 py-2 hover:scale-105 active:translate-y-1 "
					>
						Encomende Agora
					</button>
				</ul>
			</nav>
		</header>
	);
}
