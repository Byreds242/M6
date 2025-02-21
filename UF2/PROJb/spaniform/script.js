document.addEventListener("DOMContentLoaded", () => {
    // 1,2 y 3. FORMULARIO Y SELECCION
    const ccaaSelect = document.getElementById("ccaa"); // Selector de comunidades autónomas
    const provinciaSelect = document.getElementById("provincia"); // Selector de provincias
    const poblacionSelect = document.getElementById("poblacion"); // Selector de poblaciones
    const form = document.querySelector("form"); // Formulario principal

    // 4. VISUALIZACION DE IMAGENES Y DATOS
    const imageContainer = document.getElementById("image-container"); // Contenedor para imágenes
    const datosContainer = document.createElement("div"); // Contenedor dinámico para datos de la población
    document.body.appendChild(datosContainer); // Añadir el contenedor de datos al body

    // 5 y 6. TEMA Y CLIMA
    const themeToggleButton = document.getElementById("theme-toggle"); // Botón para cambiar el tema (oscuro/claro)
    const apiKey = "1d4f152cf627f5b0b4294aaad9ede14a"; // API Key de OpenWeather para obtener datos del clima

    // 9. SELECCION DE POBLACION Y TEXTO
    const poblacionTextoContainer = document.getElementById("poblacion-texto-container"); // Contenedor para el texto de la población seleccionada

    // 10. CARGA DE IMAGENES
    const fileInput = document.getElementById('fileInput'); // Input para seleccionar una imagen
    const imagePreview = document.createElement("img"); // Elemento <img> para mostrar la vista previa de la imagen
    imageContainer.appendChild(imagePreview); // Añadir la vista previa al contenedor de imágenes

    // 11. MODAL
    const infoButton = document.getElementById("info-button"); // Botón para abrir el modal de información
    const modal = document.getElementById("info-modal"); // Modal que muestra información sobre las APIs
    const closeButton = document.querySelector(".close"); // Botón para cerrar el modal


    //===========================================================================================
    // 1️. cargar comunidades autonomas
    fetch("https://raw.githubusercontent.com/frontid/ComunidadesProvinciasPoblaciones/refs/heads/master/ccaa.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(ccaa => {
                const option = document.createElement("option");
                option.value = ccaa.code;
                option.textContent = ccaa.label;
                ccaaSelect.appendChild(option);
            });
        })
        .catch(error => console.error("Error cargando comunidades:", error));

    //===========================================================================================
    // 2️. cargar provincias al seleccionar una comunidad
    ccaaSelect.addEventListener("change", () => {
        provinciaSelect.innerHTML = '<option value="" disabled selected>Selecciona una opción</option>';
        poblacionSelect.innerHTML = '<option value="" disabled selected>Selecciona una opción</option>';

        fetch("https://raw.githubusercontent.com/frontid/ComunidadesProvinciasPoblaciones/refs/heads/master/provincias.json")
            .then(response => response.json())
            .then(data => {
                const provinciasFiltradas = data.filter(provincia => provincia.parent_code === ccaaSelect.value);
                provinciasFiltradas.forEach(provincia => {
                    const option = document.createElement("option");
                    option.value = provincia.code;
                    option.textContent = provincia.label;
                    provinciaSelect.appendChild(option);
                });
            })
            .catch(error => console.error("Error cargando provincias:", error));
    });

    //=========================================================================================== 
    // 3️. cargar poblaciones al seleccionar una provincia
    provinciaSelect.addEventListener("change", () => {
        poblacionSelect.innerHTML = '<option value="" disabled selected>Selecciona una opción</option>';

        fetch("https://raw.githubusercontent.com/frontid/ComunidadesProvinciasPoblaciones/refs/heads/master/poblaciones.json")
            .then(response => response.json())
            .then(data => {
                const poblacionesFiltradas = data.filter(poblacion => poblacion.parent_code === provinciaSelect.value);
                poblacionesFiltradas.forEach(poblacion => {
                    const option = document.createElement("option");
                    option.value = poblacion.label;
                    option.textContent = poblacion.label;
                    poblacionSelect.appendChild(option);
                });
            })
            .catch(error => console.error("Error cargando poblaciones:", error));
    });

    //=========================================================================================== 
    // 4. buscar de imágenes en Wikimedia al enviar el formulario
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const poblacion = poblacionSelect.value;
        if (!poblacion) {
            imageContainer.innerHTML = "<p>Selecciona una población primero.</p>";
            return;
        }

        const wikiUrl = `https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&generator=images&titles=${encodeURIComponent(poblacion)}&gimlimit=10&prop=imageinfo&iiprop=url`;

        fetch(wikiUrl)
            .then(response => response.json())
            .then(data => {
                imageContainer.innerHTML = "";
                if (!data.query || !data.query.pages) {
                    imageContainer.innerHTML = "<p>No se encontraron imágenes para esta población.</p>";
                    return;
                }

                Object.values(data.query.pages).forEach(page => {
                    if (page.imageinfo && page.imageinfo.length > 0) {
                        const img = document.createElement("img");
                        img.src = page.imageinfo[0].url;
                        img.alt = "Imagen de " + poblacion;
                        img.style.width = "200px";
                        img.style.margin = "5px";
                        imageContainer.appendChild(img);
                    }
                });
            })
            .catch(error => {
                console.error("Error obteniendo imágenes:", error);
                imageContainer.innerHTML = "<p>Ocurrió un error al obtener las imágenes.</p>";
            });
    });

    //===========================================================================================
    // 5. obtener y mostrar datos del clima de la población seleccionada con OpenWeather
    poblacionSelect.addEventListener("change", () => {
        const poblacion = poblacionSelect.value;
        if (poblacion) {
            obtenerClima(poblacion);
        }
    });

    // obtener clima con Openweather
    function obtenerClima(poblacion) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${poblacion},es&appid=${apiKey}&units=metric&lang=es`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    mostrarClima(data);
                } else {
                    datosContainer.innerHTML = "<p>No se pudo obtener la información del clima.</p>";
                }
            })
            .catch(error => {
                console.error("Error obteniendo datos del clima:", error);
                datosContainer.innerHTML = "<p>Ocurrió un error al obtener los datos del clima.</p>";
            });
    }

    // mostrar clima
    function mostrarClima(data) {
        const climaHTML = `
            <h2>Clima de ${data.name}</h2>
            <p><strong>Temperatura:</strong> ${data.main.temp} °C</p>
            <p><strong>Humedad:</strong> ${data.main.humidity} %</p>
            <p><strong>Descripción:</strong> ${data.weather[0].description}</p>
            <p><strong>Viento:</strong> ${data.wind.speed} m/s</p>
        `;
        datosContainer.innerHTML = climaHTML;
    }

    //=========================================================================================== 
    // 6. mostrar clima
    function mostrarClima(data) {
        // Actualizamos los valores en el HTML
        const location = document.getElementById("location");
        const temp = document.getElementById("temp");
        const weatherDesc = document.getElementById("weatherDesc");
        const humidity = document.getElementById("humidity");
        const wind = document.getElementById("wind");
        const precipitation = document.getElementById("precipitation");

        // Mostrar datos de la población, clima, humedad y viento
        location.textContent = `${data.name}, ${data.sys.country}`;
        temp.textContent = `${data.main.temp} °C`;
        weatherDesc.textContent = data.weather[0].description;
        humidity.textContent = `${data.main.humidity} %`;
        wind.textContent = `${data.wind.speed} m/s`;

        // Para precipitación, OpenWeather no siempre proporciona este dato,
        // así que lo dejamos como 0% si no está disponible.
        const precip = data.rain ? data.rain['1h'] : 0;
        precipitation.textContent = `${precip}%`;
    }

    //=========================================================================================== 
    // 7. actualizar a fecha de hoy en el tiempo
    function actualizarFecha() {
        const fecha = new Date();

        // Array con los días de la semana
        const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        // Array con los meses
        const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

        // Obtenemos el día de la semana y el día del mes
        const diaSemana = diasSemana[fecha.getDay()];
        const diaMes = fecha.getDate();
        const mes = meses[fecha.getMonth()];
        const anio = fecha.getFullYear();

        // Actualizamos el HTML con los valores
        document.getElementById("dayName").textContent = diaSemana;
        document.getElementById("fullDate").textContent = `${diaMes} de ${mes} ${anio}`;
    }

    // Llamamos a la función para que se ejecute cuando cargue la página
    actualizarFecha();

    //===================================================================================================================== 
    // 8. cambiar de tema (oscuro y claro
    themeToggleButton.addEventListener("click", () => {
        let root = document.documentElement;
        let currentBgColor = getComputedStyle(root).getPropertyValue("--bg-color").trim();

        if (currentBgColor === "white" || currentBgColor === "") {
            root.style.setProperty("--bg-color", "black");
            root.style.setProperty("--text-color", "white");
        } else {
            root.style.setProperty("--bg-color", "white");
            root.style.setProperty("--text-color", "black");
        }
    });

    //===========================================================================================
    // 9. mostrar nombre de la poblacion seleccionada
    poblacionSelect.addEventListener("change", () => {
        let poblacionSeleccionada = poblacionSelect.value;

        // verficar si ya existe un p y lo actualizamos, sino, lo creamos
        let p = document.getElementById("poblacion-seleccionada");
        if (!p) {
            p = document.createElement("p"); // parrafo
            p.id = "poblacion-seleccionada";
            poblacionTextoContainer.appendChild(p); // lo agregamos al contenedor
        }

        p.textContent = `¿Quieres agregar una foto de ${poblacionSeleccionada}?`;
    });

    //===========================================================================================
    // 10. funcion para leer la imagen cuando el usuario la selecciona
    fileInput.addEventListener("change", function (event) {
        const file = event.target.files[0]; // Obtener el archivo seleccionado

        if (file) {
            const reader = new FileReader(); // Crear un nuevo FileReader para leer la imagen

            // Definir el comportamiento cuando la imagen se lea correctamente
            reader.onload = function (e) {
                const imageUrl = e.target.result; // Obtener la URL de la imagen leída
                imagePreview.src = imageUrl; // Establecer la imagen en el src del <img>
            };

            // Leer el archivo como una URL de datos (para mostrar imágenes)
            reader.readAsDataURL(file);
        } else {
            imagePreview.src = ""; // Si no se selecciona ninguna imagen, limpiar la vista previa
        }
    });

    //===========================================================================================
    // 11. modal
    infoButton.addEventListener("click", () => {
        modal.style.display = "block";
    });

    // cerrar el modal al presionar X
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // cerrar el modal al dar click fuera
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });


});
