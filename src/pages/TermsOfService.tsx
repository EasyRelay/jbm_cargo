import React from "react";
import { FileText } from "lucide-react";

const TermsOfService: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 py-16 mt-10 space-y-6">
            <h1 className="flex items-center text-3xl font-bold text-gray-900">
                <FileText className="h-7 w-7 text-blue-600 mr-2" /> Terms of Service
            </h1>
            <p className="text-gray-700">
                Welcome to <span className="font-semibold">JBM CARGO LLC</span>. By using our services, you agree to the following terms and conditions.
            </p>

            <section>
                <h2 className="text-xl font-semibold text-gray-800">1. Service Agreement</h2>
                <p className="text-gray-700">
                    We provide transportation and logistics services as agreed with the client. All shipments are subject to applicable regulations and company policies.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800">2. User Responsibilities</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Provide accurate and complete information.</li>
                    <li>Ensure timely payment of agreed fees.</li>
                    <li>Comply with all applicable laws and regulations.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800">3. Limitation of Liability</h2>
                <p className="text-gray-700">
                    JBM CARGO LLC shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services, except as required by law.
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

export default TermsOfService;
