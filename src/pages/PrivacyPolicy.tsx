import React from "react";
import { Shield } from "lucide-react";

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 py-16 mt-10 space-y-6">
            <h1 className="flex items-center text-3xl font-bold text-gray-900">
                <Shield className="h-7 w-7 text-blue-600 mr-2" /> Privacy Policy
            </h1>
            <p className="text-gray-700">
                At <span className="font-semibold">JBM CARGO LLC</span>, we respect your privacy and are committed to protecting your personal information.
            </p>

            <section>
                <h2 className="text-xl font-semibold text-gray-800">Information We Collect</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Contact information (name, email, phone number)</li>
                    <li>Shipping and billing addresses</li>
                    <li>Service preferences and requirements</li>
                    <li>Communication records with our team</li>
                </ul>
            </section>
            
            <section>
                <h2 className="text-xl font-semibold text-gray-800">RingCentral Integration</h2>
                <p className="text-gray-700 mb-3">
                    Our service uses RingCentral's APIs to facilitate communication. When you connect your RingCentral account, we may access and use data such as:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Your RingCentral account information</li>
                    <li>Call and message metadata (not message content)</li>
                    <li>Contact and directory information</li>
                </ul>
                <p className="text-gray-700 mt-3">
                    This data is not shared with third parties except as required to operate the service.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800">How We Use Your Information</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>To provide transportation and logistics services</li>
                    <li>To communicate about your shipments</li>
                    <li>To improve our services</li>
                    <li>To comply with legal requirements</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800">Data Protection</h2>
                <p className="text-gray-700">
                    We implement security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
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

export default PrivacyPolicy;
