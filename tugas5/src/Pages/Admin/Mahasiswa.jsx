import React from "react";
import { Button } from "../../Components/Button";
import { Table } from "../../Components/Table";
import Swal from "sweetalert2";

const dataMahasiswa =[
    {
        nim: "A11.2022.14179",
        nama: "Laurentius Joandanu",
    },
    {
        nim: "A11.2022.14205",
        nama: "Wisnu",
    },
];

export default function Mahasiswa(){
    return (
        <>
            <div className="flex justify-between">
                <h2 className="text-2xl font-semibold">Daftar Mahasiswa</h2>
                <Button 
                    text={"Tambah Mahasiswa"}/>
            </div>
            <Table mahasiswa={dataMahasiswa} />
        </>
    )
}