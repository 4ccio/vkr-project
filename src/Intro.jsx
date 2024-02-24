const Intro = () => {
    return (
        <div className="d-flex flex-column min-vh-100 p-3">
            <header className="mb-auto pb-3 header ">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center display-3 main-heading">Investika</h1>
                    </div>
                </div>
            </div>
            </header>
            <div className="container intro mx-auto">
                <div className="row ">
                    <div className="col-12 ">
                        <p className="text-center fs-2 ">Добро пожаловать!</p> 
                        <p className="text-center fs-2">На нашем сайте представлены обучающие материалы для изучения основ инвестирования.</p> 
                        <p className="text-center fs-2 ">Наша цель - помочь вам разобраться в мире инвестиций.</p> 
                        <p className="text-center small disclaimer">Важно отметить, что все материалы, представленные на нашем сайте, предназначены исключительно для образовательных целей. Мы не предоставляем инвестиционных советов или рекомендаций. Вся информация здесь служит лишь для ознакомления.</p>
                    </div>
                </div>
            </div>
            <footer className="mt-auto">
                <div className="d-grid col-4 mx-auto py-4">
                    <button href="#investments" className="btn btn-outline-dark ">Начать</button>
                </div>
            </footer>
        </div>
    )
}

export default Intro;