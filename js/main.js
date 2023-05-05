const  cars = [
    {
        brand: 'Porsche',
        model: 'Cayenne Coupé E-Hybrid Platimun Edition', 
        year: 2023,
        kilometers: 2850, 
        hp: 462,
        fueltype: 'Híbrido',
        price: 119900,
        img:  'https://res.cloudinary.com/di9oyejfn/image/upload/v1683195730/project2-js-dom/1-11-798x466_uojsy6.jpg',
    },
    {
        brand: 'Audi',
        model: 'RS3 Sportback', 
        year: 2023,
        kilometers: 1800, 
        hp: 400,
        fueltype: 'Gasolina',
        price: 85900,
        img:  'https://res.cloudinary.com/di9oyejfn/image/upload/v1683195708/project2-js-dom/PHOTO-2023-04-21-16-16-57-798x466_in8wv3.jpg',
    },
    {
        brand: 'BMW',
        model: 'M4 Competition M xDrive', 
        year: 2023,
        kilometers: 4900, 
        hp: 510,
        fueltype: 'Gasolina',
        price: 118900,
        img:  'https://res.cloudinary.com/di9oyejfn/image/upload/v1683195498/project2-js-dom/1-6-798x466_wcxyzw.jpg',
    },
];




const printCarsOnSale = () => {
    cars.forEach((car) => {
        const $$onSaleCarsList = document.getElementById("dc-cars");

        //create new elements
        const $$divCar = document.createElement("div");
        const CarImage = new Image();
        const $$priceCar = document.createElement("span");
        const $$brand = document.createElement("a");
        const $$year = document.createElement("span"); 
        const $$kilometers = document.createElement("span");
        const $$hp = document.createElement("span");
        const $$fuel = document.createElement("span");
        const $$buttonSeeMore = document.createElement("a");
        const $$buttonSeeMoreDiv = document.createElement("div");



        //añadir clases
        $$divCar.classList.add('dc-single-car');
        $$brand.classList.add('dc-single-car__brandTitle');
        $$priceCar.classList.add('dc-single-car__price');
        $$year.classList.add('dc-single-car__table');
        $$kilometers.classList.add('dc-single-car__table');
        $$hp.classList.add('dc-single-car__table');
        $$fuel.classList.add('dc-single-car__table');
        $$buttonSeeMore.classList.add('dc-single-buttonSeeMore');
        $$buttonSeeMoreDiv.classList.add('dc-single-divButtonSeeMore');

        
        //merge with elements and collect info from objects
        CarImage.src = car.img;
        $$brand.innerHTML = `${car.brand} ${car.model}`;
        $$priceCar.innerHTML = `${car.price}€`;
        $$year.innerHTML = `<i class="fa-duotone fa-tag"></i> Año <strong>${car.year}</strong>`;
        $$kilometers.innerHTML = `<i class="fa-duotone fa-road"></i> Kilometraje <strong>${car.kilometers} km</strong>`;
        $$hp.innerHTML = ` <i class="fa-solid fa-engine"></i> Potencia <strong>${car.hp} CV</strong>`;
        $$fuel.innerHTML = ` <i class="fa-solid fa-gas-pump"></i> Combustible <strong>${car.fueltype}</strong>`;
        $$buttonSeeMore.innerHTML = `VER MÁS`;

        
        //insert on HTML5
        $$buttonSeeMoreDiv.appendChild($$buttonSeeMore);
        $$divCar.appendChild(CarImage);
        $$divCar.appendChild($$priceCar);
        $$divCar.appendChild($$brand);
        $$divCar.appendChild($$year);
        $$divCar.appendChild($$kilometers);
        $$divCar.appendChild($$hp);
        $$divCar.appendChild($$fuel);
        $$divCar.appendChild($$buttonSeeMoreDiv);

        $$onSaleCarsList.appendChild($$divCar);
        
        
    });
};

printCarsOnSale();
