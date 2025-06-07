import React, { useState, useEffect } from 'react';
import profile from '/src/assets/profile.png';

const ProfileHead = () => {
    const [name, setName] = useState('');
    const fullName = "Youssef Tarek";

    useEffect(() => {
        let i = 0;
        setName(''); // Reset before starting

        const interval = setInterval(() => {
            setName(fullName.slice(0, i + 1));
            i++;

            if (i === fullName.length) {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <header id="home" className="relative pt-24 container mx-auto px-4 text-center">
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 absolute inset-0 z-0"></div>
            <div className="relative z-10">
                <img
                    src={profile}
                    alt="Profile"
                    className="mx-auto rounded-full w-48 h-48 object-cover mb-6 shadow-2xl border-4 border-gray-800"
                />
                <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    {name}
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
    );
};

export default ProfileHead;
