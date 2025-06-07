import { GraduationCap } from 'lucide-react';

function EduLines({ educationItems }) {
    return (
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-4">
                <GraduationCap className="mr-4 text-blue-400" size={40} />
                <div>
                    <h4 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        {educationItems.degree}
                    </h4>
                    <p className="text-gray-400">{educationItems.institution}</p>
                    <p className="text-gray-500 text-sm">{educationItems.year}</p>
                </div>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
                {educationItems.highlights.map((highlight, hiIndex) => (
                    <li key={hiIndex} className="text-sm">
                        {highlight}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EduLines;
