const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
const connectDB = require('./db');


// Membuat Model Schema
const DataSchema = new mongoose.Schema({
  nama: String,
  tempat_lahir: String,
});

const Data = mongoose.model('Data', DataSchema);

Data.create(Data)
  .then((createdData) => {
    console.log('Data berhasil ditambahkan:', createdData);
  })
  .catch((error) => {
    console.error('Terjadi kesalahan:', error);
  });

// Inisialisasi server Hapi
const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  // Endpoint GET untuk mendapatkan semua data
  server.route({
    method: 'GET',
    path: '/api/data',
    handler: async (request, h) => {
      try {
        const data = await Data.find();
        return data;
      } catch (error) {
        return h.response('Error').code(500);
      }
    },
  });

  // Endpoint GET untuk mendapatkan data berdasarkan ID
  server.route({
    method: 'GET',
    path: '/api/data/{id}',
    handler: async (request, h) => {
      try {
        const data = await Data.findById(request.params.id);
        return data;
      } catch (error) {
        return h.response('Error').code(500);
      }
    },
  });

  // Endpoint POST untuk menambahkan data baru
  server.route({
    method: 'POST',
    path: '/api/data',
    handler: async (request, h) => {
      try {
        const newData = new Data(request.payload);
        const savedData = await newData.save();
        return savedData;
      } catch (error) {
        return h.response('Error').code(500);
      }
    },
  });

  // Endpoint PUT untuk mengupdate data berdasarkan ID
  server.route({
    method: 'PUT',
    path: '/api/data/{id}',
    handler: async (request, h) => {
      try {
        const updatedData = await Data.findByIdAndUpdate(
          request.params.id,
          request.payload,
          { new: true }
        );
        return updatedData;
      } catch (error) {
        return h.response('Error').code(500);
      }
    },
  });

  // Endpoint DELETE untuk menghapus data berdasarkan ID
  server.route({
    method: 'DELETE',
    path: '/api/data/{id}',
    handler: async (request, h) => {
      try {
        await Data.findByIdAndDelete(request.params.id);
        return 'Data berhasil dihapus';
      } catch (error) {
        return h.response('Error').code(500);
      }
    },
  });

  await connectDB();
  // Menjalankan server
  await server.start();
  console.log('Server berjalan pada', server.info.uri);
};

// Memanggil fungsi inisialisasi server
init().catch((err) => {
  console.error(err);
  process.exit(1);
});
