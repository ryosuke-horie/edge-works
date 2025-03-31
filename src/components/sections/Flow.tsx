interface FlowStepProps {
	number: number;
	title: string;
	description: string;
}

function FlowStep({ number, title, description }: FlowStepProps) {
	return (
		<div className="flex flex-col md:flex-row gap-8 items-start">
			<div className="flex-shrink-0">
				<div className="w-16 h-16 rounded-full bg-sky-600 text-white flex items-center justify-center text-xl font-bold">
					{number}
				</div>
			</div>
			<div>
				<h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
				<p className="text-gray-600 mb-4">{description}</p>
			</div>
		</div>
	);
}

export default function Flow() {
	const steps = [
		{
			number: 1,
			title: "お問い合わせ・ヒアリング",
			description:
				"専用フォームまたはメールで希望のコンセプト・デザインの要望をお伺いします。必要に応じてGoogle Meet等でオンライン打ち合わせも可能です。",
		},
		{
			number: 2,
			title: "仮デザイン案の作成・提案",
			description:
				"ヒアリングを基に仮デザインを作成し、テスト用URLでサイトを確認いただけます。",
		},
		{
			number: 3,
			title: "デザイン・コンテンツ修正",
			description:
				"お客様のフィードバックをもとに細部を調整し、サイトの完成度を高めていきます。",
		},
		{
			number: 4,
			title: "ドメイン取得・公開",
			description: "ご希望のドメインを取得し、本番環境にサイトを公開します。",
		},
		{
			number: 5,
			title: "納品・運用開始",
			description:
				"最短3営業日でのスピード納品も可能です（ヒアリング内容の確定状況によります）。",
		},
	];

	return (
		<section id="flow" className="py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-gray-900">制作の流れ</h2>
					<p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
						お問い合わせから納品までの5つのステップ
					</p>
				</div>

				<div className="max-w-4xl mx-auto">
					<div className="flow-steps space-y-16">
						{steps.map((step) => (
							<FlowStep key={step.number} {...step} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
