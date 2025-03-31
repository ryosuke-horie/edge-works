import Button from "../ui/Button";

export default function Hero() {
	return (
		<section className="relative pt-24 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
			{/* Background Elements */}
			<div className="absolute inset-0 bg-sky-100 overflow-hidden">
				{/* Hexagon pattern background */}
				<div className="absolute inset-0 opacity-20">
					<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
						<defs>
							<pattern
								id="hexagons"
								width="50"
								height="43.4"
								patternUnits="userSpaceOnUse"
								patternTransform="scale(5)"
							>
								<polygon
									points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.4,43.7 12.4,29.2"
									fill="none"
									stroke="currentColor"
									strokeWidth="1"
								/>
							</pattern>
						</defs>
						<rect width="100%" height="100%" fill="url(#hexagons)" />
					</svg>
				</div>

				{/* Gradient overlays */}
				<div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-sky-300 to-transparent opacity-20" />
				<div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-sky-300 to-transparent opacity-20" />
				<div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-sky-300 to-transparent opacity-20" />
				<div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-sky-300 to-transparent opacity-20" />
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
				<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
					{/* Left Content */}
					<div className="max-w-2xl mb-12 lg:mb-0">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
							<span className="block">デザイン性抜群</span>
							<span className="block text-5xl md:text-6xl lg:text-7xl text-sky-500 my-4">
								&
							</span>
							<span className="block text-3xl md:text-4xl lg:text-5xl">
								制作費無料の月額制
								<br />
								ホームページ制作サービス
							</span>
						</h1>
						<div className="mt-10 flex flex-col sm:flex-row gap-4">
							<Button href="#contact">無料相談を予約する</Button>
							<Button href="#pricing" variant="secondary">
								料金プランを見る
							</Button>
						</div>
					</div>

					{/* Right Content - Feature Boxes */}
					<div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
						<div className="col-span-2 bg-white rounded-lg shadow-md p-4 text-center">
							<h3 className="text-xl font-bold text-sky-700 mb-1">
								うれしいポイント
							</h3>
							<div className="w-12 h-1 bg-sky-500 mx-auto" />
						</div>

						<FeatureBox icon="cost" title="制作費無料" />
						<FeatureBox icon="time" title="1ヶ月で完成" />
						<div className="col-span-2">
							<FeatureBox icon="price" title="月々2000円〜" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function FeatureBox({
	icon,
	title,
}: { icon: "cost" | "time" | "price"; title: string }) {
	const icons = {
		cost: (
			<path
				fillRule="evenodd"
				d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
				clipRule="evenodd"
			/>
		),
		time: (
			<path
				fillRule="evenodd"
				d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
				clipRule="evenodd"
			/>
		),
		price: (
			<g>
				<path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
				<path
					fillRule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
					clipRule="evenodd"
				/>
			</g>
		),
	};

	return (
		<div className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow">
			<div className="w-10 h-10 mx-auto bg-sky-100 rounded-full flex items-center justify-center mb-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5 text-sky-600"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					{icons[icon]}
				</svg>
			</div>
			<h4 className="font-bold text-gray-900">{title}</h4>
		</div>
	);
}
