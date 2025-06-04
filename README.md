Proyecto Pre-Entrga 
## tienda-cli/
* index.js
* package.json
* README.md
* services/
    *  api.js
## 🛒 Tienda CLI

Aplicación de línea de comandos en Node.js para gestionar productos utilizando la [FakeStore API](https://fakestoreapi.com/).

## 🚀 Requisitos

- Node.js 18 o superior
- Conexión a Internet

## 📦 Instalación

```bash
git clone https://github.com/Eir-Rithsen/tienda-cli.git
cd tienda-cli
npm install

CONSULTAR TODOS LOS PRODUCTOS
npm run start GET products

CONSULTAR PRODUCTO POR ID
npm run start GET products <id>
# Ejemplo
npm run start GET products 7

CREAR UN NUEVO PRODUCTO
npm run start POST products "<title>" <price> "<category>"
# Ejemplo
npm run start POST products "Remera-Rex" 350 "remeras"

ELIMINAR UN PRODUCTOR
npm run start DELETE products/<id>
# Ejemplo
npm run start DELETE products/8
```
## 🧑‍💻 Auto

Desarrollado por Ivan Alberto Nicolas Collar Rithsen (Eir-Rithsen)
