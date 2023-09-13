"use client";
import Image from "next/image";
import React from "react";
import Test from "@/assets/waves.svg";

import { images } from "@/app/config/images";
import { motion, Variants } from "framer-motion";

const mastheadVariants: Variants = {
	hidden: {},
	visible: {
		transition: {
			when: "beforeChildren",
			type: "tween",
			duration: 0.5,
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};
const itemVariants: Variants = {
	hidden: {
		x: 30,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 60,
		},
	},
};

export default function Extraction() {
	return (
		<section className="min-h-screen bg-terciary p-5 pt-64 flex justify-center items-center relative">
			<Image src={Test} alt="Wave background" className="absolute top-0 w-full" />
			<motion.div
				variants={mastheadVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className="w-[100rem] flex flex-col gap-10"
			>
				<div className="max-w-[50rem] flex flex-col gap-4 ">
					<motion.h1
						variants={itemVariants}
						className="text-alternative font-bold text-3xl sm:text-6xl"
					>
						A Jornada do Pau Ferro ao o Cicabrev.
					</motion.h1>
					<motion.p variants={itemVariants} className="text-gray-600 text-lg sm:text-xl">
						Adentramos a rica floresta brasileira, colhendo de forma responsável as cascas da árvore
						pau ferro. Em nosso laboratório, transformamos essa essência em Cicabrev, uma pomada que
						combina sabedoria ancestral com ciência moderna. Nossa abordagem sustentável é uma
						<span className="font-bold text-gray-600">
							{" "}
							promessa de cuidado com a natureza e com a sua pele.
						</span>
					</motion.p>
				</div>
				<motion.div
					variants={mastheadVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="flex flex-row flex-wrap gap-10"
				>
					{images.map(({ id, src, alt }) => (
						<motion.div variants={itemVariants} key={id}>
							<Image
								className="rounded-xl drop-shadow-lg transition-all hover:scale-[103%] hover:drop-shadow-xl w-full sm:w-[16rem]"
								src={src}
								alt={alt}
							/>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</section>
	);
}
