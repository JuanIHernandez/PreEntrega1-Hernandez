const MOCKDATA = [
  {
    id: 1,
    name: "",
    img: "",
    description: "",
    category: 1,
    price: 10,
    stock: 10,
  },
  {
    id: 2,
    name: "",
    img: "",
    description: "",
    category: 1,
    price: 10,
    stock: 10,
  },
  {
    id: 3,
    name: "",
    img: "",
    description: "",
    category: 2,
    price: 10,
    stock: 10,
  },
  {
    id: 4,
    name: "",
    img: "",
    description: "",
    category: 3,
    price: 20,
    stock: 20,
  },
];

export const requestData = () => {
  return new promise((resolve, reject) => {
    //resolve("todo bien");
    setTimeout(() => {
      resolve(MOCKDATA);
    }, 1000);
    //reject("todo mal");
  });
};
