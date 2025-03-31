import Link from "next/link";

export default function Home() {
	return (
		<div className="min-h-screen">
			{/* Header */}
			<header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm py-4">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center">
						{/* Logo */}
						<div className="flex items-center">
							<span className="text-xl font-bold text-gray-900">
								Edge Works
							</span>
						</div>

						{/* Navigation */}
						<nav className="hidden md:flex space-x-10">
							<Link
								href="#features"
								className="text-gray-600 hover:text-gray-900 font-medium"
							>
								特徴
							</Link>
							<Link
								href="#flow"
								className="text-gray-600 hover:text-gray-900 font-medium"
							>
								制作の流れ
							</Link>
							<Link
								href="#pricing"
								className="text-gray-600 hover:text-gray-900 font-medium"
							>
								料金
							</Link>
							<Link
								href="#faq"
								className="text-gray-600 hover:text-gray-900 font-medium"
							>
								よくある質問
							</Link>
						</nav>

						{/* CTA Button */}
						<div className="hidden md:block">
							<Link
								href="#contact"
								className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 shadow-sm transition-colors"
							>
								お問い合わせ
							</Link>
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

			{/* Hero Section */}
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
					<div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-sky-300 to-transparent opacity-20"></div>
					<div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-sky-300 to-transparent opacity-20"></div>
					<div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-sky-300 to-transparent opacity-20"></div>
					<div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-sky-300 to-transparent opacity-20"></div>
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
								<Link
									href="#contact"
									className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 shadow-md transition-colors"
								>
									無料相談を予約する
								</Link>
								<Link
									href="#pricing"
									className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-sky-600 bg-white hover:bg-gray-50 shadow-sm transition-colors"
								>
									料金プランを見る
								</Link>
							</div>
						</div>

						{/* Right Content - Feature Boxes */}
						<div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
							<div className="col-span-2 bg-white rounded-lg shadow-md p-4 text-center">
								<h3 className="text-xl font-bold text-sky-700 mb-1">
									うれしいポイント
								</h3>
								<div className="w-12 h-1 bg-sky-500 mx-auto"></div>
							</div>

							<div className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow">
								<div className="w-10 h-10 mx-auto bg-sky-100 rounded-full flex items-center justify-center mb-3">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 text-sky-600"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
								<h4 className="font-bold text-gray-900">制作費無料</h4>
							</div>

							<div className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow">
								<div className="w-10 h-10 mx-auto bg-sky-100 rounded-full flex items-center justify-center mb-3">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 text-sky-600"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
								<h4 className="font-bold text-gray-900">1ヶ月で完成</h4>
							</div>

							<div className="col-span-2 bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow">
								<div className="w-10 h-10 mx-auto bg-sky-100 rounded-full flex items-center justify-center mb-3">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 text-sky-600"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
								<h4 className="font-bold text-gray-900">月々2000円〜</h4>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Brands Section */}
			<section className="bg-gray-50 py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<p className="text-center text-gray-600 mb-8">
						信頼されるウェブサイト制作会社
					</p>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
						{/* Replace with actual logos */}
						<div className="h-8 w-32 bg-gray-200 rounded"></div>
						<div className="h-8 w-32 bg-gray-200 rounded"></div>
						<div className="h-8 w-32 bg-gray-200 rounded"></div>
						<div className="h-8 w-32 bg-gray-200 rounded"></div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section id="features" className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold text-gray-900">サービスの特徴</h2>
						<p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
							あなたのビジネスに最適なウェブサイトを実現する３つの強み
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
						<div className="bg-white rounded-xl shadow-md p-8 transition-all hover:shadow-lg">
							<div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-6">
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
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								初期費用0円
							</h3>
							<p className="text-gray-600">
								ドメイン取得からホスティングまで月額に含まれています。初期費用を抑えてビジネスをスタートできます。
							</p>
						</div>

						<div className="bg-white rounded-xl shadow-md p-8 transition-all hover:shadow-lg">
							<div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-6">
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
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								オリジナルデザイン
							</h3>
							<p className="text-gray-600">
								テンプレートではない、あなたのビジネスに合わせたカスタムデザインで他社との差別化を図ります。
							</p>
						</div>

						<div className="bg-white rounded-xl shadow-md p-8 transition-all hover:shadow-lg">
							<div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-6">
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
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								モバイルファースト
							</h3>
							<p className="text-gray-600">
								スマートフォンでの表示を最適化し、どのデバイスからでも快適にアクセスできるデザインを提供します。
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Flow Section */}
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
							{/* Step 1 */}
							<div className="flex flex-col md:flex-row gap-8 items-start">
								<div className="flex-shrink-0">
									<div className="w-16 h-16 rounded-full bg-sky-600 text-white flex items-center justify-center text-xl font-bold">
										1
									</div>
								</div>
								<div>
									<h3 className="text-xl font-semibold text-gray-900 mb-2">
										お問い合わせ・ヒアリング
									</h3>
									<p className="text-gray-600 mb-4">
										専用フォームまたはメールで希望のコンセプト・デザインの要望をお伺いします。
										必要に応じてGoogle Meet等でオンライン打ち合わせも可能です。
									</p>
								</div>
							</div>

							{/* Step 2 */}
							<div className="flex flex-col md:flex-row gap-8 items-start">
								<div className="flex-shrink-0">
									<div className="w-16 h-16 rounded-full bg-sky-600 text-white flex items-center justify-center text-xl font-bold">
										2
									</div>
								</div>
								<div>
									<h3 className="text-xl font-semibold text-gray-900 mb-2">
										仮デザイン案の作成・提案
									</h3>
									<p className="text-gray-600 mb-4">
										ヒアリングを基に仮デザインを作成し、テスト用URLでサイトを確認いただけます。
									</p>
								</div>
							</div>

							{/* Step 3 */}
							<div className="flex flex-col md:flex-row gap-8 items-start">
								<div className="flex-shrink-0">
									<div className="w-16 h-16 rounded-full bg-sky-600 text-white flex items-center justify-center text-xl font-bold">
										3
									</div>
								</div>
								<div>
									<h3 className="text-xl font-semibold text-gray-900 mb-2">
										デザイン・コンテンツ修正
									</h3>
									<p className="text-gray-600 mb-4">
										お客様のフィードバックをもとに細部を調整し、サイトの完成度を高めていきます。
									</p>
								</div>
							</div>

							{/* Step 4 */}
							<div className="flex flex-col md:flex-row gap-8 items-start">
								<div className="flex-shrink-0">
									<div className="w-16 h-16 rounded-full bg-sky-600 text-white flex items-center justify-center text-xl font-bold">
										4
									</div>
								</div>
								<div>
									<h3 className="text-xl font-semibold text-gray-900 mb-2">
										ドメイン取得・公開
									</h3>
									<p className="text-gray-600 mb-4">
										ご希望のドメインを取得し、本番環境にサイトを公開します。
									</p>
								</div>
							</div>

							{/* Step 5 */}
							<div className="flex flex-col md:flex-row gap-8 items-start">
								<div className="flex-shrink-0">
									<div className="w-16 h-16 rounded-full bg-sky-600 text-white flex items-center justify-center text-xl font-bold">
										5
									</div>
								</div>
								<div>
									<h3 className="text-xl font-semibold text-gray-900 mb-2">
										納品・運用開始
									</h3>
									<p className="text-gray-600 mb-4">
										最短3営業日でのスピード納品も可能です（ヒアリング内容の確定状況によります）。
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Pricing Section */}
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
									<span className="text-5xl font-bold text-sky-600">
										¥3,000
									</span>
									<span className="text-xl text-gray-500 ml-1">/月</span>
								</div>

								<ul className="space-y-4 mb-10">
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
										<span className="text-gray-600">最大5ページの制作</span>
									</li>
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
										<span className="text-gray-600">
											ドメイン・サーバー費用込み
										</span>
									</li>
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
										<span className="text-gray-600">SSL証明書対応</span>
									</li>
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
										<span className="text-gray-600">保守・運用サポート</span>
									</li>
								</ul>

								<Link
									href="#contact"
									className="block w-full py-3 px-6 text-center text-white font-medium bg-sky-600 hover:bg-sky-700 rounded-lg shadow-md transition-colors"
								>
									今すぐ相談する
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
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
							<div className="bg-white rounded-xl shadow-md p-6">
								<h3 className="text-lg font-semibold text-gray-900 mb-2">
									Q. 本当に初期費用は0円ですか？
								</h3>
								<p className="text-gray-600">
									A.
									はい。ドメイン取得費・デザイン費も月額3,000円に含んでいます。
								</p>
							</div>

							<div className="bg-white rounded-xl shadow-md p-6">
								<h3 className="text-lg font-semibold text-gray-900 mb-2">
									Q. 依頼からどのくらいで公開できますか？
								</h3>
								<p className="text-gray-600">
									A. 最短3営業日〜、ヒアリングや素材準備の状況次第です。
								</p>
							</div>

							<div className="bg-white rounded-xl shadow-md p-6">
								<h3 className="text-lg font-semibold text-gray-900 mb-2">
									Q. お問い合わせフォームは設置できますか？
								</h3>
								<p className="text-gray-600">
									A.
									月額+1,000円でご利用可能です。またはFormサービスをリンクで利用すれば無料です。
								</p>
							</div>

							<div className="bg-white rounded-xl shadow-md p-6">
								<h3 className="text-lg font-semibold text-gray-900 mb-2">
									Q. 大幅なデザイン変更が必要になったら？
								</h3>
								<p className="text-gray-600">
									A. 都度見積もりいたしますが、月額自体は変わりません。
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
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

			{/* Footer */}
			<footer className="bg-gray-50 py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<div className="text-2xl font-bold mb-4 text-gray-900">
						Edge Works
					</div>
					<p className="text-gray-600">
						個人事業主のためのウェブサイト制作サービス
					</p>
				</div>
			</footer>
		</div>
	);
}
