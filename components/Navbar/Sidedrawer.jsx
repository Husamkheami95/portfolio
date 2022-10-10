import Link from "next/link";
import React from "react";
import { Slide,LightSpeed } from "react-reveal";

function Sidedrawer({rendertheme}) {
  return (
    <div>
        
        <LightSpeed top >
        <ul className="block" >
        
        <Link href="#">
          <li >{rendertheme}</li>
        </Link>
          <Link href="#">
            <li className="sidedraw-item">Home</li>
          </Link>
          <Link href="#">
            <li className="sidedraw-item">Education</li>
          </Link>
          <Link href="#">
            <li className="sidedraw-item">Experience</li>
          </Link>
          <Link href="#">
            <li className="sidedraw-item">Contact</li>
          </Link>
        </ul>
        </LightSpeed>
      
    </div>
  );
}

export default Sidedrawer;
