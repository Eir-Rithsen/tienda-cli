import fetch from 'node-fetch';

const BASE_URL = 'https://fakestoreapi.com/products';

export const getAllProducts = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const getProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
};

export const createProduct = async (title, price, category) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify({
      title,
      price: parseFloat(price),
      description: 'Producto agregado desde la CLI',
      image: 'https://i.pravatar.cc',
      category
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return res.json();
};

export const deleteProduct = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  });
  return res.json();
};
