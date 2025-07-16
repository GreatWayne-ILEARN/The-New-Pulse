import Link from 'next/link';
// import SearchBar from './SearchBar';
// { onSearch }: { onSearch: (query: string) => void }
import logoIcon from '@/public/logoIcon.png'
import { SearchIcon } from 'lucide-react';


const Header = () => {
  // Navigation items organized in rows
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Africa', href: '#' },
    { label: 'Politics', href: '#' },
    { label: 'Business', href: '#' },
    { label: 'Sport', href: '#' },
    { label: 'Health', href: '#' },
    { label: 'Tech', href: '#' },
  ];

  const navItems2 = [
    { label: 'Opinion', href: '#' },
    { label: 'Photos', href: '#' },
    { label: 'Videos', href: '#' },
    { label: 'Audio', href: '#' },
  ]

  return (
   <header className="border-b">
      <div className=" mx-auto px-4 bg-[#1B1B1B] text-white ">
         {/* Main header */}
        <div className="flex items-center justify-between py-2 text-sm">
          {/* Logo */}
          <div className='flex items-center gap-10'>
            <Link href="/">
              <img 
                src={logoIcon.src}
                alt="The New Pulse Logo" 
                className="h-10 w-auto"
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex space-x-6">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="hover:text-blue-600 transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          
          
          {/* Auth and Search */}
          <div className="flex items-center space-x-4">
            {/* <SearchBar onSearch={onSearch} /> */}
            <span>|</span>

            <ul className="flex space-x-6">
                {navItems2.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="hover:text-blue-600 transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>

            <SearchIcon />
            <div className="flex items-center space-x-3">
              <Link href='#' className="py-1 text-sm ">Log in</Link> 
              <span>/</span>
              <Link href='#' className="py-1 text-sm ">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;