import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Contact from "../components/sections/Contact";
import Flow from "../components/sections/Flow";
import Hero from "../components/sections/Hero";
import Pricing from "../components/sections/Pricing";

export default function Home() {
	return (
		<div className="min-h-screen">
			<Header />
			<main>
				<Hero />
				<Flow />
				<Pricing />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
