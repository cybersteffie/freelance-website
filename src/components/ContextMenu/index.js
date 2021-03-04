import React, {useState} from "react";

const ContextMenu = () => {
     const [position, setPosition] = useState({
          xPos: "0px",
          yPos: "0px",
          showMenu: false
      })

     componentDidMount() {
         document.addEventListener("click", this.handleClick);
         document.addEventListener("contextmenu", this.handleContextMenu);
     }

     componentWillUnmount() {
         document.removeEventListener("click", this.handleClick);
         document.removeEventListener("contextmenu", this.handleContextMenu);
     }

     handleClick = (e) => {
          if (position) setPosition({ showMenu: false });
     }

     handleContextMenu = (e) => {
         e.preventDefault();
         setPosition({
          xPos: `${e.pageX}px`,
          yPos: `${e.pageY}px`,
          showMenu: true,
        });
     }

    return (
     <ul
     className="menu"
     style={{
       top: yPos,
       left: xPos,
     }}
   >
     <li>Login</li>
     <li>Register</li>
     <li>Open Profile</li>
   </ul>
 );
    );
 }

 export default ContextMenu;
