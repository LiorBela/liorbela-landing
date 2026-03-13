export default function Community() {
  const activities = [
    {
      title: 'MVP Organization Leadership',
      description: 'Leading the Microsoft MVP organization for Intune and supporting Windows, Windows 365 communities.',
      impact: '100+ MVPs supported',
      icon: '👥'
    },
    {
      title: 'Regional User Groups',
      description: 'Fostering regional user groups and community collaboration around Microsoft technologies.',
      impact: '1000+ members engaged',
      icon: '🌍'
    },
    {
      title: 'Community Growth Initiatives',
      description: 'Championing community growth through strategic partnerships and engagement programs.',
      impact: '15K+ followers',
      icon: '📈'
    },
    {
      title: 'Technical Advocacy',
      description: 'Advocating for customer needs and driving technical innovation through community feedback.',
      impact: 'Direct influence on product roadmap',
      icon: '🔊'
    },
    {
      title: 'Make-A-Wish Illinois',
      description: 'Volunteer running group leader supporting children through make-a-wish initiatives.',
      impact: '4+ years of service',
      icon: '🏃'
    }
  ]

  return (
    <section id="community" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Community & Activities</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="tile p-8 text-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{activity.icon}</div>
              <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
              <p className="text-blue-100 mb-4 text-sm">{activity.description}</p>
              <p className="text-blue-200 font-semibold text-sm">Impact: {activity.impact}</p>
            </div>
          ))}
        </div>

        <div className="glass-effect p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Featured Partnerships</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-microsoft-blue/10 dark:bg-blue-900/30 text-microsoft-blue dark:text-blue-400 rounded-lg font-semibold">Nerdio</span>
            <span className="px-4 py-2 bg-microsoft-blue/10 dark:bg-blue-900/30 text-microsoft-blue dark:text-blue-400 rounded-lg font-semibold">Inforcer</span>
            <span className="px-4 py-2 bg-microsoft-blue/10 dark:bg-blue-900/30 text-microsoft-blue dark:text-blue-400 rounded-lg font-semibold">Rimo3</span>
            <span className="px-4 py-2 bg-microsoft-blue/10 dark:bg-blue-900/30 text-microsoft-blue dark:text-blue-400 rounded-lg font-semibold">Robopack</span>
            <span className="px-4 py-2 bg-microsoft-blue/10 dark:bg-blue-900/30 text-microsoft-blue dark:text-blue-400 rounded-lg font-semibold">Microsoft Zero to Hero Community</span>
          </div>
        </div>
      </div>
    </section>
  )
}