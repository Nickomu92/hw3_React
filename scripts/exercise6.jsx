/*
    6. Создайте приложение «Персональная страница». Оно будет содержать информацию о вас (ФИО, телефон, 
email, город проживания, опыт работы, навыки, фотографию и т.д.). 
    Обязательно используйте классовые компоненты и props.
*/

// Создание компонента "Header" классовый подход
class Header extends React.Component {
    render() {
        return <h2 class="text-center text-danger">{this.props.name}</h2>
    }
}

// Создание компонента "MyFullInfo" классовый подход
class MyFullInfo extends React.Component {
    render() {
        let lang = "progress-bar";
        let phone = "tel:+";

        return (
            <div class="container">
                <h3 class="text-center">{this.props.title}</h3>
                <div class="row">
                    <div class="col-sm-6 mt-2">
                        <img src={this.props.image} alt="Аватар"/>

                        <p class="mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-square" viewBox="0 0 20 20">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
                            </svg>
                            <span class="text-danger"> : {this.props.fullName}</span>;
                        </p>

                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 20 20">
                            <   path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            <a href={phone += this.props.phone}><span class="text-danger"> : +{this.props.phone}</span>;</a>
                        </p>

                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 20 20">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                            </svg>
                            <a href={this.props.email}><span class="text-danger"> : {this.props.email}</span>;</a>
                        </p>

                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-building" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
                                <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
                            </svg>
                            <span class="text-danger"> : {this.props.city}</span>;
                        </p>

                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-briefcase-fill" viewBox="0 0 20 20">
                                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
                                <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
                            </svg>
                            <span class="text-danger"> : {this.props.workExperience}</span>.
                        </p>
                    </div>

                    <div class="col-sm-6">

                        <div class="navbar-text text-dark">Навыки: </div>

                        <div class="progress mt-3">
                            <div class={lang + " w-" + this.props.lang1Level}>{this.props.lang1}</div>
                        </div>

                        <div class="progress mt-3">
                            <div class={lang + " w-" + this.props.lang2Level}>{this.props.lang2}</div>
                        </div>

                        <div class="progress mt-3">
                            <div class={lang + " w-" + this.props.lang3Level}>{this.props.lang3}</div>
                        </div>

                        <div class="progress mt-3">
                            <div class={lang + " w-" + this.props.lang4Level}>{this.props.lang4}</div>
                        </div>

                        <div class="progress mt-3">
                            <div class={lang + " w-" + this.props.lang5Level}>{this.props.lang5}</div>
                        </div>

                        <div class="progress mt-3">
                            <div class={lang + " w-" + this.props.lang6Level}>{this.props.lang6}</div>
                        </div>

                        <div class="progress mt-3">
                            <div class={lang + " w-" + this.props.lang7Level}>{this.props.lang7}</div>
                        </div>

                        <div class="progress mt-3">
                            <div class={lang + " w-" + this.props.tech1Level + " bg-danger"}>{this.props.tech1}</div>
                        </div>

                        <div class="progress mt-3">
                            <div class={lang + " w-" + this.props.tech2Level + " bg-danger"}>{this.props.tech2}</div>
                        </div>

                        <div class="progress mt-3">
                            <div class={lang + " w-" + this.props.tech3Level + " bg-warning"}>{this.props.tech3}</div>
                        </div>

                        <div class="progress mt-3">
                            <div class={lang + " w-" + this.props.tech4Level + " bg-warning"}>{this.props.tech4}</div>
                        </div>

                        <div class="progress mt-3">
                            <div class={lang + " w-" + this.props.tech5Level + " bg-warning"}>{this.props.tech5}</div>
                        </div>

                        <div class="progress mt-3">
                            <div class={lang + " w-" + this.props.lib1Level + " bg-success"}>{this.props.lib1}</div>
                        </div>

                        <div class="progress mt-3">
                            <div class={lang + " w-" + this.props.lib2Level + " bg-success"}>{this.props.lib2}</div>
                        </div>

                        
                    </div>
                </div>
            </div>
        )
    }
}

// Рендеринг компонентов "Header" и "MyFullInfo"
ReactDOM.render(
    <>
        <Header name = "Задание 6" />
        <MyFullInfo title = '"Персональная страница"' 
                    fullName = "Мулин Николай Сергеевич"
                    phone = "380981111111"
                    email = "https://github.com/Nickomu92"
                    city = "Запорожье"
                    workExperience = "2 года"
                    lang1 = "C++"  
                    lang2 = "C#" 
                    lang3 = "JavaScript" 
                    lang4 = "PHP" 
                    lang5 = "SQL" 
                    lang6 = "HTML" 
                    lang7 = "CSS" 
                    tech1 = "Windows Forms" 
                    tech2 = "WPF" 
                    tech3 = "ASP.Net" 
                    tech4 = "Angular"
                    tech5 = "Bootstrap" 
                    lib1 = "React" 
                    lib2 = "JQuery" 
                    lang1Level = "80"
                    lang2Level = "90"
                    lang3Level = "80"
                    lang4Level = "80"
                    lang5Level = "70"
                    lang6Level = "90"
                    lang7Level = "80"
                    tech1Level = "70"
                    tech2Level = "80"
                    tech3Level = "70"
                    tech4Level = "70"
                    tech5Level = "70"
                    lib1Level = "80"
                    lib2Level = "60"
                    image = "images/smile.jpg"/>
    </>,
    document.getElementById("section6")
);