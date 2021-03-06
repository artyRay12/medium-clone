import React from "react";
import { NavLink } from "react-router-dom";

const FeedToggle = ({ tagname }) => {
    return (
        <div className="feed-toggle">
            <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                    <NavLink to="/feed" className="nav-link">
                        Your Feed
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/" className="nav-link" exact>
                        Global Feed
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={`/tags/${tagname}`} className="nav-link" exact>
                        {tagname}
                    </NavLink>
                </li>
                
            </ul>
        </div>
    );
};

export default FeedToggle;
