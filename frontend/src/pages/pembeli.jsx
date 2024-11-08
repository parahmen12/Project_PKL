import React, { useState, useEffect } from 'react';
import api from '../api';
import '../style/pembeli.css';
import Notiflix from 'notiflix';

const Pembeli = () => {
  useEffect(() => {
    document.title = 'Data Pembeli';
  }, []);

  const [pembeli, setPembeli] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nama: '',
    paket_pc: '',
    harga: '',
    tanggal_pembelian: '',
    waktu_pembelian: '',
    status: 'belum bayar',
  });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fetch data dari API
  useEffect(() => {
    api.get('/pembeli')
      .then(response => setPembeli(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Fungsi untuk menghapus data
  const handleDelete = (id) => {
    Notiflix.Confirm.show(
      'Konfirmasi Hapus',
      'Apakah Anda yakin ingin menghapus data ini?',
      'Hapus',
      'Batal',
      () => {
        Notiflix.Loading.circle(); // Menampilkan indikator loading
        api.delete(`/pembeli/${id}`)
          .then(() => {
            setPembeli(pembeli.filter(item => item.id !== id));
            Notiflix.Loading.remove(); // Menghapus indikator loading
          })
          .catch(error => {
            console.error('Error deleting data:', error);
            Notiflix.Loading.remove(); // Menghapus indikator loading
          });
      },
      () => {}
    );
  };

  // Fungsi untuk mengatur data form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fungsi untuk mengedit data
  const handleEdit = (item) => {
    setFormData({
      nama: item.nama,
      paket_pc: item.paket_pc,
      harga: item.harga,
      tanggal_pembelian: item.tanggal_pembelian,
      waktu_pembelian: item.waktu_pembelian,
      status: item.status,
    });
    setEditMode(true); // Masuk mode edit
    setEditId(item.id); // Menyimpan ID yang sedang diedit
    setShowForm(true); // Menampilkan form
  };

  // Fungsi untuk menyimpan data
  const handleSubmit = (e) => {
    e.preventDefault();
    const action = editMode ? api.put(`/pembeli/${editId}`, formData) : api.post('/pembeli', formData);
    const successMessage = editMode ? 'Data berhasil diperbarui!' : 'Data berhasil ditambahkan!';
    
    Notiflix.Confirm.show(
      editMode ? 'Konfirmasi Edit' : 'Konfirmasi Tambah',
      editMode ? 'Apakah Anda yakin ingin memperbarui data ini?' : 'Apakah Anda yakin ingin menambahkan data ini?',
      'Ya',
      'Batal',
      () => {
        Notiflix.Loading.circle(); // Menampilkan indikator loading
        action
          .then(() => {
            setShowForm(false);
            setFormData({
              nama: '',
              paket_pc: '',
              harga: '',
              tanggal_pembelian: '',
              waktu_pembelian: '',
              status: 'belum bayar',
            });
            return api.get('/pembeli'); // Refetch data setelah tambah/edit
          })
          .then(response => {
            setPembeli(response.data);
            Notiflix.Loading.remove();
             // Menghapus indikator loading
            Notiflix.Notify.success(successMessage); // Menampilkan pesan sukses
            setEditMode(false); // Reset mode ke tambah
            setEditId(null); // Reset ID edit
          })
          .catch(error => {
            console.error('Error saving data:', error);
            Notiflix.Loading.remove(); // Menghapus indikator loading
            Notiflix.Notify.failure('Terjadi kesalahan saat menyimpan data.'); // Menampilkan pesan error
          });
      },
      () => {}
    );
  };

  return (
    <div className="pembeli-container">
      <h2>Data Penjualan PC</h2>
      <button className="toggle-form-button" onClick={() => {
        setShowForm(!showForm);
        setEditMode(false); 
        setFormData({
          nama: '',
          paket_pc: '',
          harga: '',
          tanggal_pembelian: '',
          waktu_pembelian: '',
          status: 'belum bayar',
        });
      }}>
        <i className="bi bi-plus"></i> Tambah Data
      </button>

      <table className="pembeli-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Paket PC</th>
            <th>Harga</th>
            <th>Tanggal Pembelian</th>
            <th>Waktu Pembelian</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {pembeli.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.nama}</td>
              <td>{item.paket_pc}</td>
              <td>{item.harga}</td>
              <td>{item.tanggal_pembelian}</td>
              <td>{item.waktu_pembelian}</td>
              <td>{item.status}</td>
              <td>
                <button className="edit-button" onClick={() => handleEdit(item)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(item.id)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Form tambah/edit data dengan tampilan overlay */}
      {showForm && (
        <div className="form-alert-overlay">
          <form className="form-pembeli" onSubmit={handleSubmit}>
            <input type="text" name="nama" placeholder="Nama" value={formData.nama} onChange={handleChange} required />
            <input type="text" name="paket_pc" placeholder="Nama Paket PC" value={formData.paket_pc} onChange={handleChange} required />
            <input type="number" name="harga" placeholder="Harga" value={formData.harga} onChange={handleChange} required />
            <input type="date" name="tanggal_pembelian" value={formData.tanggal_pembelian} onChange={handleChange} required />
            <input type="time" name="waktu_pembelian" value={formData.waktu_pembelian} onChange={handleChange} required />
            <select name="status" value={formData.status} onChange={handleChange}>
              <option value="belum bayar">Belum Bayar</option>
              <option value="sudah bayar">Sudah Bayar</option>
              <option value="pending">Pending</option>
            </select>
            <div className="form-buttons">
              <button type="submit" className="submit-button">Simpan</button>
              <button type="button" className="cancel-button" onClick={() => setShowForm(false)}>Batal</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Pembeli;
