export default function PrivacyPolicy() {
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
                        <h1 className="text-2xl font-bold text-gray-900">WorthIt Privacy Policy</h1>
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
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Effective Date: June 27, 2025
                    </p>
                </section>

                <section className="space-y-8">
                    {/* Introduction */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">Our Commitment to Your Privacy</h2>
                        <p className="text-gray-600">
                            At <strong>WorthIt</strong>, we are dedicated to protecting your privacy. Our Chrome extension empowers Indian shoppers to make informed purchasing decisions without compromising personal data. This Privacy Policy outlines our practices regarding data collection, usage, and sharing.
                        </p>
                    </div>

                    {/* Data Collection */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">Data Collection</h2>
                        <p className="text-gray-600">
                            WorthIt operates entirely on your device and does not collect, store, or transmit any personal information, browsing history, or user activity. All features, such as cost-per-use calculations and time-to-afford metrics, are processed locally to ensure maximum privacy.
                        </p>
                    </div>

                    {/* Third-Party Sharing */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">Third-Party Sharing</h2>
                        <p className="text-gray-600">
                            We do not share any data with third parties, nor do we integrate analytics or external tracking services. Your shopping experience with WorthIt remains private and secure.
                        </p>
                    </div>

                    {/* Permissions */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">Permissions</h2>
                        <p className="text-gray-600">
                            WorthIt uses minimal Chrome permissions, such as <code>activeTab</code>, to display insights directly on supported e-commerce websites. These permissions are essential for functionality and do not involve collecting or storing any data.
                        </p>
                    </div>

                    {/* Changes to Policy */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">Changes to This Policy</h2>
                        <p className="text-gray-600">
                            We may update this Privacy Policy to reflect changes in our practices or legal requirements. Any updates will be posted on this page with a revised effective date.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h2>
                        <p className="text-gray-600 mb-4">
                            If you have any questions or concerns about this Privacy Policy, please reach out to our support team.
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
                    </div>
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
                        <a href="/help-center" className="text-gray-300 hover:text-white">
                            Help Center
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}