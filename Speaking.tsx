export default function Speaking() {
  const events = [
    {
      title: 'MEM2026 Summit Paris - Keynote Speaker',
      event: 'Spring Edition - Day 2 Keynote',
      date: 'May 2026',
      description: 'Covering all enhancements from the past year, including Zero Trust and AI readiness with co-speaker Sangeetha Visweswaran.',
      topics: ['Zero Trust', 'AI Readiness', 'Intune Updates'],
      icon: '🎤'
    },
    {
      title: 'Microsoft Ignite 2025',
      event: 'Intune & Zero-Trust Updates Session',
      date: 'September 2025',
      description: 'Unveiling newest Microsoft Intune and Zero-Trust updates. Expect exciting enhancements in latency and upcoming developments.',
      topics: ['Intune', 'Zero Trust', 'Security', 'Latency Improvements'],
      icon: '⚡'
    },
    {
      title: 'Microsoft AI Tour Paris',
      event: 'Windows + Copilot: Secure AI Agents',
      date: 'March 2026',
      description: 'Exploring three major AI shifts: bringing AI into daily workflows, Copilot on Windows, and on-device AI experiences.',
      topics: ['AI Agents', 'Windows 365', 'Copilot', 'Security'],
      icon: '🤖'
    },
    {
      title: 'NextGen Heroes Spotlight',
      event: 'The Lior Bela Journey',
      date: 'April 2026',
      description: 'An inspiring talk sharing my career story, experiences that shaped my journey in tech, and insights on leadership and innovation.',
      topics: ['Leadership', 'Career Growth', 'Innovation'],
      icon: '🌟'
    },
    {
      title: 'Intune App Management Session',
      event: 'Engineering Team Interactive Session',
      date: 'March 2026',
      description: 'Interactive session with Intune engineering team focused on streamlining app management and gathering customer feedback.',
      topics: ['App Management', 'Enterprise Solutions', 'Customer Feedback'],
      icon: '📱'
    }
  ]

  return (
    <section id="speaking" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Speaking Engagements</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="glass-effect p-8 hover:shadow-lg transition-all hover:scale-105"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">{event.icon}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{event.title}</h3>
                  <p className="text-microsoft-blue dark:text-blue-400 font-semibold text-sm">{event.event}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{event.date}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">{event.description}</p>
              <div className="flex flex-wrap gap-2">
                {event.topics.map((topic, i) => (
                  <span key={i} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded text-xs font-semibold">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}