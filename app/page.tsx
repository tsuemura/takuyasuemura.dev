import { XIcon } from "@/components/icons"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-16">
          <div className="flex items-center gap-6 mb-6">
            <img src="https://pbs.twimg.com/profile_images/1722964011455823872/zCpchVAf_400x400.jpg" alt="Takuya Suemura" className="w-20 h-20 rounded-full shadow-lg object-cover" />
            <div>
              <h1 className="text-4xl font-bold text-black mb-2">Takuya Suemura</h1>
              <p className="text-xl text-gray-600">Software Engineer / Test Automation Specialist</p>
            </div>
          </div>
        </header>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black mb-4">About</h2>
          <p className="text-gray-700 leading-relaxed">
            テスト自動化、品質保証、DevOps、スクラムを専門とするソフトウェアエンジニアです。
            開発とQAの分離解消、頻発するシステム障害を減らすためのアジャイル開発プロセス改善、
            テスト自動化の価値と投資価値の実証など、組織の課題解決に取り組んでいます。
            Software Engineer in Test（SET）として、E2Eテストやテスト自動化基盤の構築・運用に豊富な経験を持ち、
            BDD/ATDDの実践にも精通しています。
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
          <h2 className="text-2xl font-semibold text-black mb-4">Publications</h2>
          <div className="grid gap-8">
            <a href="https://www.shoeisha.co.jp/book/detail/9784798172354" target="_blank" rel="noopener noreferrer" className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors block">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <img src="https://www.seshop.com/static/images/product/25037/L.png" alt="テスト自動化実践ガイド" className="w-32 h-auto rounded shadow-sm" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-black mb-2">テスト自動化実践ガイド 継続的にWebアプリケーションを改善するための知識と技法</h3>
                  <p className="text-gray-600 mb-3">著者：末村拓也 - 翔泳社（2024年7月刊行）</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Webアプリケーションの効果的なテスト自動化を実装するための実践的なガイド。テスト自動化の目的理解から、E2Eテストの実装、開発プロセスの改善、トラブルシューティング技法まで、CodeceptJSとPlaywrightを使用したハンズオン形式で学べる352ページの実践書。
                  </p>
                </div>
              </div>
            </a>
            <a href="https://www.shoeisha.co.jp/book/detail/9784798190471" target="_blank" rel="noopener noreferrer" className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors block">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <img src="https://www.seshop.com/static/images/product/26980/L.png" alt="フルスタックテスティング" className="w-32 h-auto rounded shadow-sm" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-black mb-2">フルスタックテスティング 10のテスト手法で実践する高品質ソフトウェア開発</h3>
                  <p className="text-gray-600 mb-3">原著：Gayathri Mohan - 翻訳：末村拓也、堀明子、松浦隼人 - 翔泳社（2025年7月刊行予定）</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    高品質なソフトウェア開発のための10の包括的なテスト手法を網羅。手動探索テスト、自動テスト、継続的テスト、データテスト、ビジュアルテスト、パフォーマンステスト、セキュリティテスト、アクセシビリティテスト、横断機能要件テスト、モバイルテストなど、現代のソフトウェア開発に必要なテスト知識を体系的に習得できる456ページの専門書。
                  </p>
                </div>
              </div>
            </a>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black mb-4">Work Opportunities</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-medium text-black">フルタイム</h3>
                <span className="text-sm font-medium bg-gray-100 text-gray-800 px-3 py-1 rounded-full">9.2M/year</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gray-900 mt-0.5 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">QA・自動テストリード</p>
                    <p className="text-gray-600 text-sm">品質保証戦略の策定と自動テスト基盤の構築</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gray-900 mt-0.5 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">DevOpsエンジニア</p>
                    <p className="text-gray-600 text-sm">CI/CDパイプラインの構築と開発生産性の向上</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-700 text-sm">
                    末村とぜひ働きたいと思う方からのお声がけのみお受けします
                    <span className="text-gray-500">（直接の知り合いでなくても可）</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-medium text-black">副業・業務委託</h3>
                <span className="text-sm font-medium bg-gray-100 text-gray-800 px-3 py-1 rounded-full">30k/hour</span>
              </div>
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
          <h2 className="text-2xl font-semibold text-black mb-4">品質・自動テストに関するオンラインディスカッション</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            品質・自動テストに関するオンラインディスカッションを受け付けています（無料・30分）
          </p>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <iframe 
              width="100%" 
              height="600" 
              src="https://booking.receptionist.jp/5bb166d5-630b-42f8-8061-1aefb10cb937/30min"
              className="w-full"
              style={{minHeight: '600px'}}
            />
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