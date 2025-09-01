
import { useEffect } from "react";

const PrivacyPolicy = () => {

  useEffect(() => {
    window.scroll(0,0);
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 animate-fade-in-up hover:shadow-xl transition-shadow duration-300">
          <h1 className="text-4xl font-bold text-slate-800 mb-8 animate-fade-in-up">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">

            <section className="mb-8 animate-fade-in-up animation-delay-300">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                MD Prime Logistics LLC collects information to provide better services to our customers. We collect information in the following ways:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and business information when you contact us or request services.</li>
                <li><strong>Service Information:</strong> Details about shipments, pickup and delivery locations, and service preferences.</li>
                <li><strong>Website Usage:</strong> Information about how you use our website, including IP address, browser type, and pages visited.</li>
                <li><strong>Communication Records:</strong> Records of communications between you and our company for service and support purposes.</li>
              </ul>
            </section>

            <section className="mb-8 animate-fade-in-up animation-delay-400">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide, maintain, and improve our logistics services</li>
                <li>Process and fulfill service requests</li>
                <li>Communicate with you about services, updates, and support</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Protect against fraud and ensure security</li>
                <li>Analyze and improve our website and services</li>
              </ul>
            </section>

            <section className="mb-8 animate-fade-in-up animation-delay-500">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Information Sharing</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>With your explicit consent</li>
                <li>To service providers who assist us in operating our business</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </section>

            <section className="mb-8 animate-fade-in-up animation-delay-600">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Data Security</h2>
              <p className="text-gray-700">
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic 
                storage is 100% secure.
              </p>
            </section>

            <section className="mb-8 animate-fade-in-up animation-delay-700">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Your Rights</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Access and review your personal information</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section className="mb-8 animate-fade-in-up animation-delay-800">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Contact Us</h2>
              <p className="text-gray-700">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4 hover:bg-gray-100 transition-colors duration-300">
                <p className="text-gray-700">
                  <strong>MD Prime Logistics LLC</strong><br />
                  5960 Fairview Rd, Suite 400<br />
                  Charlotte, NC 28210<br />
                  Phone: (443) 625-1223<br />
                  Email: dispatch@mdprimelogistics.com
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
