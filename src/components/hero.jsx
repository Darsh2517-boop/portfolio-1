import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl font-bold"
      >
        Hi, I'm Darsh Trivedi
      </motion.h1>

      <p className="mt-4 text-xl text-slate-300">
        Frontend Developer | React Developer
      </p>

      <button className="mt-8 px-6 py-3 bg-cyan-500 rounded-lg">
        View Projects
      </button>
    </section>
  );
}

export default Hero;