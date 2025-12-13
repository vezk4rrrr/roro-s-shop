// search.js
// Módulo compartido para la lista de productos y funcionalidad de búsqueda
(function (global) {
  'use strict';

  const productos = [
    { nombre: "Emperador De Chocolate 36g", categorias: ["Peke Pakes", "Selección completa"], precio: 12.00, imagen: "img/emperador_chocolate.jpg" },
    { nombre: "Emperador De Vainilla 36g", categorias: ["Peke Pakes", "Selección completa"], precio: 12.00, imagen: "img/emperador_vainilla.jpg" },
    { nombre: "Chokis 36g", categorias: ["Peke Pakes", "Selección completa"], precio: 12.00, imagen: "img/chokis_clasicas.jpg" },
    { nombre: "Arcoíris 36g", categorias: ["Peke Pakes", "Selección completa"], precio: 12.00, imagen: "img/arcoiris.jpg" },
    { nombre: "Mamuts 12g", categorias: ["Peke Pakes", "Selección completa"], precio: 5.00, imagen: "img/mamuts.jpg" },
    { nombre: "Santa Clara Vainilla 180ml", categorias: ["Bebidas", "Selección completa"], precio: 15.00, imagen: "img/santa_clara_vainilla.jpg" },
    { nombre: "Santa Clara Fresa 180ml", categorias: ["Bebidas", "Selección completa"], precio: 15.00, imagen: "img/santa_clara_fresa.jpg" },
    { nombre: "Santa Clara Capuccino 180ml", categorias: ["Bebidas", "Selección completa"], precio: 15.00, imagen: "img/santa_clara_capuccino.jpg" },
    { nombre: "Santa Clara Chocolate 200ml", categorias: ["Bebidas", "Selección completa"], precio: 15.00, imagen: "img/santa_clara_chocolate.jpg" },
    { nombre: "Santa Clara Galleta 180ml", categorias: ["Bebidas", "Selección completa"], precio: 15.00, imagen: "img/santa_clara_galleta.jpg" },
    { nombre: "Santa Clara Fantasía 180ml", categorias: ["Bebidas", "Selección completa"], precio: 15.00, imagen: "img/Santa_clara_Fantasía.jpg" },
    { nombre: "Jugo De Mango 200ml", categorias: ["Bebidas", "Selección completa"], precio: 12.00, imagen: "img/jugo_mango.jpg" },
    { nombre: "Jugo De Manzana 200ml", categorias: ["Bebidas", "Selección completa"], precio: 12.00, imagen: "img/Jugo_De_Manzana.jpg" },
    { nombre: "Jugo De Durazno 200ml", categorias: ["Bebidas", "Selección completa"], precio: 12.00, imagen: "img/jugo_durazno.jpg" },
    { nombre: "Kool-Aid Jammers Mora Azul 177ml", categorias: ["Bebidas", "Selección completa"], precio: 15.00, imagen: "img/coolaid_blue.jpg" },
    { nombre: "Kool-Aid Jammers Cereza 177ml", categorias: ["Bebidas", "Selección completa"], precio: 15.00, imagen: "img/coolaid_red.JPG" },
    { nombre: "Sunny D Naranja 237ml", categorias: ["Bebidas", "Selección completa"], precio: 10.00, imagen: "img/sunny.webp" },
    { nombre: "Agua Natural Member’s Mark 296ml", categorias: ["Bebidas", "Selección completa"], precio: 5.00, imagen: "img/water.webp" },
    { nombre: "Gomangos 8g", categorias: ["picante", "poca azúcar", "Selección completa"], precio: 3.00, imagen: "img/gomango.jpg" },
    { nombre: "Lucas Gusano De Tamarindo 36g", categorias: ["picante", "poca azúcar", "Selección completa"], precio: 12.00, imagen: "img/Lucas_Gusano_De_Tamarindo.png" },
    { nombre: "Lucas Gusano De Chamoy 36g", categorias: ["picante", "poca azúcar", "Selección completa"], precio: 12.00, imagen: "img/Lucas_Gusano_De_Chamoy.jpg" },
    { nombre: "Lucas Gusano Acidito 36g", categorias: ["picante", "poca azúcar", "Selección completa"], precio: 12.00, imagen: "img/Lucas_Gusano_Acidito.jpg" },
    { nombre: "Sabritas 18g", categorias: ["Frituras", "Selección completa"], precio: 15.00, imagen: "img/sabritas_original.jpg" },
    { nombre: "Ruffles Originales", categorias: ["Frituras", "Selección completa"], precio: 15.00, imagen: "img/original_ruffles.jpg" },
    { nombre: "Ruffles Con Queso 20g", categorias: ["Frituras", "Selección completa"], precio: 15.00, imagen: "img/ruffles_queso.jpg" },
    { nombre: "Cheetos Torciditos 18g", categorias: ["Frituras", "Selección completa"], precio: 15.00, imagen: "img/torciditos.jpg" },
    { nombre: "Cheetos Xtra Flamin’ Hot", categorias: ["Frituras", "Selección completa"], precio: 15.00, imagen: "img/flaming_hot.jpg" },
    { nombre: "Fritos De Maíz", categorias: ["Frituras", "Selección completa"], precio: 15.00, imagen: "img/Fritos_De_Maíz.jpg" },
    { nombre: "Doritos Nacho 23g", categorias: ["Frituras", "Selección completa"], precio: 15.00, imagen: "img/Doritos_Nacho_23g.webp" },
    { nombre: "Doritos Cool Ranch", categorias: ["Frituras", "Selección completa"], precio: 15.00, imagen: "img/Doritos_Cool_Ranch.webp" },
    { nombre: "Churrumais 18g", categorias: ["Frituras", "Selección completa"], precio: 15.00, imagen: "img/churrumais.jpg" },
    { nombre: "Rancheritos", categorias: ["Frituras", "Selección completa"], precio: 15.00, imagen: "img/rancheritos.jpg" },
    { nombre: "Snicker 48g", categorias: ["Dulces", "Selección completa"], precio: 22.00, imagen: "img/Snickers.jpg" },
    { nombre: "Milkyways 48g", categorias: ["Dulces", "Selección completa"], precio: 22.00, imagen: "img/milkyway.jpg" },
    { nombre: "Mini Twix", categorias: ["Dulces", "Selección completa"], precio: 5.00, imagen: "img/Mini_Twix.jpg" },
    { nombre: "M&M De Chocolate 16.10g", categorias: ["Dulces", "Selección completa"], precio: 7.00, imagen: "img/M&M_De_Chocolate.jpg" },
    { nombre: "M&M De Cacahuate 16.10g", categorias: ["Dulces", "Selección completa"], precio: 7.00, imagen: "img/M&M_De_Cacahuate.jpg" },
    { nombre: "M&M De Mantequilla De Cacahuate 16.10g", categorias: ["Dulces", "Selección completa"], precio: 7.00, imagen: "img/m&m_peanut_butter.jpg" },
    { nombre: "M&M De Galleta 38.3g", categorias: ["Dulces", "Selección completa"], precio: 15.00, imagen: "img/M&M_De_Galleta.webp" },
    { nombre: "Reese’s 8.66g", categorias: ["Dulces", "Selección completa"], precio: 3.33, imagen: "img/Reese’s.jpg" },
    { nombre: "Gansitos 50g", categorias: ["Dulces", "Selección completa"], precio: 17.00, imagen: "img/gansito.jpg" },
    { nombre: "Duvalín 10g", categorias: ["Dulces", "Selección completa"], precio: 6.00, imagen: "img/duvalin.jpg" },
    { nombre: "Pandita 15g", categorias: ["Dulces", "Selección completa"], precio: 5.00, imagen: "img/panditas.jpg" },
    { nombre: "Snickers Fun Size", categorias: ["Dulces", "Selección completa"], precio: 7.00, imagen: "img/Snickers_Fun_Size.jpg" },
    { nombre: "Milkyways Fun Size", categorias: ["Dulces", "Selección completa"], precio: 7.00, imagen: "img/Milkyways_Fun_Size.jpg" },
    { nombre: "Kinder delice", categorias: ["Dulces", "Selección completa"], precio: 20.00, imagen: "img/delice.jpg" },
    { nombre: "Mentos 2.64g", categorias: ["Dulces", "Selección completa"], precio: 2.00, imagen: "img/mentos.png" },
    { nombre: "Bubulubu 20g", categorias: ["Dulces", "Selección completa"], precio: 20.00, imagen: "img/bubulubu.webp" },
    { nombre: "Mazapán", categorias: ["Dulces", "Selección completa"], precio: 15.00, imagen: "img/mazapan.jpeg" },
    { nombre: "Taitto Cacahuates 30g", categorias: ["Frituras", "Selección completa"], precio: 7.00, imagen: "img/taitto.jpeg" },
    { nombre: "Trident 4's", categorias: ["Dulces", "Selección completa"], precio: 3.00, imagen: "img/trident.jpeg" },
    { nombre: "Whatsapp doritos 240g", categorias: ["premium"], precio: 999999.999, imagen: "img/whatsapp.jpg" },
    { nombre: "Un abrazo de rodrigo", categorias: ["premium"], precio: 10.07, imagen: "img/roro's_shop.jpg" }
  ];

  function filterProductos(query) {
    const q = String(query || '').trim().toLowerCase();
    if (!q) return productos.slice();
    return productos.filter(p => p.nombre.toLowerCase().includes(q));
  }

  function renderProductos(container, lista, options = {}) {
    if (!container) return;
    container.innerHTML = '';
    if (!lista || lista.length === 0) {
      const p = document.createElement('p');
      p.className = 'no-results';
      p.textContent = options.emptyText || 'No se encontraron productos';
      container.appendChild(p);
      return;
    }

    lista.forEach(producto => {
      const div = document.createElement('div');
      div.className = 'producto-item';
      div.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio.toFixed(2)}</p>
      `;
      container.appendChild(div);
    });
  }

  function initSearch({inputSelector, resultsSelector, debounceMs = 150, emptyText}) {
    const input = document.querySelector(inputSelector);
    const results = document.querySelector(resultsSelector);
    if (!input || !results) return;

    let timeout = null;
    function onInput() {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const q = input.value;
        const lista = filterProductos(q);
        renderProductos(results, lista, { emptyText });
      }, debounceMs);
    }

    input.addEventListener('input', onInput);

    // Inicializar con query si existe en URL (productos.html puede usar ?q=...)
    const params = new URLSearchParams(location.search);
    const qParam = params.get('q');
    if (qParam) {
      input.value = qParam;
      const lista = filterProductos(qParam);
      renderProductos(results, lista, { emptyText });
    }
  }

  global.SearchModule = {
    productos,
    filterProductos,
    renderProductos,
    initSearch
  };

})(window);
