export default function Footer() {

    return (
        <section className="py-5 w-full text-white h-[80vh] bg-soft">
            <div className="h-full flex flex-col items-center justify-center footer-div">
                <h4 className="font-bold mb-1 text-main">My Learning Resources</h4>
                <h5 className="font-semibold mb-2 text-main/90">Websites</h5>
                <ul className="text-center text-muted">
                    <li>W3 School website</li>
                    <li>Bootstrap Css website</li>
                    <li>Tailwind Css website</li>
                    <li>Chat GPT-40, GPT-4.5</li>
                </ul>
                <h5 className="font-semibold m-2 text-main/90">YouTube Channels</h5>
                <ul className="text-center text-muted">
                    <li>MSquare Programming</li>
                    <li>Dgtech Myanmar</li>
                    <li>Creative Coder Myanmar</li>
                    <li>Some other Channels...</li>
                </ul>
                <h5 className="font-semibold m-2 text-main/90">Books</h5>
                <ul className="text-center text-muted">
                    <li>Sayar Ei Maung's "Professional-Web-Developer"</li>
                    <li>Saturngod's "Developer Intern"</li>
                </ul>
            </div>
        </section>
    )
}