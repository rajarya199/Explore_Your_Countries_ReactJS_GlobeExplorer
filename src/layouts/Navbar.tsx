import { useState } from 'react'
import { ThemeToggle } from '../components/ThemeToggle'
import { GlobeIcon, MenuIcon, XIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
 <header className="w-full bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
             <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <GlobeIcon className="w-8 h-8  dark:text-cyan-400 text-gray-600 transition-transform duration-500 group-hover:rotate-180" />
    <div className="absolute inset-0 bg-gradient-to-r dark:from-cyan-400/20 from-gray-200/50 dark:to-blue-500/20 blur-lg rounded-full transition-all duration-500 group-hover:scale-110" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r dark:from-white from-gray-900 dark:to-gray-800 bg-clip-text text-transparent">
    Globe<span className="dark:text-cyan-400 text-cyan-600 font-bold">Explore</span>
  </span>
          </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to='/'
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Home
            </Link>
            <Link
              to="/countries"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Countries
            </Link>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Regions
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              About
            </a>
            <ThemeToggle />
          </div>
          {/* Mobile Navigation Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Countries
              </a>
              <a
                href="#"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Regions
              </a>
              <a
                href="#"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              >
                About
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
)
}

export default Navbar