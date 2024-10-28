import "./App.css";
import Swal from "sweetalert2";

const swalDeleteConfirm = (nim) => {
  Swal.fire({
    title: `Apakah Yakin Hapus Data Mahasiswa Ini ?`,
    text: "Setelah Dihapus Data Tidak Bisa Dipulihkan Kembali ",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Ya, Hapus!",
    cancelButtonText: "Batal!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        "Terhapus!",
        "Success"
      );
    } else {
      Swal.fire(
        "Gagal",
        "Error"
      );
    }
  });
};

const swallEdit = async (nim) => {
  try {
    const { value: formValue } = await Swal.fire({
      title: "Ganti Nama Mahasiswa ",
      html: `
        <label for="swal-input-nama">Nama</label>
        <input id="swal-input-nama" class="swal2-input">
      `,
      focusConfirm: false,
      preConfirm: () => {
        return document.getElementById("swal-input-nama").value;
      },
    });

    if (formValue) {
      const confirmation = await Swal.fire({
        title: "Konfirmasi",
        text: `Apakah Anda Yakin Ingin Mengganti Nama: ${formValue}?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya, Ganti!",
        cancelButtonText: "Batal",
      });

      if (confirmation.isConfirmed) {
        Swal.fire({
          title: "Berhasil!",
          text: `Nama Berhasil Diganti menjadi: ${formValue}`,
          icon: "Success",
        });
      }
    }
  } catch (error) {
    console.error("Error during Swal.fire:", error);
  }
};

const swallAddStudent = async () => {
  try {
    const { value: formValues } = await Swal.fire({
      title: "Tambah Mahasiswa",
      html: `
      <div style="display: grid; grid-template-columns: auto 1fr; gap: 10px; align-items: center;">
        <label for="swal-input-nim">NIM</label>
        <input id="swal-input-nim" class="swal2-input">
        <label for="swal-input-nama">Nama</label>
        <input id="swal-input-nama" class="swal2-input">
        </div>
      `,
      focusConfirm: false,
      preConfirm: () => {
        return {
          nim: document.getElementById("swal-input-nim").value,
          nama: document.getElementById("swal-input-nama").value,
        };
      },
    });

    if (formValues) {
      const confirmation = await Swal.fire({
        title: "Konfirmasi",
        text: `Apakah Anda Yakin Menambah Mahasiswa Dengan NIM: ${formValues.nim} dan Nama: ${formValues.nama} ?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya, Tambah!",
        cancelButtonText: "Batal",
      });

      if (confirmation.isConfirmed) {
        Swal.fire({
          title: "Berhasil!",
          icon: "Success",
        });
      }
    }
  } catch (error) {
    console.error("Error during Swal.fire:", error);
  }
};

const Sidebar = () => {
  return (
    <aside class="bg-indigo-900 text-white min-h-screen">
      <div class="p-4">
        <h2 class="font-bold">Aplikasi SiAKAD</h2>
        <nav class="mt-4 ml-4">
          <ul>
            <li class="mb-2">
              <a href="" class="hover:text-gray-200">Dashboard</a>
            </li>
            <li class="mb-2">
              <a href="" class="hover:text-gray-200">Mahasiswa</a>
            </li>
            <li>
              <a href="" class="hover:text-gray-200">Setting</a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

const Header = () => {
  return (
    <header class="bg-blue-300 p-4 flex justify-end min-w-full">
      <button class="bg-blue-500 text-white px-4 py-2">LOGOUT</button>
    </header>
  );
};

const Row = ({ no, nim, nama }) => {
  return (
    <tr className="border py-2 px-4">
      <td className="border py-2 px-4">
        {no}
      </td>
      <td className="border py-2 px-4">
        {nim}
      </td>
      <td className="border py-2 px-4">
        {nama}
      </td>
      <td className="border py-2 px-4">
        <div className="flex flex-wrap gap-2">
          <button
            className="py-2 px-5 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-opacity-75"
            onClick={() => swallEdit(nim)}
          >
            Edit
          </button>
          <button
            className="py-2 px-5 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-75"
            onClick={() => swalDeleteConfirm(nim)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

const Table = () => {
  return (
    <table class="min-w-full table-auto">
      <thead>
        <tr class="bg-gray-200">
          <th class="border px-4 py-2">NO</th>
          <th class="border px-4 py-2">NIM</th>
          <th class="border px-4 py-2">NAMA</th>
          <th class="border px-4 py-2">AKSI</th>
        </tr>
      </thead>
      <tbody>
        <Row no="1" nim="A11.2022.14179" nama="Laurentius Joandanu" />
        <Row no="2" nim="A11.2022.14205" nama="Wisnu Arya" />
      </tbody>
    </table>
  );
};

const Main = () => {
  return (
    <main className="bg-white flex-grow w-[90%] my-4 p-4 rounded-lg space-y-4 shadow-lg">
      <div className="flex justify-between"> <h2 className="text-2xl font-semibold">List Mahasiswa</h2>
        <button
          onClick={swallAddStudent}
          className="py-2 px-5 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-400 focus:ring-opacity-75"
        >
          Tambah Mahasiswa
        </button>
      </div>
      <Table />
    </main>
  );
};

const Footer = () => {
  return (
    <footer class="bg-blue-300 text-center p-2 min-w-full">
      &copy; Admin SiAKAD
    </footer>
  );
};

const Content = () => {
  return (
    <div className="flex flex-col flex-1 items-center">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

// komponen utama
function App() {
  return (
    <div className="flex min-h-screen bg-slate-200">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;