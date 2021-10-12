/*
    5. Создайте приложение «Любимый кинофильм». Оно будет содержать информацию о вашем любимом фильме: 
название фильма, ФИО режиссера, год выпуска, киностудия, постер и т.д. 
    Обязательно используйте функциональные компоненты и props
*/

// Создание компонента "Header" функциональный подход (стрелочная функция)
const Header = (props) => {
    return <h2 class="text-center text-success">{props.text}</h2>
}

// Создание компонента "Movie" функциональный подход (стрелочная функция)
const Movie = (props) => {
    return (
        <>
            <h3 class="text-center">{props.title}</h3>
            <p>Название: <span class="text-success">{props.name}</span>;</p>
            <p>Режиссер: <span class="text-success">{props.producer}</span>;</p>
            <p>Год: <span class="text-success">{props.year}</span>;</p>
            <p>Киностудия: <span class="text-success">{props.filmCompany}</span></p>
            <p>Постер:<br/><img src={props.image} alt="Taxi (1998) постер" class="img-thumbnail" /></p>
        </>
    )
}

// Рендеринг компонентов "Header" и "Movie"
ReactDOM.render(
    <div className="container">
        <Header text = "Задание 5"/>
        <Movie title = "'Любимый кинофильм'" name="Taxi" producer="Люк Бессон" year="1998" filmCompany="Canal+" image="images/taxi_1998_movie.png"/>
    </div>,
    document.getElementById("section5")
)