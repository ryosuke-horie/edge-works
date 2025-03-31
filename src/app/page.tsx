import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Brands from "../components/sections/Brands";
import Contact from "../components/sections/Contact";
import FAQ from "../components/sections/FAQ";
import Features from "../components/sections/Features";
import Flow from "../components/sections/Flow";
import Hero from "../components/sections/Hero";
import Pricing from "../components/sections/Pricing";

export default function Home() {
	return (
		<div className="min-h-screen">
			<Header />
			<main>
				<Hero />
				<Brands />
				<Features />
				<Flow />
				<Pricing />
				<FAQ />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
