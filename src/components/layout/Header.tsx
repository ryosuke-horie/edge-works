import Button from "../ui/Button";

export default function Header() {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm py-4">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center">
					{/* Logo */}
					<div className="flex items-center">
						<span className="text-xl font-bold text-gray-900">Edge Works</span>
					</div>

					{/* Navigation */}
					<nav className="hidden md:flex space-x-10">
						<Button
							href="#features"
							variant="secondary"
							className="!shadow-none !px-0 !py-0"
						>
							特徴
						</Button>
						<Button
							href="#flow"
							variant="secondary"
							className="!shadow-none !px-0 !py-0"
						>
							制作の流れ
						</Button>
						<Button
							href="#pricing"
							variant="secondary"
							className="!shadow-none !px-0 !py-0"
						>
							料金
						</Button>
						<Button
							href="#faq"
							variant="secondary"
							className="!shadow-none !px-0 !py-0"
						>
							よくある質問
						</Button>
					</nav>

					{/* CTA Button */}
					<div className="hidden md:block">
						<Button href="#contact">お問い合わせ</Button>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button className="text-gray-600 hover:text-gray-900">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}
