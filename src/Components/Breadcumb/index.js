import React from "react";
import { Breadcrumb } from "antd";
import { Link, useNavigate  } from "react-router-dom";
import "./Style.scss"

const Breadcumb = (props) => {
  const { parentMenu, pageTitle } = props;
  console.log(props, "propssss")
  const navigate = useNavigate();
  return (
    <Breadcrumb
    className="breadcumb_sec"
      separator=""
      items={[
       /*  {
          title: <HomeOutlined />,
        },
        {
          type: "separator",
        }, */
        {
          title: parentMenu,
        },
        {
          type: "separator",
        },
        {
          title: pageTitle,
        },
        
      ]}
    />
  );
};

export default Breadcumb;
