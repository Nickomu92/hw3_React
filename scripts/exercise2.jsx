/*
    2. Создайте и запустите приложение React, выводящее краткую информацию о вашем городе в браузер. 
Например: название города, название страны, год основания, несколько фотографий достопримечательностей 
вашего города.
    При разработке нужно использовать функциональные компоненты и синтаксис JSX.
*/


// Создание компонента "Header" функциональный подход
function Header() {
    return <h2 class="text-center text-danger">Задание 2</h2>
}

// Создание компонента "CarouselPhotos" функциональный подход (анонимная функция)
const CityInfo = function() {
    return (
        <>
            <p>Город: <span class="text-danger">Запорожье</span>;</p>
            <p>Страна: <span class="text-danger">Украина</span>;</p> 
            <p>Год Основания: <span class="text-danger">1770 год</span>.</p>
        </>
    )
}

// Создание компонента "CarouselPhotos" функциональный подход (стрелочная функция)
const CarouselPhotos = () => { 
    return (
        <div id="demo" class="carousel slide" data-bs-ride="carousel">

                
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
        </div>

        
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="images/zp_1.jpg" alt="Los Angeles" class="d-block w-100" />
                <div class="carousel-caption">
                    <h3>Запорожье</h3>
                    <p>Соборный проспект вечером</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="images/zp_2.jpg" alt="Chicago" class="d-block w-100" />
                <div class="carousel-caption">
                    <h3>Запорожье</h3>
                    <p>Майдан Героев</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="images/zp_3.jpg" alt="New York" class="d-block w-100" />
                <div class="carousel-caption">
                    <h3>Запорожье</h3>
                    <p>Соборный проспект вечером</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="images/zp_4.jpg" alt="Los Angeles" class="d-block w-100" />
                <div class="carousel-caption">
                    <h3>Запорожье</h3>
                    <p>Khortitsa palace</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="images/zp_5.jpg" alt="Chicago" class="d-block w-100" />
                <div class="carousel-caption">
                    <h3>Запорожье</h3>
                    <p>Национальный университет «Запорожская политехника»</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="images/zp_6.jpg" alt="New York" class="d-block w-100" />
                <div class="carousel-caption">
                    <h3>Запорожье</h3>
                    <p>Областной украинский музыкально-драматический театр имени В.Г.Магара</p>
                </div>
            </div>
        </div>


        <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>
        </div>
                
    )   
};

// Рендеринг компонентов "Header", "CityInfo" и "CarouselPhotos"
ReactDOM.render(
    <div id="container">
        <Header />
        <CityInfo />
        <CarouselPhotos />
    </div>,
    document.getElementById("section2")
)