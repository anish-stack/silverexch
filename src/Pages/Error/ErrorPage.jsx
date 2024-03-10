import errorImage from './13315300_5203299.jpg';

const ErrorPage = () => {
  return (
    <div className="flex w-ful items-center justify-center h-screen bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong</h1>
        <img src={errorImage} alt="Error" className="w-full lg:max-w-2xl mb-4" />
        <p className="text-lg">We apologize for the inconvenience. Please try again later.</p>
      </div>
    </div>
  );
}

export default ErrorPage;
