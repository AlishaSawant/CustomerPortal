import React from "react";
import "./Style.scss";

const Heading = (props) => {
    const { name } = props;
    return (
        <h6 className="headings">{name}</h6>
    )
}

export default Heading;

