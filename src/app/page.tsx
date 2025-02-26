import Image from "next/image";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
      data-oid=":cs96oj"
    >
      {/* ヘッダー */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm"
        data-oid="0miqoss"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="03pwyv3"
        >
          <div
            className="flex justify-between items-center h-16"
            data-oid="bp5uv1v"
          >
            {/* ロゴ */}
            <div className="flex items-center" data-oid="122iarb">
              <span
                className="text-xl font-bold text-blue-600 dark:text-blue-400"
                data-oid="tlv8g-o"
              >
                Edge Works
              </span>
            </div>

            {/* ナビゲーション */}
            <nav className="hidden md:flex space-x-8" data-oid="0z3c5nz">
              <a
                href="#features"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                data-oid="ep9tej5"
              >
                特徴
              </a>
              <a
                href="#pricing"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                data-oid=":i_y_hy"
              >
                料金
              </a>
              <a
                href="#contact"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                data-oid="k8f341h"
              >
                お問い合わせ
              </a>
            </nav>

            {/* モバイルメニューボタン */}
            <div className="md:hidden" data-oid="_pw8j:u">
              <button
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                data-oid="c_qwqzz"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  data-oid="zjrc_b0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                    data-oid=":xvuicb"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* フルページのヒーローセクション */}
      <div className="relative h-screen" data-oid="_lonpo.">
        {/* 背景画像コンテナ */}
        <div className="absolute inset-0 overflow-hidden" data-oid=".ump7lg">
          {/* 背景画像 */}
          <Image
            src="/background.webp"
            alt="Background Image"
            fill
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.65)" }}
            priority
            data-oid="k117iqj"
          />

          {/* グラデーションオーバーレイ */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-black/60 mix-blend-multiply"
            data-oid="_tw:fyg"
          ></div>
        </div>

        {/* キャッチコピー */}
        <div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
          data-oid=":8vkkso"
        >
          <div className="mb-8" data-oid="gwb.h.j">
            <div
              className="flex items-center justify-center mb-2"
              data-oid="lust2u5"
            >
              <p
                className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-medium mr-3"
                data-oid="m5-8w:0"
              >
                月額
              </p>
              <div className="flex items-center" data-oid="4o3shmn">
                <p
                  className="text-4xl sm:text-6xl lg:text-8xl font-extrabold text-blue-300 tracking-tight leading-none"
                  data-oid="ys3td5u"
                >
                  3,000
                </p>
                <span
                  className="text-2xl sm:text-3xl lg:text-4xl text-blue-300 font-bold ml-1"
                  data-oid="-ng5pqm"
                >
                  円
                </span>
              </div>
              <p
                className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-medium ml-3"
                data-oid="nt4b160"
              >
                で
              </p>
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight"
              data-oid="0muc3nd"
            >
              <span className="inline-block" data-oid="wgsen0l">
                ホームページを
              </span>
              <span
                className="text-blue-300 text-4xl sm:text-5xl lg:text-7xl ml-2 sm:ml-4"
                data-oid="taj2als"
              >
                制作
              </span>
            </h1>
          </div>

          <p
            className="text-lg sm:text-xl lg:text-2xl text-white/80 font-medium mb-8 max-w-2xl"
            data-oid="2n13m4p"
          >
            テンプレートではない、
            <span className="text-blue-300 font-semibold" data-oid="ga3-guj">
              あなただけ
            </span>
            のオリジナルデザイン
          </p>

          {/* 最短3日で納品可能のバッジ - シンプルで目立つデザイン */}
          <div
            className="mb-8 transform hover:scale-105 transition-transform"
            data-oid="q1shls0"
          >
            <div
              className="bg-white/10 backdrop-blur-sm px-6 py-3 border-l-4 border-blue-300 text-white text-lg font-bold"
              data-oid="3qcbxyn"
            >
              ⚡ 最短3日で納品可能
            </div>
          </div>

          <a
            href="#contact"
            className="inline-block bg-white text-blue-800 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-colors shadow-lg border-2 border-white"
            data-oid="bbjwffk"
          >
            お問い合わせはこちら
          </a>
        </div>
      </div>

      {/* その他のコンテンツは、全画面ヒーローとは別にコンテナで管理 */}
      <main
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="fu:o1lb"
      >
        {/* Features Section */}
        <div
          id="features"
          className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          data-oid="ptnrikt"
        >
          <div
            className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
            data-oid="67qlcww"
          >
            <div className="text-3xl mb-4" data-oid="zg-f583">
              💰
            </div>
            <h3 className="text-xl font-semibold mb-2" data-oid="ehual8r">
              初期費用0円
            </h3>
            <p className="text-gray-600 dark:text-gray-300" data-oid="68enl_6">
              ドメイン取得からホスティングまで月額に含まれています
            </p>
          </div>
          <div
            className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
            data-oid="hpydy7w"
          >
            <div className="text-3xl mb-4" data-oid="b6gm1e:">
              🎨
            </div>
            <h3 className="text-xl font-semibold mb-2" data-oid="y3y0m1z">
              オリジナルデザイン
            </h3>
            <p className="text-gray-600 dark:text-gray-300" data-oid="mulf.9:">
              テンプレートではない、あなただけのデザイン
            </p>
          </div>
          <div
            className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
            data-oid="p.4k:tc"
          >
            <div className="text-3xl mb-4" data-oid="qw4pl27">
              📱
            </div>
            <h3 className="text-xl font-semibold mb-2" data-oid="cwip2z4">
              モバイルファースト
            </h3>
            <p className="text-gray-600 dark:text-gray-300" data-oid="l6amq0z">
              スマートフォンでの表示を最適化
            </p>
          </div>
        </div>

        {/* Price Section */}
        <div id="pricing" className="py-16 text-center" data-oid="vs07nil">
          <h2 className="text-3xl font-bold mb-12" data-oid="p.i62jc">
            シンプルな料金プラン
          </h2>
          <div
            className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
            data-oid="51csg38"
          >
            <div
              className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4"
              data-oid=":4uhf6:"
            >
              ¥3,000
              <span
                className="text-lg text-gray-600 dark:text-gray-300"
                data-oid="67xctv6"
              >
                /月
              </span>
            </div>
            <ul className="text-left space-y-4 mb-8" data-oid="syigh-i">
              <li className="flex items-center" data-oid="w8pwp8j">
                <span className="text-green-500 mr-2" data-oid="eowu5.r">
                  ✓
                </span>
                最大5ページの制作
              </li>
              <li className="flex items-center" data-oid="7udswr1">
                <span className="text-green-500 mr-2" data-oid="kq0d3_y">
                  ✓
                </span>
                ドメイン・サーバー費用込み
              </li>
              <li className="flex items-center" data-oid="6.o5vd6">
                <span className="text-green-500 mr-2" data-oid="7yt:a-3">
                  ✓
                </span>
                SSL証明書対応
              </li>
              <li className="flex items-center" data-oid="ql9w:0p">
                <span className="text-green-500 mr-2" data-oid="hjndxke">
                  ✓
                </span>
                保守・運用サポート
              </li>
            </ul>
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              data-oid="9aivkqc"
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
        data-oid=":yl0g.x"
      >
        <div
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          data-oid="7_f6bto"
        >
          <h2 className="text-3xl font-bold mb-8" data-oid=":_yxun1">
            お問い合わせ
          </h2>
          <p
            className="text-gray-600 dark:text-gray-300 mb-8"
            data-oid="qxvasbe"
          >
            ウェブサイト制作についてのご質問やお見積りのご依頼は、こちらからお気軽にお問い合わせください。
          </p>
          <a
            href="mailto:info@edge-works.jp"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            data-oid="2d6n1zd"
          >
            メールでのお問い合わせ
          </a>
        </div>
      </div>

      <footer className="bg-gray-50 dark:bg-gray-900 py-12" data-oid="u-u.6v2">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          data-oid="it:xsqj"
        >
          <div className="text-2xl font-bold mb-4" data-oid="76f.tus">
            Edge works
          </div>
          <p className="text-gray-600 dark:text-gray-400" data-oid="-mra5k:">
            個人事業主のためのウェブサイト制作サービス
          </p>
        </div>
      </footer>
    </div>
  );
}
