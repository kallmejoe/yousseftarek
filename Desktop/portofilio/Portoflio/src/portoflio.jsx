import { useState, useEffect } from 'react';
import { GraduationCap } from 'lucide-react';
import Project from './Components/project';
import Education from './Components/Education';
import ProfileHead from './Components/profileHead'
import Blog from './Components/Blog';
import Navigation from './Components/navigation';

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('About');

    return (
        <div className="min-h-screen bg-black text-white font-sans">
            {/* Navigation */}
           <Navigation activeSection={activeSection} setActiveSection={setActiveSection}/>

            {/* Hero Section */}
            {activeSection === 'About' && (
               <ProfileHead/>
            )}

            {/* Education Section */}
            {activeSection === 'About' && (
                <Education/>
            )}

            {/* Projects Section */}
            {activeSection === 'Projects' && (
              <Project/>
            )}

            {/* Blogs Section */}
            {activeSection === 'Blogs' && (
                <Blog/>
            )}
        </div>
    );
};

export default Portfolio;
