import React, { useState } from "react";
import Collapse from "@mui/material/Collapse";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

const AdvantageAirButtonPage = () => {
  const [expend, setExpend] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="air-page">
      <div className="air-banner-wrapper">
        <ArrowDropDownIcon
          className={`air-button ${expend ? "open" : ""}`}
          onClick={() => setExpend(!expend)}
        />

        <Collapse in={expend}>
          <div className="air-read-more-content">Read more content</div>
        </Collapse>
      </div>
      <hr />
      <div className="air-banner-wrapper">
        <DensityMediumIcon
          id="basic-button"
          className="air-icon"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Dashboard
        </DensityMediumIcon>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
};
export default AdvantageAirButtonPage;
