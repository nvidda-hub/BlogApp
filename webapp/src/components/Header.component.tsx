import { Button, Navbar, TextInput } from "flowbite-react"
import { Link, useLocation } from "react-router-dom"
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";


const Header = () => {
  const path = useLocation().pathname
  return (
    <Navbar className="border-b-2">
      
      {/* logo */}
      <Link to='/'>
        <div className="whitespace-nowrap self-center text-sm sm:text-xl font-semibold dark:text-white">
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Vidda's</span>
          <span className="text-xl">Blog</span>
        </div>
      </Link>

      {/* Search */}
      <form>
        <TextInput 
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
        <Button className="w-12 h-10 lg:hidden" color="gray" pill={true}>
          <AiOutlineSearch />
        </Button>
      </form>

      {/* other options */}
      <div className="flex flex-row gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to='/sign-in'>
          <Button gradientDuoTone='purpleToBlue' outline>
            SignIn
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>

      {/* Menu */}
      <Navbar.Collapse>
          <Navbar.Link active={path === '/'} as={'div'}>
            <Link to='/'>Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/about'} as={'div'}>
            <Link to='/about'>About</Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/projects'} as={'div'}>
            <Link to='/projects'>Projects</Link>
          </Navbar.Link>

        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header