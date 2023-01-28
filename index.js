
class NilaiMahasiswa {
    constructor() {
      this.input;
      this.listNilaiMahasiswa = [];
  
      console.log("\n INPUTKAN NILAI MAHASISWA");

    }
    inputNilai() {
      const readline = require('readline');
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
  
      const question = (question) => {
        return new Promise((resolve) => {
          rl.question(question, (answer) => {
            resolve(answer);
          });
        });
      };
  
      const isiNilai = async () => {
        while (this.input !== 'q') {
          if (this.input === 'q') {
            break;
          }
          this.input = await question('Masukkan nilai : ');
          this.listNilaiMahasiswa.push(this.input);
        }
        this.listNilaiMahasiswa.pop();
        console.log(`Urutan Nilai : ${this.sorting()}`);
        console.log(`Nilai Terendah : ${this.Terendah()}`);
        console.log(`Nilai Tertinggi : ${this.TerTinggi()}`);
        console.log(`Rata-rata : ${this.rata()}`);
        console.log(`Jumlah Siswa Lulus : ${this.jumlahSiswaLulus()}`);
        console.log(`Jumlah Siswa Tidak Lulus : ${this.jumlahSiswaTidakLulus()}`);
        rl.close();
      };
      return isiNilai();
    }
  
    convertNilai() {
      let result = this.listNilaiMahasiswa.map((NilaiMahasiswa) => Number(NilaiMahasiswa));
      return result;
    }

    sorting() {
        let nilaiTerendahKeTertinggi = this.convertNilai();
        for (let i = 0; i < nilaiTerendahKeTertinggi.length; i++) {
          for (let j = 0; j < nilaiTerendahKeTertinggi.length - 1; j++) {
            if (nilaiTerendahKeTertinggi[j] > nilaiTerendahKeTertinggi[j + 1]) {
              let temp = nilaiTerendahKeTertinggi[j];
              nilaiTerendahKeTertinggi[j] = nilaiTerendahKeTertinggi[j + 1];
              nilaiTerendahKeTertinggi[j + 1] = temp;
            }
          }
        }
        return nilaiTerendahKeTertinggi;
      }
    Terendah() {
      let nilaiTerendah = this.convertNilai()[0];
      for (let i = 0; i < this.convertNilai().length; i++) {
        if (nilaiTerendah > this.convertNilai()[i]) {
          nilaiTerendah = this.convertNilai()[i];
        }
      }
      return nilaiTerendah;
    }
  
    TerTinggi() {
      let nilaiTerTinggi = this.convertNilai()[0];
      for (let i = 0; i < this.convertNilai().length; i++) {
        if (nilaiTerTinggi < this.convertNilai()[i]) {
          nilaiTerTinggi = this.convertNilai()[i];
        }
      }
      return nilaiTerTinggi;
    }
    rata() {
      let rataRata = 0;
      for (let i = 0; i < this.convertNilai().length; i++) {
        rataRata += this.convertNilai()[i];
      }
      return rataRata / this.convertNilai().length; 
    }
  
    // Jumlah Siswa Lulus
    jumlahSiswaLulus() {
      let jumlahSiswaLulus = 0;
      for (let i = 0; i < this.convertNilai().length; i++) {
        if (this.convertNilai()[i] >= 75) {
          jumlahSiswaLulus++;
        }
      }
      return jumlahSiswaLulus;
    }
    jumlahSiswaTidakLulus() {
      let jumlahSiswaTidakLulus = 0;
      for (let i = 0; i < this.convertNilai().length; i++) {
        if (this.convertNilai()[i] < 75) {
          jumlahSiswaTidakLulus++;
        }
      }
      return jumlahSiswaTidakLulus;
    }
  }
  
  const nilaiMhs = new NilaiMahasiswa();
  nilaiMhs.inputNilai();
  