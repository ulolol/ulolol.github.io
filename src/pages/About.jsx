import React from 'react'
import { BookOpen, Code, Zap, Award } from 'lucide-react'

export const About = () => {
  const journeyItems = [
    {
      title: 'Data Science Specialization',
      org: 'Johns Hopkins University',
      icon: BookOpen,
    },
    {
      title: 'Supervised & Unsupervised Machine Learning',
      org: 'Stanford University Online',
      icon: Code,
    },
    {
      title: 'Deep Learning Algorithms and Systems',
      org: 'Online Specialization',
      icon: Zap,
    },
    {
      title: 'Quantum Mechanics and Computing',
      org: 'Udemy & Coursera',
      icon: Award,
    },
  ]

  const expertise = [
    'Python & Linux Developer',
    'Machine Learning & Deep Neural Networks',
    'Quantum Computing & Algorithms',
    'Systems Programming & Kernel Management',
    'Open Source Contributor',
    'AI/ML Leadership & Mentoring',
  ]

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 dark:from-gray-900 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title mb-6">About Me</h1>
          <p className="section-subtitle">
            A journey through Machine Learning, Systems Programming, and AI Innovation
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Personal Intro */}
          <div className="mb-16 animate-slide-up">
            <h2 className="text-3xl font-bold mb-6">Who I Am</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              I'm a passionate Python and Linux developer with a deep interest in Machine Learning and Quantum Computing,
              particularly in Deep Neural Networks and their applications to quantum machines. My career has been marked by
              a strategic transition from systems programming to the cutting-edge field of AI/ML.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              At Coriolis Technologies, I lead technical initiatives and mentor talented individuals, working across a diverse
              spectrum of tech stacks. I'm committed to leveraging AI to bridge knowledge gaps and accelerate innovation.
            </p>
          </div>

          {/* Journey */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">My Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {journeyItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="card group animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900">
                        <Icon className="text-primary-600 dark:text-primary-400" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{item.org}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Expertise */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Core Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center gap-3 hover:shadow-lg transition animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-600 to-accent-600"></div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Early Days */}
          <div className="card animate-slide-up bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-800">
            <h3 className="text-2xl font-bold mb-4">Early Days & Legacy</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              During my high school and college years, I was heavily involved in system development and scripting.
              I spent two years (2016-2019) working on Kernel Compiling/Building for PhoenixOS and maintained
              open-source device trees for 3 devices over 7 years.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              As a retired Senior Developer and Recognized Contributor on XDA Developers, I created kernels,
              system modules, and scripts for various devices, contributing to the open-source community.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Beyond code, I've also honed my marketing skills as a Content and Marketing Intern, working on SEO
              and digital strategy at TheCollegeMonk.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
