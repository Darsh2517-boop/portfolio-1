function Projects() {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-center text-4xl font-bold mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-slate-800 p-6 rounded-xl">
          <h3 className="text-xl font-bold">
            Travel Website
          </h3>
          <p>React + Tailwind CSS</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl">
          <h3 className="text-xl font-bold">
            Portfolio Website
          </h3>
          <p>React + Vite</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl">
          <h3 className="text-xl font-bold">
            Agency Landing Page
          </h3>
          <p>HTML CSS JavaScript</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;