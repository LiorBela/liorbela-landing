export default function Experience() {
  const experience = [
    {
      title: 'Business Director - Microsoft Intune',
      company: 'Microsoft',
      period: 'Feb 2024 - Present',
      description: 'Drive business growth through innovative partnerships and customer engagement strategies. Lead the MVP organization and implement initiatives that improve customer satisfaction.',
      highlights: ['Partnership Strategy', 'MVP Leadership', 'Customer Engagement']
    },
    {
      title: 'Senior Manager, Business Strategy & Marketing',
      company: 'Microsoft Intune',
      period: 'Oct 2021 - Feb 2024',
      description: 'Led business strategy and marketing for Microsoft Intune, Windows Autopatch, and Microsoft Managed Desktop. Successfully launched Windows Autopatch in July 2022.',
      highlights: ['Product Launch', 'Go-to-Market Strategy', 'Business Growth']
    },
    {
      title: 'Senior Cross-Solutions Innovation Strategy Manager',
      company: 'Microsoft Surface',
      period: 'Nov 2018 - Oct 2021',
      description: 'Spearheaded cross-organizational initiatives in endpoint management and security. Developed and launched Surface Device-as-a-Service solution.',
      highlights: ['Innovation Strategy', 'Cross-functional Leadership', 'Product Development']
    },
    {
      title: 'Senior Consultant',
      company: 'Deloitte',
      period: 'Jul 2012 - Feb 2017',
      description: 'Managed sales forecasting, territory analytics, and process improvements. Led cross-functional teams resulting in 20% reduction in quota rollout time.',
      highlights: ['Sales Strategy', 'Process Improvement', 'Team Leadership']
    }
  ]

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Experience</h2>
        
        <div className="space-y-6">
          {experience.map((job, index) => (
            <div
              key={index}
              className="glass-effect p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{job.title}</h3>
                  <p className="text-microsoft-blue dark:text-blue-400 font-semibold">{job.company}</p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{job.period}</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{job.description}</p>
              <div className="flex flex-wrap gap-2">
                {job.highlights.map((highlight, i) => (
                  <span key={i} className="px-3 py-1 bg-microsoft-blue/10 dark:bg-blue-900/30 text-microsoft-blue dark:text-blue-400 rounded-full text-sm">
                    {highlight}
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