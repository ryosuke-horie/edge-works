import Image from "next/image";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
      data-oid="7vom6s-"
    >
      <main
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="7_phvxs"
      >
        {/* Hero Section */}
        <div className="py-20 sm:py-24 lg:py-32 text-center" data-oid="x1a-hf6">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            data-oid="6.i2kfo"
          >
            良質なホームページを
            <br className="sm:hidden" data-oid="4j3rnsc" />
            <span
              className="text-blue-600 dark:text-blue-400"
              data-oid="lx_lp3k"
            >
              安く・手軽に
            </span>
          </h1>
          <p
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12"
            data-oid="mi91-4-"
          >
            月額3,000円でプロフェッショナルなウェブサイトを
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            data-oid="vk1zuay"
          >
            お問い合わせ
          </a>
        </div>

        {/* Features Section */}
        <div
          className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          data-oid="4qonqoi"
        >
          <div
            className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
            data-oid="w-.kbdp"
          >
            <div className="text-3xl mb-4" data-oid="a3tc1qu">
              💰
            </div>
            <h3 className="text-xl font-semibold mb-2" data-oid="4o-d7.z">
              初期費用0円
            </h3>
            <p className="text-gray-600 dark:text-gray-300" data-oid="r7vqcjv">
              ドメイン取得からホスティングまで月額に含まれています
            </p>
          </div>
          <div
            className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
            data-oid="-mz90v7"
          >
            <div className="text-3xl mb-4" data-oid=":9qbugz">
              🎨
            </div>
            <h3 className="text-xl font-semibold mb-2" data-oid="js2t0:6">
              オリジナルデザイン
            </h3>
            <p className="text-gray-600 dark:text-gray-300" data-oid="waiwncu">
              テンプレートではない、あなただけのデザイン
            </p>
          </div>
          <div
            className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
            data-oid="z797uaj"
          >
            <div className="text-3xl mb-4" data-oid="m7n70.x">
              📱
            </div>
            <h3 className="text-xl font-semibold mb-2" data-oid="8.sog54">
              モバイルファースト
            </h3>
            <p className="text-gray-600 dark:text-gray-300" data-oid="u-kqhju">
              スマートフォンでの表示を最適化
            </p>
          </div>
        </div>

        {/* Price Section */}
        <div className="py-16 text-center" data-oid="636v1-1">
          <h2 className="text-3xl font-bold mb-12" data-oid=":vd4._f">
            シンプルな料金プラン
          </h2>
          <div
            className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
            data-oid="skhy0fi"
          >
            <div
              className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4"
              data-oid="70dqb_4"
            >
              ¥3,000
              <span
                className="text-lg text-gray-600 dark:text-gray-300"
                data-oid="af.18je"
              >
                /月
              </span>
            </div>
            <ul className="text-left space-y-4 mb-8" data-oid="_ass7m4">
              <li className="flex items-center" data-oid="a7bgvxz">
                <span className="text-green-500 mr-2" data-oid="y9o593-">
                  ✓
                </span>
                最大5ページの制作
              </li>
              <li className="flex items-center" data-oid="m5kc.7z">
                <span className="text-green-500 mr-2" data-oid="p27ogfs">
                  ✓
                </span>
                ドメイン・サーバー費用込み
              </li>
              <li className="flex items-center" data-oid="w10z50v">
                <span className="text-green-500 mr-2" data-oid="_.kz0bl">
                  ✓
                </span>
                SSL証明書対応
              </li>
              <li className="flex items-center" data-oid="5_q65i6">
                <span className="text-green-500 mr-2" data-oid="zbnaj7s">
                  ✓
                </span>
                保守・運用サポート
              </li>
            </ul>
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              data-oid="t0hh3qv"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 dark:bg-gray-900 py-12" data-oid="r8c13..">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          data-oid=":wi1wta"
        >
          <div className="text-2xl font-bold mb-4" data-oid="2wn9skm">
            Edge works
          </div>
          <p className="text-gray-600 dark:text-gray-400" data-oid="be4zot_">
            個人事業主のためのウェブサイト制作サービス
          </p>
        </div>
      </footer>
    </div>
  );
}
