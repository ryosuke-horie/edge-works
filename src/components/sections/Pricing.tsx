import Button from "../ui/Button";

function PricingFeature({ text }: { text: string }) {
	return (
		<li className="flex items-start">
			<svg
				className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M5 13l4 4L19 7"
				/>
			</svg>
			<span className="text-gray-600">{text}</span>
		</li>
	);
}

export default function Pricing() {
	const features = [
		"最大5ページの制作",
		"ドメイン・サーバー費用込み",
		"SSL証明書対応",
		"保守・運用サポート",
	];

	return (
		<section id="pricing" className="py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-gray-900">
						シンプルな料金プラン
					</h2>
					<p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
						わかりやすい月額制でウェブサイトを持てます
					</p>
				</div>

				<div className="max-w-lg mx-auto">
					<div className="bg-white rounded-2xl shadow-xl overflow-hidden">
						<div className="px-8 py-12">
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								ベーシックプラン
							</h3>
							<div className="flex items-baseline mb-8">
								<span className="text-5xl font-bold text-sky-600">¥3,000</span>
								<span className="text-xl text-gray-500 ml-1">/月</span>
							</div>

							<ul className="space-y-4 mb-10">
								{features.map((feature, index) => (
									<PricingFeature key={index} text={feature} />
								))}
							</ul>

							<Button href="#contact" className="w-full justify-center">
								今すぐ相談する
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
