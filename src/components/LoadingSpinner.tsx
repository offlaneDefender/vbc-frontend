// Loading spinner component that contains an svg with the spin animation

export const LoadingSpinner = () => {
    return (
        <div className="flex w-full h-full items-center justify-center absolute bg-opacity-75 bg-gray-50">
            <svg className="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
            </svg>
            <span className="text-xl font-bold text-gray-800">Loading...</span>
        </div>
    );
};