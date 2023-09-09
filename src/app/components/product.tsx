import React from "react";

export default function Product() {
	return (
		<section className="bg-alternative h-screen flex justify-center items-center flex-col ">
			<div className="basis-2">
				<h1 className="text-5xl p-2 text-center  text-white drop-shadow-lg">
					Benefícios da Pomada de Jucá
				</h1>
				<h2 className="text-2xl text-center text-gray-200 drop-shadow-md mt-6">
					Um breve beneficio mais geral
				</h2>
			</div>

			<div className="min-h-[20rem] w-full max-w-[100rem] grid gap-4 grid-cols-2 text-center [&>div]:flex [&>div]:justify-center [&>div]:items-center">
				<div>
					<h1>Beneficio 1</h1>
				</div>
				<div>Beneficio 2</div>
			</div>
		</section>
	);
}
