export default function Contact() {
  const socials = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/liorbela/', icon: '💼' },
    { name: 'Email', url: 'mailto:lior@microsoft.com', icon: '✉️' },
    { name: 'Microsoft Blog', url: 'https://aka.ms/IntuneM365Blog', icon: '📝' },
  ]

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title">Let's Connect</h2>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Interested in discussing Microsoft Intune, endpoint management, community initiatives, or speaking opportunities? 
          Let's connect!
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tile p-8 text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">{social.icon}</div>
              <h3 className="text-xl font-bold">{social.name}</h3>
            </a>
          ))}
        </div>

        <div className="glass-effect p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Based in Chicago, Illinois</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Always open to conversations about technology, innovation, community building, and how we can drive positive change 
            in the enterprise technology space.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Pronouns: He/Him
          </p>
        </div>

        <p className="text-gray-600 dark:text-gray-400">
          Made with ❤️ | © 2026 Lior Bela | Powered by Next.js
        </p>
      </div>
    </section>
  )
}