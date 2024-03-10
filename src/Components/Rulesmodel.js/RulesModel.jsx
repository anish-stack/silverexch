import React, { useState } from 'react'
import Modal from 'react-modal';

Modal.setAppElement('#root');
const RulesModel = () => {
    const [selectedGame, setSelectedGame] = useState(null);

    const openModal = (game) => {
        setSelectedGame(game);
      };
    
      const closeModal = () => {
        setSelectedGame(null);
      };
      const sportsData = {
        'Football': {
          image: 'https://source.unsplash.com/740x480/?football',
          rules: [
            'The game is played between two teams, each consisting of 11 players.',
            'The objective is to score goals by getting the ball into the opponent’s net.',
            'Matches are typically divided into two halves, each lasting 45 minutes.',
          ],
        },
        'Tennis': {
          image: 'https://source.unsplash.com/1060x720/?tennis',
          rules: [
            'Tennis is played between two players (singles) or two teams of two players each (doubles).',
            'The game is played on a rectangular court with a net across the center.',
            'Points are scored when the opponent fails to return the ball within the defined rules.',
          ],
        },
        'Cricket': {
          image: 'https://source.unsplash.com/800x600/?cricket',
          rules: [
            'Cricket is played between two teams, each consisting of 11 players.',
            'The team batting tries to score runs by hitting the ball and running between wickets.',
            'The team bowling tries to dismiss the batsmen and restrict the runs.',
          ],
        },
        'Esoccer': {
          image: 'https://source.unsplash.com/900x600/?esoccer',
          rules: [
            'Esoccer refers to electronic or virtual soccer, played in the form of a video game.',
            'It follows traditional soccer rules but is simulated digitally.',
            'Esoccer tournaments often involve professional gamers competing against each other.',
          ],
        },
        'Horse Racing': {
          image: 'https://source.unsplash.com/1000x600/?horseracing',
          rules: [
            'Horse racing involves horses competing in races, typically around a track.',
            'Bets are placed on the outcome of the race, predicting which horse will win.',
            'Races can vary in distance, and factors like jockeys and track conditions impact outcomes.',
          ],
        },
        'Table Tennis': {
          image: 'https://source.unsplash.com/900x600/?tabletennis',
          rules: [
            'Table tennis, or ping pong, is played with two or four players hitting a lightweight ball back and forth.',
            'Points are scored when an opponent fails to return the ball within the defined rules.',
            'The game is played on a rectangular table divided by a net.',
          ],
        },
        'Greyhound Racing': {
          image: 'https://source.unsplash.com/1000x700/?greyhoundracing',
          rules: [
            'Greyhound racing involves dogs racing around a track.',
            'Bets are placed on the dog that is predicted to finish first.',
            'Factors like the dog\'s past performance, age, and track conditions influence betting decisions.',
          ],
        },
        'Basketball': {
          image: 'https://source.unsplash.com/1000x700/?basketball',
          rules: [
            'Basketball is played between two teams, each consisting of five players.',
            'The objective is to score points by shooting the ball through the opponent’s basket.',
            'Matches are divided into quarters, each lasting a specified duration.',
          ],
        },
        'Volleyball': {
          image: 'https://source.unsplash.com/1000x700/?volleyball',
          rules: [
            'Volleyball is played between two teams, each consisting of six players.',
            'Teams score points by sending the ball over the net and into the opponent’s court.',
            'Matches are typically played in sets, and the team with the most sets won is the overall winner.',
          ],
        },
        'Kabaddi': {
          image: 'https://source.unsplash.com/900x600/?kabaddi',
          rules: [
            'Kabaddi is played between two teams, each consisting of seven players.',
            'The game involves attackers trying to tag opponents and return to their half of the court.',
            'Defenders aim to prevent attackers from returning and score points by tagging them.',
          ],
        },
        'Badminton': {
          image: 'https://source.unsplash.com/900x600/?badminton',
          rules: [
            'Badminton is played with either two players (singles) or four players (doubles).',
            'The game involves hitting a shuttlecock over a net with the aim of landing it in the opponent’s court.',
            'Points are scored when the opponent fails to return the shuttlecock within the defined rules.',
          ],
        },
        'AmericanFootball': {
          image: 'https://source.unsplash.com/1000x700/?americanfootball',
          rules: [
            'American football is played between two teams, each consisting of 11 players.',
            'The objective is to score points by carrying or passing the ball into the opponent’s end zone.',
            'The game is played in four quarters, and each team has offense and defense roles.',
          ],
        },
        'Futsal': {
          image: 'https://source.unsplash.com/900x600/?futsal',
          rules: [
            'Futsal is a variant of soccer played indoors with five players on each team.',
            'The game involves a smaller and harder ball than traditional soccer.',
            'Matches are played in two halves, each lasting a specified duration.',
          ],
        },
        'E Games': {
          image: 'https://source.unsplash.com/900x600/?egames',
          rules: [
            'E Games refer to electronic or video games played competitively.',
            'Players or teams compete in various gaming titles, such as first-person shooters, strategy games, etc.',
            'The rules depend on the specific game being played in the tournament.',
          ],
        },
        'Snooker': {
          image: 'https://source.unsplash.com/1000x600/?snooker',
          rules: [
            'Snooker is played on a rectangular table covered with a green cloth.',
            'Players use a cue to pot colored balls into pockets on the table.',
            'Points are scored based on the colors of the balls potted.',
          ],
        },
      };
      
      
      return (
        <div className="bg-gray-200 p-8 min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-6">Sports Rules</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 relative">
            {Object.keys(sportsData).map((sport, index) => (
              <div
                key={index}
                onClick={() => openModal(sportsData[sport])}
                className="p-4 bg-white rounded-lg shadow-md max-w-2xl transition-transform transform hover:scale-105 cursor-pointer"
              >
                {/* Set maximum width for the card */}
                <img
                  src={sportsData[sport].image} // Replace with the actual image URL
                  alt={`Image for ${sport}`}
                  className="mb-4 max-w-full h-auto rounded-lg"
                />
                <button className="text-blue-500 hover:underline text-lg">{sport}</button>
              </div>
            ))}
          </div>
    
          <Modal
            isOpen={selectedGame !== null}
            onRequestClose={closeModal}
            className="modal z-30 bg-white w-full sm:w-96 p-6 rounded-md shadow-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            {selectedGame && (
              <div>
                <h2 className="text-3xl font-semibold mb-4">{selectedGame.name}</h2>
                <img
                  src={selectedGame.image} // Replace with the actual image URL
                  alt={`Image for ${selectedGame.name}`}
                  className="mb-4 max-w-full h-auto rounded-lg"
                />
                <ul className="list-disc pl-6">
                  {selectedGame.rules.map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="mb-2 text-lg">
                      {rule}
                    </li>
                  ))}
                </ul>
                <button onClick={closeModal} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
                  Close
                </button>
              </div>
            )}
          </Modal>
        </div>
      );
    };
export default RulesModel