export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-16">
          <h1 className="text-4xl font-bold text-black mb-4">Takuya Suemura</h1>
          <p className="text-xl text-gray-600">Software Engineer</p>
        </header>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black mb-4">About</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to my personal website. I am a software engineer passionate about creating elegant solutions to complex problems.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black mb-4">Projects</h2>
          <div className="grid gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
              <h3 className="text-xl font-medium text-black mb-2">Project 1</h3>
              <p className="text-gray-600">Description of your project goes here.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
              <h3 className="text-xl font-medium text-black mb-2">Project 2</h3>
              <p className="text-gray-600">Description of your project goes here.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black mb-4">Contact</h2>
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-black transition-colors">GitHub</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">Email</a>
          </div>
        </section>
      </div>
    </main>
  )
}