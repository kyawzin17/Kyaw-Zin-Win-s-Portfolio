import { useAppContext } from "../hooks/useAppContext";

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({scrollToSection}) => {

  const { active }= useAppContext();

    const navArray= [
        {id: "home", name: "Home"},
        {id: "about", name: "About"},
        {id: "skills", name: "Skills"},
        {id: "contact", name: "Contact"},
    ]
  return (
    <header className="w-full bg-bg/20 sticky top-0 backdrop-blur-md shadow-md py-4 z-1000 shadow-lg opacity-75 shadow-white/3">
      <nav className="max-w-300 mx-auto grid grid-cols-2 items-center px-4">
        <h6 className='justify-self-start text-main font-bold font-serif leading-1.5'>Portfolio!</h6>
        <ul className="justify-self-end flex space-x-6 md:space-x-8 relative">
            { navArray.map((item) => (
                <li key={item.id} 
                  onClick={() => scrollToSection(item.id)}>
                      <h6 className={`${active === item.id ? "text-primary" : "text-main" } hover:text-primary transition-colors font-regular font-serif`}>
                        {item.name}
                      </h6>
                </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
