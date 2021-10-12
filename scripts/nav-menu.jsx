// Создание компонента "NavMenu" функциональный подход с ссылками-якорями для навигации по странице
function NavMenu() {
    return (
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <div class="container-fluid">
                <span class="navbar-text text-danger logo" title="Николай Мулин">Niko<span class="text-warning logo">Mu</span></span>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" href="#section1">Задание 1</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#section2">Задание 2</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#section3">Задание 3</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#section4">Задание 4</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#section5">Задание 5</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#section6">Задание 6</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

// Рендеринг компонента "NavMenu"
ReactDOM.render(
    <NavMenu />,   
    document.querySelector("header")
);