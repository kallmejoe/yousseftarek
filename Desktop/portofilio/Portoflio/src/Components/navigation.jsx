
function Navigation({ activeSection, setActiveSection }) {
    return (
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
    );
}


export default Navigation;
