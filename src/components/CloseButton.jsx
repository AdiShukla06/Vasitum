import React from 'react';

const CloseButton = ({ onClick }) => {
    return (
        <button
            className="md:hidden absolute top-0 right-0 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={onClick}
        >
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="CurrentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6l12 12" />
            </svg>
        </button>
    );
};

export default CloseButton;
