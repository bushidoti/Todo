import React, {Fragment} from "react";

const Notification =  () => {
    return (
    <Fragment>
        <div className="dropdown">
                <i className="fas fa-bell"></i>
                <span className="badge rounded-pill badge-notification bg-danger">1</span>
        </div>
    </Fragment>
)
};

export default Notification;