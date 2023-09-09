import React from "react";
import Header from "./header";

export default function Masthead() {
	return (
		<div className="min-h-screen from-green1 to-green2 bg-gradient-to-t flex justify-center items-center">
			<div className="max-w-5xl items-center text-center flex  gap-4 flex-col">
				<h1 className="text-5xl font-bold drop-shadow-lg">
					Recupere Sua Pele com a Magia da Natureza Brasileira.
				</h1>
				<h2 className="text-gray-200 drop-shadow-md text-xl">
					Descubra a Poderosa Pomada à Base de Pau Ferro para Alívio Imediato e Cura de Feridas.
				</h2>
				<button className="px-5 py-2 mt-10 drop-shadow-md bg-primary w-fit rounded-full">
					Saiba Mais
				</button>
			</div>
		</div>
	);
}