import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const sectionVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
}

export default function App() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen font-serif">
      
      {/* NAVBAR */}
      <motion.nav 
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed top-0 w-full backdrop-blur bg-black/40 z-50"
      >
        <div className="max-w-6xl mx-auto flex justify-between px-6 py-4">
          <span className="font-bold">Charwick.ai</span>
          <div className="space-x-6">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#publications">Publications</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </motion.nav>

      {/* HERO */}
      <section className="h-screen flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold">Kondru Charwick Hamesh</h1>
          <p className="text-xl mt-4">AI Research Engineer</p>
          <p className="mt-6 text-gray-400 max-w-xl mx-auto">
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
        className="max-w-4xl mx-auto px-6 py-20"
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-300">
          I am an undergraduate AI researcher at VIT-AP University focusing on
          Explainable AI, mechanistic interpretability, uncertainty-aware ML and
          reinforcement learning. I have published IEEE research and built
          real-world intelligent systems.
        </p>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        id="skills"
        className="max-w-5xl mx-auto px-6 py-20"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-10">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Python", "SQL", "MATLAB", "R",
            "PyTorch", "TensorFlow", "OpenCV", "Git",
            "XAI", "Bayesian ML", "DQN", "Transformers",
            "ROS", "Neo4j", "Firebase", "Linux"
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="bg-white/10 rounded-xl p-4 text-center backdrop-blur"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-20"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        {[
          {
            title: "TrustGuardAI",
            desc: "Uncertainty-aware anomaly detection using LSTM + MC Dropout. AUROC 0.92."
          },
          {
            title: "Utility-Driven Experience Replay",
            desc: "Novel memory retention strategy for DQN improving sample efficiency."
          },
          {
            title: "Weed Detection System",
            desc: "YOLOv9-based real-time detection and robotic removal."
          },
          {
            title: "Autonomous Warehouse Robot",
            desc: "ROS-Gazebo simulation with A*, Dijkstra and sensor fusion."
          }
        ].map((proj, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="mb-6 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition"
          >
            <h3 className="text-xl font-bold">{proj.title}</h3>
            <p className="text-gray-400 mt-2">{proj.desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* PUBLICATIONS */}
      <motion.section
        id="publications"
        className="max-w-4xl mx-auto px-6 py-20"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">Publications</h2>
        <ul className="space-y-4 text-gray-300">
          <li>TrustGuardAI — IEEE IC2SDT 2025</li>
          <li>Utility-Driven Experience Replay — IEEE IC2SDT 2025</li>
          <li>Fuzzy Critical Path Method — IEEE AISP 2025</li>
        </ul>
      </motion.section>

      {/* EXPERIENCE TIMELINE */}
      <motion.section
        className="max-w-4xl mx-auto px-6 py-20"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <div className="border-l border-white/20 pl-6 space-y-6">
          <div>
            <h3 className="font-bold">India Space Lab — Research Intern</h3>
            <p className="text-gray-400">Intelligent sensing systems, ML for space data.</p>
          </div>
          <div>
            <h3 className="font-bold">Microsoft Student Chapter — R&D</h3>
            <p className="text-gray-400">Applied research in deep learning systems.</p>
          </div>
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        className="max-w-4xl mx-auto px-6 py-20 text-center"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <div className="flex justify-center space-x-8 text-2xl">
          <FaGithub />
          <FaLinkedin />
          <FaEnvelope />
        </div>
        <p className="mt-6 text-gray-400">charwickhamesh@gmail.com</p>
      </motion.section>

    </div>
  )
}
