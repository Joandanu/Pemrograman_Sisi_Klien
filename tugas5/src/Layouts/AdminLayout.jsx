import React from "react";

function Sider() {
    return (
        <div class="flex min-h-screen flex-row">
            <aside class="bg-indigo-900 text-white">
                <div class="p-4">
                    <h2 class="font-bold">Aplikasi SiAKAD</h2>
                    <nav class="mt-4 ml-4">
                        <ul>
                            <li><a class='text-white' href="#">Dashboard</a></li>
                            <li><a class='text-white' href="#">Mahasiswa</a></li>
                            <li><a class='text-white' href="#">Setting</a></li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </div>
    );
};

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
};

function Main({ tableData }) {
    return (
        <main className="flex flex-col flex-1">
            <div className="flex justify-between p-4">
                <h2 className="font-bold text-black">List Mahasiswa</h2>
                <button className="bg-green-500 px-4 py-2">Tambah Mahasiswa</button>
            </div>
            <div className="bg-white p-4 flex-grow">
                <div className="bg-white p-6 rounded-lg shadow">
                    <Table data={tableData} />
                </div>
            </div>
        </main>
    );
};

function Footer() {
    return (
        <footer className="bg-blue-300 p-4 text-center w-full">
            &copy; Admin Judi
        </footer>
    );
};

export default function AdminLayout({ children }) {
    return(
        <div className="flex min-h-screen bg-slate-200">
            <Sider/>
            <div className="flex flex-col flex-1 items-center">
            <Header/>
            <main className="bg-white flex-grow w-[90%] my-4 p-4">
                {children}
            </main>
            <Footer/>
            </div>
        </div>
    );
};