import { Link } from 'react-router';
import { FaFileAlt, FaRobot, FaStream } from 'react-icons/fa';

export const MenuView = () => {
    const options = [
        { title: "Formatted Resume", path: "/formatted", icon: <FaFileAlt />, desc: "The high-fidelity designed version (Print-ready)." },
        { title: "ATS-Friendly Resume", path: "/ats", icon: <FaRobot />, desc: "Simplified sequential layout for parsers." },
        { title: "Career Timeline", path: "/timeline", icon: <FaStream />, desc: "Visual interactive timeline of experience." },
    ];

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
            <div className="max-w-2xl w-full">
                <h1 className="text-3xl font-bold text-white mb-8 text-center tracking-tight">Select Resume View</h1>
                <div className="grid gap-4">
                    {options.map((opt) => (
                        <Link
                            key={opt.path}
                            to={opt.path}
                            className="flex items-center gap-6 p-6 bg-slate-800 border border-slate-700 rounded-xl hover:border-[#4da6a6] transition-all group"
                        >
                            <div className="text-3xl text-slate-400 group-hover:text-[#4da6a6]">
                                {opt.icon}
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-white group-hover:text-[#4da6a6]">{opt.title}</h2>
                                <p className="text-slate-400 text-sm">{opt.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};