import React from "react";
import { MdOutlineScience, MdAutorenew } from "react-icons/md";
import { BsFillLightningFill } from "react-icons/bs";

export default function Product() {
	return (
		<section className="bg-alternative min-h-screen p-10 flex justify-center items-center flex-col gap-y-28">
			<div>
				<h1 className="text-5xlp-2 text-center font-bold text-white drop-shadow-lg">
					Benefícios exclusivos da Pomada Cicabrev.
				</h1>
				<h2 className="text-2xl text-center text-gray-400 drop-shadow-md mt-6">
					Veja o que a cicabrev faz de tão especial.
				</h2>
			</div>

			<div className=" max-w-[90rem] grid gap-20 grid-cols-3 sm:grid-cols-1 lg:text-center [&>div]:flex-col [&>div]:flex [&>div]:justify-start [&>div]:items-center [&>div]:gap-6 ">
				<div>
					<BsFillLightningFill className="text-5xl text-quaternary" />
					<h1 className="font-bold lg: sm:text-4xl lg:text-5xl text-quaternary">Cicatrização rápida de feridas</h1>
					<h2 className="text-gray-300">
						Cicabrev acelera o processo de cicatrização de feridas, proporcionando alívio rápido e
						promovendo a regeneração da pele danificada.
					</h2>
				</div>
				<div>
					<MdAutorenew className="text-5xl text-quaternary" />
					<h1 className="font-bold sm:text-4xl lg:text-5xl  text-quaternary">Renovação profunda da pele</h1>
					<h2 className="text-gray-300">
						Cicabrev acelera o processo de cicatrização de feridas, proporcionando alívio rápido e
						promovendo a regeneração da pele danificada.
					</h2>
				</div>
				<div>
					<MdOutlineScience className="text-5xl text-quaternary" />
					<h1 className="font-bold sm:text-4xl lg:text-5xl  text-quaternary">Comprovado cientificamente</h1>
					<h2 className="text-gray-300">
						A eficácia do Cicabrev é respaldada por estudos científicos rigorosos, conduzidos pela
						universidade estadual do ceará, comprovando seus benefícios excepcionais.
					</h2>
				</div>
			</div>
		</section>
	);
}
