import EduLines from './EduLInes';

const education = [
    {
        degree: "Bachelor of Computer Engineering",
        institution: "Ain Shams University",
        year: "2023-2027",
        highlights: [
            "Software Product Lines Specialization",
            "GPA: 3.0/4.0",
            "Skills: Teamwork"
        ]
    },
    {
        degree: "Bachelor of Computer Engineering",
        institution: "East London",
        year: "2023-2027",
        highlights: ["Dual Degree Certificate with ICHEP program"]
    }
];


function Education(){
    return (
        <section id="education" className="py-16 bg-black relative">
                    <div className="container mx-auto px-4">
                        <h3 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            Education
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {education.map((edu, index) => (
                                <EduLines key={index} educationItems={edu}/>
                            ))}
                        </div>
                    </div>
                </section>
    )
}

export default Education;
