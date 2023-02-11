import Link from "next/link";

function Base() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-5xl font-bold text-gray-700">Welcome to NextJS + Tailwind</h1>
      <p className="text-xl text-gray-700">A fast and modern React framework for building amazing applications</p>
      <Link className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded mt-4" href="/intro">
        Introduction Page
      </Link>
    </div>
  )
};

export { Base };
