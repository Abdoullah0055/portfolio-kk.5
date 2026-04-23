import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import { Sun, Moon, Mail, ExternalLink, Code2, Server, Database, Palette, ChevronDown, Menu, X, Briefcase, User, FolderKanban, Contact, ArrowRight, Cpu, Terminal, Sparkles, Zap, Brain, GitBranch, LayoutDashboard, TerminalSquare } from 'lucide-react'

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
    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-400/20 to-secondary-500/20 flex items-center justify-center">
      <img src={src} alt={type} className="w-10 h-10 object-contain" />
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
    <div className="min-h-screen bg-dark-950 transition-colors duration-300">
      <div className="grid-pattern">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button onClick={() => scrollToSection('hero')} className="flex items-center gap-2 text-xl font-bold text-white group">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center">
                <TerminalSquare size={16} />
              </div>
              <span className="group-hover:text-primary-400 transition-colors duration-300">
                <span className="text-white">Abdoullah</span>
                <span className="text-primary-400">.dev</span>
              </span>
            </button>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-dark-400 hover:text-white'
                  } group`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-500 transition-all duration-300 group-hover:w-full ${
                    activeSection === item.id ? 'w-full' : ''
                  }`} />
                </button>
              ))}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full glass glow-border hover:scale-110 transition-transform"
              >
                {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-blue-400" />}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full glass"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white"
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
              className="md:hidden glass border-t border-dark-800"
            >
              <div className="px-4 py-4 space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-3 rounded-lg hover:bg-dark-800 text-white hover:text-primary-400 transition-colors"
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
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-primary-400/20 to-secondary-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-secondary-400/20 to-primary-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 group animate-pulse-glow">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 animate-pulse"></span>
              <span className="text-sm font-medium text-dark-300 group-hover:text-white transition-colors">
                <span className="font-mono">&gt; </span>Available for collaboration
              </span>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-12">
              <div className="flex-1 text-left">
                <div className="relative inline-block mb-4">
                  <span className="text-sm font-mono text-primary-400 tracking-widest uppercase">Hello, my name is</span>
                  <div className="absolute -top-1 -right-2 w-2 h-2 bg-secondary-500 rounded-full animate-ping" />
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                  <span className="text-white">Abdoullah</span>
                  <span className="bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent"> El Ahmar</span>
                </h1>
                
                <div className="relative mb-6">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-300 mb-2">
                    {personalInfo.tagline}
                    <span className="text-primary-400 animate-pulse">_</span>
                  </h2>
                  <p className="text-lg text-dark-400 max-w-2xl leading-relaxed">
                    {personalInfo.bio}
                  </p>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="relative group">
                  <div className="glass-card rounded-2xl p-8 backdrop-blur-xl">
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-400 to-secondary-500 p-1 mb-6">
                        <div className="w-full h-full rounded-full bg-dark-900 flex items-center justify-center">
                          <Terminal size={32} className="text-primary-400" />
                        </div>
                      </div>
                      
                      <div className="space-y-4 text-center">
                        <div className="text-sm font-mono text-dark-400 border border-dark-800 rounded-lg px-4 py-2">
                          <span className="text-primary-400">$</span> whoami
                          <div className="text-white mt-1">{personalInfo.name}</div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">17+</div>
                            <div className="text-xs text-dark-400">Projects</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">12+</div>
                            <div className="text-xs text-dark-400">Techs</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">∞</div>
                            <div className="text-xs text-dark-400">Passion</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-lg flex items-center justify-center">
                    <Sparkles size={16} className="text-white" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden glass-card px-6 py-3 rounded-xl flex items-center gap-3 hover:scale-105 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <GithubIcon />
                <span className="font-medium text-white">GitHub</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href={`mailto:${personalInfo.email}`}
                className="group relative overflow-hidden glass-card px-6 py-3 rounded-xl flex items-center gap-3 hover:scale-105 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/10 to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Mail size={20} />
                <span className="font-medium text-white">Contact Me</span>
                <ExternalLink size={16} className="group-hover:rotate-12 transition-transform" />
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">17+</div>
                <div className="text-sm text-dark-400">Repositories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-secondary-400 to-primary-500 bg-clip-text text-transparent">12+</div>
                <div className="text-sm text-dark-400">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">2024+</div>
                <div className="text-sm text-dark-400">Active Developer</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <button
              onClick={() => scrollToSection('about')}
              className="p-3 rounded-full glass hover:scale-110 transition-transform"
            >
              <ChevronDown size={24} className="animate-bounce text-primary-400" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-white">About</span>
                <span className="bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent"> Me</span>
              </h2>
              <p className="text-lg text-dark-400 max-w-2xl mx-auto">
                Get to know the developer behind the code
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="aspect-square rounded-3xl glass-card overflow-hidden p-8">
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-400 to-secondary-500 p-2 mb-6">
                      <div className="w-full h-full rounded-full bg-dark-900 flex items-center justify-center">
                        <User size={48} className="text-primary-400" />
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-2">{personalInfo.name}</h3>
                      <p className="text-dark-400">{personalInfo.tagline}</p>
                      
                      <div className="mt-6 flex items-center justify-center gap-2 text-dark-400">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        {personalInfo.location}
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-6 left-6 w-4 h-4 rounded-full bg-primary-500/30" />
                    <div className="absolute bottom-6 right-6 w-6 h-6 rounded-full bg-secondary-500/20" />
                  </div>
                </div>
                
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">My Journey</h3>
                  <p className="text-lg text-dark-300 leading-relaxed">
                    I'm a passionate computer science student with a strong interest in programming and AI. 
                    I love building practical applications and exploring new technologies that solve real-world problems.
                  </p>
                  <p className="text-lg text-dark-300 leading-relaxed">
                    When I'm not coding, I'm working on prompt engineering and AI optimization projects. 
                    Always eager to learn and collaborate on innovative solutions that push boundaries.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center p-4 rounded-xl glass-card hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">17+</div>
                    <div className="text-sm text-dark-400 mt-1">Projects</div>
                  </div>
                  <div className="text-center p-4 rounded-xl glass-card hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold bg-gradient-to-r from-secondary-400 to-primary-500 bg-clip-text text-transparent">12+</div>
                    <div className="text-sm text-dark-400 mt-1">Technologies</div>
                  </div>
                  <div className="text-center p-4 rounded-xl glass-card hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">∞</div>
                    <div className="text-sm text-dark-400 mt-1">Passion</div>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flex items-center gap-3 text-dark-300">
                    <span className="w-3 h-3 rounded-full bg-gradient-to-r from-primary-400 to-secondary-500"></span>
                    <span className="font-medium">Currently exploring:</span>
                    <span className="text-white">AI Integration • Full-Stack Development • Cloud Architecture</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-white">Tech</span>
                <span className="bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent"> Stack</span>
              </h2>
              <p className="text-lg text-dark-400 max-w-2xl mx-auto">
                Technologies I use to bring ideas to life
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
                  className="group relative"
                >
                  <div className="glass-card rounded-xl p-6 flex flex-col items-center justify-center h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20">
                    <div className="w-16 h-16 rounded-lg bg-dark-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <TechLogo name={skill.logo} />
                    </div>
                    <span className="text-sm font-medium text-white group-hover:text-primary-400 transition-colors duration-300">
                      {skill.name}
                    </span>
                    
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500/30 rounded-xl transition-all duration-300 pointer-events-none" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 rounded-xl blur transition-all duration-300 pointer-events-none" />
                  </div>
                  
                  {/* Skill level indicator */}
                  <div className="mt-2 w-full h-1 bg-dark-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full transition-all duration-500 group-hover:w-full" 
                         style={{ width: `${70 + (index * 2)}%` }} />
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white mb-2">Always Learning</h3>
                    <p className="text-dark-400">
                      Continuously exploring new frameworks and tools to stay at the cutting edge
                    </p>
                  </div>
<div className="flex items-center gap-2">
                          <Cpu size={24} className="text-primary-400 animate-pulse" />
                          <Brain size={24} className="text-secondary-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
                          <GitBranch size={24} className="text-cyan-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
                        </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-white">Featured</span>
                <span className="bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent"> Projects</span>
              </h2>
              <p className="text-lg text-dark-400 max-w-2xl mx-auto">
                A showcase of my recent work and contributions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
                  className="group relative"
                >
                  <div className="glass-card rounded-2xl overflow-hidden h-full border-2 border-dark-800 hover:border-primary-500/30 transition-all duration-500">
                    <div className="relative aspect-video bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary-400 to-secondary-500 p-2">
                          <div className="w-full h-full rounded-lg bg-dark-900 flex items-center justify-center">
                            <ProjectIcon type={project.icon} />
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute top-4 left-4">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-dark-900/80 text-xs text-white">
                          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          Active
                        </div>
                      </div>
                      
                      <div className="absolute top-4 right-4">
                        <div className="flex gap-2">
                          {project.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 rounded-md bg-dark-900/80 text-xs text-primary-400 font-mono"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <span className="text-xs text-dark-400 font-mono bg-dark-800 px-2 py-1 rounded">
                          v1.0
                        </span>
                      </div>
                      
                      <p className="text-dark-400 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 text-xs rounded-full bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-white transition-colors duration-300 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center gap-2 text-sm text-white hover:text-primary-400 transition-colors duration-300"
                        >
                          <div className="w-8 h-8 rounded-lg bg-dark-800 flex items-center justify-center group-hover/link:bg-primary-500/20 transition-colors">
                            <GithubIcon />
                          </div>
                          <span>View Code</span>
                          <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                        </a>
                        
                        <div className="flex items-center gap-2 text-sm text-dark-400">
                          <span className="flex items-center gap-1">
                            <Zap size={14} />
                            <span>Production</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                      <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-primary-500/20 to-transparent rotate-45" />
                    </div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 glass-card px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 group"
              >
                <span className="text-lg font-medium text-white">View All Projects</span>
                <ExternalLink size={20} className="group-hover:rotate-12 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-white">Experience</span>
                <span className="bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent"> & Journey</span>
              </h2>
              <p className="text-lg text-dark-400 max-w-2xl mx-auto">
                My path through technology and development
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="relative pl-12 pb-8 border-l-2 border-dark-700 last:pb-0"
                  >
                    <div className="absolute -left-[10px] top-0 w-5 h-5 rounded-full bg-gradient-to-r from-primary-400 to-secondary-500 border-4 border-dark-900" />
                    
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">
                            {exp.role}
                          </h3>
                          <p className="font-medium text-primary-400">
                            {exp.company}
                          </p>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-dark-800 text-dark-300 text-sm font-medium">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-dark-300 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        <span className="px-3 py-1 rounded-full bg-dark-800 text-xs text-dark-400 font-mono">
                          Computer Science
                        </span>
                        <span className="px-3 py-1 rounded-full bg-dark-800 text-xs text-dark-400 font-mono">
                          Software Development
                        </span>
                        <span className="px-3 py-1 rounded-full bg-dark-800 text-xs text-dark-400 font-mono">
                          AI & Prompt Engineering
                        </span>
                      </div>
                    </div>
                    
                    {/* Connection line */}
                    {index < experiences.length - 1 && (
                      <div className="absolute -bottom-4 left-0 w-0.5 h-4 bg-gradient-to-b from-primary-500/50 to-transparent" />
                    )}
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12 pt-8 border-t border-dark-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400/20 to-secondary-500/20 flex items-center justify-center">
                    <Sparkles size={20} className="text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Always Learning</h4>
                    <p className="text-dark-400">
                      Continuously expanding skills through hands-on projects and new technologies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-white">Let's</span>
              <span className="bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent"> Connect</span>
            </h2>

            <p className="text-lg text-dark-400 mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto mb-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                  <div className="space-y-3">
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="group flex items-center gap-3 text-dark-400 hover:text-white transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                        <Mail size={18} />
                      </div>
                      <div>
                        <div className="font-medium text-white">Email</div>
                        <div className="text-sm">{personalInfo.email}</div>
                      </div>
                    </a>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 text-dark-400 hover:text-white transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                        <GithubIcon />
                      </div>
                      <div>
                        <div className="font-medium text-white">GitHub</div>
                        <div className="text-sm">/Abdoullah0055</div>
                      </div>
                    </a>
                  </div>
                </div>
                
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white mb-4">Ready to Collaborate?</h3>
                  <p className="text-dark-400 mb-4">
                    Whether you need a full-stack solution, AI integration, or just want to talk tech, I'm here to help.
                  </p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
                  >
                    <Mail size={20} />
                    <span className="font-medium">Start a Conversation</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="glass-card rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Amazing</h3>
            <p className="text-dark-400 mb-6 max-w-2xl mx-auto">
              I'm passionate about creating impactful software solutions. Whether it's a new project or improving existing systems, let's collaborate.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
              >
                <Mail size={20} />
                <span className="font-medium">Contact Me</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3 rounded-xl glass hover:bg-dark-800 transition-all duration-300"
              >
                <GithubIcon />
                <span className="font-medium text-white">GitHub Profile</span>
                <ExternalLink size={16} className="group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <button onClick={() => scrollToSection('hero')} className="flex items-center gap-2 text-xl font-bold text-white group">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center">
                <TerminalSquare size={16} />
              </div>
              <span className="group-hover:text-primary-400 transition-colors duration-300">
                Abdoullah<span className="text-primary-400">.dev</span>
              </span>
            </button>
            
            <div className="flex items-center gap-6">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-white transition-colors"
              >
                <GithubIcon />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-dark-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-dark-800">
            <p className="text-dark-400">
              © {new Date().getFullYear()} {personalInfo.name}. Crafted with passion in Sainte-Therese, Quebec.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  )
}

export default App