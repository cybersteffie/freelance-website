import React, { useEffect, useContext } from "react";

import GlobalContext from "../../context/GlobalContext";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

const themeConfigDefault = {
  headerDark: false,
  bodyDark: false,
  footerDark: false,
};

const PageWrapper = ({ children, darkTheme = false, themeConfig = null }) => {
  const gContext = useContext(GlobalContext);

  useEffect(() => {
    if (darkTheme) {
      gContext.changeTheme({
        headerDark: true,
        bodyDark: true,
        footerDark: true,
      });
    } else {
      gContext.changeTheme({ ...themeConfigDefault, ...themeConfig });
    }
  }, []);

  const handleClick = (e, data) => {
    console.log(data.foo);
  };

  return (
    <ContextMenuTrigger id="same_unique_identifier">
      <ContextMenu id="same_unique_identifier">
        <MenuItem data={{ foo: "bar" }} onClick={handleClick}>
          {children}
        </MenuItem>
      </ContextMenu>
    </ContextMenuTrigger>
  );
};

export default PageWrapper;
