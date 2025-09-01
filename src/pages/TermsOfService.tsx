
import { FileText } from 'lucide-react';
import { useEffect } from 'react';

const TermsOfService = () => {

  useEffect(() => {
    window.scroll(0,0);
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 animate-fade-in-up hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center space-x-3 mb-8">
            <FileText className="h-8 w-8 text-teal-600 animate-bounce-subtle" />
            <h1 className="text-4xl font-bold text-slate-800">Terms of Service</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8 animate-fade-in-up animation-delay-300">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accessing and using the services of JBM Cargo LLC, you accept and agree to be 
                bound by the terms and provision of this agreement. If you do not agree to abide by the 
                above, please do not use this service.
              </p>
            </section>

            <section className="mb-8 animate-fade-in-up animation-delay-400">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Service Description</h2>
              <p className="text-gray-700 mb-4">
                JBM Cargo LLC provides freight transportation and logistics services including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Interstate freight transportation</li>
                <li>Dispatch and coordination services</li>
                <li>Logistics planning and consultation</li>
                <li>Supply chain management solutions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Customer Responsibilities</h2>
              <p className="text-gray-700 mb-4">As a customer, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide accurate and complete information about shipments</li>
                <li>Ensure proper packaging and labeling of goods</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Pay all fees and charges in accordance with agreed terms</li>
                <li>Provide safe and accessible pickup and delivery locations</li>
                <li>Declare any hazardous or restricted materials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Company Responsibilities</h2>
              <p className="text-gray-700 mb-4">JBM Cargo LLC commits to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Maintain proper licensing and insurance coverage</li>
                <li>Handle shipments with reasonable care</li>
                <li>Provide timely and professional service</li>
                <li>Maintain confidentiality of customer information</li>
                <li>Comply with all federal and state transportation regulations</li>
                <li>Provide tracking information when available</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Liability and Insurance</h2>
              <p className="text-gray-700 mb-4">
               JBM Cargo LLC maintains appropriate insurance coverage as required by federal 
                regulations. Our liability is limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>The actual value of goods lost or damaged in transit</li>
                <li>Coverage limits as specified in our insurance policy</li>
                <li>Exclusions for acts of God, natural disasters, and force majeure events</li>
                <li>Customer's failure to properly declare cargo value or contents</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Payment Terms</h2>
              <p className="text-gray-700 mb-4">Payment terms are as follows:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Payment is due within 30 days of invoice date unless otherwise agreed</li>
                <li>Late payments may incur additional fees</li>
                <li>Disputed charges must be reported within 15 days</li>
                <li>We reserve the right to suspend services for overdue accounts</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Prohibited Items</h2>
              <p className="text-gray-700 mb-4">
                We do not transport the following items without proper authorization:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Hazardous materials without proper documentation</li>
                <li>Illegal substances or contraband</li>
                <li>Perishable goods without appropriate arrangements</li>
                <li>Items exceeding weight or size limitations</li>
                <li>Valuable items without declared value and insurance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Termination</h2>
              <p className="text-gray-700">
                Either party may terminate services with reasonable notice. Upon termination, all 
                outstanding obligations must be fulfilled, including payment of fees and return of property.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">9. Governing Law</h2>
              <p className="text-gray-700">
                These terms are governed by the laws of North Carolina and federal transportation 
                regulations. Any disputes will be resolved in the courts of North Carolina.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">10. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
               
import { FileText } from 'lucide-react';
import { useEffect } from 'react';

const TermsOfService = () => {

  useEffect(() => {
    window.scroll(0,0);
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 animate-fade-in-up hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center space-x-3 mb-8">
            <FileText className="h-8 w-8 text-teal-600 animate-bounce-subtle" />
            <h1 className="text-4xl font-bold text-slate-800">Terms of Service</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8 animate-fade-in-up animation-delay-300">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accessing and using the services of JBM Cargo LLC, you accept and agree to be 
                bound by the terms and provision of this agreement. If you do not agree to abide by the 
                above, please do not use this service.
              </p>
            </section>

            <section className="mb-8 animate-fade-in-up animation-delay-400">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Service Description</h2>
              <p className="text-gray-700 mb-4">
               JBM Cargo LLC provides freight transportation and logistics services including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Interstate freight transportation</li>
                <li>Dispatch and coordination services</li>
                <li>Logistics planning and consultation</li>
                <li>Supply chain management solutions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Customer Responsibilities</h2>
              <p className="text-gray-700 mb-4">As a customer, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide accurate and complete information about shipments</li>
                <li>Ensure proper packaging and labeling of goods</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Pay all fees and charges in accordance with agreed terms</li>
                <li>Provide safe and accessible pickup and delivery locations</li>
                <li>Declare any hazardous or restricted materials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Company Responsibilities</h2>
              <p className="text-gray-700 mb-4">JBM Cargo LLC commits to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Maintain proper licensing and insurance coverage</li>
                <li>Handle shipments with reasonable care</li>
                <li>Provide timely and professional service</li>
                <li>Maintain confidentiality of customer information</li>
                <li>Comply with all federal and state transportation regulations</li>
                <li>Provide tracking information when available</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Liability and Insurance</h2>
              <p className="text-gray-700 mb-4">
                JBM Cargo LLC maintains appropriate insurance coverage as required by federal 
                regulations. Our liability is limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>The actual value of goods lost or damaged in transit</li>
                <li>Coverage limits as specified in our insurance policy</li>
                <li>Exclusions for acts of God, natural disasters, and force majeure events</li>
                <li>Customer's failure to properly declare cargo value or contents</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Payment Terms</h2>
              <p className="text-gray-700 mb-4">Payment terms are as follows:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Payment is due within 30 days of invoice date unless otherwise agreed</li>
                <li>Late payments may incur additional fees</li>
                <li>Disputed charges must be reported within 15 days</li>
                <li>We reserve the right to suspend services for overdue accounts</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Prohibited Items</h2>
              <p className="text-gray-700 mb-4">
                We do not transport the following items without proper authorization:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Hazardous materials without proper documentation</li>
                <li>Illegal substances or contraband</li>
                <li>Perishable goods without appropriate arrangements</li>
                <li>Items exceeding weight or size limitations</li>
                <li>Valuable items without declared value and insurance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Termination</h2>
              <p className="text-gray-700">
                Either party may terminate services with reasonable notice. Upon termination, all 
                outstanding obligations must be fulfilled, including payment of fees and return of property.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">9. Governing Law</h2>
              <p className="text-gray-700">
                These terms are governed by the laws of North Carolina and federal transportation 
                regulations. Any disputes will be resolved in the courts of North Carolina.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">10. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                 <p className="text-gray-700">
                  <strong>JBM Cargo LLC</strong><br />
                  6150 Enterprice Pkwy<br />
                  Solon Ohio 44139<br />
                  Phone: +1(330)777-7680<br />
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

export default TermsOfService;

              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
