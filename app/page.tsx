export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-16">
          <h1 className="text-4xl font-bold text-black mb-4">Takuya Suemura</h1>
          <p className="text-xl text-gray-600">Quality Evangelist</p>
        </header>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black mb-4">About</h2>
          <p className="text-gray-700 leading-relaxed">
            ソフトウェアテストと品質保証の専門家として、テスト自動化の推進と品質文化の醸成に取り組んでいます。
            「テスト自動化実践ガイド」の著者として、またJaSST OnlineやTokyo Test Festの実行委員として、
            ソフトウェアテストコミュニティの発展に貢献しています。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black mb-4">Experience</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-gray-200 pl-6">
              <div className="relative">
                <div className="absolute -left-8 w-4 h-4 bg-black rounded-full"></div>
                <h3 className="text-xl font-medium text-black">Quality Evangelist</h3>
                <p className="text-gray-600 mb-1">Autify • 2024年8月 - 現在</p>
                <p className="text-gray-700">品質保証の啓蒙活動とテスト自動化の推進</p>
              </div>
            </div>
            <div className="border-l-2 border-gray-200 pl-6">
              <div className="relative">
                <div className="absolute -left-8 w-4 h-4 bg-gray-400 rounded-full"></div>
                <h3 className="text-xl font-medium text-black">Senior Technical Support Engineer</h3>
                <p className="text-gray-600 mb-1">Autify • 2021年8月 - 2024年8月</p>
                <p className="text-gray-700">テクニカルサポートチームの立ち上げと運営</p>
              </div>
            </div>
            <div className="border-l-2 border-gray-200 pl-6">
              <div className="relative">
                <div className="absolute -left-8 w-4 h-4 bg-gray-400 rounded-full"></div>
                <h3 className="text-xl font-medium text-black">Test Automation Engineer</h3>
                <p className="text-gray-600 mb-1">Autify • 2019年8月 - 2021年8月</p>
                <p className="text-gray-700">テスト自動化の実装と改善</p>
              </div>
            </div>
            <div className="border-l-2 border-gray-200 pl-6">
              <div className="relative">
                <div className="absolute -left-8 w-4 h-4 bg-gray-400 rounded-full"></div>
                <h3 className="text-xl font-medium text-black">QA Engineer / Logistics Engineer</h3>
                <p className="text-gray-600 mb-1">OPENLOGI • 2017年10月 - 2019年8月</p>
                <p className="text-gray-700">品質保証プロセスの構築と自動テストインフラの整備</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black mb-4">Education & Certifications</h2>
          <div className="grid gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-gray-700">JSTQB Foundation Level (2019)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-gray-700">物流管理2級</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-gray-700">VBAエキスパート スタンダード</span>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black mb-4">Projects</h2>
          <div className="grid gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
              <h3 className="text-xl font-medium text-black mb-2">テスト自動化実践ガイド</h3>
              <p className="text-gray-600">ソフトウェアテスト自動化の実践的な手法をまとめた書籍を執筆</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
              <h3 className="text-xl font-medium text-black mb-2">Community Activities</h3>
              <p className="text-gray-600">JaSST Online、Tokyo Test Festの実行委員として活動</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black mb-4">Contact</h2>
          <div className="flex gap-4">
            <a href="https://github.com/tsuemura" className="text-gray-600 hover:text-black transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/takuya-suemura/" className="text-gray-600 hover:text-black transition-colors">LinkedIn</a>
            <a href="mailto:tsuemura@gmail.com" className="text-gray-600 hover:text-black transition-colors">Email</a>
          </div>
        </section>
      </div>
    </main>
  )
}