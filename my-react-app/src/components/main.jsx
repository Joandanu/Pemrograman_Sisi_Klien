import React from 'react';
import Table from './table';

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
}

export default Main;
