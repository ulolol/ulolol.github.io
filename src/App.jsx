import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { Navigation } from './components/Navigation'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Projects } from './pages/Projects'
import { Skills } from './pages/Skills'
import { Certifications } from './pages/Certifications'

const LINKEDIN_URL = 'https://linkedin.com/in/vidish-srivastava-kaos'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
          <Navigation />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/certifications" element={<Certifications />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {/* Brand */}
                <div>
                  <h3 className="text-lg font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-2">
                    Vidish Srivastava
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Technical Lead, AI/ML Expert, Quantum Computing Enthusiast
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li><a href="https://github.com/ulolol" className="hover:text-primary-600">GitHub</a></li>
                    <li><a href={LINKEDIN_URL} className="hover:text-primary-600">LinkedIn</a></li>
                    <li><a href="mailto:vidish@example.com" className="hover:text-primary-600">Email</a></li>
                  </ul>
                </div>

                {/* Contact */}
                <div>
                  <h4 className="font-semibold mb-4">Get In Touch</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Interested in collaboration or have questions? Let's connect!
                  </p>
                  <a
                    href="mailto:vidish@example.com"
                    className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
                  >
                    Send me a message →
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
                <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                  <p>&copy; 2024 Vidish Srivastava. All rights reserved.</p>
                  <p>Built with React, Tailwind CSS & ❤️</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
