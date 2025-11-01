import React, { useState } from 'react'
import { Github, ExternalLink, Code } from 'lucide-react'

export const Projects = () => {
  const [selectedSkill, setSelectedSkill] = useState(null)

  const projects = [
    {
      title: 'Quantum_Kodes',
      date: 'Mar 2024 - Present',
      description: 'An experimental project that aims to dive deep into the potential of quantum computing. Using the Qiskit simulator and other online computing services, this project explores how quantum computing paradigms can enhance and transform machine learning applications.',
      skills: ['Quantum Computing', 'Machine Learning', 'Algorithm Development', 'Python', 'Deep Neural Networks'],
      github: 'https://github.com/ulolol/Quantum_Kodes',
      featured: true,
    },
    {
      title: 'ThalesDocsBotv2',
      date: 'Oct 2025 - Oct 2025',
      description: 'v2 of my original ThalesDocsBot. Real-time documentation search with no pre-indexing required. Instant responses powered by Gemini\'s long-context Flash model. Live web scraping for always up-to-date information. Single HTML file deployment with zero dependencies.',
      skills: ['AI/ML', 'Web Scraping', 'HTML', 'Gemini API', 'Information Retrieval'],
      featured: true,
    },
    {
      title: 'DE3ImageGen',
      date: 'Dec 2024 - Dec 2024',
      description: 'A Simple GUI to generate images using DALL-E 3 with your API key. Built using Streamlit for quick and easy image generation.',
      skills: ['AI/ML', 'Python', 'GUI Development', 'DALL-E Integration'],
    },
    {
      title: 'KaOS_BoT',
      date: 'Dec 2024 - Dec 2024',
      description: 'A Simple WebUI Chatbot with Web Search and Docs Ingestion capabilities. Built using Gradio. Supports Gemini, OpenAI and Ollama models.',
      skills: ['AI/ML', 'LLM', 'Web Scraping', 'Data Scraping', 'Python', 'Web Development'],
    },
    {
      title: 'ShellAssistant',
      date: 'Oct 2024 - Nov 2024',
      description: 'A shell wrapper to bring AI and its capabilities directly to your shell. Supports Gemini, OpenAI and Ollama models. Natural Language Conversations with AI. Searches the web for info and gets you the data. Can be run on both PC and Android.',
      skills: ['AI/ML', 'LLM', 'Data Scraping', 'Shell Scripting', 'Python', 'Web Scraping'],
    },
    {
      title: 'SearchShell',
      date: 'Oct 2024 - Oct 2024',
      description: 'A shell wrapper to use AI in the terminal, powered by Ollama, OpenAI and Gemini. Integrates search with Google and DuckDuckGo. Performs data fetching from preferred engine.',
      skills: ['Python', 'Linux', 'Web Scraping', 'LLM', 'Shell Scripting', 'AI/ML'],
    },
    {
      title: 'ThalesDocsBot',
      date: 'May 2024 - May 2024',
      description: 'Developed a chatbot to help users find information in Thales product documentation. Built with Streamlit, Llama-Index, Playwright, and Beautiful Soup. Provides a helpful bot for Thales Products Documentation.',
      skills: ['AI/ML', 'LLM', 'Web Scraping', 'Data Scraping', 'Data Mining', 'Information Retrieval'],
    },
    {
      title: 'KaOtiCKerneL',
      date: 'Mar 2023 - Jan 2024',
      description: 'Kernel built from SCRATCH using ASM and C Written in Assembly and C, with a dedicated BootLoader, supporting 64-Bit execution.',
      skills: ['Linux Kernel', 'x86 Assembly', 'Systems Design', 'Kernel Programming', 'C', 'Kernel Debugging'],
    },
    {
      title: 'SyntheticArtiste - The AI Artist',
      date: 'May 2022 - May 2022',
      description: 'A Deep Learning-based Python System that generates Artistic Images. Uses feedback looping with multiple DNN Models for artistic creation.',
      skills: ['Generative Neural Networks', 'Machine Learning', 'Linux', 'Generative Art', 'Deep Neural Networks'],
    },
    {
      title: 'NooBOT - The AI Chatbot',
      date: 'May 2021 - May 2021',
      description: 'An AI Chatbot built using Python and Chatterbot API. NLP Conversational Bot trained on English conversation corpus with over 26 million natural language conversations.',
      skills: ['Machine Learning', 'NLP', 'Linux', 'Multilingual NLP', 'Deep Neural Networks'],
    },
  ]

  const allSkills = Array.from(
    new Set(projects.flatMap(p => p.skills))
  ).sort()

  const filteredProjects = selectedSkill
    ? projects.filter(p => p.skills.includes(selectedSkill))
    : projects

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 dark:from-gray-900 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h1 className="section-title mb-6">Projects & Portfolio</h1>
          <p className="section-subtitle">
            Innovative solutions showcasing skills in AI, Systems Programming, and Full-Stack Development
          </p>
        </div>
      </section>

      {/* Skills Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-4">Filter by Skill:</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedSkill(null)}
              className={`px-4 py-2 rounded-full transition ${
                !selectedSkill
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              All
            </button>
            {allSkills.map(skill => (
              <button
                key={skill}
                onClick={() => setSelectedSkill(skill)}
                className={`px-4 py-2 rounded-full transition ${
                  selectedSkill === skill
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`card group animate-slide-up ${
                  project.featured ? 'md:col-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}

                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{project.date}</p>
                  </div>
                  <Code className="text-primary-600 dark:text-primary-400 flex-shrink-0" />
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Skills Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedSkill(skill)}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium hover:bg-primary-200 dark:hover:bg-primary-900/50 transition"
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                  >
                    <Github size={18} />
                    View on GitHub
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No projects found with the selected skill.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
