import { useContext } from "react";
import { ProjectContext } from "../ProjectContext";

export default function AccordionHeader(props) {

    // Get title and elementIndex from props
    const { elementIndex, title } = props;

    // Get activeIndex and toggle function from context
    const { toggleAccordion, activeIndex } = useContext(ProjectContext);

    return (
        <button onClick={() => toggleAccordion(elementIndex)} className={`w-full p-4 py-3  
                ${activeIndex !== elementIndex ? "text-gray-800 font-medium text-lg" : "text-blue-700 font-bold text-xl"} 
                text-left bg-slate-50 hover:bg-slate-100 
                hover:rounded-lg transition ease-in-out duration-300`}>
            {title}
            <span className="float-right font-bold text-3xl text-gray-800 me-2">
                {activeIndex !== elementIndex ? "+" : "-"}
            </span>
        </button>
    )
}