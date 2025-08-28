import { Shield, Cookie, FileText } from 'lucide-react';
import { Link } from 'react-router';


const LegalPages = () => {


  return (
    <>
      <div className="flex flex-wrap gap-6 justify-center">
        <button
          className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
        >
          <Link to="/privacy_policy" className='flex items-center gap-2'>
            <Shield className="h-4 w-4" />
            Privacy Policy</Link>
        </button>

        <button
          className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
        >
          <Link to="/cookie_policy" className='flex items-center gap-2'>
            <Cookie className="h-4 w-4" />
            Cookie Policy</Link>
        </button>

        <button
          className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
        >
          <Link to="/terms_of_service" className='flex items-center gap-2'>
            <FileText className="h-4 w-4" />
            Terms of Service</Link>
        </button>
      </div>
    </>
  );
};

export default LegalPages;