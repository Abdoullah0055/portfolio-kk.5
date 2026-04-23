import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import { Sun, Moon, Mail, ExternalLink, Code2, Server, Database, Palette, ChevronDown, Menu, X, Briefcase, User, FolderKanban, Contact, ArrowRight } from 'lucide-react'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.202-6.086 8.202-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const personalInfo = {
  name: 'Abdoullah El Ahmar',
  tagline: 'Student Programmer',
  bio: 'Student programmer / prompt engineer / AI specialist',
  location: 'Sainte-Therese, Quebec',
  github: 'https://github.com/Abdoullah0055',
  email: 'abdoullah.el.ahmar@gmail.com',
}

const techLogos = {
  php: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  csharp: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  html5: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  css3: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  mysql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  android: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
  dotnet: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
  git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
}

const TechLogo = ({ name }) => {
  const src = techLogos[name]
  if (!src) return null
  return (
    <img
      src={src}
      alt={name}
      className="w-10 h-10 object-contain"
    />
  )
}

const projectIcons = {
  book: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  film: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  smartphone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
}

const ProjectIcon = ({ type }) => {
  const src = projectIcons[type]
  return (
    <div className="w-16 h-16 rounded-xl bg-coffee-400 dark:bg-coffee-700 flex items-center justify-center">
      <img src={src} alt={type} className="w-10 h-10 object-contain invert dark:invert-0" />
    </div>
  )
}

const skills = [
  { name: 'PHP', logo: 'php' },
  { name: 'JavaScript', logo: 'javascript' },
  { name: 'Java', logo: 'java' },
  { name: 'C#', logo: 'csharp' },
  { name: 'Python', logo: 'python' },
  { name: 'HTML5', logo: 'html5' },
  { name: 'CSS3', logo: 'css3' },
  { name: 'MySQL', logo: 'mysql' },
  { name: 'Android', logo: 'android' },
  { name: '.NET', logo: 'dotnet' },
  { name: 'Git', logo: 'git' },
  { name: 'React', logo: 'react' },
]

const projects = [
  {
    title: 'projetKBE',
    description: 'Enterprise-grade knowledge management system with advanced database architecture, secure authentication, and real-time content updates. Built to handle large-scale data flow with optimal performance.',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS'],
    github: 'https://github.com/Abdoullah0055/projetKBE',
    icon: 'book',
  },
  {
    title: 'Wikimedia-PhaseB',
    description: 'Desktop application for processing and organizing large media libraries. Implemented file management algorithms with image recognition capabilities and automated categorization.',
    tags: ['C#', '.NET', 'Windows'],
    github: 'https://github.com/Abdoullah0055/Wikimedia-PhaseB',
    icon: 'image',
  },
  {
    title: 'Wikimedia',
    description: 'Advanced media workflow automation tool with batch processing, metadata extraction, and smart folder organization. Designed for professional content creators and media teams.',
    tags: ['C#', '.NET', 'Windows'],
    github: 'https://github.com/Abdoullah0055/Wikimedia',
    icon: 'film',
  },
  {
    title: 'remiseTP2AndroidStudio',
    description: 'Production-ready Android application with intuitive UI, local database integration, and offline capabilities. Features smooth animations and Material Design 3 principles.',
    tags: ['Java', 'Android Studio', 'Mobile'],
    github: 'https://github.com/Abdoullah0055/remiseTP2AndroidStudioPublique',
    icon: 'smartphone',
  },
]

const experiences = [
  {
    company: 'College',
    role: 'Computer Science Student',
    period: '2024 - Present',
    description: 'Studying computer science and software development. Working on various projects including PHP, Java, C#, and Android development.',
  },
]

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newMode = !prev
      if (newMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      return newMode
    })
  }

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'hero', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'projects', label: 'Projects', icon: FolderKanban },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Contact },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-milk-50 dark:bg-coffee-950 transition-colors duration-300">
      <div className="max-w-lg mx-auto px-4">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-milk-50/80 dark:bg-coffee-950/80 backdrop-blur-md border-b border-coffee-200 dark:border-coffee-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <button onClick={() => scrollToSection('hero')} className="text-xl font-semibold text-coffee-800 dark:text-milk-100">
              Dev<span className="text-coffee-500 dark:text-milk-500">Portfolio</span>
            </button>

            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-coffee-600 dark:text-milk-400'
                      : 'text-coffee-600/70 dark:text-milk-100/70 hover:text-coffee-800 dark:hover:text-milk-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-coffee-200 dark:bg-coffee-800 text-coffee-700 dark:text-milk-300 hover:bg-coffee-300 dark:hover:bg-coffee-700 transition-colors"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-coffee-200 dark:bg-coffee-800 text-coffee-700 dark:text-milk-300"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-coffee-700 dark:text-milk-300"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-coffee-200 dark:border-coffee-800"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-2 text-coffee-700 dark:text-milk-300 hover:bg-coffee-200 dark:hover:bg-coffee-800 rounded-lg"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coffee-200 dark:bg-coffee-800 text-coffee-700 dark:text-milk-300 text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Available for work
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-coffee-900 dark:text-milk-100 mb-4">
              Hi, I'm <span className="text-coffee-600 dark:text-milk-500">{personalInfo.name}</span>
            </h1>

            <p className="text-xl sm:text-2xl text-coffee-600 dark:text-milk-400 mb-6">
              {personalInfo.tagline}
            </p>

            <p className="text-lg text-coffee-500 dark:text-milk-400/70 max-w-2xl mx-auto mb-8">
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-coffee-800 dark:text-milk-100">17</div>
                <div className="text-coffee-600 dark:text-milk-500">Repositories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-coffee-800 dark:text-milk-100">4</div>
                <div className="text-coffee-600 dark:text-milk-500">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-coffee-800 dark:text-milk-100">2024</div>
                <div className="text-coffee-600 dark:text-milk-500">Coding Since</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-coffee-800 dark:bg-milk-100 text-milk-100 dark:text-coffee-800 hover:bg-coffee-700 dark:hover:bg-milk-200 transition-colors"
              >
                <GithubIcon />
                GitHub
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-coffee-800 dark:border-cream-100 text-coffee-800 dark:text-milk-100 hover:bg-coffee-200 dark:hover:bg-coffee-800 transition-colors"
              >
                <Mail size={20} />
                Contact
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <button
              onClick={() => scrollToSection('about')}
              className="p-2 text-coffee-500 dark:text-milk-500 animate-bounce"
            >
              <ChevronDown size={32} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-coffee-900 dark:text-milk-100 mb-8 text-center">
              About Me
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-square rounded-2xl bg-coffee-300 dark:bg-coffee-800 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-coffee-500 dark:text-milk-500">
                  <User size={120} />
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-coffee-700 dark:text-milk-300 leading-relaxed">
                  I'm a passionate computer science student with a strong interest in programming and AI.
                  I love building practical applications and exploring new technologies.
                </p>
                <p className="text-coffee-700 dark:text-milk-300 leading-relaxed">
                  When I'm not coding, I'm working on prompt engineering and AI optimization projects.
                  Always eager to learn and collaborate on innovative solutions.
                </p>

                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center p-3 rounded-lg bg-milk-200 dark:bg-coffee-900">
                    <div className="text-xl font-bold text-coffee-800 dark:text-milk-100">17</div>
                    <div className="text-xs text-coffee-600 dark:text-milk-500">Repos</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-milk-200 dark:bg-coffee-900">
                    <div className="text-xl font-bold text-coffee-800 dark:text-milk-100">12</div>
                    <div className="text-xs text-coffee-600 dark:text-milk-500">Languages</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-milk-200 dark:bg-coffee-900">
                    <div className="text-xl font-bold text-coffee-800 dark:text-milk-100">2024</div>
                    <div className="text-xs text-coffee-600 dark:text-milk-500">Since</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 text-coffee-600 dark:text-milk-400">
                    <span className="w-2 h-2 rounded-full bg-coffee-500 dark:bg-milk-500"></span>
                    {personalInfo.location}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-coffee-900 dark:text-milk-100 mb-8 text-center">
              Skills & Technologies
            </h2>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-milk-200 dark:bg-coffee-900"
                >
                  <TechLogo name={skill.logo} />
                  <span className="mt-2 text-sm font-medium text-coffee-800 dark:text-milk-200">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-coffee-900 dark:text-milk-100 mb-8 text-center">
              Featured Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-2xl bg-milk-50 dark:bg-coffee-950 overflow-hidden border border-coffee-200 dark:border-coffee-800 hover:border-coffee-400 dark:hover:border-coffee-600 transition-colors"
                >
                  <div className="aspect-video bg-coffee-300 dark:bg-coffee-800 flex items-center justify-center">
                    <ProjectIcon type={project.icon} />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-coffee-800 dark:text-milk-100 mb-2 group-hover:text-coffee-600 dark:group-hover:text-milk-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-coffee-600 dark:text-milk-400 mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm rounded-full bg-coffee-200 dark:bg-coffee-800 text-coffee-700 dark:text-milk-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-coffee-700 dark:text-milk-400 hover:text-coffee-900 dark:hover:text-milk-100 transition-colors"
                      >
                        <GithubIcon />
                        Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-coffee-700 dark:text-milk-400 hover:text-coffee-900 dark:hover:text-milk-100 transition-colors"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-coffee-900 dark:text-milk-100 mb-8 text-center">
              Experience
            </h2>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 pb-6 border-l-2 border-coffee-300 dark:border-coffee-700 last:border-transparent"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-coffee-500 dark:bg-milk-500 border-4 border-cream-100 dark:border-coffee-900" />

                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg font-semibold text-coffee-800 dark:text-milk-100">
                        {exp.role}
                      </h3>
                      <span className="text-sm text-coffee-600 dark:text-milk-500">
                        {exp.period}
                      </span>
                    </div>

                    <p className="font-medium text-coffee-600 dark:text-milk-400">
                      {exp.company}
                    </p>

                    <p className="text-coffee-700 dark:text-milk-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-coffee-900 dark:text-milk-100 mb-4">
              Get In Touch
            </h2>

            <p className="text-coffee-600 dark:text-milk-400 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-coffee-800 dark:bg-milk-100 text-milk-100 dark:text-coffee-800 hover:bg-coffee-700 dark:hover:bg-milk-200 transition-colors"
              >
                <Mail size={20} />
                {personalInfo.email}
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-coffee-800 dark:border-cream-100 text-coffee-800 dark:text-milk-100 hover:bg-coffee-200 dark:hover:bg-coffee-800 transition-colors"
              >
                <GithubIcon />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-coffee-200 dark:border-coffee-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-coffee-600 dark:text-milk-500">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </footer>
      </div>
    </div>
  )
}

export default App