// Función para añadir un producto al carrito
function agregarAlCarrito(elemento) {
    let producto = elemento.parentElement;
    let id = producto.getAttribute('data-id');
    let nombre = producto.getAttribute('data-nombre');
    let precio = parseFloat(producto.getAttribute('data-precio'));

    // Crear un nuevo elemento para el carrito
    let carritoItem = document.createElement('div');
    carritoItem.className = 'carrito-item';
    carritoItem.setAttribute('data-id', id);
    carritoItem.setAttribute('data-precio', precio);
    carritoItem.innerHTML = nombre + ' - $' + precio;

    // Añadir el nuevo elemento al carrito
    document.getElementById('itemsCarrito').appendChild(carritoItem);

    // Actualizar el total del carrito
    actualizarTotalCarrito();
}

// Función para actualizar el total del carrito
function actualizarTotalCarrito() {
    let total = 0;
    let itemsCarrito = document.getElementsByClassName('carrito-item');
    for (let i = 0; i < itemsCarrito.length; i++) {
        total += parseFloat(itemsCarrito[i].getAttribute('data-precio'));
    }
    document.getElementById('totalCarrito').innerText = total.toFixed(2);
}
// Función para eliminar un producto del carrito
function eliminarDelCarrito(elemento) {
    let carritoItem = elemento.parentElement;
    carritoItem.remove();
    actualizarTotalCarrito();
}

// Modificar la función agregarAlCarrito para añadir el botón de eliminación
function agregarAlCarrito(elemento) {
    let producto = elemento.parentElement;
    let id = producto.getAttribute('data-id');
    let nombre = producto.getAttribute('data-nombre');
    let precio = parseFloat(producto.getAttribute('data-precio'));

    // Crear un nuevo elemento para el carrito
    let carritoItem = document.createElement('div');
    carritoItem.className = 'carrito-item';
    carritoItem.setAttribute('data-id', id);
    carritoItem.setAttribute('data-precio', precio);
    carritoItem.innerHTML = nombre + ' - $' + precio + ' <button onclick="eliminarDelCarrito(this)">Eliminar</button>';

    // Añadir el nuevo elemento al carrito
    document.getElementById('itemsCarrito').appendChild(carritoItem);

    // Actualizar el total del carrito
    actualizarTotalCarrito();
}

function guardarCarrito() {
    let itemsCarrito = document.getElementsByClassName('carrito-item');
    let carrito = [];
    for (let i = 0; i < itemsCarrito.length; i++) {
        let item = itemsCarrito[i];
        let id = item.getAttribute('data-id');
        let nombre = item.innerText.split(' - ')[0];
        let precio = parseFloat(item.getAttribute('data-precio'));
        carrito.push({ id: id, nombre: nombre, precio: precio });
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Cargar el carrito desde localStorage
function cargarCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.forEach(function (item) {
        let carritoItem = document.createElement('div');
        carritoItem.className = 'carrito-item';
        carritoItem.setAttribute('data-id', item.id);
        carritoItem.setAttribute('data-precio', item.precio);
        carritoItem.innerHTML = item.nombre + ' - $' + item.precio + ' <button onclick="eliminarDelCarrito(this)">Eliminar</button>';
        document.getElementById('itemsCarrito').appendChild(carritoItem);
    });
    actualizarTotalCarrito();
}

// Modificar las funciones agregarAlCarrito y eliminarDelCarrito para llamar a guardarCarrito
function agregarAlCarrito(elemento) {
    let producto = elemento.parentElement;
    let id = producto.getAttribute('data-id');
    let nombre = producto.getAttribute('data-nombre');
    let precio = parseFloat(producto.getAttribute('data-precio'));

    // Crear un nuevo elemento para el carrito
    let carritoItem = document.createElement('div');
    carritoItem.className = 'carrito-item';
    carritoItem.setAttribute('data-id', id);
    carritoItem.setAttribute('data-precio', precio);
    carritoItem.innerHTML = nombre + ' - $' + precio + ' <button onclick="eliminarDelCarrito(this)">Eliminar</button>';

    // Añadir el nuevo elemento al carrito
    document.getElementById('itemsCarrito').appendChild(carritoItem);

    // Actualizar el total del carrito
    actualizarTotalCarrito();

    // Guardar el carrito en localStorage
    guardarCarrito();
}

function eliminarDelCarrito(elemento) {
    let carritoItem = elemento.parentElement;
    carritoItem.remove();
    actualizarTotalCarrito();
    guardarCarrito();
}

// Cargar el carrito al inicio
window.onload = function () {
    cargarCarrito();
}