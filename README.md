# Proyecto 2: JS DOM

Para este proyecto he decidido empezar desde cero una página web sobre un concesionario de coches de lujo.
Me he basado en la siguiente página [DriverCars](https://www.drivercarsbcn.com/).
No es una copia exacta, ya que me he adaptado todos los puntos de del proyecto descrito en Notion.

Dejo el enlace de la página desplegada en Netlify: [DriverCars-AleixDeumal](https://drivercars.netlify.app/).

## Javascript DOM

### Objetos y maquetación
En este apartado enseñó como he decidido hacer la lógica de proyecto utilizando Javascript.

Primero de todo he creado unos objetos:

```javascript
const cars = [
    {
    brand: 'Porsche',
    model: 'Cayenne Coupé E-Hybrid Platimun Edition',
    year: 2023,
    kilometers: 2850,
    hp: 462,
    fueltype: 'Híbrido',
    price: 119900,
    img: 'https://res.cloudinary.com/LINK_IMG_CAR',
    }
];
```

Para pintar todos los objetos he hecho uso de un forEach.
Y para crear el artículo (en este caso un coche) he:
1. Creado diferentes etiquetas html.
2. Añadido clases a las etiquetas creadas.
3. Añadido el contenido de cada etiqueta, sacando la información de cada objeto.
4. Insertar cada etiqueta dentó de otras etiquetas.

### Filtros

Dos filtros implementados:

1. Selector de marca:
- Solo aparecen en el select de marcas las disponibles en objetos.
```javascript
const fillFilterBrand = () => {
    const uniqueBrands = new Set(cars.map(car => car.brand));
    for (var brand of uniqueBrands) {
        const $$selectBrand = document.createElement("option");
        $$selectBrand.value = brand;
        $$selectBrand.text = brand;
        $$brandSelect.appendChild($$selectBrand);
    }
};
```
- Al dar clic en la marca que quieres buscar solo aparecerán los coches de esa marca.

2. Filtro de precio máximo:
- Solo salen vehículos por menos del precio que seleccione el usuario.

En el mismo IF controló las dos condiciones de los filtros en función del usuario.
```javascript
function filterCar() {
    const brandCarUser = cars.filter((car) =>{
        if ($$brandSelect.value === car.brand && $$priceInput.value > car.price) {
            return car;
        } else if ($$brandSelect.value === "marca" && $$priceInput.value > car.price) {
            return cars;
        }
    });
    printCarsOnSale(brandCarUser);
}
```
## HTML5 y CSS

He dado estilo a la web, y he hecho que toda la web sea responsiva para cualquier dispositivo.



