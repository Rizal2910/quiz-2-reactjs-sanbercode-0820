// function filterBooksPromise(colorful, amountOfPage){
//     return new Promise(function(resolve, reject){
//         var books = [
//             {name: "shinchan", totalPage: 50, isColorful: true},
//             {name: "kalkulus", totalPage: 250, isColorful: false},
//             {name: "doraemon", totalPage: 40, isColorful: true},
//             {name: "algoritma", totalPage: 300, isColorful: false},
//             ]
//         if (amountOfPage> 0){
//             resolve(book.filter(x=>x.totalPage>=amountOfPage&&x.isColorful==colorful));
//         }else{
//             var reason = new Error("maaf parameter salah")
//             reject(reason);
//         }
//     });
// }

let warna = ["biru", "merah", "kuning", "hijau"]

let dataBukuTambahan={
    penulis : "jhon de",
    tahunTerbit: 2020
}
let buku={
    nama: "pemograman dasar",
    jumlahHalaman: 172,
    warnaSampul: ["hitam"]
}

let combinedArray= [...warna,...buku.warnaSampul]
console.log(combinedArray)

let combined=[dataBukuTambahan,buku]
console.log(combined)
