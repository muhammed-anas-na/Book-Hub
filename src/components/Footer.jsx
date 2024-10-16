import { Github, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const navigation = {
    product: [
      { name: 'Pricing', href: '#' },
      { name: 'Integrations', href: '#' },
    ],
    solutions: [
      { name: 'Internal Knowledge Base', href: '#' },
      { name: 'Public Docs', href: '#' },
    ],
    resources: [
      { name: 'Docs', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Changelog', href: '#' },
      { name: 'Security and Compliance', href: '#' },
      { name: 'Newsletter', href: '#' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact and Support', href: '#' },
    ],
  };

  return (
    <footer className="bg-gray-50 border-t mt-10">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-black rounded">
                  {/* Replace with your logo */}
                  <div className="h-full w-full text-white flex items-center justify-center">
                    📚
                  </div>
                </div>
                <span className="ml-2 text-xl font-semibold">BookIn</span>
              </div>
            </a>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-8 col-span-2 md:col-span-4">
            {/* Product */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                PRODUCT
              </h3>
              <ul className="mt-4 space-y-3">
                {navigation.product.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                SOLUTIONS
              </h3>
              <ul className="mt-4 space-y-3">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                RESOURCES
              </h3>
              <ul className="mt-4 space-y-3">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                COMPANY
              </h3>
              <ul className="mt-4 space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between">
            <div className="mt-6 md:mt-0">
              <div className="flex items-center space-x-2">
                <img
                  src="/api/placeholder/40/40"
                  alt="Certification 1"
                  className="h-10 w-10"
                />
                <img
                  src="/api/placeholder/40/40"
                  alt="Certification 2"
                  className="h-10 w-10"
                />
              </div>
              <p className="mt-4 text-xs text-gray-500">
                © 2023 COPYRIGHT GITBOOK INC.
              </p>
              <p className="mt-1 text-xs text-gray-500">
                440 N BARRANCA AVE #7171, COVINA, CA 91723, USA. EIN: 320502699
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;