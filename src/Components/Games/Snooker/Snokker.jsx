import { Link } from "react-router-dom";

const Snokker = () => {
  const data = [
    {
      name: "Fluminense-PI v Fortaleza EC / 3/4/2024 11:59:00 PM",
      dot: true,
      tv: true,
      First: [13, 14],
      Cross: [15, 16],
      Second: [17, 18],
    },
    {
      name: "Visakha 2 - Ministry of Interior FA / 3/4/2024 2:15:00 PM",
      dot: true,
      tv: true,
      First: [7, 8],
      Cross: [9, 10],
      Second: [11, 12],
    },
    {
      name: "Fluminense-PI v Fortaleza EC / 3/4/2024 11:59:00 PM",
      dot: true,
      tv: true,
      First: [13, 14],
      Cross: [15, 16],
      Second: [17, 18],
    },
    {
      name: "Lula - Molino Viejo / 3/4/2024 2:30:00 PM",
      dot: true,
      tv: true,
      First: [19, 20],
      Cross: [21, 22],
      Second: [23, 24],
    },
    {
      name: "Kingston City FC - Werribee City FC / 3/4/2024 3:00:00 PM",
      dot: true,
      tv: true,
      First: [25, 26],
      Cross: [27, 28],
      Second: [29, 30],
    },
    {
      name: "PS Barito Putera v Bali Utd Pusam / 3/4/2024 1:00:00 PM",
      dot: true,
      tv: true,
      First: [1, 2],
      Cross: [3, 4],
      Second: [5, 6],
    },
    {
      name: "Visakha 2 - Ministry of Interior FA / 3/4/2024 2:15:00 PM",
      dot: true,
      tv: true,
      First: [7, 8],
      Cross: [9, 10],
      Second: [11, 12],
    },
    {
      name: "Fluminense-PI v Fortaleza EC / 3/4/2024 11:59:00 PM",
      dot: true,
      tv: true,
      First: [13, 14],
      Cross: [15, 16],
      Second: [17, 18],
    },
    {
      name: "Lula - Molino Viejo / 3/4/2024 2:30:00 PM",
      dot: true,
      tv: true,
      First: [19, 20],
      Cross: [21, 22],
      Second: [23, 24],
    },
    {
      name: "Kingston City FC - Werribee City FC / 3/4/2024 3:00:00 PM",
      dot: true,
      tv: true,
      First: [25, 26],
      Cross: [27, 28],
      Second: [29, 30],
    },
    {
      name: "PS Barito Putera v Bali Utd Pusam / 3/4/2024 1:00:00 PM",
      dot: true,
      tv: true,
      First: [1, 2],
      Cross: [3, 4],
      Second: [5, 6],
    },
    {
      name: "Visakha 2 - Ministry of Interior FA / 3/4/2024 2:15:00 PM",
      dot: true,
      tv: true,
      First: [7, 8],
      Cross: [9, 10],
      Second: [11, 12],
    },
    {
      name: "Fluminense-PI v Fortaleza EC / 3/4/2024 11:59:00 PM",
      dot: true,
      tv: true,
      First: [13, 14],
      Cross: [15, 16],
      Second: [17, 18],
    },
    {
      name: "Lula - Molino Viejo / 3/4/2024 2:30:00 PM",
      dot: true,
      tv: true,
      First: [19, 20],
      Cross: [21, 22],
      Second: [23, 24],
    },
    {
      name: "Kingston City FC - Werribee City FC / 3/4/2024 3:00:00 PM",
      dot: true,
      tv: true,
      First: [25, 26],
      Cross: [27, 28],
      Second: [29, 30],
    },
    {
      name: "PS Barito Putera v Bali Utd Pusam / 3/4/2024 1:00:00 PM",
      dot: true,
      tv: true,
      First: [1, 2],
      Cross: [3, 4],
      Second: [5, 6],
    },
    {
      name: "Visakha 2 - Ministry of Interior FA / 3/4/2024 2:15:00 PM",
      dot: true,
      tv: true,
      First: [7, 8],
      Cross: [9, 10],
      Second: [11, 12],
    },
    {
      name: "Fluminense-PI v Fortaleza EC / 3/4/2024 11:59:00 PM",
      dot: true,
      tv: true,
      First: [13, 14],
      Cross: [15, 16],
      Second: [17, 18],
    },
    {
      name: "Lula - Molino Viejo / 3/4/2024 2:30:00 PM",
      dot: true,
      tv: true,
      First: [19, 20],
      Cross: [21, 22],
      Second: [23, 24],
    },
    {
      name: "Kingston City FC - Werribee City FC / 3/4/2024 3:00:00 PM",
      dot: true,
      tv: true,
      First: [25, 26],
      Cross: [27, 28],
      Second: [29, 30],
    },
  ];

  return (
    <div className="w-full mx-auto  overflow-x-auto">
      <table className="min-w-full tablesmall overflow-scroll ">
        <thead>
          <tr className="">
            <th className="text-left py-2 px-4">Games</th>
            <th className=" py-2 px-4"></th>
            <th className=" py-2 px-4"></th>
            <th className=" py-2 px-4"></th>
            <th className=" py-2 px-4"></th>
            <th className=" py-2 px-4"></th>



            <th className=" py-2 px-4">1</th>
            <th className=" py-2 px-4">X</th>
            <th className=" py-2 px-4">2</th>
          </tr>
        </thead>
        <tbody>
          {data.map((match, index) => (
            <tr key={index} className={index % 2 === 0 ? '' : ''}>
              <td className="text-sm  text-gray-800 hover:underline  ">
                <Link to={`/GameInfo/${encodeURIComponent(match.name)}`}>{match.name}</Link>
              </td>
              <td className="text-sm text-gray-800  ">{match.dot && <i className="ri-circle-fill text-green-500"></i>}</td>
              <td className="text-sm text-gray-800  ">{match.tv && <i className="ri-tv-2-line text-blue-500"></i>}</td>
              <td className="text-sm text-gray-800  "><img src="https://i.ibb.co/pfxvVhv/image.png" className='w-5' alt="" /></td>
              <td className="text-sm text-gray-800  "><img src="https://i.ibb.co/3zpjfz0/image.png" className='w-5' alt="" /></td>
              <td className="text-sm text-gray-800  "><img src="https://i.ibb.co/R4hVk5k/image.png" className='w-5' alt="" /></td>



              <td className="text-sm text-gray-800  ">
                <div className="flex w-full  text-center items-center justify-between">
                  {match.First.map((number, idx) => (
                    <div
                      key={idx}
                      className={`text-center w-1/2 px-3 py-1 text-[#273A47] ${idx === 0 ? 'bg1' : 'bg2'}`}


                    >
                      {number}
                    </div>
                  ))}
                </div>
              </td>
              <td className="text-sm  text-gray-800  ">
                <div className="flex w-full  text-center items-center justify-between">
                  {match.Cross.map((number, idx) => (
                    <div
                      key={idx}
                      className={`text-center w-1/2 px-3 py-1 text-[#273A47] ${idx === 0 ? 'bg1' : 'bg2'}`}

                    >
                      {number}
                    </div>
                  ))}
                </div>
              </td>
              <td className="text-sm text-gray-800  ">
                <div className="flex w-full  text-center items-center justify-between">
                  {match.Second.map((number, idx) => (
                    <div
                      key={idx}
                      className={`text-center w-1/2 px-3 py-1 text-[#273A47] ${idx === 0 ? 'bg1' : 'bg2'}`}

                    >
                      {number}
                    </div>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Snokker