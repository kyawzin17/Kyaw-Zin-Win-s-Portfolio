import TechTree from "../components/TechTree";
import { forwardRef } from "react";

interface SkillsProps {
    id: string;
}

const Skills= forwardRef<HTMLElement, SkillsProps>(({id},ref) => {

    return (
        <section ref={ref} id={id} className="w-full min-h-[80vh] px-8 py-18: py-8 relative overflow-hidden">
            <TechTree />
        </section>
    )
})

export default Skills;