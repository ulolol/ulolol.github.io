import React from 'react'
import { Code, Cpu, Zap, Database, Brain, Wrench } from 'lucide-react'

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'R', 'JavaScript', 'TypeScript', 'C', 'Assembly', 'Bash'],
      proficiency: 95,
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      skills: ['TensorFlow', 'PyTorch', 'OpenCV', 'Scikit-learn', 'NLP', 'Deep Learning', 'Generative AI'],
      proficiency: 90,
    },
    {
      title: 'Quantum Computing',
      icon: Zap,
      skills: ['Qiskit', 'Quantum Algorithms', 'Quantum Circuits', 'Quantum Gates'],
      proficiency: 85,
    },
    {
      title: 'Systems & Infrastructure',
      icon: Cpu,
      skills: ['Linux Kernel', 'Systems Programming', 'Memory Management', 'OS Design', 'Kernel Modules', 'Docker'],
      proficiency: 92,
    },
    {
      title: 'Databases & Data',
      icon: Database,
      skills: ['SQL', 'PostgreSQL', 'MongoDB', 'Data Mining', 'Data Engineering', 'Apache Spark'],
      proficiency: 85,
    },
    {
      title: 'Tools & Frameworks',
      icon: Wrench,
      skills: ['Git', 'Streamlit', 'Flask', 'FastAPI', 'React', 'Gradio', 'Beautiful Soup', 'Playwright'],
      proficiency: 88,
    },
  ]

  const technicalSkills = [
    'Web Scraping',
    'API Development',
    'CLI Tools',
    'Full-Stack Development',
    'Debugging & Optimization',
    'LLM Integration',
    'Mentoring & Leadership',
  ]

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 dark:from-gray-900 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h1 className="section-title mb-6">Technical Skills</h1>
          <p className="section-subtitle">
            Proficiency across multiple domains and technologies
          </p>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={index}
                  className="card group animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30">
                      <Icon className="text-primary-600 dark:text-primary-400" size={24} />
                    </div>
                    <h3 className="text-lg font-bold">{category.title}</h3>
                  </div>

                  {/* Proficiency Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        Proficiency
                      </span>
                      <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                        {category.proficiency}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary-600 to-accent-600 transition-all duration-1000"
                        style={{ width: `${category.proficiency}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Technical Skills */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Additional Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition flex items-center gap-3 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 flex-shrink-0"></div>
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Work Experience</h2>

          <div className="space-y-8">
            {[
              {
                role: 'Member of Technical Staff',
                company: 'Coriolis Technologies Pvt. Ltd.',
                period: 'Jul 2021 - Present (4 yrs 5 mos)',
                description:
                  'Leading and mentoring talented individuals. Working on a host of products across a spectrum of Tech Stacks.',
                skills: ['Python', 'Apache Ambari', 'Leadership', 'Mentoring'],
              },
              {
                role: 'Content and Marketing Intern',
                company: 'The College Monk',
                period: 'Jan 2020 - Mar 2020 (3 mos)',
                description:
                  'Worked as a Content and Marketing Intern focusing on SEO and digital strategy.',
                skills: ['Marketing', 'SEO', 'Content Strategy'],
              },
              {
                role: 'Freelance Developer',
                company: 'Linux and Android - System / Script Programming',
                period: 'Sep 2012 - Feb 2020 (7 yrs 6 mos)',
                description:
                  'Compiling and creating open-source kernels and system modules for multiple android devices.',
                skills: ['Linux', 'Kernel Development', 'System Programming'],
              },
            ].map((exp, index) => (
              <div key={index} className="card animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{exp.company}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{exp.period}</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
