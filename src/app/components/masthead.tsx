"use client";
import { useScroll, useTransform, motion, Variants } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

import Tube from "@/assets/tube.png";

// animations
const mastheadVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			type: "tween",
			duration: 0.5,
			staggerChildren: 0.5,
		},
	},
};
const itemVariants: Variants = {
	hidden: {
		y: 20,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 60,
		},
	},
};

export default function Masthead() {
	const { scrollYProgress } = useScroll({
		offset: ["start", "end"],
	});

	let y = useTransform(scrollYProgress, [0, 0.5], ["0%", "-50%"]);

	return (
		<section className="min-h-screen pt-20 px-5 sticky top-0 -z-10 overflow-hidden from-green1 to-green2 bg-gradient-to-t flex justify-center items-center drop-shadow-[0_5px_30px_rgba(0,0,0,0.5)]">
			<motion.div
				initial="hidden"
				animate="visible"
				variants={mastheadVariants}
				style={{ y }}
				className="max-w-5xl items-center text-center flex  gap-6 flex-col"
			>
				<motion.h1
					variants={itemVariants}
					className="text-2xl sm:text-4xl lg:text-5xl font-bold drop-shadow-lg"
				>
					Restaure Sua Pele com a Magia da <span>Natureza Brasileira.</span>
				</motion.h1>
				<motion.h2
					variants={itemVariants}
					className="text-gray-200 drop-shadow-md text-sm md:text-xl lg:text-2xl "
				>
					Descubra a Poderosa Pomada Cicabrev. Feita à Base de Pau Ferro para Alívio Imediato e Cura
					de Feridas.
				</motion.h2>
				<Image priority={true} width={700} src={Tube} alt="Tubo de pomada Cicabrev." />
			</motion.div>
		</section>
	);
}
