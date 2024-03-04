import React from "react";

function HeroBanner() {
    return (
        <section className="bg-center bg-no-repeat bg-[url('/static/img/banner.png')] bg-gray-700 bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-12 lg:py-28">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">fnComponents</h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Get started
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                    <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        Learn more
                    </a>  
                </div>
            </div>
        </section>
    );
}

const Hero = () => {
    return (
        <div className="font-sans">
            {/* Hero Section */}
            <div className="text-center py-16 bg-gradient-to-r from-black to-blue-900">
                <h1 className="text-5xl font-bold text-white mb-4">
                    Introducing fnComponents
                </h1>
                <p className="text-xl text-white mb-8">
                    Your guide to everything [Software Name]
                </p>
                <a
                    href="#get-started"
                    className="bg-white text-teal-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-200"
                >
                    Get Started
                </a>
            </div>
        </div>
    );
};

export default HeroBanner;
