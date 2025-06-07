function ProjectLInes({ projectData, index }) {
    return (
        <div
            key={index}
            className="bg-gray-900 border border-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
        >
            <h4 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                {projectData.title}
            </h4>
            <p className="text-gray-400 mb-4">{projectData.description}</p>
            <div className="flex flex-wrap gap-2">
                {projectData.technologies.map((tech, techIndex) => (
                    <span
                        key={techIndex}
                        className="bg-gray-800 text-gray-300 px-2 py-1 rounded-full text-xs">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}
export default ProjectLInes;
