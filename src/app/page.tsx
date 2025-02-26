import Image from "next/image";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
      data-oid="9169727"
    >
      {/* ヘッダー */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm"
        data-oid="7jf:abe"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="_zl_rrn"
        >
          <div
            className="flex justify-between items-center h-16"
            data-oid="0zukagn"
          >
            {/* ロゴ */}
            <div className="flex items-center" data-oid="2hxxt5g">
              <span
                className="text-xl font-bold text-blue-600 dark:text-blue-400"
                data-oid="54pk940"
              >
                Edge Works
              </span>
            </div>

            {/* ナビゲーション */}
            <nav className="hidden md:flex space-x-8" data-oid="8iindtb">
              <a
                href="#features"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                data-oid="2-zcu8b"
              >
                特徴
              </a>
              <a
                href="#flow"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                data-oid="6le6l.z"
              >
                制作の流れ
              </a>
              <a
                href="#pricing"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                data-oid="7cms56k"
              >
                料金
              </a>
              <a
                href="#faq"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                data-oid="cq56z95"
              >
                よくある質問
              </a>
              <a
                href="#contact"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                data-oid="va6zpua"
              >
                お問い合わせ
              </a>
            </nav>

            {/* モバイルメニューボタン */}
            <div className="md:hidden" data-oid="c556wgn">
              <button
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                data-oid="06l35he"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  data-oid="npwm6me"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                    data-oid="2jvtp62"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* フルページのヒーローセクション */}
      <div className="relative h-screen" data-oid="2pad54z">
        {/* 背景画像コンテナ */}
        <div className="absolute inset-0 overflow-hidden" data-oid="apxvxgh">
          {/* 背景画像 */}
          <Image
            src="/background.webp"
            alt="Background Image"
            fill
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.65)" }}
            priority
            data-oid=".uvktz0"
          />

          {/* グラデーションオーバーレイ */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-black/60 mix-blend-multiply"
            data-oid="p1c_2-s"
          ></div>
        </div>

        {/* キャッチコピー */}
        <div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
          data-oid="k2ra329"
        >
          <div className="mb-8" data-oid="75w9x6q">
            <div
              className="flex items-center justify-center mb-2"
              data-oid="qsk3eii"
            >
              <p
                className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-medium mr-3"
                data-oid="i18gwug"
              >
                月額
              </p>
              <div className="flex items-center" data-oid="dzna:xb">
                <p
                  className="text-4xl sm:text-6xl lg:text-8xl font-extrabold text-blue-300 tracking-tight leading-none"
                  data-oid="dnz6ehi"
                >
                  3,000
                </p>
                <span
                  className="text-2xl sm:text-3xl lg:text-4xl text-blue-300 font-bold ml-1"
                  data-oid="jmqewqg"
                >
                  円
                </span>
              </div>
              <p
                className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-medium ml-3"
                data-oid="_.xwjvv"
              >
                で
              </p>
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight"
              data-oid="w3py0sb"
            >
              <span className="inline-block" data-oid="08u8y40">
                ホームページを
              </span>
              <span
                className="text-blue-300 text-4xl sm:text-5xl lg:text-7xl ml-2 sm:ml-4"
                data-oid="52hwwqe"
              >
                制作
              </span>
            </h1>
          </div>

          <p
            className="text-lg sm:text-xl lg:text-2xl text-white/80 font-medium mb-8 max-w-2xl"
            data-oid="ov7zh5o"
          >
            テンプレートではない、
            <span className="text-blue-300 font-semibold" data-oid=".vw-3hd">
              あなただけ
            </span>
            のオリジナルデザイン
          </p>

          {/* 最短3日で納品可能のバッジ - シンプルで目立つデザイン */}
          <div
            className="mb-8 transform hover:scale-105 transition-transform"
            data-oid="v70n.ni"
          >
            <div
              className="bg-white/10 backdrop-blur-sm px-6 py-3 border-l-4 border-blue-300 text-white text-lg font-bold"
              data-oid="o.an-2s"
            >
              ⚡ 最短3日で納品可能
            </div>
          </div>

          <a
            href="#contact"
            className="inline-block bg-white text-blue-800 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-colors shadow-lg border-2 border-white"
            data-oid="5qhnkp5"
          >
            お問い合わせはこちら
          </a>
        </div>
      </div>

      {/* その他のコンテンツは、全画面ヒーローとは別にコンテナで管理 */}
      <main
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="dxwuap-"
      >
        {/* Features Section */}
        <div
          id="features"
          className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          data-oid="bt3m97x"
        >
          <div
            className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
            data-oid="_w8rn2s"
          >
            <div className="text-3xl mb-4" data-oid="4:.5hbk">
              💰
            </div>
            <h3 className="text-xl font-semibold mb-2" data-oid="-hzpowe">
              初期費用0円
            </h3>
            <p className="text-gray-600 dark:text-gray-300" data-oid="n_39-pz">
              ドメイン取得からホスティングまで月額に含まれています
            </p>
          </div>
          <div
            className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
            data-oid="f1gu.fo"
          >
            <div className="text-3xl mb-4" data-oid="p8idfp6">
              🎨
            </div>
            <h3 className="text-xl font-semibold mb-2" data-oid="1dsi2gt">
              オリジナルデザイン
            </h3>
            <p className="text-gray-600 dark:text-gray-300" data-oid="qs0bhu0">
              テンプレートではない、あなただけのデザイン
            </p>
          </div>
          <div
            className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
            data-oid="k4hat9o"
          >
            <div className="text-3xl mb-4" data-oid="gk_nknl">
              📱
            </div>
            <h3 className="text-xl font-semibold mb-2" data-oid="qxda.qe">
              モバイルファースト
            </h3>
            <p className="text-gray-600 dark:text-gray-300" data-oid=":zpp491">
              スマートフォンでの表示を最適化
            </p>
          </div>
        </div>

        {/* Production Flow Section */}
        <div
          id="flow"
          className="py-16 bg-gray-50 dark:bg-gray-900 rounded-xl"
          data-oid=".bplv--"
        >
          <div
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="q5s2zf3"
          >
            <h2
              className="text-3xl font-bold mb-12 text-center"
              data-oid="yla:tn2"
            >
              制作の流れ
            </h2>

            <div className="space-y-12 max-w-2xl mx-auto" data-oid="zc2gwwp">
              {/* Step 1 */}
              <div
                className="flex flex-col md:flex-row items-start md:items-center gap-6"
                data-oid="yvi3uc8"
              >
                <div
                  className="flex-shrink-0 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto md:mx-0"
                  data-oid="uk182qe"
                >
                  1
                </div>
                <div
                  className="flex-grow text-center md:text-left"
                  data-oid="2ingm1i"
                >
                  <h3 className="text-xl font-semibold mb-2" data-oid="m_u4w12">
                    お問い合わせ・ヒアリング
                  </h3>
                  <ul
                    className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2"
                    data-oid="ddv5el5"
                  >
                    <li data-oid="77_7:28">
                      専用フォーム or
                      メールで希望のコンセプト・デザインの要望を伺う
                    </li>
                    <li data-oid="7gs7auc">
                      必要に応じてGoogle Meet等で打合せ
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div
                className="flex flex-col md:flex-row items-start md:items-center gap-6"
                data-oid="3uonnwx"
              >
                <div
                  className="flex-shrink-0 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto md:mx-0"
                  data-oid="8gi7l:2"
                >
                  2
                </div>
                <div
                  className="flex-grow text-center md:text-left"
                  data-oid="n.zxyz7"
                >
                  <h3 className="text-xl font-semibold mb-2" data-oid="e.5bdm5">
                    仮デザイン案の作成・提案
                  </h3>
                  <ul
                    className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2"
                    data-oid="_szfm8y"
                  >
                    <li data-oid="7wihxd9">
                      仮のドメイン（テスト用URL）でサイトを確認可能
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div
                className="flex flex-col md:flex-row items-start md:items-center gap-6"
                data-oid=".5d7k57"
              >
                <div
                  className="flex-shrink-0 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto md:mx-0"
                  data-oid="3n0paom"
                >
                  3
                </div>
                <div
                  className="flex-grow text-center md:text-left"
                  data-oid="y0tzn.k"
                >
                  <h3 className="text-xl font-semibold mb-2" data-oid="naf:9ux">
                    デザイン・コンテンツ修正
                  </h3>
                  <ul
                    className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2"
                    data-oid="11zwxxp"
                  >
                    <li data-oid=".dobl64">
                      お客様のフィードバックをもとに細部を調整
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 4 */}
              <div
                className="flex flex-col md:flex-row items-start md:items-center gap-6"
                data-oid="xsonxcj"
              >
                <div
                  className="flex-shrink-0 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto md:mx-0"
                  data-oid="y4dykc:"
                >
                  4
                </div>
                <div
                  className="flex-grow text-center md:text-left"
                  data-oid="p9h.:s2"
                >
                  <h3 className="text-xl font-semibold mb-2" data-oid="wlrcklq">
                    ドメイン取得・公開
                  </h3>
                  <ul
                    className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2"
                    data-oid="dlrztbb"
                  >
                    <li data-oid="j-t0pzm">
                      ご希望のドメインを取得し、本番環境へ移行
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 5 */}
              <div
                className="flex flex-col md:flex-row items-start md:items-center gap-6"
                data-oid="yg5tc.u"
              >
                <div
                  className="flex-shrink-0 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto md:mx-0"
                  data-oid="05uast:"
                >
                  5
                </div>
                <div
                  className="flex-grow text-center md:text-left"
                  data-oid="jp2.19-"
                >
                  <h3 className="text-xl font-semibold mb-2" data-oid="nh0y:ij">
                    納品・運用開始
                  </h3>
                  <ul
                    className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2"
                    data-oid="y9w15ob"
                  >
                    <li data-oid="bdp0dyz">
                      最短3営業日〜のスピード対応可（要ヒアリング内容の確定）
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Price Section */}
        <div id="pricing" className="py-16 text-center" data-oid="3fh-q7y">
          <h2 className="text-3xl font-bold mb-12" data-oid="45zyp48">
            シンプルな料金プラン
          </h2>
          <div
            className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
            data-oid="pxv4l_6"
          >
            <div
              className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4"
              data-oid="vt9kj3s"
            >
              ¥3,000
              <span
                className="text-lg text-gray-600 dark:text-gray-300"
                data-oid="4.qt8b6"
              >
                /月
              </span>
            </div>
            <ul className="text-left space-y-4 mb-8" data-oid="ft47ugj">
              <li className="flex items-center" data-oid="pfju_q2">
                <span className="text-green-500 mr-2" data-oid="9ikkov_">
                  ✓
                </span>
                最大5ページの制作
              </li>
              <li className="flex items-center" data-oid="oh6f3j3">
                <span className="text-green-500 mr-2" data-oid="32luu-r">
                  ✓
                </span>
                ドメイン・サーバー費用込み
              </li>
              <li className="flex items-center" data-oid="9bljvfk">
                <span className="text-green-500 mr-2" data-oid="tzf:eln">
                  ✓
                </span>
                SSL証明書対応
              </li>
              <li className="flex items-center" data-oid="gzyqkba">
                <span className="text-green-500 mr-2" data-oid="y.mdr49">
                  ✓
                </span>
                保守・運用サポート
              </li>
            </ul>
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              data-oid="l64ox8k"
            >
              お問い合わせ
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div
          id="faq"
          className="py-16 bg-gray-50 dark:bg-gray-900 rounded-xl"
          data-oid="f3fnlw2"
        >
          <div
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="xe_wxu9"
          >
            <h2
              className="text-3xl font-bold mb-12 text-center"
              data-oid="nco:t3j"
            >
              よくある質問
            </h2>

            <div className="space-y-8" data-oid=".w75l06">
              {/* FAQ Item 1 */}
              <div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                data-oid="g2q0iox"
              >
                <h3
                  className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3"
                  data-oid="6t6gc:a"
                >
                  Q. 本当に初期費用は0円ですか？
                </h3>
                <p
                  className="text-gray-700 dark:text-gray-300"
                  data-oid="tmg04tv"
                >
                  A.
                  はい。ドメイン取得費・デザイン費も月額3,000円に含んでいます。
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                data-oid="1_up2kv"
              >
                <h3
                  className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3"
                  data-oid="u.jgd76"
                >
                  Q. 依頼からどのくらいで公開できますか？
                </h3>
                <p
                  className="text-gray-700 dark:text-gray-300"
                  data-oid="g9iq_o9"
                >
                  A. 最短3営業日〜、ヒアリングや素材準備の状況次第です。
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                data-oid="6tjgu5e"
              >
                <h3
                  className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3"
                  data-oid="bujj7g5"
                >
                  Q. お問い合わせフォームは設置できますか？
                </h3>
                <p
                  className="text-gray-700 dark:text-gray-300"
                  data-oid="1fz:l5c"
                >
                  A.
                  月額+1,000円でご利用可能です。またはFormサービスをリンクで利用すれば無料です。
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                data-oid="5fu1vz."
              >
                <h3
                  className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3"
                  data-oid="z073yfc"
                >
                  Q. 大幅なデザイン変更が必要になったら？
                </h3>
                <p
                  className="text-gray-700 dark:text-gray-300"
                  data-oid="7-gznog"
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
        data-oid="dag4wav"
      >
        <div
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          data-oid="wbbpqeg"
        >
          <h2 className="text-3xl font-bold mb-8" data-oid="z.4_4gw">
            お問い合わせ
          </h2>
          <p
            className="text-gray-600 dark:text-gray-300 mb-8"
            data-oid="x0a8y0b"
          >
            ウェブサイト制作についてのご質問やお見積りのご依頼は、こちらからお気軽にお問い合わせください。
          </p>
          <a
            href="mailto:info@edge-works.jp"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            data-oid="ks6b0bv"
          >
            メールでのお問い合わせ
          </a>
        </div>
      </div>

      <footer className="bg-gray-50 dark:bg-gray-900 py-12" data-oid="_k-q17f">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          data-oid="dl:xzu9"
        >
          <div className="text-2xl font-bold mb-4" data-oid="q82qbub">
            Edge works
          </div>
          <p className="text-gray-600 dark:text-gray-400" data-oid="oq27ohg">
            個人事業主のためのウェブサイト制作サービス
          </p>
        </div>
      </footer>
    </div>
  );
}
