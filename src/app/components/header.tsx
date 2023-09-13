"use client";
import React, { useState } from "react";
import { useScroll } from "framer-motion";
import { motion, Variants } from "framer-motion";

const headerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};
const itemVariants: Variants = {
	hidden: {
		y: -10,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 80,
		},
	},
};

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const { scrollYProgress } = useScroll();

	scrollYProgress.on("change", (v) => {
		if (v > 0.01) {
			setIsScrolled(true);
		} else setIsScrolled(false);
	});

	return (
		<header className={`flex z-10 top-0 justify-center sticky -mb-[5.1rem]`}>
			<motion.nav
				variants={headerVariants}
				initial="hidden"
				animate="visible"
				className=" w-full max-w-[100rem] z-10 bg-transparent text-white flex justify-around items-center p-5"
			>
				<motion.a variants={itemVariants} className="text-xl font-bold">
					Cicabrev
				</motion.a>
				<motion.ul
					variants={headerVariants}
					className="hidden md:flex gap-12 flex-row items-center [&>li]:transition-colors hover:[&>li]:text-gray-300"
				>
					<motion.li variants={itemVariants}>
						<a href="">INICIO</a>
					</motion.li>
					<motion.li variants={itemVariants}>
						<a href="">PRODUTO</a>
					</motion.li>
					<motion.li variants={itemVariants}>
						<a href="">SOBRE</a>
					</motion.li>
					<motion.div variants={itemVariants}>
						<button
							className="bg-primary
										rounded-full transition-all px-4 py-2 hover:scale-105 active:translate-y-1"
						>
							Encomende Agora
						</button>
					</motion.div>
				</motion.ul>
			</motion.nav>
			<div
				className={`transition-all backdrop-blur-md duration-500 flex-1 absolute w-full h-full ${
					isScrolled && "drop-shadow-lg bg-[rgba(0,0,0,0.1)]"
				}`}
			/>
		</header>
	);
}
