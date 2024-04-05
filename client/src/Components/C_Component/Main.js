import Accordion from "./Accordion";
import Footer from "./MainFooter";
import { ProjectContext } from "../ProjectContext";
import { useState } from "react";
import axios from 'axios';

export default function C_COMPONENT() {

    const defaultProject = {
        title: "",
        slug: "",
        about: ""
    }

    // Setting project and active accordion item
    const [project, setProject] = useState({ ...defaultProject });
    const [activeIndex, setActiveIndex] = useState(null);

    // function to be called on clicking create-project button
    const handleSubmit = () => {
        axios.post("http://localhost:8000/project/create", {
            ...project
        })
            .then((response) => {
                console.log(response);
                setProject({});
                setActiveIndex(null);
            })
            .catch(error => {
                window.alert("Error occurred while creating project!");
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
            })
    }

    return (
        <div className="p-8">
            <ProjectContext.Provider value={{project, setProject, activeIndex, setActiveIndex}}>
                <Accordion />
                <Footer handleSubmit={handleSubmit} />
            </ProjectContext.Provider>
        </div>
    )
}