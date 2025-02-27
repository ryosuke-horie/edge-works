import Image from "next/image";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      {/* ヘッダー */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div
            className="flex justify-between items-center h-16"
          >
            {/* ロゴ */}
            <div className="flex items-center">
              <span
                className="text-xl font-bold text-blue-600 dark:text-blue-400"
              >
                Edge Works
              </span>
            </div>

            {/* ナビゲーション */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                特徴
              </a>
              <a
                href="#flow"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                制作の流れ
              </a>
              <a
                href="#pricing"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                料金
              </a>
              <a
                href="#faq"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                よくある質問
              </a>
              <a
                href="#contact"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                お問い合わせ
              </a>
            </nav>

            {/* モバイルメニューボタン */}
            <div className="md:hidden">
              <button
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
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

      {/* フルページのヒーローセクション */}
      <div className="relative h-screen">
        {/* 背景画像コンテナ */}
        <div className="absolute inset-0 overflow-hidden">
          {/* 背景画像 */}
          <Image
            src="/background.webp"
            alt="Background Image"
            fill
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.65)" }}
            priority
          />

          {/* グラデーションオーバーレイ */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-black/60 mix-blend-multiply"
          ></div>
        </div>

        {/* キャッチコピー */}
        <div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        >
          <div className="mb-8">
            <div
              className="flex items-center justify-center mb-2"
            >
              <p
                className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-medium mr-3"
              >
                月額
              </p>
              <div className="flex items-center">
                <p
                  className="text-4xl sm:text-6xl lg:text-8xl font-extrabold text-blue-300 tracking-tight leading-none"
                >
                  3,000
                </p>
                <span
                  className="text-2xl sm:text-3xl lg:text-4xl text-blue-300 font-bold ml-1"
                >
                  円
                </span>
              </div>
              <p
                className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-medium ml-3"
              >
                で
              </p>
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight"
            >
              <span className="inline-block">
                ホームページを
              </span>
              <span
                className="text-blue-300 text-4xl sm:text-5xl lg:text-7xl ml-2 sm:ml-4"
              >
                制作
              </span>
            </h1>
          </div>

          <p
            className="text-lg sm:text-xl lg:text-2xl text-white/80 font-medium mb-8 max-w-2xl"
          >
            テンプレートではない、
            <span className="text-blue-300 font-semibold">
              あなただけ
            </span>
            のオリジナルデザイン
          </p>

          {/* 最短3日で納品可能のバッジ - シンプルで目立つデザイン */}
          <div
            className="mb-8 transform hover:scale-105 transition-transform"
          >
            <div
              className="bg-white/10 backdrop-blur-sm px-6 py-3 border-l-4 border-blue-300 text-white text-lg font-bold"
            >
              ⚡ 最短3日で納品可能
            </div>
          </div>

          <a
            href="#contact"
            className="inline-block bg-white text-blue-800 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-colors shadow-lg border-2 border-white"
          >
            お問い合わせはこちら
          </a>
        </div>
      </div>

      {/* その他のコンテンツは、全画面ヒーローとは別にコンテナで管理 */}
      <main
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Features Section */}
        <div
          id="features"
          className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div
            className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
          >
            <div className="text-3xl mb-4">
              💰
            </div>
            <h3 className="text-xl font-semibold mb-2">
              初期費用0円
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              ドメイン取得からホスティングまで月額に含まれています
            </p>
          </div>
          <div
            className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
          >
            <div className="text-3xl mb-4">
              🎨
            </div>
            <h3 className="text-xl font-semibold mb-2">
              オリジナルデザイン
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              テンプレートではない、あなただけのデザイン
            </p>
          </div>
          <div
            className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
          >
            <div className="text-3xl mb-4">
              📱
            </div>
            <h3 className="text-xl font-semibold mb-2">
              モバイルファースト
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              スマートフォンでの表示を最適化
            </p>
          </div>
        </div>

        {/* Production Flow Section */}
        <div
          id="flow"
          className="py-16 bg-gray-50 dark:bg-gray-900 rounded-xl"
        >
          <div
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <h2
              className="text-3xl font-bold mb-12 text-center"
            >
              制作の流れ
            </h2>

            <div className="space-y-12 max-w-2xl mx-auto">
              {/* Step 1 */}
              <div
                className="flex flex-col md:flex-row items-start md:items-center gap-6"
              >
                <div
                  className="flex-shrink-0 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto md:mx-0"
                >
                  1
                </div>
                <div
                  className="flex-grow text-center md:text-left"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    お問い合わせ・ヒアリング
                  </h3>
                  <ul
                    className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2"
                  >
                    <li>
                      専用フォーム or
                      メールで希望のコンセプト・デザインの要望を伺う
                    </li>
                    <li>
                      必要に応じてGoogle Meet等で打合せ
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div
                className="flex flex-col md:flex-row items-start md:items-center gap-6"
              >
                <div
                  className="flex-shrink-0 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto md:mx-0"
                >
                  2
                </div>
                <div
                  className="flex-grow text-center md:text-left"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    仮デザイン案の作成・提案
                  </h3>
                  <ul
                    className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2"
                  >
                    <li>
                      仮のドメイン（テスト用URL）でサイトを確認可能
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div
                className="flex flex-col md:flex-row items-start md:items-center gap-6"
              >
                <div
                  className="flex-shrink-0 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto md:mx-0"
                >
                  3
                </div>
                <div
                  className="flex-grow text-center md:text-left"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    デザイン・コンテンツ修正
                  </h3>
                  <ul
                    className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2"
                  >
                    <li>
                      お客様のフィードバックをもとに細部を調整
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 4 */}
              <div
                className="flex flex-col md:flex-row items-start md:items-center gap-6"
              >
                <div
                  className="flex-shrink-0 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto md:mx-0"
                >
                  4
                </div>
                <div
                  className="flex-grow text-center md:text-left"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    ドメイン取得・公開
                  </h3>
                  <ul
                    className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2"
                  >
                    <li>
                      ご希望のドメインを取得し、本番環境へ移行
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 5 */}
              <div
                className="flex flex-col md:flex-row items-start md:items-center gap-6"
              >
                <div
                  className="flex-shrink-0 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto md:mx-0"
                >
                  5
                </div>
                <div
                  className="flex-grow text-center md:text-left"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    納品・運用開始
                  </h3>
                  <ul
                    className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2"
                  >
                    <li>
                      最短3営業日〜のスピード対応可（要ヒアリング内容の確定）
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Price Section */}
        <div id="pricing" className="py-16 text-center">
          <h2 className="text-3xl font-bold mb-12">
            シンプルな料金プラン
          </h2>
          <div
            className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
          >
            <div
              className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4"
            >
              ¥3,000
              <span
                className="text-lg text-gray-600 dark:text-gray-300"
              >
                /月
              </span>
            </div>
            <ul className="text-left space-y-4 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">
                  ✓
                </span>
                最大5ページの制作
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">
                  ✓
                </span>
                ドメイン・サーバー費用込み
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">
                  ✓
                </span>
                SSL証明書対応
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">
                  ✓
                </span>
                保守・運用サポート
              </li>
            </ul>
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              お問い合わせ
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div
          id="faq"
          className="py-16 bg-gray-50 dark:bg-gray-900 rounded-xl"
        >
          <div
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <h2
              className="text-3xl font-bold mb-12 text-center"
            >
              よくある質問
            </h2>

            <div className="space-y-8">
              {/* FAQ Item 1 */}
              <div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
              >
                <h3
                  className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3"
                >
                  Q. 本当に初期費用は0円ですか？
                </h3>
                <p
                  className="text-gray-700 dark:text-gray-300"
                >
                  A.
                  はい。ドメイン取得費・デザイン費も月額3,000円に含んでいます。
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
              >
                <h3
                  className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3"
                >
                  Q. 依頼からどのくらいで公開できますか？
                </h3>
                <p
                  className="text-gray-700 dark:text-gray-300"
                >
                  A. 最短3営業日〜、ヒアリングや素材準備の状況次第です。
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
              >
                <h3
                  className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3"
                >
                  Q. お問い合わせフォームは設置できますか？
                </h3>
                <p
                  className="text-gray-700 dark:text-gray-300"
                >
                  A.
                  月額+1,000円でご利用可能です。またはFormサービスをリンクで利用すれば無料です。
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
              >
                <h3
                  className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3"
                >
                  Q. 大幅なデザイン変更が必要になったら？
                </h3>
                <p
                  className="text-gray-700 dark:text-gray-300"
                >
                  A. 都度見積もりいたしますが、月額自体は変わりません。
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Contact Section */}
      <div
        id="contact"
        className="py-16 bg-gray-100 dark:bg-gray-800"
      >
        <div
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-8">
            お問い合わせ
          </h2>
          <p
            className="text-gray-600 dark:text-gray-300 mb-8"
          >
            ウェブサイト制作についてのご質問やお見積りのご依頼は、こちらからお気軽にお問い合わせください。
          </p>
          <a
            href="mailto:info@edge-works.jp"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            メールでのお問い合わせ
          </a>
        </div>
      </div>

      <footer className="bg-gray-50 dark:bg-gray-900 py-12">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="text-2xl font-bold mb-4">
            Edge works
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            個人事業主のためのウェブサイト制作サービス
          </p>
        </div>
      </footer>
    </div>
  );
}
