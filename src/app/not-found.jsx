import Link from "next/link";

const NotFound = () => {
    return (
        <div className="bg-black text-white text-center py-32 px-4">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-gray-400 mb-8">This page does not exist</p>
            <Link
                href="/"
                className="bg-[#ccff00] text-black font-semibold px-6 py-3 rounded-full"
            >
                Go back home
            </Link>
        </div>
    );
};

export default NotFound;
