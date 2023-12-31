"use client";
import React from "react";

export default function Science() {
	return (
		<section className="min-h-screen bg-terciary p-5 flex justify-center items-center">
			<div className="w-[100rem] ">
				<div className="max-w-[60rem] flex flex-col gap-6">
					<h1 className="text-alternative text-4xl sm:text-6xl font-bold">
						Com Respaldo Científico.
					</h1>
					<p className="text-gray-500 text-xl">
						A eficácia do Cicabrev é sólida e respaldada por estudos científicos que mostram a sua
						eficácia. Essas pesquisas comprovam os incríveis benefícios do Cicabrev no tratamento de
						feridas e cuidados com a pele.{" "}
						<span className="font-bold">
							Quando você escolhe Cicabrev, está optando por uma solução que combina a tradição
							natural com a confiabilidade da ciência.
						</span>
					</p>
					<a
						href="https://www.google.com"
						target="_blank"
						className="px-5 py-2  drop-shadow-md z-10 bg-primary w-fit rounded-full transition-all active:translate-y-1 hover:scale-105"
					>
						Acesse o artigo
					</a>
				</div>
			</div>
		</section>
	);
}
