import Image from "next/image";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
      data-oid=":fl1axz"
    >
      {/* フルページのヒーローセクション */}
      <div className="relative h-screen" data-oid="nndrqlj">
        {/* 背景画像 */}
        <Image
          src="/background.webp"
          alt="Background Image"
          fill
          className="absolute inset-0 w-full h-full object-cover"
          data-oid="new-background"
        />

        {/* オーバーレイ */}
        <div
          className="absolute inset-0 bg-black opacity-30"
          data-oid="2m.ysp5"
        ></div>

        {/* キャッチコピー */}
        <div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center"
          data-oid="a--klrs"
        >
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            data-oid="_h89p15"
          >
            ホームページを安く・手軽に
          </h1>
        </div>
      </div>

      {/* その他のコンテンツは、全画面ヒーローとは別にコンテナで管理 */}
      <main
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="fb2ovpa"
      >
        {/* Features Section */}
        <div
          className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          data-oid="vdt4lhu"
        >
          <div
            className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
            data-oid="6ifd6fk"
          >
            <div className="text-3xl mb-4" data-oid="zpnncvt">
              💰
            </div>
            <h3 className="text-xl font-semibold mb-2" data-oid="rb5r69w">
              初期費用0円
            </h3>
            <p className="text-gray-600 dark:text-gray-300" data-oid="t_oy.:6">
              ドメイン取得からホスティングまで月額に含まれています
            </p>
          </div>
          <div
            className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
            data-oid="j7a2.da"
          >
            <div className="text-3xl mb-4" data-oid="yt0n4d4">
              🎨
            </div>
            <h3 className="text-xl font-semibold mb-2" data-oid="kgcpn6q">
              オリジナルデザイン
            </h3>
            <p className="text-gray-600 dark:text-gray-300" data-oid="kz7k9cv">
              テンプレートではない、あなただけのデザイン
            </p>
          </div>
          <div
            className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
            data-oid="zg4:mqn"
          >
            <div className="text-3xl mb-4" data-oid="z4kapv0">
              📱
            </div>
            <h3 className="text-xl font-semibold mb-2" data-oid="8uelbf6">
              モバイルファースト
            </h3>
            <p className="text-gray-600 dark:text-gray-300" data-oid="2hh01tm">
              スマートフォンでの表示を最適化
            </p>
          </div>
        </div>

        {/* Price Section */}
        <div className="py-16 text-center" data-oid="x2f1btf">
          <h2 className="text-3xl font-bold mb-12" data-oid="-vc31.t">
            シンプルな料金プラン
          </h2>
          <div
            className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
            data-oid="sikatd3"
          >
            <div
              className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4"
              data-oid="cvb61ic"
            >
              ¥3,000
              <span
                className="text-lg text-gray-600 dark:text-gray-300"
                data-oid="au1n6e_"
              >
                /月
              </span>
            </div>
            <ul className="text-left space-y-4 mb-8" data-oid="bvutzyk">
              <li className="flex items-center" data-oid="y8k9s3:">
                <span className="text-green-500 mr-2" data-oid="krekf.b">
                  ✓
                </span>
                最大5ページの制作
              </li>
              <li className="flex items-center" data-oid="hwoq894">
                <span className="text-green-500 mr-2" data-oid="4askxpa">
                  ✓
                </span>
                ドメイン・サーバー費用込み
              </li>
              <li className="flex items-center" data-oid="52ji498">
                <span className="text-green-500 mr-2" data-oid="_p1qqk-">
                  ✓
                </span>
                SSL証明書対応
              </li>
              <li className="flex items-center" data-oid="9_ze0ef">
                <span className="text-green-500 mr-2" data-oid="fuai_.4">
                  ✓
                </span>
                保守・運用サポート
              </li>
            </ul>
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              data-oid="dgymljl"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 dark:bg-gray-900 py-12" data-oid="m_fsi-n">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          data-oid="w0nm17_"
        >
          <div className="text-2xl font-bold mb-4" data-oid="7cd5r6w">
            Edge works
          </div>
          <p className="text-gray-600 dark:text-gray-400" data-oid="rqei2_f">
            個人事業主のためのウェブサイト制作サービス
          </p>
        </div>
      </footer>
    </div>
  );
}
