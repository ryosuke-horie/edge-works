interface FeatureCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
	return (
		<div className="bg-white rounded-xl shadow-md p-8 transition-all hover:shadow-lg">
			<div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-6">
				{icon}
			</div>
			<h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
			<p className="text-gray-600">{description}</p>
		</div>
	);
}

export default function Features() {
	const features = [
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6 text-sky-600"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			),
			title: "初期費用0円",
			description:
				"ドメイン取得からホスティングまで月額に含まれています。初期費用を抑えてビジネスをスタートできます。",
		},
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6 text-sky-600"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
					/>
				</svg>
			),
			title: "オリジナルデザイン",
			description:
				"テンプレートではない、あなたのビジネスに合わせたカスタムデザインで他社との差別化を図ります。",
		},
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6 text-sky-600"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
					/>
				</svg>
			),
			title: "モバイルファースト",
			description:
				"スマートフォンでの表示を最適化し、どのデバイスからでも快適にアクセスできるデザインを提供します。",
		},
	];

	return (
		<section id="features" className="py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-gray-900">サービスの特徴</h2>
					<p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
						あなたのビジネスに最適なウェブサイトを実現する３つの強み
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					{features.map((feature) => (
						<FeatureCard key={feature.title} {...feature} />
					))}
				</div>
			</div>
		</section>
	);
}
