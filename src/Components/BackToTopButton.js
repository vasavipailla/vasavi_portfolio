import React from "react";
import { useEffect,useState } from "react";


const BackToTopButton = () => {
    const [backToTopButton , setBackToTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll" ,() => {
           if(window.scrollY > 100) {
                setBackToTopButton(true)
            }else{
                setBackToTopButton(false)
            }
        })
    },[])

    const scrollUp = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }

    return (
        <div className="backbtn">
            { backToTopButton && (
                <button style={{
                    position:"fixed",
                    bottom: "50px",
                    right: "50px",
                    height: "60px",
                    width: "50px",
                    borderRadius: "25px",
                    borderColor:"black",
                    fontSize: "50px",
                    backgroundColor:"#ACE1AF",
                }} onClick ={scrollUp}>^</button>
            )}
        </div>
    )
}

export default BackToTopButton;