'use strict';

var response = require('./res');
var connection = require('./koneksi');
const conn = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API ku berjalan!",res);
};

//menampilkan semua data mahasiswa
exports.tampilsemuamahasiswa = function (req, res) {
    connection.query('SELECT * FROM mahasiswa', 
        function (err, rows, fileds) {
            if(err){
                connection.log(err);
            }else{
                response.ok(rows, res);
            }     
        })
};

//menampilkan semua data mahasiswa berdasarkan id
exports.tampilberdasarkanid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id], 
        function (err, rows, fileds) {
            if(err){
                connection.log(err);
            }else{
                response.ok(rows, res);
            }     
        })
};