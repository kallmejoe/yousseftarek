import { useState, useEffect } from "react";

export default function headerSection() {
    const [name, setName] = useState("");
    const [activeSection, setActiveSection] = useState("About"); // Default section
    const fullName = "Youssef Tarek"; // Your actual name

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < fullName.length) {
                setName((prev) => prev + fullName[i]);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 150); // Typing speed

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans">
            {/* Navigation */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black/60 via-black/30 to-transparent backdrop-blur-lg p-2">
                <div className="flex justify-center">
                    <div className="bg-gray-800/40 backdrop-blur-md rounded-full inline-flex p-1 space-x-1 shadow-lg">
                        {['About', 'Projects', 'Blogs'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveSection(tab)}
                                className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                                    activeSection === tab
                                        ? 'bg-white/20 text-white'
                                        : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Header Section */}
            <header id="home" className="pt-24 container mx-auto px-4 text-center relative">
                <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 absolute inset-0 z-0"></div>
                <div className="relative z-10">
                    <img
                        src={profile}
                        alt="Profile"
                        className="mx-auto rounded-full w-48 h-48 object-cover mb-6 shadow-2xl border-4 border-gray-800"
                    />
                    <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        {name} {/* Typing effect applied here */}
                    </h1>
                    <h2 className="text-4xl font-bold mb-4 text-gray-300">
                        Software Engineer
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Full-stack developer passionate about creating elegant solutions to complex problems.
                        Specializing in React, Node.js, and machine learning technologies.
                    </p>
                </div>
            </header>
        </div>
    );
}
