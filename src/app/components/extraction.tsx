"use client";
import Image from "next/image";
import React from "react";
import Test from "@/assets/waves.svg";

import { images } from "@/app/config/images";

export default function Extraction() {
	return (
		<section className="min-h-screen bg-terciary p-5 pt-64 flex justify-center items-center relative">
			<Image src={Test} alt="Wave background" className="absolute top-0 w-full" />
			<div className="w-[100rem] flex flex-col gap-10">
				<div className="max-w-[50rem] flex flex-col gap-4 ">
					<h1 className="text-alternative font-bold text-3xl sm:text-6xl">
						A Jornada do Pau Ferro ao o Cicabrev.
					</h1>
					<p className="text-gray-600 text-lg sm:text-xl">
						Adentramos a rica floresta brasileira, colhendo de forma responsável as cascas da árvore
						pau ferro. Em nosso laboratório, transformamos essa essência em Cicabrev, uma pomada que
						combina sabedoria ancestral com ciência moderna. Nossa abordagem sustentável é uma
						<span className="font-bold text-gray-600">
							{" "}
							promessa de cuidado com a natureza e com a sua pele.
						</span>
					</p>
				</div>
				<div className="flex flex-row flex-wrap gap-10">
					{images.map(({ id, src, alt }) => (
						<Image
							className="rounded-xl drop-shadow-lg transition-all hover:scale-[103%] hover:drop-shadow-xl w-full sm:w-[16rem]"
							key={id}
							src={src}
							alt={alt}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
