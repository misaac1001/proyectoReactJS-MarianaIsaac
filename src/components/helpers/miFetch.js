const product = {
  product1: {
    id: "1",
    img: "https://res.cloudinary.com/daupcpuqs/image/upload/v1699912195/Proyecto%20React%20JS/imgPlantas_21_o1oqez.jpg ",
    nombre: "Planta 1",
    desc: "lorem ipsum",
    cat: "plantuqui",
    precio: 10,
    stock: 5,
  },
  product2: {
    id: "2",
    img: "https://res.cloudinary.com/daupcpuqs/image/upload/v1699912195/Proyecto%20React%20JS/imgPlantas_22_sen5ey.jpg",
    nombre: "Planta 2",
    desc: "lorem ipsum",
    cat: "plantuqui",
    precio: 15,
    stock: 5,
  },
  product3: {
    id: "3",
    img: "https://res.cloudinary.com/daupcpuqs/image/upload/v1699912194/Proyecto%20React%20JS/imgPlantas_19_tjlmkm.jpg",
    nombre: "Planta 3",
    desc: "lorem ipsum",
    cat: "plantuqui",
    precio: 20,
    stock: 5,
  },
  product4: {
    id: "4",
    img: "https://res.cloudinary.com/daupcpuqs/image/upload/v1699912194/Proyecto%20React%20JS/imgPlantas_20_smnxnu.jpg",
    nombre: "Planta 4 ",
    desc: "lorem ipsum",
    cat: "plantuqui",
    precio: 25,
    stock: 5,
  },
  product5: {
    id: "5",
    img: "https://res.cloudinary.com/daupcpuqs/image/upload/v1699912188/Proyecto%20React%20JS/imgPlantas_15_bigpxc.jpg",
    nombre: "Planta 5",
    desc: "lorem ipsum",
    cat: "plantuqui",
    precio: 30,
    stock: 5,
  },
};

export const miFetch = () => {
  const productArray = Object.values(product);
  return new Promise((res) => {
    setTimeout(() => {
      res(productArray);
    }, 3000);
  });
};
