export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8 inline-block">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-microsoft-blue to-blue-600 rounded-full flex items-center justify-center text-white text-5xl font-bold">
            LB
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white">
          Lior Bela
        </h1>
        <p className="text-xl md:text-3xl text-microsoft-blue dark:text-blue-400 font-semibold mb-6">
          Director @ Microsoft Intune
        </p>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Championing endpoint management innovation, community growth, and technical advocacy. 
          Speaker, community leader, and technology enthusiast based in Chicago.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#speaking" className="px-8 py-3 bg-microsoft-blue text-white rounded-lg hover:bg-blue-700 transition font-semibold">
            View Speaking Events
          </a>
          <a href="#contact" className="px-8 py-3 border-2 border-microsoft-blue text-microsoft-blue dark:text-blue-400 rounded-lg hover:bg-microsoft-blue hover:text-white transition font-semibold">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}