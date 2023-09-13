import React from "react";
import { MdOutlineScience, MdAutorenew } from "react-icons/md";
import { BsFillLightningFill } from "react-icons/bs";
import { motion, Variants } from "framer-motion";

const mastheadVariants: Variants = {
	hidden: {},
	visible: {
		transition: {
			when: "beforeChildren",
			type: "tween",
			duration: 0.5,
			delayChildren: 0.3,
			staggerChildren: 0.3,
		},
	},
};
const itemVariants: Variants = {
	hidden: {
		y: 30,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 50,
		},
	},
};

export default function Product() {
	return (
		<section className="bg-alternative min-h-screen p-5 flex justify-center items-center flex-col gap-y-28">
			<motion.div
				variants={mastheadVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
			>
				<motion.h1
					variants={itemVariants}
					className="text-4xl sm:text-5xl p-2 text-center font-bold text-white drop-shadow-lg"
				>
					Benefícios exclusivos da Pomada Cicabrev.
				</motion.h1>
				<motion.h2
					variants={itemVariants}
					className="text-2xl text-center text-gray-400 drop-shadow-md mt-6"
				>
					Veja o que a cicabrev faz de tão especial.
				</motion.h2>
			</motion.div>

			<motion.div
				variants={mastheadVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className=" max-w-[90rem] grid gap-20 grid-cols-1 md:grid-cols-3 text-center [&>div]:flex-col [&>div]:flex [&>div]:justify-start [&>div]:items-center [&>div]:gap-6 "
			>
				<motion.div variants={itemVariants}>
					<BsFillLightningFill className="text-5xl text-quaternary" />
					<h1 className="font-bold text-3xl lg:text-4xl  text-quaternary">
						Cicatrização rápida de feridas
					</h1>
					<h2 className="text-gray-300">
						Cicabrev acelera o processo de cicatrização de feridas, proporcionando alívio rápido e
						promovendo a regeneração da pele danificada.
					</h2>
				</motion.div>
				<motion.div variants={itemVariants}>
					<MdAutorenew className="text-5xl text-quaternary" />
					<h1 className="font-bold text-3xl lg:text-4xl   text-quaternary">
						Renovação profunda da pele
					</h1>
					<h2 className="text-gray-300">
						Cicabrev acelera o processo de cicatrização de feridas, proporcionando alívio rápido e
						promovendo a regeneração da pele danificada.
					</h2>
				</motion.div>
				<motion.div variants={itemVariants}>
					<MdOutlineScience className="text-5xl text-quaternary" />
					<h1 className="font-bold text-3xl lg:text-4xl   text-quaternary">
						Comprovado cientificamente
					</h1>
					<h2 className="text-gray-300">
						A eficácia do Cicabrev é respaldada por estudos científicos rigorosos, conduzidos pela
						universidade estadual do ceará, comprovando seus benefícios excepcionais.
					</h2>
				</motion.div>
			</motion.div>
		</section>
	);
}
