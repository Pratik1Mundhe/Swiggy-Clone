import { useState } from "react"

const Section = ({title,description,isVisible, setIsVisible}) => {

    return (
        <div className="border border-black p-2 m-2">
            <h3>{title}</h3>
            <button onClick={() => {
                if(isVisible===false)
                setIsVisible(true); 
                else
                setIsVisible(false);
            }}>{ isVisible===true?"hide":"show" }</button>
            {isVisible && <p>{description}</p>}
        </div>
    )
}

const Instamart = () => {
    const [visibleSection, setVisibleSection]  = useState("about");

    return (
        <>
            <h2>Instamart</h2>
            <Section title={"About Instamart"} description={"this is the about section of instamart"} isVisible={visibleSection==="about"} setIsVisible={() =>  setVisibleSection("about")           } />
            <Section title={"Team Instamart"} description={"this is the team section of instamart"} isVisible={visibleSection==="team"}  setIsVisible={() =>  setVisibleSection("team")           }/>
            <Section title={"Careers"} description={"this is the careers section of instamart"} isVisible={visibleSection==="career"}  setIsVisible={() =>    setVisibleSection("career")         }/>
        </>
    )

}

export default Instamart;