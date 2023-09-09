import React from "react";

export default function Header() {
	return (
		<div className="m-auto max-w-[100rem] bg-transparent text-white -mb-[5.1rem] z-10 flex justify-around items-center p-5">
			<a>Cicabrev</a>
			<ul className="flex gap-12 flex-row items-center [&>li]:transition-all hover:[&>li]:text-gray-300">
				<li>
					<a href="">INICIO</a>
				</li>
				<li>
					<a href="">PRODUTO</a>
				</li>
				<li>
					<a href="">SOBRE</a>
				</li>
				<button
					className="bg-primary
                        transition-all rounded-full px-4 py-2 hover:scale-105 active:translate-y-1 "
				>
					Encomende Agora
				</button>
			</ul>
		</div>
	);
}
