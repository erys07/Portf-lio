import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/images/Logo.png"

function Header()
{
    const [menuOpen, setMenuOpen] = useState(false)
    const handleChangeMenuOpen = () => setMenuOpen(!menuOpen)

    return <div className="">
        <header className="flex flex-row justify-between border-b border-[#DACCC5] lg:px-56 px-10">
            <div className="mt-6 lg:mt-5 mb-4">
                <img src={Logo} className="w-28 lg:w-28 h-auto"></img>
            </div>
            <div className="flex flex-col items-center md:justify-center px-5 py-2">
                <button onClick={handleChangeMenuOpen} className="md:hidden ml-32 mt-12">
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
                <nav className={menuOpen ? 'flex flex-col items-start justify-between h-32' : 'hidden md:block'}>
                    <a href="#/" className="font-semibold text-sm lg:text-lg ml-5 text-[#DACCC5]">Início</a>
                    <a href="#/" className="ml-5 lg:ml-10 font-semibold text-sm lg:text-lg text-[#DACCC5]">Sobre mim</a>
                    <a href="#/" className="ml-5 lg:ml-10 font-semibold text-sm lg:text-lg text-[#DACCC5]">Projetos</a>
                    <a href="#/" className="ml-5 lg:ml-10 font-semibold text-sm lg:text-lg text-[#DACCC5]">Habilidades</a>
                </nav>
            </div>
        </header>
    </div>
}

export default Header;