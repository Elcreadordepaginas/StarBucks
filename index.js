let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x')
    navbar.classList.remove('active')
}


document.addEventListener("DOMContentLoaded", function () {
    const botonesOrderNow = document.querySelectorAll('.order-now');
    const carritoIcon = document.querySelector('.carrito-icon');
    const carrito = document.querySelector('.carrito');
    const listaCarrito = document.querySelector('.lista-carrito');
    const totalCarrito = document.querySelector('.total');
    const pagarBoton = document.querySelector('.pagar');
    const borrarBoton = document.querySelector('.borrar');

    botonesOrderNow.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    });

    carritoIcon.onclick = () => {
        carrito.classList.toggle('carrito-abierto');
    };

    pagarBoton.onclick = () => {
        if (listaCarrito.children.length === 0) {
            alert('¡No agregaste ningún producto!');
        } else {
            alert('¡Su pedido se realizó con éxito!');
            vaciarCarrito();
        }
    };

    borrarBoton.onclick = () => {
        if (listaCarrito.children.length === 0) {
            alert('¡El carrito ya está vacío!');
        } else {
            alert('¡Su pedido se borró de la lista!');
            vaciarCarrito();
        }
    };

    function agregarAlCarrito(event) {
        const boton = event.target;
        const nombre = boton.dataset.nombre;
        const precio = parseFloat(boton.dataset.precio);

        const producto = document.createElement('li');
        producto.innerText = `${nombre} - $${precio.toFixed(2)}`;

        listaCarrito.appendChild(producto);

        calcularTotal();
    }

    function calcularTotal() {
        let total = 0;
        const productos = listaCarrito.children;

        for (let i = 0; i < productos.length; i++) {
            const precioTexto = productos[i].innerText.split(' - $')[1];
            total += parseFloat(precioTexto);
        }

        totalCarrito.innerText = `$${total.toFixed(2)}`;
    }

    function vaciarCarrito() {
        listaCarrito.innerHTML = '';
        totalCarrito.innerText = '$0.00';
    }
});