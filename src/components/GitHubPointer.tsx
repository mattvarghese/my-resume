import React from 'react';

interface GitHubPointerProps {
    /** Top padding in Tailwind units (e.g., 9 = 2.25rem / 36px) */
    topPadding?: number;
    /** Left padding in Tailwind units (e.g., 5 = 1.25rem / 20px) */
    leftPadding?: number;
}

export const GitHubPointer: React.FC<GitHubPointerProps> = ({
    topPadding = 9,
    leftPadding = 0
}) => {
    return (
        <div
            className="pb-2 flex flex-col items-start"
            style={{
                paddingTop: `${topPadding * 0.25}rem`,
                paddingLeft: `${leftPadding * 0.25}rem`
            }}
        >
            <p className="text-[9px] text-slate-400 font-medium tracking-tight italic">
                Résumé generated as print-media TypeScript+React Web Application at{' '}
                <a
                    href="https://github.com/mattvarghese/my-resume/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4da6a6] decoration-slate-200 hover:decoration-[#4da6a6]"
                >
                    https://github.com/mattvarghese/my-resume/
                </a>
            </p>
        </div>
    );
};