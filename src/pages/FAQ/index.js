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
              How is Inis pronounced?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Inis is pronounced "EE-nish."</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="question2"
          >
            <Typography className="question">
              How many players can play Inis?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Inis is designed for 2 to 4 players.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="question3"
          >
            <Typography className="question">
              What is the objective of Inis?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The goal of Inis is to achieve a victory condition before your
              opponents. There are various ways to win, such as becoming the
              chieftain of at least six territories or being the only surviving
              leader.
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
              How is the game set up?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The game board is assembled with tiles, and each player receives a
              set of clans, figures, and action cards. Players then choose a
              starting territory, and the game begins.
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
              How does the Seasons phase work?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              In each round, players go through three phases: Season, Action,
              and Epic Tale. During the Seasons phase, players take turns
              choosing a season card that determines the actions available for
              the round.
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
              Can players form alliances in Inis?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              There is no formal alliance system in Inis, but players can
              negotiate and make deals during the game. Keep in mind that
              alliances can be broken, and the game encourages strategic
              interactions.
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
              How do battles work in Inis?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Battles occur when two or more clans occupy the same territory.
              Players involved in a battle secretly select action cards, and the
              results depend on the cards played. The winner gains control of
              the territory.
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
              What happens during the Epic Tale phase?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The Epic Tale phase allows players to achieve victory conditions,
              play epic tale cards, and potentially win the game. It is a
              crucial phase where players finalize their strategies.
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
              Can players lose their figures or clans during the game?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, figures and clans can be eliminated through battles and
              certain action cards. However, losing figures does not necessarily
              mean a player is out of the game, as they can still continue with
              remaining figures.
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
              How long does a typical game of Inis last?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The duration of a game can vary, but a typical game of Inis lasts
              around 60 to 90 minutes, depending on the number of players and
              their familiarity with the rules.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
};
