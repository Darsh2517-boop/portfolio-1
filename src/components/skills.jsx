const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind",
  "Git",
  "GitHub",
  "Vite"
];

function Skills() {
  return (
    <section id="skills" className="py-24">
      <h2 className="text-center text-4xl font-bold mb-10">
        Skills
      </h2>

      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-slate-800 p-6 rounded-xl text-center hover:scale-105 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;