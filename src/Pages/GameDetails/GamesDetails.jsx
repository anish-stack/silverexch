
const GamesDetails = () => {
  const matchData = {
    teams: ['Genclerbirligi', 'Sanliurfaspor'],
    date: '3/4/2024 4:00:00 PM',
    markets: [
      {
        name: 'MATCH_ODDS',
        options: [
          { team: 'Genclerbirligi', back: 5.1, lay: 5.2 },
          { team: 'Sanliurfaspor', back: 1.83, lay: 1.84 },
          { team: 'The Draw', back: 3.5, lay: 3.55 },
        ],
      },
      {
        name: 'OVER_UNDER_15',
        options: [
          { label: 'Under 1.5 Goals', back: 7.6, lay: 7.8 },
          { label: 'Over 1.5 Goals', back: 1.11, lay: 1.12 },
        ],
      },
      {
        name: 'OVER_UNDER_25',
        options: [
          { label: 'Under 2.5 Goals', back: 2.52, lay: 2.54 },
          { label: 'Over 2.5 Goals', back: 1.6, lay: 1.61 },
        ],
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">{matchData.teams.join(' vs ')}</h1>
      <p className="text-sm mb-4 text-center">{matchData.date}</p>

      {matchData.markets.map((market, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-lg font-bold mb-2">{market.name}</h2>
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-800 text-left text-white">
                <th className="py-2 px-4">Option</th>
                <th className="py-2 px-4">Back</th>
                <th className="py-2 px-4">Lay</th>
              </tr>
            </thead>
            <tbody>
              {market.options.map((option, optionIndex) => (
                <tr key={optionIndex} className={optionIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="py-2 px-4">{option.team || option.label}</td>
                  <td className="py-2 px-4">{option.back}</td>
                  <td className="py-2 px-4">{option.lay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default GamesDetails;
