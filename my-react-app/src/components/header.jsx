import React from 'react';

function Header() {
    return (
        <div class="flex flex-col flex-1">
            <header className="bg-blue-300 p-4 w-full">
                <div className="flex justify-end">
                    <button className="bg-blue-500 text-white px-4 py-2">LOGOUT</button>
                </div>
            </header>
        </div>
    );
}

export default Header;
