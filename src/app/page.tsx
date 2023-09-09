import Image from "next/image";
import Product from "./components/product";
import Header from "./components/header";
import Masthead from "./components/masthead copy";

export default function Home() {
	return (
		<main>
			<Header />
			<Masthead />
			<Product />
		</main>
	);
}
