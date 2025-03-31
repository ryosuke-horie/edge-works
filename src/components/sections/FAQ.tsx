interface FAQItemProps {
	question: string;
	answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
	return (
		<div className="bg-white rounded-xl shadow-md p-6">
			<h3 className="text-lg font-semibold text-gray-900 mb-2">
				Q. {question}
			</h3>
			<p className="text-gray-600">A. {answer}</p>
		</div>
	);
}

export default function FAQ() {
	const faqItems = [
		{
			question: "本当に初期費用は0円ですか？",
			answer: "はい。ドメイン取得費・デザイン費も月額3,000円に含んでいます。",
		},
		{
			question: "依頼からどのくらいで公開できますか？",
			answer: "最短3営業日〜、ヒアリングや素材準備の状況次第です。",
		},
		{
			question: "お問い合わせフォームは設置できますか？",
			answer:
				"月額+1,000円でご利用可能です。またはFormサービスをリンクで利用すれば無料です。",
		},
		{
			question: "大幅なデザイン変更が必要になったら？",
			answer: "都度見積もりいたしますが、月額自体は変わりません。",
		},
	];

	return (
		<section id="faq" className="py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-gray-900">よくある質問</h2>
					<p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
						お客様からいただく質問とその回答
					</p>
				</div>

				<div className="max-w-3xl mx-auto">
					<div className="space-y-8">
						{faqItems.map((item) => (
							<FAQItem key={item.question} {...item} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
