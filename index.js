import { getAllProducts, getProductById, createProduct, deleteProduct } from './services/api.js';

const [,, method, resource, ...args] = process.argv;

const main = async () => {
  if (method === 'GET' && resource === 'products') {
    if (args.length === 0) {
      const products = await getAllProducts();
      console.log(products);
    } else {
      const product = await getProductById(args[0]);
      console.log(product);
    }
  } else if (method === 'POST' && resource === 'products') {
    const [title, price, category] = args;
    if (!title || !price || !category) {
      return console.error('Faltan argumentos: <title> <price> <category>');
    }
    const newProduct = await createProduct(title, price, category);
    console.log(newProduct);
  } else if (method === 'DELETE' && resource.startsWith('products/')) {
    const id = resource.split('/')[1];
    const result = await deleteProduct(id);
    console.log(result);
  } else {
    console.error('Comando no reconocido.');
  }
};

main();
