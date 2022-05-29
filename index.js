// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

let colorSet = new Set();
let colorSet2 = new Set();
let restaurantSet = new Set();
let restaurantSet2 = new Set();
let color = {
  yellow: "Yellow",
  pink: "Pink",
  white: "White",
  purple: "Purple",
  blue: "Blue",
  black: "Black",
  grey: "Grey",
};
let restaurant = {
  bento: "Bento",
  sushi: "Sushi",
  pancake: "Pancake",
  eggy: "Eggy",
  tempura: "Tempura",
  padang: "Padang",
  tteok: "Tteok",
  geprek: "Geprek",
  katsu: "Katsu",
};
const firstUser = {
  name: "Monica",
  gender: "Female",
  age: 17,
  email: "monica@dingdong.com",
  favoriteColor: colorSet
    .add(color.yellow)
    .add(color.pink)
    .add(color.white)
    .add(color.purple),
  isHavePet: "Yes",
  education: [
    {
      name: "SD 01",
      city: "Jakarta",
      graduate: 2016,
    },
    {
      name: "SMP 02",
      city: "Jakarta",
      graduate: 2019,
    },
    {
      name: "SMA 03",
      city: "Tangerang",
    },
  ],
  favoriteRestaurant: {
    bento: "Bento",
    sushi: "Sushi",
    pancake: "Pancake",
    eggy: "Eggy",
    tempura: "Tempura",
    bento: "Bento",
    eggy: "Eggy",
    padang: "Padang",
    tteok: "Tteok",
    sushi: "Sushi",
    sushi: "Sushi",
  },
};

const secondUser = {
  name: "Wendy",
  gender: "Male",
  age: 23,
  email: "wendy@dingdong.com",
  favoriteColor: colorSet2.add(color.blue).add(color.black).add(color.grey),
  isHavePet: "No",
  education: [
    {
      name: "SD 02",
      city: "Jakarta",
      graduate: 2010,
    },
    {
      name: "SMP 03",
      city: "Bogor",
      graduate: 2013,
    },
    {
      name: "SMA 01",
      city: "Surabaya",
      graduate: 2016,
    },
    {
      name: "Universitas Maju",
      city: "Tangerang",
    },
  ],
  favoriteRestaurant: {
    tempura: "Temmpura",
    bento: "Bento",
    sushi: "Sushi",
    pancake: "Pancake",
    padang: "Padang",
    katsu: "Katsu",
    geprek: "Geprek",
    pancake: "Pancake",
    eggy: "Eggy",
  },
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
