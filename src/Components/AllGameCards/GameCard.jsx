import { Link } from "react-router-dom";

const GameCard = () => {
    const gamesData = [
        { name: 'Ball By Ball', image: 'https://dzm0kbaskt4pv.cloudfront.net/v16/static/front/img/casinoicons/img/ballbyball.jpg' },
        { name: 'SuperOver', image: 'https://dzm0kbaskt4pv.cloudfront.net/v16/static/front/img/casinoicons/img/superover.jpg' },
        { name: 'Race20', image: 'https://dzm0kbaskt4pv.cloudfront.net/v16/static/front/img/casinoicons/img/race20.png' },
        { name: 'Queen', image: 'https://dzm0kbaskt4pv.cloudfront.net/v16/static/front/img/casinoicons/img/queen.jpg' },
        { name: 'Cricketv3', image: 'https://dzm0kbaskt4pv.cloudfront.net/v16/static/front/img/casinoicons/img/cricketv3.jpg' },
        { name: 'Andar Bahar2', image: 'https://dzm0kbaskt4pv.cloudfront.net/v16/static/front/img/casinoicons/img/andar-bahar2.jpg' },
        { name: 'DT202', image: 'https://dzm0kbaskt4pv.cloudfront.net/v16/static/front/img/casinoicons/img/dt202.jpg' },
        { name: 'Baccarat2', image: 'https://dzm0kbaskt4pv.cloudfront.net/v16/static/front/img/casinoicons/img/baccarat2.jpg' },
        { name: 'Lucky7EU', image: 'https://dzm0kbaskt4pv.cloudfront.net/v16/static/front/img/casinoicons/img/lucky7eu.jpg' },
        { name: 'Teencasino', image: 'https://dzm0kbaskt4pv.cloudfront.net/v16/static/front/img/casinoicons/img/teencasino.jpg' },
        { name: 'CC-20', image: 'https://dzm0kbaskt4pv.cloudfront.net/v16/static/front/img/casinoicons/img/cc-20.jpg' },
        { name: 'CMeter', image: 'https://dzm0kbaskt4pv.cloudfront.net/v16/static/front/img/casinoicons/img/cmeter.jpg' },
        { name: 'War', image: 'https://dzm0kbaskt4pv.cloudfront.net/v16/static/front/img/casinoicons/img/war.jpg' },
        { name: 'TeenPatti', image: 'https://dzm0kbaskt4pv.cloudfront.net/v16/static/front/img/casinoicons/img/teenpatti.jpg' },
        { name: 'Poker', image: 'https://dzm0kbaskt4pv.cloudfront.net/v16/static/front/img/casinoicons/img/poker.jpg' },
        { name: 'Andar Bahar', image: 'https://dzm0kbaskt4pv.cloudfront.net/v16/static/front/img/casinoicons/img/andar-bahar.jpg' },
        { name: 'Ball By Ball', image: 'https://dzm0kbaskt4pv.cloudfront.net/v16/static/front/img/casinoicons/img/ballbyball.jpg' },
        { name: 'SuperOver', image: 'https://dzm0kbaskt4pv.cloudfront.net/v16/static/front/img/casinoicons/img/superover.jpg' },
        { name: 'Race20', image: 'https://dzm0kbaskt4pv.cloudfront.net/v16/static/front/img/casinoicons/img/race20.png' },
        { name: 'Queen', image: 'https://dzm0kbaskt4pv.cloudfront.net/v16/static/front/img/casinoicons/img/queen.jpg' },
      ];
      
  return (
    <div className="container mx-auto p-4">
    {/* <h1 className="text-4xl font-bold mb-8 text-center text-[#04A1A6]">List of Games</h1> */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
      {gamesData.map((game, index) => (
        <Link to={`/GamesPages/${game.name}`} key={index} className="bg-white rounded-lg shadow-md  transform ">
          <img src={game.image} alt={game.name} className="w-full relative h-48 lg:object-cover rounded-md " />
          <div className="bg-[#04A1A6] absolute w-full bottom-0">
          <p className="text-lg text-center font-bold text-[#000]">{game.name}</p>
          </div>
          {/* Additional details or actions can be added here */}
        </Link>
      ))}
    </div>
  </div>
  
  )
}

export default GameCard