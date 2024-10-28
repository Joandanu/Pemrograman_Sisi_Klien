import React from 'react';

function Table({ data }) {
    return (
        <table className="min-w-full table-auto">
            <thead>
                <tr className="bg-gray-200">
                    <th className="border px-4 py-2">NO</th>
                    <th className="border px-4 py-2">NIM</th>
                    <th className="border px-4 py-2">NAMA</th>
                    <th className="border px-4 py-2">AKSI</th>
                </tr>
            </thead>
            <tbody>
                {data.map((mahasiswa, index) => (
                    <tr key={mahasiswa.nim}>
                        <td className="border px-4 py-2">{index + 1}</td>
                        <td className="border px-4 py-2">{mahasiswa.nim}</td>
                        <td className="border px-4 py-2">{mahasiswa.nama}</td>
                        <td className="border px-4 py-2">
                            <button className="bg-yellow-500 text-white px-4 py-2 rounded">EDIT</button>
                            <button className="bg-red-500 text-white px-4 py-2 rounded">DELETE</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
