"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

import Tube from "@/assets/tube.png";

export default function Masthead() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	let y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

	return (
		<div
			ref={ref}
			className="min-h-screen pt-20 overflow-hidden from-green1 to-green2 bg-gradient-to-t flex justify-center items-center drop-shadow-[0_5px_10px_rgba(0,0,0,0.25)]"
		>
			<motion.div
				style={{ y }}
				className="max-w-5xl  items-center text-center flex  gap-6 flex-col"
			>
				<h1 className="text-5xl font-bold drop-shadow-lg">
					Restaure Sua Pele com a Magia da <span>Natureza Brasileira.</span>
				</h1>
				<h2 className="text-gray-200 drop-shadow-md text-xl">
					Descubra a Poderosa Pomada Cicabrev. Feita à Base de Pau Ferro para Alívio Imediato e Cura
					de Feridas.
				</h2>
				<button className="px-5 py-2  drop-shadow-md z-10 bg-primary w-fit rounded-full transition-all active:translate-y-1 hover:scale-105">
					Saiba Mais
				</button>
				<Image priority={true} width={700} src={Tube} alt="Tubo de pomada Cicabrev." />
			</motion.div>
		</div>
	);
}
