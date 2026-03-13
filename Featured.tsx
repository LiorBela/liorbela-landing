export default function Featured() {
  const posts = [
    {
      title: 'Intune Suite now available on Microsoft 365 E3 and E5',
      excerpt: 'Exciting news! Based on customer feedback, Intune Suite is now coming to Microsoft 365 E3 and E5 with simplified licensing.',
      engagement: '1,299 reactions • 99 comments',
      date: 'Recent'
    },
    {
      title: 'Intune now available for MSPs through Nerdio and Inforcer',
      excerpt: 'Microsoft Intune is now widely accessible for MSPs through our partners, bringing streamlined device management and heightened security.',
      engagement: '321 reactions • 12 comments',
      date: 'Recent'
    },
    {
      title: 'App Migration offerings launch with Rimo3 and Robopack',
      excerpt: 'Exciting opportunity for customers to migrate apps from on-premises to Intune Cloud Native with two full months of free services.',
      engagement: '253 reactions • 39 comments',
      date: 'Recent'
    },
    {
      title: 'New opt-in enrollment for modern app sign-in in Intune',
      excerpt: 'New public preview introduces opt-in enrollment to prevent accidental MDM enrollment in BYOD and mixed-ownership scenarios.',
      engagement: '175 reactions • 5 comments',
      date: 'Recent'
    }
  ]

  return (
    <section id="featured" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Featured Content</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="glass-effect p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{post.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
              <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                <span className="text-xs text-gray-500 dark:text-gray-400">{post.date}</span>
                <span className="text-xs text-microsoft-blue dark:text-blue-400">{post.engagement}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.linkedin.com/in/liorbela/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-microsoft-blue text-white rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            View More on LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}