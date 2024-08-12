import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Faq = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      {/* <section>
        <div className="container mx-auto">
          <h2 className="faq__title h2 text-center mb-[50px]">
            We've Got Answer
          </h2>
          <div className="max-w-5xl">
            <div className="faq__item px-[30px] pt-7 pb-4 border-b cursor-pointer select-none">
              <div className="flex items-center justify-between mb-[10px]">
                <h4 className="h4">Why to Belive In Insove</h4>
                <div className="faq__btn">
                  <RiArrowDownLine size={28} />
                </div>
              </div>
              <div className="">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                  modi quasi quisquam itaque veniam, sit officiis quaerat soluta
                  nemo et.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="faq__item px-[30px] pt-7 pb-4 border-b cursor-pointer select-none">
              <div className="flex items-center justify-between mb-[10px]">
                <h4 className="h4">Why to Belive In Insove</h4>
                <div className="faq__btn">
                  <RiArrowDownLine size={28} />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="faq__item px-[30px] pt-7 pb-4 border-b cursor-pointer select-none">
              <div className="flex items-center justify-between mb-[10px]">
                <h4 className="h4">Why to Belive In Insove</h4>
                <div className="faq__btn">
                  <RiArrowDownLine size={28} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <h2 className="text-[50px] font-bold text-center mb-[50px]">
        We've got Answers
      </h2>
      <div className=" mx-auto max-w-4xl ">
        <Accordion
          defaultExpanded
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>
              <h2 className="text-[40px] font-bold ">
                Why To Belive With Insove
              </h2>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>
              <h2 className="text-[40px] font-bold">Will We Get Healtcure</h2>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography>
              <h2 className="text-[40px] font-bold">What Is The Cost</h2>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
