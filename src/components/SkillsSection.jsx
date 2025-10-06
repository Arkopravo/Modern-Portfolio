import React from 'react'



const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 90, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 85, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend" },
  { name: "DOT NET", level: 90, category: "frontend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "SQL Server", level: 80, category: "backend" },
  { name: "MySQL", level: 85, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const SkillsSection = () => {
  return (
    <section
        id='skills'
        className='py-24 px-4 relative bg-secondary/30'
    >
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                My <span> Skills</span>
            </h2>
        </div>
    </section>
  )
}

export default SkillsSection