"use client";
import Image from "next/image";
import Product from "./components/product";
import Header from "./components/header";
import Masthead from "./components/masthead";
import Footer from "./components/footer";
import Extraction from "./components/extraction";
import Science from "./components/science";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Home() {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: any) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});

	return (
		<main>
			<Header />
			<Masthead />
			<Product />
			<Extraction />
			<Science />
			<Footer />
		</main>
	);
}
