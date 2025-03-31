import Button from "../ui/Button";

export default function Contact() {
	return (
		<section id="contact" className="py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-3xl mx-auto text-center">
					<h2 className="text-3xl font-bold text-gray-900 mb-6">
						お問い合わせ
					</h2>
					<p className="text-xl text-gray-600 mb-10">
						ウェブサイト制作についてのご質問やお見積りのご依頼は、こちらからお気軽にお問い合わせください。
					</p>

					<a
						href="mailto:info@edge-works.jp"
						className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 shadow-md transition-colors"
					>
						メールでのお問い合わせ
					</a>
				</div>
			</div>
		</section>
	);
}
