import React, { useState } from 'react'
import { Award, Calendar, ExternalLink } from 'lucide-react'

export const Certifications = () => {
  const [expandedId, setExpandedId] = useState(null)

  const certifications = [
    {
      id: 1,
      title: 'Generative AI Leader Certification',
      issuer: 'Google',
      date: 'May 2025',
      expiresDate: 'May 2028',
      skills: ['Generative AI', 'AI Leadership'],
      credentialId: 'EWVM6o8L747',
      featured: true,
    },
    {
      id: 2,
      title: 'Quantum Computing - Gates and Circuits',
      issuer: 'Fractal',
      date: 'Dec 2024',
      skills: ['Quantum Computing', 'Quantum Circuits'],
      credentialId: 'EWVM6o8L747',
    },
    {
      id: 3,
      title: 'Quantum Computing Fundamentals with Microsoft Azure Quantum',
      issuer: 'Udemy',
      date: 'Mar 2024',
      skills: ['Quantum Computing', 'Linux'],
      credentialId: 'UC-91c473f3-7754-4079-8845-411bee93fc2d',
    },
    {
      id: 4,
      title: 'AI for Qualcomm Compute',
      issuer: 'Qualcomm Innovation Center, Inc.',
      date: 'Jan 2024',
      skills: ['Linux', 'ARM Architecture', 'AI', 'Deep Neural Networks'],
    },
    {
      id: 5,
      title: 'Fundamentals of Qualcomm AI',
      issuer: 'Qualcomm Innovation Center, Inc.',
      date: 'Jan 2024',
      skills: ['Linux', 'ARM Architecture', 'AI', 'Deep Neural Networks'],
    },
    {
      id: 6,
      title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
      issuer: 'Stanford Online',
      date: 'Mar 2023',
      skills: ['Deep Learning', 'Linux', 'Machine Learning', 'Deep Neural Networks'],
      credentialId: 'TXBUR1G1EBAY',
    },
    {
      id: 7,
      title: 'Machine Learning Specialization',
      issuer: 'Stanford Online',
      date: 'Mar 2023',
      skills: ['Deep Learning', 'Linux', 'Machine Learning', 'Deep Neural Networks'],
      credentialId: 'FF3D37QKSG7',
    },
    {
      id: 8,
      title: 'Advanced Learning Algorithms',
      issuer: 'Stanford Online',
      date: 'Dec 2022',
      skills: ['Deep Learning', 'Linux', 'Machine Learning', 'Deep Neural Networks'],
      credentialId: '2N3B6UFKVK4W',
    },
    {
      id: 9,
      title: 'Supervised Machine Learning: Regression and Classification',
      issuer: 'Stanford Online',
      date: 'Nov 2022',
      skills: ['Deep Learning', 'Linux', 'Machine Learning', 'Deep Neural Networks'],
      credentialId: 'CYZE6ROSXJK5',
    },
    {
      id: 10,
      title: 'Agile Project Management',
      issuer: 'Udemy',
      date: 'Oct 2022',
      skills: ['Agile Methodologies'],
      credentialId: 'UC-45c78e8f-5b00-41a0-9a46-a9f4ea584ec36',
    },
    {
      id: 11,
      title: 'AgileKB Crash Course',
      issuer: 'AgileKB',
      date: 'Oct 2022',
      skills: ['Agile Methodologies'],
    },
    {
      id: 12,
      title: 'Data Science Specialization',
      issuer: 'The Johns Hopkins University',
      date: 'Mar 2021',
      skills: ['Linux', 'Deep Neural Networks'],
      credentialId: 'U4M4Q2SRTJ',
    },
    {
      id: 13,
      title: 'Complete Python Masterclass',
      issuer: 'Udemy',
      date: 'May 2020',
      skills: ['Linux'],
    },
    {
      id: 14,
      title: 'The Complete Python 3 Course',
      issuer: 'Udemy',
      date: 'Issued May 2020',
      skills: ['Linux'],
      credentialId: 'UC-51f804f6-3ad7-48b5-b35c-8ebf625f6c54',
    },
    {
      id: 15,
      title: 'The Hello World of Machine Learning in Python',
      issuer: 'Udemy',
      date: 'Issued Dec 2020',
      skills: [],
      credentialId: 'UC-fa21acb2-3452-4826-b4c3-8d7524675325',
    },
  ]

  const skillCount = {}
  certifications.forEach(cert => {
    cert.skills.forEach(skill => {
      skillCount[skill] = (skillCount[skill] || 0) + 1
    })
  })

  const topSkills = Object.entries(skillCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 dark:from-gray-900 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h1 className="section-title mb-6">Certifications & Credentials</h1>
          <p className="section-subtitle">
            Continuous learning and professional development across AI, ML, and Systems
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 dark:bg-gray-900/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">{certifications.length}</div>
              <p className="text-gray-600 dark:text-gray-400">Total Certifications</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-600 mb-2">{new Date().getFullYear() - 2020}</div>
              <p className="text-gray-600 dark:text-gray-400">Years of Learning</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">{Object.keys(skillCount).length}</div>
              <p className="text-gray-600 dark:text-gray-400">Unique Skills</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Certification */}
      {certifications.find(c => c.featured) && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Featured</h2>
            <div className="card border-2 border-primary-600 dark:border-primary-400 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-900">
              {certifications
                .filter(c => c.featured)
                .map(cert => (
                  <div key={cert.id} className="flex items-start gap-6">
                    <div className="p-4 rounded-lg bg-gradient-to-br from-primary-600 to-accent-600">
                      <Award size={32} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                      <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">{cert.issuer}</p>
                      <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar size={18} />
                          <span>{cert.date}</span>
                        </div>
                        {cert.expiresDate && (
                          <div className="flex items-center gap-2">
                            <Calendar size={18} />
                            <span>Expires: {cert.expiresDate}</span>
                          </div>
                        )}
                      </div>
                      {cert.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {cert.skills.map((skill, idx) => (
                            <span key={idx} className="px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-sm font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* Top Skills from Certifications */}
      {topSkills.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Skills Across Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {topSkills.map(([skill, count], index) => (
                <div
                  key={skill}
                  className="p-4 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-between animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="font-medium">{skill}</span>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-bold">
                    {count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">All Certifications</h2>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                className="card cursor-pointer animate-slide-up"
                onClick={() => setExpandedId(expandedId === cert.id ? null : cert.id)}
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Award size={20} className="text-primary-600 dark:text-primary-400 flex-shrink-0" />
                      <h3 className="text-lg font-bold">{cert.title}</h3>
                    </div>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{cert.issuer}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <span>Issued: {cert.date}</span>
                      {cert.expiresDate && <span>Expires: {cert.expiresDate}</span>}
                    </div>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      expandedId === cert.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>

                {/* Expanded Details */}
                {expandedId === cert.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 animate-slide-up">
                    {cert.skills.length > 0 && (
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Skills:</p>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, idx) => (
                            <span key={idx} className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {cert.credentialId && (
                      <div>
                        <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Credential ID:</p>
                        <p className="text-sm font-mono text-gray-700 dark:text-gray-300 break-all">{cert.credentialId}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
