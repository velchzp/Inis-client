import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container } from "@mui/material";
import style from "./FAQ.css";
export const FAQ = () => {
  return (
    <div className="faq_wrapper">
      <Container maxWidth="md" className="faq_container">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="question1"
          >
            <Typography className="question">
              Lorem ipsum dolor sit amet elit?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sagittis orci a scelerisque purus semper eget duis at tellus. Non
              odio euismod lacinia at. Ut aliquam purus sit amet. Consequat
              interdum varius sit amet mattis vulputate. Tristique nulla aliquet
              enim tortor. Tortor condimentum lacinia quis vel eros donec ac
              odio. Cursus turpis massa tincidunt dui ut ornare lectus. Tellus
              at urna condimentum mattis pellentesque id nibh tortor id. Cras
              sed felis eget velit. Dignissim convallis aenean et tortor at
              risus viverra adipiscing. Arcu non odio euismod lacinia at quis.
              Nibh tellus molestie nunc non blandit massa. Consectetur a erat
              nam at lectus.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="question2"
          >
            <Typography className="question">
              Lorem ipsum dolor sit amet elit?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sagittis orci a scelerisque purus semper eget duis at tellus. Non
              odio euismod lacinia at. Ut aliquam purus sit amet. Consequat
              interdum varius sit amet mattis vulputate. Tristique nulla aliquet
              enim tortor. Tortor condimentum lacinia quis vel eros donec ac
              odio. Cursus turpis massa tincidunt dui ut ornare lectus. Tellus
              at urna condimentum mattis pellentesque id nibh tortor id. Cras
              sed felis eget velit. Dignissim convallis aenean et tortor at
              risus viverra adipiscing. Arcu non odio euismod lacinia at quis.
              Nibh tellus molestie nunc non blandit massa. Consectetur a erat
              nam at lectus.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="question3"
          >
            <Typography className="question">
              Lorem ipsum dolor sit amet elit?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sagittis orci a scelerisque purus semper eget duis at tellus. Non
              odio euismod lacinia at. Ut aliquam purus sit amet. Consequat
              interdum varius sit amet mattis vulputate. Tristique nulla aliquet
              enim tortor. Tortor condimentum lacinia quis vel eros donec ac
              odio. Cursus turpis massa tincidunt dui ut ornare lectus. Tellus
              at urna condimentum mattis pellentesque id nibh tortor id. Cras
              sed felis eget velit. Dignissim convallis aenean et tortor at
              risus viverra adipiscing. Arcu non odio euismod lacinia at quis.
              Nibh tellus molestie nunc non blandit massa. Consectetur a erat
              nam at lectus.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="question4"
          >
            <Typography className="question">
              Lorem ipsum dolor sit amet elit?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sagittis orci a scelerisque purus semper eget duis at tellus. Non
              odio euismod lacinia at. Ut aliquam purus sit amet. Consequat
              interdum varius sit amet mattis vulputate. Tristique nulla aliquet
              enim tortor. Tortor condimentum lacinia quis vel eros donec ac
              odio. Cursus turpis massa tincidunt dui ut ornare lectus. Tellus
              at urna condimentum mattis pellentesque id nibh tortor id. Cras
              sed felis eget velit. Dignissim convallis aenean et tortor at
              risus viverra adipiscing. Arcu non odio euismod lacinia at quis.
              Nibh tellus molestie nunc non blandit massa. Consectetur a erat
              nam at lectus.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
};
