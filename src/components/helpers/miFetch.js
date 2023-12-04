const products = [
  {
    id: "1",
    img: "https://res.cloudinary.com/daupcpuqs/image/upload/v1699912195/Proyecto%20React%20JS/imgPlantas_21_o1oqez.jpg ",
    nombre: "Planta 1",
    desc: "lorem ipsum",
    categoria: "plantas",
    precio: 10,
    stock: 7,
  },
  {
    id: "2",
    img: "https://res.cloudinary.com/daupcpuqs/image/upload/v1699912195/Proyecto%20React%20JS/imgPlantas_22_sen5ey.jpg",
    nombre: "Planta 2",
    desc: "lorem ipsum",
    categoria: "plantas",
    precio: 15,
    stock: 10,
  },
  {
    id: "3",
    img: "https://res.cloudinary.com/daupcpuqs/image/upload/v1699912194/Proyecto%20React%20JS/imgPlantas_19_tjlmkm.jpg",
    nombre: "Planta 3",
    desc: "lorem ipsum",
    categoria: "macetas",
    precio: 20,
    stock: 15,
  },
  {
    id: "4",
    img: "https://res.cloudinary.com/daupcpuqs/image/upload/v1699912194/Proyecto%20React%20JS/imgPlantas_20_smnxnu.jpg",
    nombre: "Planta 4 ",
    desc: "lorem ipsum",
    categoria: "macetas",
    precio: 25,
    stock: 30,
  },
  {
    id: "5",
    img: "https://res.cloudinary.com/daupcpuqs/image/upload/v1699912188/Proyecto%20React%20JS/imgPlantas_15_bigpxc.jpg",
    nombre: "Planta 5",
    desc: "lorem ipsum",
    categoria: "plantas",
    precio: 30,
    stock: 12,
  },
];

export const miFetch = (id) =>
  new Promise((res) => {
    setTimeout(() => {
      res(id ? products.find((prod) => prod.id === id) : products);
    }, 1000);
  });
