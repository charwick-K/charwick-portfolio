import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

// Animation variants
const sectionVariant = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

// Neural background (pure CSS animated gradient)
function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#050b2e] via-[#0b102f] to-black animate-gradient" />
  )
}

export default function App() {
  return (
    <div className="relative text-white min-h-screen font-serif overflow-x-hidden">
      <AnimatedBackground />

      {/* NAVBAR */}
      <motion.nav 
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="fixed top-0 w-full backdrop-blur-xl bg-black/40 border-b border-white/10 z-50"
      >
        <div className="max-w-6xl mx-auto flex justify-between px-6 py-4">
          <span className="font-bold tracking-wide">charwick.ai</span>
          <div className="space-x-6 text-sm text-gray-300">
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#skills" className="hover:text-cyan-400">Skills</a>
            <a href="#projects" className="hover:text-cyan-400">Projects</a>
            <a href="#publications" className="hover:text-cyan-400">Publications</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>
        </div>
      </motion.nav>

      {/* HERO */}
      <section className="h-screen flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center space-y-6"
        >
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Kondru Charwick Hamesh
          </h1>
          <p className="text-xl text-gray-300">AI Research Engineer</p>
          <p className="text-gray-400 max-w-xl mx-auto">
            Building reliable, interpretable and uncertainty-aware AI systems.
          </p>
        </motion.div>
      </section>

      {/* ABOUT */}
      <motion.section
        id="about"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 py-24"
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          Undergraduate AI researcher at VIT-AP University focusing on Explainable AI,
          mechanistic interpretability, uncertainty-aware ML and reinforcement learning.
          Published IEEE research and built real-world intelligent systems.
        </p>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        id="skills"
        className="max-w-5xl mx-auto px-6 py-24"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-10">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Python","SQL","MATLAB","R",
            "PyTorch","TensorFlow","OpenCV","Git",
            "XAI","Bayesian ML","DQN","Transformers",
            "ROS","Neo4j","Firebase","Linux"
          ].map((skill, i) => (
            <motion.div
              key={i}
              variants={sectionVariant}
              whileHover={{ scale: 1.1 }}
              className="rounded-xl p-4 text-center backdrop-blur-xl 
                         bg-white/10 border border-white/10 
                         hover:border-cyan-400/50 hover:shadow-cyan-400/20
                         hover:shadow-xl transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-24"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        {[
          { title: "TrustGuardAI", desc: "Uncertainty-aware anomaly detection using LSTM + MC Dropout. AUROC 0.92." },
          { title: "Utility-Driven Experience Replay", desc: "Novel memory retention strategy for DQN improving sample efficiency." },
          { title: "Weed Detection System", desc: "YOLOv9-based real-time detection and robotic removal." },
          { title: "Autonomous Warehouse Robot", desc: "ROS-Gazebo simulation with A*, Dijkstra and sensor fusion." }
        ].map((proj, i) => (
          <motion.div
            key={i}
            variants={sectionVariant}
            whileHover={{ scale: 1.03 }}
            className="mb-6 p-6 rounded-xl 
                       bg-gradient-to-r from-white/5 to-white/10 
                       border border-white/10
                       hover:border-purple-400/50
                       hover:shadow-purple-400/20 hover:shadow-xl
                       transition"
          >
            <h3 className="text-xl font-bold">{proj.title}</h3>
            <p className="text-gray-400 mt-2">{proj.desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* PUBLICATIONS */}
      <motion.section
        id="publications"
        className="max-w-4xl mx-auto px-6 py-24"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">Publications</h2>
        <ul className="space-y-4 text-gray-300">
          <li>TrustGuardAI — IEEE IC2SDT 2025</li>
          <li>Utility-Driven Experience Replay — IEEE IC2SDT 2025</li>
          <li>Fuzzy Critical Path Method — IEEE AISP 2025</li>
        </ul>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        className="max-w-4xl mx-auto px-6 py-24 text-center"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <div className="flex justify-center space-x-10 text-3xl text-gray-300">
          <FaGithub className="hover:text-cyan-400 transition" />
          <FaLinkedin className="hover:text-cyan-400 transition" />
          <FaEnvelope className="hover:text-cyan-400 transition" />
        </div>
        <p className="mt-6 text-gray-400">charwickhamesh@gmail.com</p>
      </motion.section>
    </div>
  )
}
