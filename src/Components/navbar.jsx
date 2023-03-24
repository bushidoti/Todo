import React, {Fragment, useState} from "react"
import Notification from "./notfication";
import Timer from "./CurrentTime";

const Navbar =  () => {
    const [isLight , setIsLight] = useState(false)

        const handleModes = () => {
        setIsLight(!isLight)
    };


    return (

    <Fragment>
        <nav className="navbar navbar-light bg-light rounded-4 shadow-4-strong" >
            <div className="container-fluid d-flex justify-content-between">
                    <div>
                        <Timer/>
                    </div>
                <div className='d-flex'>
                <Notification/>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={handleModes} ></input>
                       <i className="material-symbols-outlined">{isLight ? "light_mode" : "dark_mode"}</i>
                    </div>
                </div>
            </div>
        </nav>
    </Fragment>
)
};

export default Navbar;