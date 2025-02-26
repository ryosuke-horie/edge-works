import Image from "next/image";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
      data-oid="u98fqn0"
    >
      {/* ヘッダー */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm"
        data-oid=":vfidxg"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="60-quw6"
        >
          <div
            className="flex justify-between items-center h-16"
            data-oid="bdv0prg"
          >
            {/* ロゴ */}
            <div className="flex items-center" data-oid="r76wy6h">
              <span
                className="text-xl font-bold text-blue-600 dark:text-blue-400"
                data-oid="0.lzr7s"
              >
                Edge Works
              </span>
            </div>

            {/* ナビゲーション */}
            <nav className="hidden md:flex space-x-8" data-oid="-cwx77p">
              <a
                href="#features"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                data-oid="f7cji43"
              >
                特徴
              </a>
              <a
                href="#flow"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                data-oid="eq6tfhk"
              >
                制作の流れ
              </a>
              <a
                href="#pricing"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                data-oid="k47ck36"
              >
                料金
              </a>
              <a
                href="#contact"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                data-oid="464enk6"
              >
                お問い合わせ
              </a>
            </nav>

            {/* モバイルメニューボタン */}
            <div className="md:hidden" data-oid="g84yelq">
              <button
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                data-oid=".6k.y6u"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  data-oid=":kzqz2h"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                    data-oid="eomu-oj"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* フルページのヒーローセクション */}
      <div className="relative h-screen" data-oid="kk9f6w9">
        {/* 背景画像コンテナ */}
        <div className="absolute inset-0 overflow-hidden" data-oid="gu5_o.z">
          {/* 背景画像 */}
          <Image
            src="/background.webp"
            alt="Background Image"
            fill
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.65)" }}
            priority
            data-oid="c6j:r_:"
          />

          {/* グラデーションオーバーレイ */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-black/60 mix-blend-multiply"
            data-oid="rk-kj6u"
          ></div>
        </div>

        {/* キャッチコピー */}
        <div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
          data-oid="22r2peb"
        >
          <div className="mb-8" data-oid="jj:asml">
            <div
              className="flex items-center justify-center mb-2"
              data-oid="mb2hiip"
            >
              <p
                className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-medium mr-3"
                data-oid="de5a6hh"
              >
                月額
              </p>
              <div className="flex items-center" data-oid="_n73rf:">
                <p
                  className="text-4xl sm:text-6xl lg:text-8xl font-extrabold text-blue-300 tracking-tight leading-none"
                  data-oid="cc33gz."
                >
                  3,000
                </p>
                <span
                  className="text-2xl sm:text-3xl lg:text-4xl text-blue-300 font-bold ml-1"
                  data-oid="hkabr81"
                >
                  円
                </span>
              </div>
              <p
                className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-medium ml-3"
                data-oid="wvq06mm"
              >
                で
              </p>
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight"
              data-oid="4khfcw7"
            >
              <span className="inline-block" data-oid=":hjl:w5">
                ホームページを
              </span>
              <span
                className="text-blue-300 text-4xl sm:text-5xl lg:text-7xl ml-2 sm:ml-4"
                data-oid="-s9wd_h"
              >
                制作
              </span>
            </h1>
          </div>

          <p
            className="text-lg sm:text-xl lg:text-2xl text-white/80 font-medium mb-8 max-w-2xl"
            data-oid="13:qlh9"
          >
            テンプレートではない、
            <span className="text-blue-300 font-semibold" data-oid="wwh6r9b">
              あなただけ
            </span>
            のオリジナルデザイン
          </p>

          {/* 最短3日で納品可能のバッジ - シンプルで目立つデザイン */}
          <div
            className="mb-8 transform hover:scale-105 transition-transform"
            data-oid="af_.hdn"
          >
            <div
              className="bg-white/10 backdrop-blur-sm px-6 py-3 border-l-4 border-blue-300 text-white text-lg font-bold"
              data-oid="8yv5hls"
            >
              ⚡ 最短3日で納品可能
            </div>
          </div>

          <a
            href="#contact"
            className="inline-block bg-white text-blue-800 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-colors shadow-lg border-2 border-white"
            data-oid="90f4u:n"
          >
            お問い合わせはこちら
          </a>
        </div>
      </div>

      {/* その他のコンテンツは、全画面ヒーローとは別にコンテナで管理 */}
      <main
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="4lng8c9"
      >
        {/* Features Section */}
        <div
          id="features"
          className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          data-oid="s27a.lh"
        >
          <div
            className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
            data-oid="amuw2pu"
          >
            <div className="text-3xl mb-4" data-oid="kq83ghd">
              💰
            </div>
            <h3 className="text-xl font-semibold mb-2" data-oid="4905-bf">
              初期費用0円
            </h3>
            <p className="text-gray-600 dark:text-gray-300" data-oid="gzshnb9">
              ドメイン取得からホスティングまで月額に含まれています
            </p>
          </div>
          <div
            className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
            data-oid="c5-zvmg"
          >
            <div className="text-3xl mb-4" data-oid="xj435gq">
              🎨
            </div>
            <h3 className="text-xl font-semibold mb-2" data-oid="3_txvko">
              オリジナルデザイン
            </h3>
            <p className="text-gray-600 dark:text-gray-300" data-oid="669sahv">
              テンプレートではない、あなただけのデザイン
            </p>
          </div>
          <div
            className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
            data-oid="veg9cy6"
          >
            <div className="text-3xl mb-4" data-oid="ax7.o9y">
              📱
            </div>
            <h3 className="text-xl font-semibold mb-2" data-oid="fa2ois2">
              モバイルファースト
            </h3>
            <p className="text-gray-600 dark:text-gray-300" data-oid="lnw0kgj">
              スマートフォンでの表示を最適化
            </p>
          </div>
        </div>

        {/* Production Flow Section */}
        <div
          id="flow"
          className="py-16 bg-gray-50 dark:bg-gray-900 rounded-xl"
          data-oid="-_9gwrq"
        >
          <div
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="avs.j3g"
          >
            <h2
              className="text-3xl font-bold mb-12 text-center"
              data-oid="0kj7ucj"
            >
              制作の流れ
            </h2>

            <div className="space-y-12 max-w-2xl mx-auto" data-oid="nw4wlst">
              {/* Step 1 */}
              <div
                className="flex flex-col md:flex-row items-start md:items-center gap-6"
                data-oid="-dkmp2x"
              >
                <div
                  className="flex-shrink-0 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto md:mx-0"
                  data-oid="m_hv6xc"
                >
                  1
                </div>
                <div
                  className="flex-grow text-center md:text-left"
                  data-oid="9sl2yej"
                >
                  <h3 className="text-xl font-semibold mb-2" data-oid="e038t4d">
                    お問い合わせ・ヒアリング
                  </h3>
                  <ul
                    className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2"
                    data-oid="-mwaiec"
                  >
                    <li data-oid="ght4njt">
                      専用フォーム or
                      メールで希望のコンセプト・デザインの要望を伺う
                    </li>
                    <li data-oid="mmihx2x">
                      必要に応じてGoogle Meet等で打合せ
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div
                className="flex flex-col md:flex-row items-start md:items-center gap-6"
                data-oid="v_h4mj7"
              >
                <div
                  className="flex-shrink-0 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto md:mx-0"
                  data-oid="v158ko4"
                >
                  2
                </div>
                <div
                  className="flex-grow text-center md:text-left"
                  data-oid="2z.dsb7"
                >
                  <h3 className="text-xl font-semibold mb-2" data-oid="f5eff.l">
                    仮デザイン案の作成・提案
                  </h3>
                  <ul
                    className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2"
                    data-oid="9p1.8ql"
                  >
                    <li data-oid="vq71aka">
                      仮のドメイン（テスト用URL）でサイトを確認可能
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div
                className="flex flex-col md:flex-row items-start md:items-center gap-6"
                data-oid="1yavwrj"
              >
                <div
                  className="flex-shrink-0 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto md:mx-0"
                  data-oid="ja:ic5q"
                >
                  3
                </div>
                <div
                  className="flex-grow text-center md:text-left"
                  data-oid="qb:d_c6"
                >
                  <h3 className="text-xl font-semibold mb-2" data-oid="jh5yg8a">
                    デザイン・コンテンツ修正
                  </h3>
                  <ul
                    className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2"
                    data-oid="-zgnou1"
                  >
                    <li data-oid="y4i6bog">
                      お客様のフィードバックをもとに細部を調整
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 4 */}
              <div
                className="flex flex-col md:flex-row items-start md:items-center gap-6"
                data-oid="..53_gv"
              >
                <div
                  className="flex-shrink-0 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto md:mx-0"
                  data-oid="w::-yer"
                >
                  4
                </div>
                <div
                  className="flex-grow text-center md:text-left"
                  data-oid="7ubx6o5"
                >
                  <h3 className="text-xl font-semibold mb-2" data-oid="_j1yg4v">
                    ドメイン取得・公開
                  </h3>
                  <ul
                    className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2"
                    data-oid="mnu.nzq"
                  >
                    <li data-oid="cue:j7c">
                      ご希望のドメインを取得し、本番環境へ移行
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 5 */}
              <div
                className="flex flex-col md:flex-row items-start md:items-center gap-6"
                data-oid="bgpnwiv"
              >
                <div
                  className="flex-shrink-0 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto md:mx-0"
                  data-oid="ercnm0g"
                >
                  5
                </div>
                <div
                  className="flex-grow text-center md:text-left"
                  data-oid=":b.d6m_"
                >
                  <h3 className="text-xl font-semibold mb-2" data-oid="lalugpj">
                    納品・運用開始
                  </h3>
                  <ul
                    className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2"
                    data-oid="a_mct6c"
                  >
                    <li data-oid="ozd38_h">
                      最短3営業日〜のスピード対応可（要ヒアリング内容の確定）
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Price Section */}
        <div id="pricing" className="py-16 text-center" data-oid="m9x0kx9">
          <h2 className="text-3xl font-bold mb-12" data-oid="t92bk_w">
            シンプルな料金プラン
          </h2>
          <div
            className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
            data-oid="f9x4_wr"
          >
            <div
              className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4"
              data-oid="vwx7gma"
            >
              ¥3,000
              <span
                className="text-lg text-gray-600 dark:text-gray-300"
                data-oid="0i.4qpb"
              >
                /月
              </span>
            </div>
            <ul className="text-left space-y-4 mb-8" data-oid="0lj5cf7">
              <li className="flex items-center" data-oid="szyxx.0">
                <span className="text-green-500 mr-2" data-oid="w92lq:_">
                  ✓
                </span>
                最大5ページの制作
              </li>
              <li className="flex items-center" data-oid="55hk0ln">
                <span className="text-green-500 mr-2" data-oid="wam135v">
                  ✓
                </span>
                ドメイン・サーバー費用込み
              </li>
              <li className="flex items-center" data-oid="zzgkhib">
                <span className="text-green-500 mr-2" data-oid="qr_w1ad">
                  ✓
                </span>
                SSL証明書対応
              </li>
              <li className="flex items-center" data-oid="l8gy:md">
                <span className="text-green-500 mr-2" data-oid="t7_8jib">
                  ✓
                </span>
                保守・運用サポート
              </li>
            </ul>
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              data-oid="h71hgva"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </main>

      {/* Contact Section */}
      <div
        id="contact"
        className="py-16 bg-gray-100 dark:bg-gray-800"
        data-oid="b2qfi73"
      >
        <div
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          data-oid="6ghfpdv"
        >
          <h2 className="text-3xl font-bold mb-8" data-oid="egy2k6s">
            お問い合わせ
          </h2>
          <p
            className="text-gray-600 dark:text-gray-300 mb-8"
            data-oid="vnbqqsg"
          >
            ウェブサイト制作についてのご質問やお見積りのご依頼は、こちらからお気軽にお問い合わせください。
          </p>
          <a
            href="mailto:info@edge-works.jp"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            data-oid="0iu45f0"
          >
            メールでのお問い合わせ
          </a>
        </div>
      </div>

      <footer className="bg-gray-50 dark:bg-gray-900 py-12" data-oid="07pd4e1">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          data-oid="a44rwya"
        >
          <div className="text-2xl font-bold mb-4" data-oid="ttgia6s">
            Edge works
          </div>
          <p className="text-gray-600 dark:text-gray-400" data-oid="4srv3dp">
            個人事業主のためのウェブサイト制作サービス
          </p>
        </div>
      </footer>
    </div>
  );
}
