import { useEffect } from 'react';
import { Cookie } from 'lucide-react';

const CookiePolicy = () => {

  useEffect(() => {
    window.scroll(0,0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 animate-fade-in-up hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center space-x-3 mb-8">
            <Cookie className="h-8 w-8 text-teal-600 animate-bounce-subtle" />
            <h1 className="text-4xl font-bold text-slate-800">Cookie Policy</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8 animate-fade-in-up animation-delay-300">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">What Are Cookies?</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                understanding how you use our site.
              </p>
            </section>

            <section className="mb-8 animate-fade-in-up animation-delay-400">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-500">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Essential Cookies</h3>
                  <p className="text-gray-700 mb-3">
                    These cookies are necessary for the website to function properly. They enable basic 
                    features like page navigation and access to secure areas.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Examples:</strong> Session management, security features, load balancing
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-600">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Analytics Cookies</h3>
                  <p className="text-gray-700 mb-3">
                    These cookies help us understand how visitors interact with our website by 
                    collecting and reporting information anonymously.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Examples:</strong> Google Analytics, page views, user behavior tracking
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-700">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Marketing Cookies</h3>
                  <p className="text-gray-700 mb-3">
                    These cookies are used to deliver advertisements that are relevant to you and 
                    your interests based on your browsing behavior.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Examples:</strong> Targeted advertising, social media integration, remarketing
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8 animate-fade-in-up animation-delay-800">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Cookie Preferences</h2>
              <p className="text-gray-700 mb-6">
                You can manage your cookie preferences below. Please note that disabling certain 
                cookies may affect the functionality of our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">How to Control Cookies</h2>
              <p className="text-gray-700 mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Use the cookie preference center above</li>
                <li>Modify your browser settings to block or delete cookies</li>
                <li>Use browser extensions that manage cookies</li>
                <li>Opt-out of specific third-party services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-700">
                Our website may contain links to third-party websites and services. These third parties 
                may set their own cookies on your device. We do not control these cookies and recommend 
                reviewing the privacy policies of these third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Updates to This Policy</h2>
              <p className="text-gray-700">
                We may update this Cookie Policy from time to time. Any changes will be posted on this 
                page with an updated effective date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about this Cookie Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>JBM Cargo LLC</strong><br />
                  6150 Enterprice Pkwy<br />
                  Solon, OH 44139<br />
                  Phone: +1 (330) 777-7680<br />
                  Email: dustin@jmbcargo.com
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
