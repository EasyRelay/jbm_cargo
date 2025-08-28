import { Phone, Mail, Clock, Truck, FileText } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
 

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      detail: '(314) 930-2134',
      link: 'tel:(314)930-2134'
    },
    {
      icon: Mail,
      title: 'Email',
      detail: 'jbmcargollc@gmail.com',
      link: 'mailto:jbmcargollc@gmail.com'
    },
    {
      icon: FileText,
      title: 'DOT Number',
      detail: '3146601',
      link: null
    },
    {
      icon: Truck,
      title: 'MC Number',
      detail: '102456',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch for a free quote or to discuss your transportation needs
          </p>
        </div>


        <div className='flex flex-row gap-10 justify-center'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex max-w-120 min-w-80 space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-blue-100 p-3 rounded-full">
                  <item.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">{item.title}</h4>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    >
                      {item.detail}
                    </a>
                  ) : (
                    <p className="text-gray-600">{item.detail}</p>
                  )}
                </div>
              </div>
            ))}
          </div>


          <div className=" from-blue-800 via-blue-900 to-blue-950 bg-gradient-to-br text-white p-6 rounded-l w-fit">
            <h4 className="text-xl font-bold mb-4 flex items-center">
              <Clock className="h-6 w-6 mr-2" />
              Business Hours
            </h4>
            <div className="flex-col">
              <div className='flex-col'>
                <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
                <p>Saturday: 8:00 AM - 6:00 PM</p>
                <p>Sunday: Emergency service only</p>
              </div>
              <div className='mt-2'>
                <p className="text-red-200 font-semibold">24/7 dispatch available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;