// no ejecuta el script hasta que el dom ha cargado completamente
document.addEventListener("DOMContentLoaded", () => {
    // se obtienen los elementos del dom
    const ccaaSelect = document.getElementById("ccaa"); // select de comunidades autonomas
    const provinciaSelect = document.getElementById("provincia"); // select de provincias
    const poblacionSelect = document.getElementById("poblacion"); // select de poblaciones
    const form = document.querySelector("form"); // formulario
    const imageContainer = document.getElementById("image-container"); // contenedor donde se mostraran las imagenes

    // cargar comunidades autonomas al iniciar la pagina
    fetch("https://raw.githubusercontent.com/frontid/ComunidadesProvinciasPoblaciones/refs/heads/master/ccaa.json")
        .then(response => response.json()) // convertir respuesta a json
        .then(data => {
            // recorrer los datos obtenidos y agregar opciones al select de ccaa
            data.forEach(ccaa => {
                const option = document.createElement("option");
                option.value = ccaa.code; // el valor sera el codigo de la comunidad
                option.textContent = ccaa.label; // el texto sera el nombre de la comunidad
                ccaaSelect.appendChild(option);
            });
        })
        .catch(error => console.error("error cargando comunidades:", error));

    // cargar provincias cuando se selecciona una comunidad autonoma
    ccaaSelect.addEventListener("change", () => {
        // resetear los selects de provincia y poblacion
        provinciaSelect.innerHTML = '<option value="" disabled selected>selecciona una opcion</option>';
        poblacionSelect.innerHTML = '<option value="" disabled selected>selecciona una opcion</option>';

        // obtener las provincias desde el json
        fetch("https://raw.githubusercontent.com/frontid/ComunidadesProvinciasPoblaciones/refs/heads/master/provincias.json")
            .then(response => response.json())
            .then(data => {
                // filtrar las provincias que pertenecen a la comunidad seleccionada
                const provinciasFiltradas = data.filter(provincia => provincia.parent_code === ccaaSelect.value);
                // agregar las provincias filtradas al select
                provinciasFiltradas.forEach(provincia => {
                    const option = document.createElement("option");
                    option.value = provincia.code; // el valor sera el codigo de la provincia
                    option.textContent = provincia.label; // el texto sera el nombre de la provincia
                    provinciaSelect.appendChild(option);
                });
            })
            .catch(error => console.error("error cargando provincias:", error));
    });

    // cargar poblaciones cuando se selecciona una provincia
    provinciaSelect.addEventListener("change", () => {
        // resetear el select de poblacion
        poblacionSelect.innerHTML = '<option value="" disabled selected>selecciona una opcion</option>';

        // obtener las poblaciones desde el json
        fetch("https://raw.githubusercontent.com/frontid/ComunidadesProvinciasPoblaciones/refs/heads/master/poblaciones.json")
            .then(response => response.json())
            .then(data => {
                // filtrar las poblaciones que pertenecen a la provincia seleccionada
                const poblacionesFiltradas = data.filter(poblacion => poblacion.parent_code === provinciaSelect.value);
                // agregar las poblaciones filtradas al select
                poblacionesFiltradas.forEach(poblacion => {
                    const option = document.createElement("option");
                    option.value = poblacion.label; // el valor sera el nombre de la poblacion
                    option.textContent = poblacion.label; // el texto sera el nombre de la poblacion
                    poblacionSelect.appendChild(option);
                });
            })
            .catch(error => console.error("error cargando poblaciones:", error));
    });

    // interceptar el envio del formulario para buscar imagenes en wikimedia
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // evitar que el formulario se envie

        const poblacion = poblacionSelect.value; // obtener la poblacion seleccionada
        if (!poblacion) {
            imageContainer.innerHTML = "<p>selecciona una poblacion primero.</p>";
            return;
        }

        // construir la url de la api de wikimedia para obtener imagenes
        const wikiUrl = `https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&generator=images&titles=${encodeURIComponent(poblacion)}&gimlimit=10&prop=imageinfo&iiprop=url`;

        fetch(wikiUrl)
            .then(response => response.json())
            .then(data => {
                imageContainer.innerHTML = ""; // limpiar contenedor de imagenes

                // si no hay imagenes disponibles, mostrar un mensaje
                if (!data.query || !data.query.pages) {
                    imageContainer.innerHTML = "<p>no se encontraron imagenes para esta poblacion.</p>";
                    return;
                }

                // recorrer los datos obtenidos y agregar las imagenes al dom
                Object.values(data.query.pages).forEach(page => {
                    if (page.imageinfo && page.imageinfo.length > 0) {
                        const img = document.createElement("img");
                        img.src = page.imageinfo[0].url; // establecer la url de la imagen
                        img.alt = "imagen de " + poblacion; // establecer el texto alternativo
                        img.style.width = "200px"; // ajustar el tamaño de la imagen
                        img.style.margin = "5px"; // agregar margen entre imagenes
                        imageContainer.appendChild(img); // agregar la imagen al contenedor
                    }
                });
            })
            .catch(error => {
                console.error("error obteniendo imagenes:", error);
                imageContainer.innerHTML = "<p>ocurrio un error al obtener las imagenes.</p>";
            });
    });
});
