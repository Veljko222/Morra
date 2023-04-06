Morra game is played by two players.
Players show a number of fingers each (1-5) and guess each the total number of fingers that are shown by both players together (2-10). 
The objective is to guess correctly, in this project you win if you guessed correctly and your opponent fails, if none or both of the players guess correctly it’s a draw and new round starts immediately until we have a winner. 
Previously to playing, players agree on a wager and the winner takes all.

To install the game one needs to have reach, ubuntu, docker desktop and Visual Studio Code alrady installed. 
Create a folder with reach file in it and clone this repository.
Open the folder in VS Code and start two ubuntu terminals.
Execute export REACH_CONNECTOR_MODE=ALGO in both terminals.
Execute ./reach run in both terminals.
Follow the ingame instructions.

How to play:
IMPORTANT NOTE one of the players needs to play as Anna and other as Jack.
Both players need to answer with 'y' when asked to create an accont.
Anna player needs to send contract string, example: {"type":"BigNumber","hex":"0x03"}, to the Jack player who will need to paste it in his terminal when prompted to do so.
From there just play the game as prompts tell you what to input.
