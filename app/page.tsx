import { XIcon } from "@/components/icons"

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
          <h2 className="text-2xl font-semibold text-black mb-4">Work Opportunities</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-medium text-black mb-3">フルタイム</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">条件</p>
                  <ul className="text-gray-700 space-y-1 text-sm list-disc list-inside">
                    <li>年収920万円以上（ボーナス除く）</li>
                    <li>ストックオプション or 従業員持株制度 必須</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">応募条件</p>
                  <p className="text-gray-700 text-sm">
                    末村とぜひ働きたいと思う方からのお声がけのみお受けします
                    <span className="text-gray-500">（直接の知り合いでなくても可）</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-medium text-black mb-3">副業・業務委託</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gray-900 mt-0.5 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">講演依頼</p>
                    <p className="text-gray-600 text-sm">テスト自動化・品質保証に関する講演</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gray-900 mt-0.5 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">コンサルタント</p>
                    <p className="text-gray-600 text-sm">品質改善・テスト戦略の策定支援</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gray-900 mt-0.5 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">自動テスト基盤構築</p>
                    <p className="text-gray-600 text-sm">CI/CD環境でのテスト自動化実装</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black mb-4">Contact</h2>
          <div className="flex gap-6">
            <a href="https://github.com/tsuemura" className="text-gray-600 hover:text-black transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/takuya-suemura-456343189/" className="text-gray-600 hover:text-black transition-colors">
              LinkedIn
            </a>
            <a href="https://x.com/tsueeemura" className="text-gray-600 hover:text-black transition-colors inline-flex items-center gap-2">
              <XIcon className="w-4 h-4" />
              <span>@tsueeemura</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}