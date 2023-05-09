const cars = [
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
    {
        brand: 'Porsche',
        model: '992 GT3 ', 
        year: 2022,
        kilometers: 2950, 
        hp: 510,
        fueltype: 'Gasolina',
        price: 268900,
        img:  'https://res.cloudinary.com/di9oyejfn/image/upload/v1683559298/project2-js-dom/1-4-798x466_atfcxr.jpg',
    },
];


const $$hamburger = document.getElementById("hamburger");
const $$mainlistNavigator = document.getElementById("dc-navbar-mainlist");
const $$brandSelect = document.getElementById("marca"); 
const $$priceInput = document.getElementById("price"); 
const $$filterPrice = document.getElementById("fprice");
const $$reset = document.getElementById("reset");
$$priceInput.value = 1000000;

$$hamburger.onclick = function() {
    if (this.checked) {
        $$mainlistNavigator.classList.remove("hiddenNav");
    } else {
        $$mainlistNavigator.classList.add("hiddenNav");
    }
};

const fillFilterBrand = () => {
    const uniqueBrands = new Set(cars.map(car => car.brand));
    for (var brand of uniqueBrands) {
        const $$selectBrand = document.createElement("option");
        $$selectBrand.value = brand;
        $$selectBrand.text = brand;
        $$brandSelect.appendChild($$selectBrand);
    }
};
fillFilterBrand();

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

$$brandSelect.addEventListener("click", () => {
    filterCar();
});

$$filterPrice.addEventListener("click", () => {
    filterCar();
});

$$reset.addEventListener("click", () => {
    $$brandSelect.value = "marca";
    $$priceInput.value = 1000000;
    filterCar();
});

const printCarsOnSale = (CarUser) => {
    const $$onSaleCarsList = document.getElementById("dc-cars");
    $$onSaleCarsList.innerHTML = "";

    CarUser.forEach((car) => {
        
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
        const $$dataMetaTopDiv = document.createElement("div");
        const $$dataMetaDiv = document.createElement("div");
        const $$dataMetaBottomDiv = document.createElement("div");
        const $$dataMetaImgDiv = document.createElement("div");

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
        $$dataMetaDiv.classList.add('dc-single-dataMeta');
        $$dataMetaTopDiv.classList.add('dc-single-dataMetaTopDiv');
        $$dataMetaBottomDiv.classList.add('dc-single-dataMetaBottomDiv');
        $$dataMetaImgDiv.classList.add('dc-single-dataMetaImgDiv');   

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
        $$dataMetaTopDiv.appendChild($$priceCar);
        $$dataMetaTopDiv.appendChild($$brand);
        $$dataMetaImgDiv.appendChild(CarImage);
        $$dataMetaBottomDiv.appendChild($$year);
        $$dataMetaBottomDiv.appendChild($$kilometers);
        $$dataMetaBottomDiv.appendChild($$hp);
        $$dataMetaBottomDiv.appendChild($$fuel);
        $$divCar.appendChild($$dataMetaImgDiv);
        $$dataMetaDiv.appendChild($$dataMetaTopDiv);
        $$dataMetaDiv.appendChild($$dataMetaBottomDiv);
        $$dataMetaDiv.appendChild($$buttonSeeMoreDiv);
        $$divCar.appendChild($$dataMetaDiv);

        $$onSaleCarsList.appendChild($$divCar);
    });
};

filterCar();
