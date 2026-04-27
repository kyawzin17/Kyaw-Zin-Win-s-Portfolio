export default function Footer() {
     const navArray= [
        {id: "home", name: "Home"},
        {id: "about", name: "About"},
        {id: "skills", name: "Skills"},
        {id: "contact", name: "Contact"},
    ]

    return (
        <section className="py-12 w-full text-main h-auto px-7 bg-card">
            <div className="h-full w-full flex flex-col max-w-340 mx-auto">
                <h4 className="font-bold text-center mb-9 text-main">My Learning Resources</h4>
                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6">
                     <div className="flex flex-col items-start justify-start">
                        <h6 className='justify-self-start text-main font-semibold font-serif mb-4'>Portfolio!</h6>
                        <ul className="flex flex-col space-y-2 relative">
                            { navArray.map((item) => (
                                <li key={item.id} className="hover:-translate-y-1">
                                    <a href={`#${item.id}`} className="text-muted hover:text-main">
                                    <p className='font-regular text-sm'>
                                        {item.name}
                                    </p>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                    <h6 className="font-semibold mb-4 text-main/90 font-serif">Websites</h6>
                    <ul className="text-muted text-sm flex flex-col space-y-2">
                        <li className="hover:text-main cursor-pointer hover:-translate-y-1">W3 School website</li>
                        <li className="hover:text-main cursor-pointer hover:-translate-y-1">Bootstrap Css website</li>
                        <li className="hover:text-main cursor-pointer hover:-translate-y-1">Tailwind Css website</li>
                        <li className="hover:text-main cursor-pointer hover:-translate-y-1">Chat GPT-40, GPT-4.5</li>
                        <li className="hover:text-main cursor-pointer hover:-translate-y-1">Gemini</li>
                        <li className="hover:text-main cursor-pointer hover:-translate-y-1">More...</li>
                    </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                        <h6 className="font-semibold mb-4 text-main/90 font-serif">YouTube Channels</h6>
                        <ul className="text-muted text-sm flex flex-col space-y-2">
                            <li className="hover:text-main cursor-pointer hover:-translate-y-1">MSquare Programming</li>
                            <li className="hover:text-main cursor-pointer hover:-translate-y-1">Dgtech Myanmar</li>
                            <li className="hover:text-main cursor-pointer hover:-translate-y-1">Creative Coder Myanmar</li>
                            <li className="hover:text-main cursor-pointer hover:-translate-y-1">More...</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                        <h6 className="font-semibold mb-4 text-main/90 font-serif">Books</h6>
                        <ul className="text-muted text-sm flex flex-col space-y-2">
                            <li className="hover:text-main cursor-pointer hover:-translate-y-1">Sayar Ei Maung's "Professional-Web-Developer"</li>
                            <li className="hover:text-main cursor-pointer hover:-translate-y-1">"Rockstar Developer"</li>
                            <li className="hover:text-main cursor-pointer hover:-translate-y-1">"Vibe code လိုတိုရှင်း"</li>
                            <li className="hover:text-main cursor-pointer hover:-translate-y-1">Saturngod's "Developer Intern"</li>
                            <li className="hover:text-main cursor-pointer hover:-translate-y-1">More...</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}