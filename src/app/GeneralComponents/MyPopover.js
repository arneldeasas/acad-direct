import { Popover } from "@mui/material";
import { useState } from "react";
const MyPopover = ({anchorElement,displayElement,className}) => {
   const [anchorEl, setAnchorEl] = useState(null);

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };
   return (
      <div className={className}>
        <div onClick={handleClick}>
            {anchorElement}
        </div>
         <Popover
            open={anchorEl}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
               vertical: "bottom",
               horizontal: "left",
            }}
         >
            <div onClick={handleClose}>
                {displayElement}
            </div>
         </Popover>
      </div>
   );
};

export default MyPopover;
