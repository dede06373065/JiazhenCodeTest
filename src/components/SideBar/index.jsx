import React from "react";
import { NavLink } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const SideBar = () => {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="side-bar">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div>Advantage Air</div>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>
              <NavLink to="/advantage-air/button">Collapse Button</NavLink>
            </li>
            <li>
              <NavLink to="/advantage-air/grid">Grid</NavLink>
            </li>
            <li>
              <NavLink to="/advantage-air/carousal">Carousal</NavLink>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div>Hyundai Innovation</div>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>
              <NavLink to="/hyundai/video">Video</NavLink>
            </li>
            <li>
              <NavLink to="/hyundai/card">Card</NavLink>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div>Flight Centre</div>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>
              <NavLink to="/flight-centre/button">Button</NavLink>
            </li>
            <li>
              <NavLink to="/flight-centre/slide">Slide</NavLink>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div>UQ - MBA</div>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>
              <NavLink to="/uq/background">Background</NavLink>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div>CommBank</div>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>
              <NavLink to="/commbank/button">Button</NavLink>
            </li>
            <li>
              <NavLink to="/commbank/background">Background</NavLink>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div>Responsive</div>
        </AccordionSummary>
        <AccordionDetails>
          <NavLink to="/responsive">Responsive</NavLink>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SideBar;
