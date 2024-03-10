import video from './dd.mp4';
import { useParams } from 'react-router-dom';

const GamePagess = () => {
  const { name } = useParams();

  return (
    <div className='w-full min-h-screen flex flex-col md:flex-row justify-between'>
      {/* Main Content */}
      <div className='w-full md:w-4/5  p-4'>
        {/* Screen */}
        <div className='screen bg-[#04A1A6] flex items-center justify-between text-white p-4'>
          <h2 className='text-2xl'>{name}</h2>
          <h2 className='text-2xl'>Round Id: 100125361</h2>
        </div>
        {/* Video Player */}
        <div className='main-screen'>
          <video className='w-full' controls loop autoPlay={true}>
            <source src={video} type='video/mp4' />
          </video>
        </div>
        {/* Runs Table */}
        <div className='Runs-table mt-4 p-4 bg-white'>
          <h2 className='text-xl font-semibold mb-2'>Runs Table</h2>
          <table className='w-full text-left border'>
            <thead>
              <tr className='bg-gray-200'>
                <th className='border p-2'>Player</th>
                <th className='border p-2'>Runs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border p-2'>Player 1</td>
                <td className='border p-2'>25</td>
              </tr>
              <tr>
                <td className='border p-2'>Player 2</td>
                <td className='border p-2'>30</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sidebar */}
      <div className='w-full md:w-1/5  p-4'>
        {/* My Bet */}
        <div className='my-bet bg-white p-4 mb-4'>
          <h2 className='text-xl font-semibold mb-2'>My Bet</h2>
          <p>Player 1 - Runs: 25</p>
          <p>Player 2 - Runs: 30</p>
          {/* Add more bet details as needed */}
        </div>
        {/* Past Bets */}
        <div className='past-bet bg-white p-4'>
          <h2 className='text-xl font-semibold mb-2'>Past Bets</h2>
          <p>Player 1 - Runs: 20</p>
          <p>Player 2 - Runs: 35</p>
          {/* Add more past bet details as needed */}
        </div>
      </div>
    </div>
  );
};

export default GamePagess;
