"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, scroll } from "framer-motion";

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const { scrollYProgress } = useScroll();

	scrollYProgress.on("change", (v) => {
		if (v > 0.05) {
			setIsScrolled(true);
		} else setIsScrolled(false);
	});

	return (
		<nav
			className={`transition-all duration-300 flex z-10 top-0 justify-center sticky -mb-[5.1rem] ${
				isScrolled && "backdrop-blur-xl drop-shadow-md"
			}`}
		>
			<div className="w-full max-w-[100rem] bg-transparent text-white flex justify-around items-center p-5">
				<a className="text-xl font-bold">Cicabrev</a>
				<ul className="flex gap-12 flex-row items-center [&>li]:transition-all hover:[&>li]:text-gray-300">
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
			</div>
		</nav>
	);
}
