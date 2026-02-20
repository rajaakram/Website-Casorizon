import { motion, AnimatePresence } from 'framer-motion'
import { Github, Cpu, Zap, Globe, ArrowRight, Code2, Terminal, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

// Animated binary rain component
const BinaryRain = () => {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number; duration: number; size: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      size: 0.6 + Math.random() * 0.8,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute font-mono text-cyber-cyan/20 select-none"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}rem`,
          }}
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: ['0vh', '100vh'],
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {Math.random() > 0.5 ? '1' : '0'}
        </motion.div>
      ))}
    </div>
  )
}

// Animated circuit lines
const CircuitLines = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Horizontal lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-cyber-cyan/30 to-transparent"
          style={{ top: `${20 + i * 15}%`, left: 0, right: 0 }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: [0, 0.5, 0.5, 0] }}
          transition={{
            duration: 3,
            delay: i * 0.5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
      ))}
      {/* Vertical lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute w-px bg-gradient-to-b from-transparent via-cyber-pink/30 to-transparent"
          style={{ left: `${15 + i * 17}%`, top: 0, bottom: 0 }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: [0, 0.5, 0.5, 0] }}
          transition={{
            duration: 3,
            delay: i * 0.5 + 0.25,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
      ))}
      {/* Corner nodes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: i % 2 === 0 ? '#00f0ff' : '#ff00a0',
            boxShadow: `0 0 10px ${i % 2 === 0 ? '#00f0ff' : '#ff00a0'}`,
            left: `${10 + (i % 4) * 25}%`,
            top: `${15 + Math.floor(i / 4) * 60}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.6] }}
          transition={{
            duration: 0.5,
            delay: i * 0.2,
            repeat: Infinity,
            repeatDelay: 4,
          }}
        />
      ))}
    </div>
  )
}

// Floating particles
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 4,
    color: Math.random() > 0.5 ? '#00f0ff' : '#ff00a0',
  }))

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-20, 20, -20],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

// Glitch text component
const GlitchText = ({ text, className = '' }: { text: string; className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <motion.h1
        className="glitch relative z-10"
        data-text={text}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {text}
      </motion.h1>
      {/* Glitch layers */}
      <motion.span
        className="absolute top-0 left-0 w-full text-cyber-cyan opacity-0"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)' }}
        animate={{
          x: [-2, 2, -2, 0],
          opacity: [0, 0.8, 0, 0],
        }}
        transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 3 }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute top-0 left-0 w-full text-cyber-pink opacity-0"
        style={{ clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)' }}
        animate={{
          x: [2, -2, 2, 0],
          opacity: [0, 0.8, 0, 0],
        }}
        transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 4 }}
      >
        {text}
      </motion.span>
    </div>
  )
}

// Coming Soon badge
const ComingSoonBadge = () => {
  return (
    <motion.div
      className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyber-cyan/50 bg-cyber-dark/80 backdrop-blur-sm"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="w-2 h-2 rounded-full bg-cyber-green"
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <span className="text-cyber-cyan font-mono text-sm tracking-widest uppercase">
        System Initializing
      </span>
      <motion.div
        className="absolute inset-0 rounded-full border border-cyber-cyan"
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  )
}

// Hexagon decoration
const HexagonGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
            <polygon
              fill="none"
              stroke="#00f0ff"
              strokeWidth="0.5"
              points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2"
              transform="translate(-12.5, -21.7)"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
    </div>
  )
}

// Main App Component
function App() {
  return (
    <div className="relative min-h-screen bg-cyber-black overflow-hidden">
      {/* Background layers */}
      <div className="fixed inset-0 bg-cyber-grid bg-cyber-darker bg-[length:50px_50px] opacity-30" />
      <div className="fixed inset-0 bg-gradient-to-br from-cyber-cyan/5 via-transparent to-cyber-pink/5" />
      
      {/* Animated elements */}
      <HexagonGrid />
      <CircuitLines />
      <BinaryRain />
      <FloatingParticles />
      
      {/* Scanline overlay */}
      <div className="scanlines" />
      
      {/* Scanline beam */}
      <motion.div
        className="fixed left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-cyan/60 to-transparent z-20"
        initial={{ top: '-10%' }}
        animate={{ top: '110%' }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      {/* Main content */}
      <div className="relative z-30 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <AnimatePresence>
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Top badge */}
            <motion.div
              className="mb-8"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ComingSoonBadge />
            </motion.div>

            {/* Logo/Brand */}
            <motion.div
              className="mb-6 flex items-center justify-center gap-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
            >
              <motion.div
                className="relative"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <Cpu className="w-12 h-12 text-cyber-cyan" />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-cyber-cyan/30"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <div className="relative">
                <GlitchText
                  text="CASORIZON"
                  className="font-display text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter"
                />
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p className="font-mono text-xl sm:text-2xl md:text-3xl text-gray-300 tracking-wide">
                <motion.span
                  className="inline-block text-cyber-cyan"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  &lt;
                </motion.span>
                <span className="mx-2">Innovation Beyond Boundaries</span>
                <motion.span
                  className="inline-block text-cyber-pink"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  /&gt;
                </motion.span>
              </p>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="flex items-center justify-center gap-8 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { icon: Code2, label: 'DEVELOP', color: 'text-cyber-cyan' },
                { icon: Globe, label: 'DEPLOY', color: 'text-cyber-purple' },
                { icon: Zap, label: 'SCALE', color: 'text-cyber-pink' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex flex-col items-center gap-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <div className={`p-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className={`font-mono text-xs tracking-wider ${item.color}`}>{item.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Terminal window */}
            <motion.div
              className="max-w-lg mx-auto mb-12 rounded-lg overflow-hidden border border-cyber-cyan/30 bg-cyber-dark/90 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-2 bg-cyber-darker border-b border-cyber-cyan/20">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <Terminal className="w-4 h-4 ml-2 text-cyber-cyan" />
                <span className="ml-2 text-xs font-mono text-gray-400">casorizon.init</span>
              </div>
              {/* Terminal content */}
              <div className="p-4 font-mono text-sm text-left">
                <motion.p
                  className="text-cyber-cyan"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  $ initializing core systems...
                </motion.p>
                <motion.p
                  className="text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                >
                  [OK] Loading modules
                </motion.p>
                <motion.p
                  className="text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  [OK] Establishing secure connection
                </motion.p>
                <motion.p
                  className="text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 }}
                >
                  [OK] Synchronizing with cloud
                </motion.p>
                <motion.p
                  className="text-cyber-pink mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                >
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  >
                    █
                  </motion.span>
                  {' '}Building the future...
                </motion.p>
              </div>
            </motion.div>

            {/* GitHub link */}
            <motion.a
              href="https://github.com/rajaakram/Website-Casorizon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-gradient-to-r from-cyber-cyan/20 to-cyber-pink/20 border border-cyber-cyan/50 text-white font-medium transition-all duration-300 hover:from-cyber-cyan/30 hover:to-cyber-pink/30 hover:border-cyber-pink hover:shadow-lg hover:shadow-cyber-cyan/20 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.span>
            </motion.a>

            {/* Footer text */}
            <motion.div
              className="mt-12 flex items-center justify-center gap-2 text-gray-500 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <Sparkles className="w-4 h-4 text-cyber-cyan" />
              <span className="font-mono">Crafted with precision</span>
              <span className="text-cyber-pink">•</span>
              <span className="font-mono">{new Date().getFullYear()}</span>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Corner decorations */}
      <div className="fixed top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-cyber-cyan/30 z-40" />
      <div className="fixed top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-cyber-pink/30 z-40" />
      <div className="fixed bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-cyber-pink/30 z-40" />
      <div className="fixed bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-cyber-cyan/30 z-40" />
    </div>
  )
}

export default App
