import ProjectSection from "../components/Project";
import TechTree from "../components/TechTree";


const Skills: React.FC= () => {

    return (
        <section className="w-full min-h-[80vh] px-8 py-18: py-8 relative overflow-hidden" id="skills">
            <TechTree />
            <ProjectSection />
        </section>
    )
}

export default Skills;