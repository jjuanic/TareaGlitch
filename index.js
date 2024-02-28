const express = require('express');
const app = express();
const dotenv = require('dotenv')

dotenv.config()
const PORT = process.env.PORT; 

app.get('/',(req,res)=>{
    res.send(`<h1> Hola mundo</h1>`);
  
}

);

app.get('/form', (req,res) => {
    console.log("======================");
    console.log(req.url);
    console.log("======================");

    res.send(`

    <div style="max-width: 400px; margin: 0 auto; font-family: Arial, sans-serif;">
  <h2 style="text-align: center;">Registro de Cliente</h2>
  <form style="padding: 20px; border: 1px solid #ccc; border-radius: 5px;">
    <div style="margin-bottom: 10px;">
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" style="width: 100%; padding: 8px;">
    </div>
    <div style="margin-bottom: 10px;">
      <label for="apellido">Apellido:</label>
      <input type="text" id="apellido" name="apellido" style="width: 100%; padding: 8px;">
    </div>
    <div style="margin-bottom: 10px;">
      <label for="email">Correo Electrónico:</label>
      <input type="email" id="email" name="email" style="width: 100%; padding: 8px;">
    </div>
    <div style="margin-bottom: 10px;">
      <label for="telefono">Teléfono:</label>
      <input type="tel" id="telefono" name="telefono" style="width: 100%; padding: 8px;">
    </div>
    <div style="margin-bottom: 10px;">
      <label for="direccion">Dirección:</label>
      <input type="text" id="direccion" name="direccion" style="width: 100%; padding: 8px;">
    </div>
    <div style="text-align: center;">
      <button type="submit" style="padding: 10px 20px; background-color: #4CAF50; color: white; border: none; border-radius: 3px; cursor: pointer; font-family: Arial, sans-serif;">Registrar</button>
    </div>
  </form>
</div>
  
  `);

});

app.get('/redirect', (req,res) => {
    console.log("======================");
    console.log(req.url);
    console.log("======================");

    res.redirect('..')

});




app.listen(PORT, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor Corriendo en el puerto http://localhost:${PORT}`);

});

