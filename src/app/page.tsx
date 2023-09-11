import Image from "next/image";
import Product from "./components/product";
import Header from "./components/header";
import Masthead from "./components/masthead";
import Footer from "./components/footer";
import Extraction from "./components/extraction";
import Science from "./components/science";

export default function Home() {
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
