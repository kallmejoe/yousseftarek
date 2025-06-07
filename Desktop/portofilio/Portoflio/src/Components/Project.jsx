import ProjectLInes from './ProjectLInes';

const projects = [
    {
        title: "Full Stack Todo App",
        description: "React and Node.js application with MongoDB backend",
        technologies: ["React", "Node.js", "MongoDB"]
    },
    {
        title: "E-commerce Dashboard",
        description: "Analytics platform for tracking sales and user metrics",
        technologies: ["React", "TypeScript", "Tailwind"]
    },
    {
        title: "Machine Learning Classifier",
        description: "Python-based image recognition project",
        technologies: ["Python", "TensorFlow", "Scikit-learn"]
    }
];


function Project (){
    return (
        <section id="projects" className="py-16 bg-black">
        <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Projects
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectLInes key={index} projectData={project} />
                ))}
            </div>
        </div>
    </section>
    )
}

export default Project;
