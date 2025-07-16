import Link from 'next/link';
import logoIcon from '@/public/logoIcon.png';
import fbIcon from '@/public/fbIcon.png';
import igIcon from '@/public/igIcon.png';
import xIcon from '@/public/xIcon.png';
import pinIcon from '@/public/pinIcon.png';




const Footer = () => {
  // Footer navigation columns
  const footerColumns = [
    {
      links: [
        { label: 'Home', href: '/' },
        { label: 'Africa', href: '#' },
        { label: 'Politics', href: '#' },
      ]
    },
    {
      links: [
        { label: 'Business', href: '#' },
        { label: 'Sport', href: '#' },
        { label: 'Health', href: '#' },
      ]
    },
    {
      links: [
        { label: 'Tech', href: '#' },
        { label: 'Opinion', href: '#' },
        { label: 'Videos', href: '#' },
      ]
    },
    {
      links: [
        { label: 'Photos', href: '#' },
        { label: 'AGC Archive', href: '#' },
        { label: 'Privacy Policy', href: '#' },
      ]
    },
    {
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Contact Us', href: '#' },
        { label: 'Advert Rate', href: '#' },
      ]
    }
  ];

  const socialIcon = [
    { src: fbIcon, alt: 'Facebook', href: '#' },
    { src: igIcon, alt: 'Instagram', href: '#' },
    { src: xIcon, alt: 'X', href: '#' },
    { src: pinIcon, alt: 'Pinterest', href: '#' }
  ]

  return (
    <footer className="bg-[#1B1B1B] text-white text-sm">
      <div className="container mx-auto px-7 m-3">

        {/* icon & social icon */}
        <div className='flex items-center justify-between mb-6 p-4'>
          <Link href="/">
            <img 
              src={logoIcon.src}
              alt="The New Pulse Logo" 
              className="h-10 w-auto"
            />
          </Link>

          <div className="">
            <ul className="flex space-x-4">
              {socialIcon.map((icon, index) => (
                <li key={index}>
                  <Link href={icon.href}>
                    <img 
                        src={icon.src.src} 
                        alt={icon.alt} 
                        className="h-6 w-6 hover:opacity-80 transition-opacity"
                      />  
                  </Link>
                </li>
              ))}
            </ul>    
          </div>
        </div>

        {/* searchbox */}
        <div className="mt-6 mb-8">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-white-500"
          />  
        </div>
        
        {/* help navigation links and other services */}
        <div 
          className="flex justify-between text-[#fff] flex-row gap-8 mb-8"
        >
          {footerColumns.map((column, index) => (
            <div key={index} className="mb-4">
              {/* <h3 className="text-lg font-semibold mb-4">{column.title}</h3> */}
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className=" border-gray-700 pb-5 ">
          <p className="text-[#fff]-500 text-sm">
            © 2024 AGC Newaret. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;