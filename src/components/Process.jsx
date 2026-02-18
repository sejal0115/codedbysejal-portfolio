import React from 'react';

const Process = () => {
    return (
        <>
            <section
                id="Process"
                className="flex flex-col border-t border-b border-border py-20 px-5 sm:px-20 xl:px-52 bg-background "
            >
                <div>
                    <h1 className="text-4xl font-bold mb-2">Sharing My Process</h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        I break down my UI/UX engineering workflows from research and system design to scalable frontend implementation.
                    </p>
                </div>

                <div className="pt-8 text-center">
                    <button  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 shadow-xl cursor-pointer">
                        Follow My Journey (Launching Soon)
                    </button>
                </div>
            </section>
        </>
    );
};

export default Process;