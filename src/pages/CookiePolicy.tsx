import React from "react";
import { Cookie } from "lucide-react";

const CookiePolicy: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 py-16 mt-10 space-y-6">
            <h1 className="flex items-center text-3xl font-bold text-gray-900">
                <Cookie className="h-7 w-7 text-blue-600 mr-2" /> Cookie Policy
            </h1>
            <p className="text-gray-700">
                <span className="font-semibold">JBM CARGO LLC</span> uses cookies to improve your experience and ensure our website works properly.
            </p>

            <section>
                <h2 className="text-xl font-semibold text-gray-800">What Are Cookies?</h2>
                <p className="text-gray-700">
                    Cookies are small text files stored on your device when you visit our website. They help us remember your preferences and enhance user experience.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800">How We Use Cookies</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>To remember your settings and preferences.</li>
                    <li>To analyze website traffic and improve performance.</li>
                    <li>To provide personalized content and offers.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800">Managing Cookies</h2>
                <p className="text-gray-700">
                    You can control or disable cookies through your browser settings. However, some features of our website may not function properly without cookies.
                </p>
            </section>

            <div className="from-blue-950 via-blue-900 to-black bg-gradient-to-tr text-white p-6 rounded-xl border border-gray-700/40 mt-6">
                <p className="mb-2 font-bold text-white">JBM CARGO LLC</p>
                <p className="mb-2">Email: jbmcargo@gmail.com</p>
                <p className="mb-2">Phone: (314) 930-2134</p>
                <p className="mb-2">Address: 6150 Enterprise Pkwy #4051 Solon, OH 44139</p>
                <p className="mb-2">Website: https://jbmcargo.netlify.app</p>
            </div>

            <p className="text-sm text-gray-500 mt-12 text-center italic">
                Last Updated: 18.08.2025
            </p>
        </div>
    );
};

export default CookiePolicy;
