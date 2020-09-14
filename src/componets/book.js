import React, { Component } from 'react'
import { Modal, Container, Col, Row, Button } from 'react-bootstrap'

import book1 from './img/book1.jpg'
import book2 from './img/book2.jpg'
import book3 from './img/book3.jpg'
import book4 from './img/book4.jpg'
import book5 from './img/book5.jpg'
import book6 from './img/book6.jpg'
import book7 from './img/book7.jpg'
import book8 from './img/book8.jpg'
import book9 from './img/book9.jpg'

class App extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: null
        };

        this.cards1 = [

            {
                image: book1, title: 'Lovecraft medo clássico Vol: 1',
                reactId: '1',
                modalText: 'Este primeiro volume traz 9 contos de Lovecraft que ilustram bem a técnica e o estilo do autor. Conhecido mais por seu pavoroso monstro Cthulhu, seus contos abordam o desconhecido por diferentes frentes e enredos, indo de explorações geológicas, seres demoníacos e o livro dos mortos.'

            },
            {
                image: book2, title: 'Harry Potter e o cálice de fogo',
                reactId: '2',
                modalText: 'Harry está prestes a iniciar seu quarto ano em Hogwarts ao lado dos amigos Rony e Hermione. Porém eles aproveitam o tempo restante das férias para irem à final da Copa Mundial de Quadribol. As coisas já começam a ficar estranhas lá mesmo quando a Marca Negra, o símbolo de Lorde Voldemort, surge no céu. Quando as aulas se iniciam, eles são informados de que ocorrerá o Torneio Tribruxo, onde as três maiores escolas de magia da Europa competem entre si numa série de tarefas e missões. Cada uma das instituições – Hogwarts, Beauxbatons e Durmstrang – são representadas por um campeão cujo nome é selecionado pelo Cálice de Fogo. Porém, quando o nome de Harry sai do Cálice como um quarto campeão, ele e seus companheiros percebem que alguma coisa está errada.'
            },
            {
                image: book3, title: 'O Chamado de Cthulhu e outros contos',
                reactId: '3',
                modalText: 'Quando assume a herança do seu tio-avô George Gamell Angell em Rhode Island por conta de sua misteriosa e mal explicada morte, o narrador, Francis Wyland Thurston, mal sabe os caminhos que o conduzirão desde então. Quando estava se inteirando acerca da vasta documentação deixada pelo famoso professor de idiomas e semiótica, eis que ele acha curiosas anotações de uma série de casos que aparentemente levam a um fio condutor de eventos que possivelmente acarretaram na morte do celebre pesquisador. Partindo das pistas e anotações deixadas por George Angell, o narrador vai se deparar com episódios macabros pontuados por seitas e rituais ocultistas, esculturas horrendas, sacrifícios humanos, escritos antigos e o ressurgimento de uma tenebrosa criatura de idos tempos imemoriais.'
            }

        ]

        this.cards2 = [
            {
                image: book4, title: 'A cor que caiu do céu',
                reactId: '4',
                modalText: 'Ele conta que anos atrás um meteorito caiu nas terras de Nahum Gardner, que os cientistas foram chamados, mas não conseguiram concluir suas pesquisas. Descobriram apenas que o meteorito não era tão sólido quanto parecia e que ao ser cortado liberou uma cor desconhecida pelos humanos e que era impossível ser descrita.'

            },
            {
                image: book5, title: 'Sussurruos da escuridão',
                reactId: '5',
                modalText: 'Neste conto de horror cósmico, Lovecraft envolve o leitor em uma narrativa rica em detalhes, onde as Criaturas Siderais habitantes de Yuggoth - o nono planeta do Sistema Solar - invadem uma região em Vermont, fato que é atestado por um morador local que se comunica com um importante estudioso por meio de cartas.'
            },
            {
                image: book6, title: 'Simulacros da escuridão',
                reactId: '6',
                modalText: 'Outra espécie, inteligente e perspicaz, de um universo paralelo, deseja ajudar os seres humanos contra uma ameaça real, a aproximação do asteroide Apophis. A desconfiança e a ambição humana desencadeiam uma série de eventos que vão de denúncias e traições a guerras, disputas pó pode, ações inescrupulosas, impensadas e impensáveis. O conflito de ideias, o descortinas de um mundo, a princípio, completamente diferente, com uma cultura pautada na razão e na filosofia, coloca em cheque grades pilares da construção humana como democracia, intervenção estatal, sistema jurídico e prisional, sustentabilidade, sigilo e privacidade, sistema político e muitas outras coisas. Um livro, uma história, mil dilemas, mas também umas verdadeiras análises de como as boas ideias poderiam e deveriam ser aplicadas. Um confronto de verdades. Um vale-tudo filosófico.'
            }
        ]

        this.cards3 = [
            {
                image: book7, title: 'Star Wars: Segredos da Galaxia',
                reactId: '7',
                modalText: 'Os segredos da galáxia Star Wars foram registrados em uma série de manuais e guias criados e mantidos escondidos pela Ordem Jedi, os Sith, a Guilda dos Caçadores de Recompensas e o próprio Império. Situado no mundo, ricamente ilustrado e anotado por personagens como Luke Skywalker, Leia Organa, Boba Fett, Yoda e Darth Vader, cada volume expande a mitologia de Star Wars com detalhes de dentro e aprofunda a experiência dos leitores da saga. Este conjunto de caixa de edição deluxe coleta The Jedi Path, Book of Sith, The Bounty Hunter Code e Imperial Handbook em uma bela e acessível estojo personalizado, criando uma biblioteca útil e inestimável para explorar uma galáxia muito, muito distante.'

            },
            {
                image: book8, title: 'As crônicas de Nárnia completo',
                reactId: '8',
                modalText: 'A série apresenta jornadas de crianças que contem algo em comum, todas descobrem um reino mágico e fantástico chamado Nárnia, onde os animais possuem o dom da fala e seguem o Grande Leão, Aslam. As Crônicas de Nárnia é considerada um clássico literário e vendeu milhões de copias ao redor do mundo e é um excelente material para leitores interessados em uma boa história fantástica.'
            },
            {
                image: book9, title: 'World of Warcraft: crônica Vol.1',
                reactId: '9',
                modalText: 'World of Warcraft é uma franquia de sucesso no mundo dos jogos on-line. Segundo números da Blizzard, sua desenvolvedora, mais de 100 milhões de jogadores, de 244 países e territórios, controlam cerca de 500 milhões de personagens em seu universo místico virtual.  Em World of Warcraft: Crônica (vol. 1), os leitores conhecerão – ou revisitarão – a época da criação do mundo e do surgimento de todas as espécies vivas, tendo a oportunidade de conhecer a história ainda não contada por trás de heróis consagrados, como Lorde Illidan Tempesfúria e a elfa Tyrande Murmuréolo.'
            }
        ]


    }

    handleClose() {
        this.setState({ show: null });
    }

    handleShow(id) {
        this.setState({ show: id });
    }

    renderModals() {
        return this.cards1.map(modal => {
            return (
                <>
                    <Modal show={this.state.show === modal.reactId} onHide={this.handleClose}>
                        <Modal.Header closeButton closeLabel="close window"><h3>Sobre a obra:</h3></Modal.Header>
                        <Modal.Body>
                            <div class="container">

                                <div class="row">
                                    <div class="col text-center">
                                        <img src={modal.image} className="modalImage"></img>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <h4 class="booktitle text-center">{modal.title}</h4>
                                        <p class="resume">{modal.modalText} </p>
                                    </div>
                                </div>

                            </div>
                        </Modal.Body>
                    </Modal>
                </>
            )
        });
    }

    renderModals2() {
        return this.cards2.map(modal => {
            return (
                <>
                    <Modal show={this.state.show === modal.reactId} onHide={this.handleClose}>
                        <Modal.Header closeButton closeLabel="close window"><h3>Sobre a obra:</h3></Modal.Header>
                        <Modal.Body>
                            <div class="container">

                                <div class="row">
                                    <div class="col text-center">
                                        <img src={modal.image} className="modalImage"></img>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <h4 class="booktitle text-center">{modal.title}</h4>
                                        <p class="resume">{modal.modalText} </p>
                                    </div>
                                </div>

                            </div>
                        </Modal.Body>
                    </Modal>
                </>
            )
        });
    }

    renderModals3() {
        return this.cards3.map(modal => {
            return (
                <>
                    <Modal show={this.state.show === modal.reactId} onHide={this.handleClose}>
                        <Modal.Header closeButton closeLabel="close window"><h3>Sobre a obra:</h3></Modal.Header>
                        <Modal.Body>
                            <div class="container">

                                <div class="row">
                                    <div class="col text-center">
                                        <img src={modal.image} className="modalImage"></img>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <h4 class="booktitle text-center">{modal.title}</h4>
                                        <p class="resume">{modal.modalText} </p>
                                    </div>
                                </div>

                            </div>
                        </Modal.Body>
                    </Modal>
                </>
            )
        });
    }

    renderCard() {
        return this.cards1.map(modal => {
            return (

                <>
                    <div className='col-sm-4 '>
                        <div className='container text-center'>
                            <div className='card-body text-center ' >
                                <div className='overflow'>
                                    <img src={modal.image} className={"card-img-top"}></img>
                                </div>
                                <h4 className='card-title text-dark'>{modal.title}</h4>
                                
                                <Button variant="outline-secondary"  onClick={() => this.handleShow(modal.reactId)}>Ver mais</Button>
                                

                            </div>
                        </div>
                    </div>
                    </>

            )
        });
    }
    
    renderCard2() {
        return this.cards2.map(modal => {
            return (

                <>
                    <div className='col-sm-4 '>
                        <div className='container text-center'>
                            <div className='card-body text-center ' >
                                <div className='overflow'>
                                    <img src={modal.image} className={"card-img-top"}></img>
                                </div>
                                <h4 className='card-title text-dark'>{modal.title}</h4>
                                <Button variant="outline-secondary" onClick={() => this.handleShow(modal.reactId)}>Ver mais</Button>
                            </div>
                        </div>
                    </div>
                    </>

            )
        });
    }

    renderCard3() {
        return this.cards3.map(modal => {
            return (

                <>
                    <div className='col-sm-4 '>
                        <div className='container text-center'>
                            <div className='card-body text-center ' >
                                <div className='overflow'>
                                    <img src={modal.image} className={"card-img-top"}></img>
                                </div>
                                <h4 className='card-title text-dark'>{modal.title}</h4>
                                <Button variant="outline-secondary" onClick={() => this.handleShow(modal.reactId)}>Ver mais</Button>
                            </div>
                        </div>
                    </div>
                    </>

            )
        });
    }





    render() {
        return (
                    <>
                        <section class="header">

                            <h2 class="title1">Seja bem vindo ao,</h2>
                            <h1 class="title2">IBook</h1>

                        </section>

                        <section className={"body"}>

                        <div class="title3">

                            <h1>Livros</h1>
                            <p>Escolha seu livro e aproveite a resenha.</p>

                        </div>

                            <Container >
                                <Row className="justify-content-md-center">
                                    {this.renderModals()}
                                    {this.renderCard()}
                                </Row >
                                <Row className="justify-content-md-center">
                                    {this.renderModals2()}
                                    {this.renderCard2()}
                                </Row>
                                <Row className="justify-content-md-center">
                                    {this.renderModals3()}
                                    {this.renderCard3()}
                                </Row>
                            </Container>
                        </section>

                        <section class="body2"></section>

                        <section class="footer">

                            <p>Feito por Pedro Luz.</p>
                            <p>Os direitos de imagens são de seus respectivos donos</p>

                        </section>


                    </>
        );
    }






}

export default App;