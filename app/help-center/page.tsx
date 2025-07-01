"use client"; // Add this directive at the top

import { useState } from 'react';

export default function HelpCenter() {
    // State for collapsible FAQ sections
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <img
                            src="/worthit-logo.png"
                            alt="WorthIt Logo"
                            className="h-10 w-auto"
                        />
                        <h1 className="text-2xl font-bold text-gray-900">WorthIt Help Center</h1>
                    </div>
                    <nav>
                        <a
                            href="/"
                            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                        >
                            Back to Home
                        </a>
                    </nav>
                </div>
            </header>
            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <section className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                        Welcome to the WorthIt Help Center
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Find answers to common questions, troubleshooting guides, and tips to get the most out of the WorthIt Chrome extension. We're here to ensure a seamless experience.
                    </p>
                </section>

                {/* FAQ Sections */}
                <section className="space-y-6">
                    {/* Getting Started */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <button
                            className="w-full text-left flex justify-between items-center"
                            onClick={() => toggleSection('getting-started')}
                            aria-expanded={openSection === 'getting-started'}
                        >
                            <h2 className="text-xl font-semibold text-gray-900">Getting Started</h2>
                            <span className="text-blue-600">
                                {openSection === 'getting-started' ? '−' : '+'}
                            </span>
                        </button>
                        {openSection === 'getting-started' && (
                            <div className="mt-4 text-gray-600">
                                <p>
                                    After installing the WorthIt Chrome extension, it automatically activates on supported Indian e-commerce websites. No additional setup is required. Browse as usual, and WorthIt will display cost-per-use and time-to-afford insights directly on product pages.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Troubleshooting */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <button
                            className="w-full text-left flex justify-between items-center"
                            onClick={() => toggleSection('troubleshooting')}
                            aria-expanded={openSection === 'troubleshooting'}
                        >
                            <h2 className="text-xl font-semibold text-gray-900">Troubleshooting</h2>
                            <span className="text-blue-600">
                                {openSection === 'troubleshooting' ? '−' : '+'}
                            </span>
                        </button>
                        {openSection === 'troubleshooting' && (
                            <div className="mt-4 text-gray-600">
                                <p className="mb-2">
                                    <strong>Extension not visible?</strong> Ensure WorthIt is pinned to your Chrome toolbar. Click the puzzle icon in Chrome and select "Pin" next to WorthIt.
                                </p>
                                <p className="mb-2">
                                    <strong>Still not working?</strong> Try refreshing the page, restarting your browser, or confirming you're on a supported site.
                                </p>
                                <p>
                                    If issues persist, reach out via our{' '}
                                    <a
                                        href="#contact"
                                        className="text-blue-600 underline hover:text-blue-800"
                                    >
                                        support form
                                    </a>.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Supported Platforms */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <button
                            className="w-full text-left flex justify-between items-center"
                            onClick={() => toggleSection('supported-platforms')}
                            aria-expanded={openSection === 'supported-platforms'}
                        >
                            <h2 className="text-xl font-semibold text-gray-900">Supported Platforms</h2>
                            <span className="text-blue-600">
                                {openSection === 'supported-platforms' ? '−' : '+'}
                            </span>
                        </button>
                        {openSection === 'supported-platforms' && (
                            <div className="mt-4 text-gray-600">
                                <p>
                                    WorthIt currently supports major Indian e-commerce platforms, including <strong>Amazon India</strong> and <strong>Myntra</strong>. We’re actively expanding to additional platforms. Check our{' '}
                                    <a
                                        href="/supported-sites"
                                        className="text-blue-600 underline hover:text-blue-800"
                                    >
                                        Supported Sites
                                    </a>{' '}
                                    page for real-time updates.
                                </p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        Need Further Assistance?
                    </h2>
                    <p className="text-gray-600 mb-6">
                        For unresolved issues, bug reports, or feature suggestions, our support team is here to help.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <a
                            href="mailto:support@worthit.app"
                            className="inline-block bg-blue-600 text-white font-medium py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Email Support
                        </a>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdTlykK8bWHFSKUI7Jk-_y5xLW5S7gYI69SgsQNczVrIVLoTw/viewform?usp=sharing&ouid=113991419266563621469"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-gray-100 text-gray-800 font-medium py-2 px-6 rounded-md hover:bg-gray-200 transition-colors"
                        >
                            Submit a Support Form
                        </a>
                    </div>
                    <p className="text-sm text-gray-500 mt-6">
                        Our team responds to all inquiries within 24–48 hours. Thank you for choosing WorthIt.
                    </p>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm">
                        © {new Date().getFullYear()} WorthIt. All rights reserved.
                    </p>
                    <div className="mt-4 space-x-4">
                        <a href="/privacy" className="text-gray-300 hover:text-white">
                            Privacy Policy
                        </a>
                        <a href="/terms" className="text-gray-300 hover:text-white">
                            Terms of Service
                        </a>
                        <a href="/about" className="text-gray-300 hover:text-white">
                            About Us
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}