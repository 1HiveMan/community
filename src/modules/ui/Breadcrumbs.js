/** @jsx jsx */
import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import { jsx } from "theme-ui";
import { useLocation } from "@reach/router"


const Breadcrumbs = ({ children, pageContext }) => {
  let {pathname} = useLocation();
  pathname = pathname.replace(/\/+$/, ""); //Remove trailing slashes
  
  let locale = 'en'
  let currentPath = pathname;
  let fileName = pathname.split("/").splice(0,2); //NOTE(Rejon): Remove the first element, it'll always be an empty string.
  fileName.splice(0,2);

  return (
    <>
      <div>
        {pathname !== `/${locale}` && <><Link to={`/${locale}`}>Home</Link>{' /'}</>} 
        {fileName.map((pathName, index) => {
          currentPath += pathName + "/";
          let output = pathName;

          //Link to the page
          if (index !== fileName.length - 1) {
            return (
              <>
                {" "}
                <Link to={currentPath} sx={{ textTransform: "capitalize" }}>
                  {index >= 2 ? "..." : pathName}
                </Link>{" "}
                /{" "}
              </>
            );
          }

          return (
            <span
              sx={{ textTransform: "capitalize" }}
              key={`document-path-${index}`}
            >
              {" "}
              {pathName}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default Breadcrumbs;
