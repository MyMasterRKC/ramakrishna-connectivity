
import { Gamepad2 } from "lucide-react";

const GamesHeader = () => {
  return (
    <div className="mb-16">
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
          <Gamepad2 className="h-8 w-8 text-orange-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">Holy Trinity Games</h1>
        <p className="text-lg text-gray-600 max-w-2xl text-center">
          Engage with the teachings of Sri Ramakrishna through interactive games that make learning both fun and meaningful.
        </p>
      </div>
      
      <div className="border-b border-gray-200 mb-8"></div>
    </div>
  );
};

export default GamesHeader;
