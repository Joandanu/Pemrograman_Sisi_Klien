// Data Mahasiswa
const dataMahasiswa = [
  {
    id: 1,
    nama: "Budi Santoso",
    tanggalLahir: "2000-01-15",
    fakultas: "Fakultas Ilmu Komputer",
    programStudi: "Teknik Informatika",
    semester: 6,
    nilai: {
      algoritma: 85,
      basisData: 88,
      pemrogramanWeb: 90,
    },
    aktif: true,
    organisasi: ["Himpunan Mahasiswa Teknik", "Komunitas Pemrograman"],
  },
  {
    id: 2,
    nama: "Siti Aminah",
    tanggalLahir: "1999-05-10",
    fakultas: "Fakultas Ekonomi Bisnis",
    programStudi: "Manajemen",
    semester: 4,
    nilai: {
      manajemenKeuangan: 78,
      akuntansi: 82,
      pemasaran: 75,
    },
    aktif: true,
    organisasi: ["Koperasi Mahasiswa"],
  },
  {
    id: 3,
    nama: "Rudi Hartono",
    tanggalLahir: "1998-12-01",
    fakultas: "Fakultas Teknik",
    programStudi: "Teknik Elektro",
    semester: 8,
    nilai: {
      mekanikaTanah: 85,
      strukturBangunan: 89,
    },
    aktif: false,
    organisasi: ["Himpunan Mahasiswa Teknik Sipil"],
  },
];

// 1. Destructuring seluruh field mahasiswa pertama
const { id, nama, tanggalLahir, fakultas, programStudi, semester, nilai, aktif, organisasi } = dataMahasiswa[0];
console.log(id, nama, tanggalLahir, fakultas, programStudi, semester, nilai, aktif, organisasi);

// 2. Destructuring pada field nilai
const { algoritma, basisData, pemrogramanWeb } = nilai;
console.log(algoritma, basisData, pemrogramanWeb);

// 3. Destructuring pada field organisasi
const [org1, org2] = organisasi;
console.log(org1, org2);

// 4. Spread operator untuk field organisasi
const organisasiBaru = [...organisasi, "Kelompok Studi Informatika"];
console.log(organisasiBaru);

// 5. Update pada field fakultas dan semester
const updatedMahasiswa = { ...dataMahasiswa[0], fakultas: "Fakultas Teknologi Informasi", semester: 7 };
console.log(updatedMahasiswa);

// 6. Split pada field tanggal lahir dan tampilkan tahun saja
const tahunLahir = tanggalLahir.split("-")[0];
console.log(tahunLahir);

// 7. Conditional operator ? untuk mengecek mahasiswa aktif atau tidak
const statusMahasiswa = aktif ? "Mahasiswa aktif" : "Mahasiswa tidak aktif";
console.log(statusMahasiswa);

// 8. Map untuk menampilkan semua nama mahasiswa
const semuaNama = dataMahasiswa.map(({ nama }) => nama);
console.log(semuaNama);

// 9. Filtering untuk menampilkan semua mahasiswa yang aktif dan dari Fakultas Ilmu Komputer
const mahasiswaAktifIlkom = dataMahasiswa.filter(
  ({ aktif, fakultas }) => aktif && fakultas === "Fakultas Ilmu Komputer"
);
console.log(mahasiswaAktifIlkom);

// 10. Totalkan nilai seluruh mahasiswa
const totalNilai = dataMahasiswa.reduce((total, { nilai }) => {
  const nilaiMahasiswa = Object.values(nilai).reduce((sum, n) => sum + n, 0);
  return total + nilaiMahasiswa;
}, 0);
console.log(totalNilai);

// 11. Sort seluruh mahasiswa berdasarkan semester
const sortMahasiswaBySemester = dataMahasiswa.sort((a, b) => a.semester - b.semester);
console.log(sortMahasiswaBySemester);

// 12. Menambahkan mahasiswa baru
const mahasiswaBaru = {
  id: 4,
  nama: "Laurentius Joandanu",
  tanggalLahir: "2004-07-07",
  fakultas: "Fakultas Ilmu Komputer",
  programStudi: "Teknik Informatika",
  semester: 5,
  nilai: {
    Algoritma : 85,
    basisData : 90,
    pemrogramanWeb : 80,
  },
  aktif: true,
  organisasi: ["Himpunan Mahasiswa Sistem Informasi"],
};
dataMahasiswa.push(mahasiswaBaru);
console.log(dataMahasiswa);

// 13. Delete mahasiswa dengan id 2 dan update mahasiswa dengan id 3
const updatedDataMahasiswa = dataMahasiswa.filter(({ id }) => id !== 2);
updatedDataMahasiswa.forEach((mhs) => {
  if (mhs.id === 3) {
    mhs.fakultas = "Fakultas Teknik dan Elektro";
    mhs.semester = 9;
  }
});
console.log(updatedDataMahasiswa);
