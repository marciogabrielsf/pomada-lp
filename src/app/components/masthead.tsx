import React from "react";

export default function Masthead() {
	return (
		<div className="min-h-screen from-green1 to-green2 bg-gradient-to-t flex justify-center items-center drop-shadow-[0_5px_10px_rgba(0,0,0,0.25)]">
			<div className="max-w-5xl items-center text-center flex  gap-4 flex-col">
				<h1 className="text-5xl font-bold drop-shadow-lg">
					Restaure Sua Pele com a Magia da <span>Natureza Brasileira.</span>
				</h1>
				<h2 className="text-gray-200 drop-shadow-md text-xl">
					Descubra a Poderosa Pomada à Base de Pau Ferro para Alívio Imediato e Cura de Feridas.
				</h2>
				<button className="px-5 py-2 mt-10 drop-shadow-md bg-primary w-fit rounded-full transition-all active:translate-y-1 hover:scale-105">
					Saiba Mais
				</button>
			</div>
		</div>
	);
}
