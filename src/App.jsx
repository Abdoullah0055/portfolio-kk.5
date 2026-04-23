import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Mail, Code, Terminal, Cpu, Globe, ChevronDown, ExternalLink, Sparkles, Zap } from 'lucide-react'

// Custom Icons (not available in older lucide-react)
const GithubIcon = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const LinkedinIcon = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

// Data
const personalInfo = {
  name: 'Abdoullah El Ahmar',
  tagline: 'Developer & AI Specialist',
  bio: 'Computer Science student crafting digital experiences. Focused on full-stack development, AI integration, and building tools that matter.',
  location: 'Sainte-Therese, Quebec',
  email: 'abdoullah.el.ahmar@gmail.com',
  github: 'https://github.com/Abdoullah0055',
  linkedin: '#',
}

const stats = [
  { number: '17+', label: 'Projects' },
  { number: '12+', label: 'Technologies' },
  { number: '2024', label: 'Started' },
]

const skills = [
  { name: 'PHP', category: 'Backend', level: 85 },
  { name: 'JavaScript', category: 'Frontend', level: 90 },
  { name: 'Java', category: 'Backend', level: 80 },
  { name: 'C#', category: 'Backend', level: 75 },
  { name: 'Python', category: 'AI/ML', level: 85 },
  { name: 'React', category: 'Frontend', level: 88 },
  { name: 'MySQL', category: 'Database', level: 82 },
  { name: 'Android', category: 'Mobile', level: 78 },
  { name: '.NET', category: 'Backend', level: 72 },
  { name: 'Git', category: 'Tools', level: 88 },
]

const projects = [
  {
    id: 1,
    title: 'projetKBE',
    description: 'Enterprise-grade knowledge management system with advanced database architecture and secure authentication.',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS'],
    github: 'https://github.com/Abdoullah0055/projetKBE',
    year: '2024',
  },
  {
    id: 2,
    title: 'Wikimedia-PhaseB',
    description: 'Desktop application for processing large media libraries with file management and automated categorization.',
    tags: ['C#', '.NET', 'Windows'],
    github: 'https://github.com/Abdoullah0055/Wikimedia-PhaseB',
    year: '2024',
  },
  {
    id: 3,
    title: 'Wikimedia',
    description: 'Media workflow automation tool with batch processing and smart folder organization.',
    tags: ['C#', '.NET', 'Windows'],
    github: 'https://github.com/Abdoullah0055/Wikimedia',
    year: '2024',
  },
  {
    id: 4,
    title: 'Android Studio TP2',
    description: 'Production-ready Android app with local database integration and offline capabilities.',
    tags: ['Java', 'Android', 'Mobile'],
    github: 'https://github.com/Abdoullah0055/remiseTP2AndroidStudioPublique',
    year: '2024',
  },
]

const experiences = [
  {
    role: 'Computer Science Student',
    company: 'College',
    period: '2024 — Present',
    description: 'Studying computer science and software development. Working on projects in PHP, Java, C#, and Android.',
  },
]

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}

// Components
const SectionHeader = ({ number, title, align = 'left' }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      className={`flex items-baseline gap-4 mb-16 ${align === 'right' ? 'justify-end' : ''}`}
    >
      <span className="font-mono text-sm text-[#666666]">// {number}</span>
      <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight">
        {title}
      </h2>
    </motion.div>
  )
}

const SkillBar = ({ name, level, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-mono text-sm text-[#a0a0a0] group-hover:text-[#ff4d2e] transition-colors">
          {name}
        </span>
        <span className="font-mono text-xs text-[#666666]">{level}%</span>
      </div>
      <div className="h-[2px] bg-[#1a1a1a] overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: level / 100 } : { scaleX: 0 }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="h-full bg-gradient-to-r from-[#ff4d2e] to-[#ff8a65] origin-left"
        />
      </div>
    </motion.div>
  )
}

const ProjectCard = ({ project, index, isReversed }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={isReversed ? fadeInRight : fadeInLeft}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isReversed ? 'lg:direction-rtl' : ''}`}
    >
      <div className={`relative ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="relative aspect-[4/3] bg-[#111111] border border-[#1a1a1a] overflow-hidden group">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-[120px] sm:text-[180px] font-bold text-[#1a1a1a] select-none group-hover:text-[#ff4d2e] transition-colors duration-500">
              0{index + 1}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-6 left-6 right-6"
          >
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
        <div className={`absolute -bottom-4 ${isReversed ? 'right-8' : 'left-8'} w-24 h-24 border border-[#ff4d2e] opacity-30`} />
      </div>

      <div className={`space-y-6 ${isReversed ? 'lg:order-1 lg:text-right' : 'lg:order-2'}`}>
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm text-[#666666]">{project.year}</span>
          <div className="h-[1px] flex-1 bg-[#1a1a1a]" />
        </div>
        <h3 className="font-serif text-3xl sm:text-4xl font-normal">
          {project.title}
        </h3>
        <p className="text-[#a0a0a0] leading-relaxed max-w-md">
          {project.description}
        </p>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 font-mono text-sm text-[#a0a0a0] hover:text-[#ff4d2e] transition-colors group ${isReversed ? 'flex-row-reverse' : ''}`}
        >
          <span>View Project</span>
          <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  )
}

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

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

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1a1a1a]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="font-serif text-xl tracking-tight hover:text-[#ff4d2e] transition-colors"
          >
            AE
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`nav-link font-mono text-xs tracking-widest uppercase transition-colors ${
                  activeSection === link.id ? 'text-[#ff4d2e]' : 'text-[#a0a0a0] hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a0a0a0] hover:text-[#ff4d2e] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-[#a0a0a0] hover:text-[#ff4d2e] transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

const Hero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-[#ff4d2e] opacity-[0.03] blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-[#00d4ff] opacity-[0.02] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeInUp}
                className="font-mono text-sm text-[#666666] tracking-widest uppercase mb-4"
              >
                Developer & Designer
              </motion.p>

              <motion.h1
                variants={fadeInUp}
                className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal tracking-tight leading-[0.95]"
              >
                <span className="block">Abdoullah</span>
                <span className="block text-[#ff4d2e]">El Ahmar</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-[#a0a0a0] max-w-md leading-relaxed mt-6"
              >
                {personalInfo.bio}
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-4 pt-4"
              >
                <a
                  href="#contact"
                  className="btn-filled inline-flex items-center gap-2"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sharp inline-flex items-center gap-2"
                >
                  <GithubIcon size={14} />
                  <span>GitHub</span>
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - Stats & Visual */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="relative"
          >
            <motion.div variants={fadeInRight} className="relative">
              {/* Large Typography Element */}
              <div className="relative">
                <span className="font-serif text-[180px] sm:text-[240px] lg:text-[300px] font-normal leading-none text-[#111111] select-none">
                  01
                </span>
                <div className="absolute bottom-8 left-8 space-y-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-baseline gap-3"
                    >
                      <span className="font-serif text-3xl sm:text-4xl text-[#ff4d2e]">
                        {stat.number}
                      </span>
                      <span className="font-mono text-xs text-[#666666] uppercase tracking-widest">
                        {stat.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative Lines */}
              <div className="absolute top-0 right-0 w-32 h-[1px] bg-gradient-to-r from-[#ff4d2e] to-transparent" />
              <div className="absolute top-0 right-0 w-[1px] h-32 bg-gradient-to-b from-[#ff4d2e] to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-[#666666] uppercase tracking-widest">Scroll</span>
          <ChevronDown size={16} className="text-[#666666]" />
        </motion.div>
      </motion.div>
    </section>
  )
}

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader number="01" title="About" />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInLeft}
            className="space-y-8"
          >
            <p className="font-serif text-2xl sm:text-3xl leading-snug text-[#f5f5f0]">
              I'm a Computer Science student based in{' '}
              <span className="text-[#ff4d2e]">Sainte-Therese, Quebec</span>, passionate about building software that solves real problems.
            </p>
            <p className="text-[#a0a0a0] leading-relaxed">
              My journey in tech started with a curiosity about how things work. Today, I'm focused on full-stack development, AI integration, and creating intuitive user experiences. I believe in writing clean, maintainable code and staying curious about emerging technologies.
            </p>
            <p className="text-[#a0a0a0] leading-relaxed">
              When I'm not coding, I'm exploring prompt engineering, experimenting with AI tools, or contributing to open-source projects. Always eager to learn and collaborate on innovative solutions.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInRight}
            className="space-y-8"
          >
            <div className="border border-[#1a1a1a] p-8 space-y-6">
              <h3 className="font-serif text-xl">Currently Exploring</h3>
              <div className="space-y-4">
                {['AI Integration', 'Full-Stack Development', 'Cloud Architecture', 'Mobile Development'].map((item, index) => (
                  <div key={item} className="flex items-center gap-4">
                    <span className="font-mono text-sm text-[#666666]">0{index + 1}</span>
                    <span className="text-[#a0a0a0]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 text-[#a0a0a0]">
              <span className="w-2 h-2 bg-[#ff4d2e] rounded-full animate-pulse" />
              <span className="font-mono text-sm">Available for collaboration</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section id="skills" ref={ref} className="py-32 relative overflow-hidden">
      {/* Large Background Text */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none select-none"
      >
        <span className="font-serif text-[200px] sm:text-[300px] lg:text-[400px] font-normal text-[#0f0f0f] whitespace-nowrap">
          SKILLS
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <SectionHeader number="02" title="Skills" />

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="space-y-8"
          >
            {skills.slice(0, 5).map((skill, index) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} index={index} />
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="space-y-8"
          >
            {skills.slice(5).map((skill, index) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} index={index + 5} />
            ))}
          </motion.div>
        </div>

        {/* Tech Categories */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          className="mt-24 pt-16 border-t border-[#1a1a1a]"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { icon: Code, label: 'Frontend', desc: 'React, HTML, CSS, JS' },
              { icon: Terminal, label: 'Backend', desc: 'PHP, Java, C#, Python' },
              { icon: Cpu, label: 'Mobile', desc: 'Android, Java' },
              { icon: Globe, label: 'Database', desc: 'MySQL, SQLite' },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="group">
                <div className="flex items-center gap-3 mb-2">
                  <Icon size={16} className="text-[#ff4d2e] group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-sm text-[#a0a0a0]">{label}</span>
                </div>
                <p className="text-xs text-[#666666]">{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const Projects = () => {
  const ref = useRef(null)

  return (
    <section id="projects" ref={ref} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader number="03" title="Projects" />

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sharp inline-flex items-center gap-2"
          >
          <GithubIcon size={14} />
          <span>View All on GitHub</span>
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" ref={ref} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader number="04" title="Experience" />

        <div className="max-w-3xl">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeInUp}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 border-l border-[#1a1a1a] pb-16 last:pb-0"
            >
              <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-[#ff4d2e]" />

              <div className="space-y-4">
                <div className="flex flex-wrap items-baseline gap-4">
                  <h3 className="font-serif text-2xl">{exp.role}</h3>
                  <span className="font-mono text-sm text-[#666666]">{exp.period}</span>
                </div>
                <p className="text-[#ff4d2e] font-mono text-sm">{exp.company}</p>
                <p className="text-[#a0a0a0] leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {['Computer Science', 'Software Dev', 'AI'].map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          className="mt-24 p-8 border border-[#1a1a1a]"
        >
          <div className="flex items-start gap-4">
            <Sparkles size={20} className="text-[#ff4d2e] mt-1" />
            <div>
              <h4 className="font-serif text-lg mb-2">Always Learning</h4>
              <p className="text-[#a0a0a0] text-sm">
                Currently expanding my knowledge through hands-on projects and exploring new frameworks and technologies.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" ref={ref} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader number="05" title="Contact" />

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInLeft}
          >
            <p className="font-serif text-3xl sm:text-4xl leading-tight mb-8">
              Let's create something{' '}
              <span className="text-[#ff4d2e]">together</span>.
            </p>
            <p className="text-[#a0a0a0] leading-relaxed mb-8 max-w-md">
              I'm always open to discussing new projects, creative ideas, or opportunities. Whether you need a full-stack solution or AI integration, let's talk.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-[#1a1a1a] flex items-center justify-center group-hover:border-[#ff4d2e] transition-colors">
                  <Mail size={18} className="text-[#a0a0a0] group-hover:text-[#ff4d2e] transition-colors" />
                </div>
                <div>
                  <p className="font-mono text-xs text-[#666666] uppercase tracking-widest">Email</p>
                  <p className="text-[#f5f5f0] group-hover:text-[#ff4d2e] transition-colors">{personalInfo.email}</p>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-[#1a1a1a] flex items-center justify-center group-hover:border-[#ff4d2e] transition-colors">
                  <GithubIcon size={18} className="text-[#a0a0a0] group-hover:text-[#ff4d2e] transition-colors" />
                </div>
                <div>
                  <p className="font-mono text-xs text-[#666666] uppercase tracking-widest">GitHub</p>
                  <p className="text-[#f5f5f0] group-hover:text-[#ff4d2e] transition-colors">@Abdoullah0055</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInRight}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 border border-[#1a1a1a] flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Zap size={48} className="text-[#ff4d2e] mx-auto" />
                  <p className="font-serif text-xl">Ready to build?</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="btn-filled inline-flex items-center gap-2"
                  >
                    <span>Start a Project</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-[#ff4d2e] opacity-30" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#ff4d2e] opacity-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="py-12 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-serif text-lg">AE</p>
          <p className="font-mono text-xs text-[#666666]">
            © {new Date().getFullYear()} Abdoullah El Ahmar. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666666] hover:text-[#ff4d2e] transition-colors"
              aria-label="GitHub"
            >
            <GithubIcon size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-[#666666] hover:text-[#ff4d2e] transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </div>
  </footer>
)
}

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f0] noise-overlay">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
