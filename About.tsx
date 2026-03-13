export default function About() {
  const skills = [
    'Endpoint Security',
    'Microsoft Intune',
    'Business Strategy',
    'Community Leadership',
    'Technical Advocacy',
    'Zero Trust Security',
    'Device Management',
    'AI & Innovation'
  ]

  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a Chicago-based leader at Microsoft passionate about endpoint management innovation and community growth. 
              With over 8 years at Microsoft and previous experience in consulting, I drive business strategy, foster regional user groups, 
              and support the MVP community.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              My focus is on championing Zero Trust security, simplifying enterprise device management, and connecting 
              technical innovation with real-world customer needs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="tile p-4 text-center text-sm md:text-base"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-effect p-8 text-center">
            <div className="text-4xl font-bold text-microsoft-blue dark:text-blue-400 mb-2">15K+</div>
            <p className="text-gray-600 dark:text-gray-400">LinkedIn Followers</p>
          </div>
          <div className="glass-effect p-8 text-center">
            <div className="text-4xl font-bold text-microsoft-blue dark:text-blue-400 mb-2">8+</div>
            <p className="text-gray-600 dark:text-gray-400">Years @ Microsoft</p>
          </div>
          <div className="glass-effect p-8 text-center">
            <div className="text-4xl font-bold text-microsoft-blue dark:text-blue-400 mb-2">500+</div>
            <p className="text-gray-600 dark:text-gray-400">Professional Connections</p>
          </div>
        </div>
      </div>
    </section>
  )
}