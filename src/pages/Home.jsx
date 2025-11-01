import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

const LINKEDIN_URL = 'https://linkedin.com/in/vidish-srivastava-kaos'

export const Home = () => {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Avatar */}
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary-600 to-accent-600 p-1 animate-glow">
              <img
                src="/profile.jpg"
                alt="Vidish Srivastava"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 animate-slide-up">
            Vidish Srivastava
          </h1>

          {/* Subtitle */}
          <p className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-6 animate-slide-up">
            Technical Lead & Mentor
          </p>

          {/* Description */}
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            MTS @ Coriolis Technologies | Google Cloud Certified GenAI Leader
          </p>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            Passionate Python and Linux developer diving deep into Machine Learning, Quantum Computing, and Deep Neural Networks. Leveraging AI to bridge knowledge gaps and accelerate growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <Link
              to="/projects"
              className="btn-primary inline-flex items-center justify-center gap-2 group"
            >
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
            </Link>
            <a
              href="mailto:vidish@example.com"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              Get In Touch
              <Mail size={20} />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-slide-up">
            <a
              href="https://github.com/ulolol"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-600 dark:hover:bg-primary-600 hover:text-white transition group"
            >
              <Github size={24} className="group-hover:scale-110 transition" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-600 dark:hover:bg-primary-600 hover:text-white transition group"
            >
              <Linkedin size={24} className="group-hover:scale-110 transition" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-primary-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">4+</div>
              <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600">15+</div>
              <p className="text-gray-600 dark:text-gray-400">Projects</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">10+</div>
              <p className="text-gray-600 dark:text-gray-400">Certifications</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600">7+</div>
              <p className="text-gray-600 dark:text-gray-400">Tech Skills</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
