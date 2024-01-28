import React from "react";
import { Typography } from "@mui/material";
import { ForkLeft } from "@mui/icons-material";

export const Rules = () => {
  return (
    <div className="rules_wrapper">
      <Typography variant="h2" style={{ textAlign: "center", color: "white" }}>
        Rules
      </Typography>
      <Typography style={{ textAlign: "center", color: "white" }}>
        "Inis" is a strategic board game set in the world of mythological
        Ireland. Players compete for control of territories, building
        settlements and using unique card abilities. The dynamics of the game
        change with the development of strategies and interactions between
        players, making each game a unique experience. The game "Inis" is
        designed for 2 to 4 players and assumes about 60 minutes of gameplay.
      </Typography>
      <div style={{ display: "flex" }}>
        <img
          src={process.env.PUBLIC_URL + "/inis_real.png"}
          alt="Logo"
          className="main_img"
          style={{ height: 300, marginLeft: 0, marginRight: 20, marginTop: 10 }}
        />
        <Typography
          style={{ textAlign: "center", color: "white", marginTop: 55 }}
        >
          The drawing shows all available elements in the board game "Inis",
          namely: 16 terrain tiles, 48 clans (12 in four different colors), 18
          buildings (9 citadels, 9 places of worship), 67 cards (17 action
          cards, 16 advantage cards, 30 epic cards, 4 help cards), and. 17
          tokens and markers (1 gate marker, 1 crow flock token, 4 pretender
          tokens, 10 feat tokens, 1 celebration marker). Noticeable is that this
          is a significant number of diverse elements, however, it will not will
          describe each of them in detail here, as it is not necessary to
          understand the basic mechanics of gameplay.
        </Typography>
      </div>
      <Typography style={{ color: "white" }}>
        Players compete for the title of Grand King of new lands. In each round
        it is judged whether any player has been selected to fulfill this role.
        To earn this title, a player must fulfill as many of the following as
        possible victory conditions:
      </Typography>

      <ul style={{ color: "white" }}>
        <li>Be present in at least six Territories.</li>
        <li>
          To be the chief of Territories inhabited by at least six foreign
          Clans.
        </li>
        <li>
          Be present in Areas with a total of at least six Places of Worship.
        </li>
      </ul>

      <Typography paragraph style={{ color: "white" }}>
        Actions in the game "Inis", such as placing a new Clan on the board,
        movement or the erection of a new Place of Worship, can only be
        implemented by playing the appropriate card.
      </Typography>

      <Typography paragraph style={{ color: "white" }}>
        A round in the game consists of two phases. The first is the Assembly
        phase, During which players check whether a winner has emerged, choose a
        chiefs and draw Action cards. This is followed by the Seasons phase Year
        phase, in which players play cards from their hand.
      </Typography>
      <div style={{ display: "flex" }}>
        <img
          src={process.env.PUBLIC_URL + "/card_real.jpg"}
          alt="Logo"
          className="main_img"
          style={{
            height: 300,
            marginLeft: 150,
            marginRight: 20,
            marginTop: 10,
          }}
        />
        <Typography
          style={{ textAlign: "center", color: "white", marginTop: 95 }}
        >
          Each card in the game has a category (Action, Advantage, Epic), an
          icon indicating the moment of use (Season, Triskelion), and the effect
          of playing it. Players keep their cards secret from other players,
          with the number of cards they hold and their category (colors of the
          reverses) being public. After playing the cards, players put them back
          in the discard pile. Figure 8.2 shows an example card, where the red
          color indicates that it is an "Epic" card, and the card has a unique
          effect description.
        </Typography>
      </div>
      <Typography paragraph style={{ color: "white" }}>
        In the preparation stage of the game, several key activities should be
        carried out:
      </Typography>
      <ol style={{ color: "white" }}>
        <li>
          <Typography paragraph>
            Get as many top terrain tiles as there are players, then lay them,
            joined together, in the center of the game area. Each terrain tile
            must be adjacent to at least two others.
          </Typography>
        </li>

        <li>
          <Typography paragraph>
            Pass the Gate marker to a randomly selected player.
          </Typography>
        </li>

        <li>
          <Typography paragraph>
            The player with the Gate chooses one of the lined areas for the
            Capital area and places a Capital figure and one Place of Worship on
            it.
          </Typography>
        </li>

        <li>
          <Typography paragraph>
            The player with the Gate tosses the Flock of Crows token as if it
            were a coin. The side that falls out determines the direction of
            consideration of the current round.
          </Typography>
        </li>

        <li>
          <Typography paragraph>
            Starting from the player with the Gate and following the indication
            of the token of the Flock of Crows, each player places one of his
            Clan on the board. This process is repeated until each player places
            on the board each two of their Clans.
          </Typography>
        </li>
      </ol>
      <img
        src={process.env.PUBLIC_URL + "/proces_real.jpg"}
        alt="Logo"
        className="main_img"
        style={{ height: 300, marginLeft: 300, marginRight: 20, marginTop: 10 }}
      />

      <Typography variant="h6" gutterBottom style={{ color: "white" }}>
        1.1 Assembly Phase:
      </Typography>

      <ul style={{ color: "white" }}>
        <li>
          <Typography paragraph>
            One player is chosen as the Chieftain.
          </Typography>
        </li>

        <li>
          <Typography paragraph>Check if a winner has emerged.</Typography>
        </li>

        <li>
          <Typography paragraph>Establish the order of play.</Typography>
        </li>

        <li>
          <Typography paragraph>Chieftains choose Advantage cards.</Typography>
        </li>

        <li>
          <Typography paragraph>
            Players draw Action cards. Season Phase: the core of the gameplay.
            During this time, players perform various actions by playing cards
            from their hand.
          </Typography>
        </li>
      </ul>

      <Typography variant="h6" gutterBottom style={{ color: "white" }}>
        1.2 Season Phase:
      </Typography>

      <Typography paragraph style={{ color: "white" }}>
        The main part of the gameplay where players perform various actions by
        playing cards from their hand.
      </Typography>

      <Typography paragraph style={{ color: "white" }}>
        In the Assembly Phase, a key step is the unique card-drawing process by
        players, consisting of several steps:
      </Typography>

      <ul style={{ color: "white" }}>
        <li>
          <Typography paragraph>
            Each player examines their four Action cards, chooses one to keep,
            and passes the remaining three to the neighbor on their left or
            right, according to the direction indicated on the Raven Banner
            token.
          </Typography>
        </li>

        <li>
          <Typography paragraph>
            Players then add the kept card to the three received from their
            neighbor. They review all four Action cards, choose two to keep, and
            pass the other two to the next player.
          </Typography>
        </li>

        <li>
          <Typography paragraph>
            Finally, players add the two kept cards to the two received. They
            review all four Action cards, choose three to keep, and pass one to
            the next player.
          </Typography>
        </li>
      </ul>
      <Typography style={{ color: "white" }}>
        Conflict mechanics are another important element of the game. Conflict
        occurs when one or more Clans move to an Area where the opponent's Clans
        are already present. In addition, some cards can trigger a conflict
        without moving Clans. A Clan that is "placed" on a Terrain (e.g., thanks
        to the "New Clans" Action card) does not initiate a conflict. Conflict
        resolution takes place in two stages: Citadels and Settlement. In the
        Citadels stage, Clans have the opportunity to take refuge in citadels in
        the conflict area. A Clan placed in a Citadel is protected and does not
        participate in the conflict. Once the conflict is resolved, the clans
        leave the citadels. Then, starting with the provocateur and following
        the order of the round, each player holding at least one unfortified
        Clan performs one maneuver. Players take turns performing maneuvers
        until the conflict is over. This was the main part of the Inis game
        rules. You can delve into the details by going to the board game's rules
        page [13].
      </Typography>
    </div>
  );
};
