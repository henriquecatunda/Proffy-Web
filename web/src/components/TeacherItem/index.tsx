import React from 'react';
import WhatsappIcon from "../../assets/images/icons/whatsapp.svg"
import './styles.css'


function TeacherItem (){

    return(

        <article className="teacher-iten">
                    <header>
                        <img src="https://avatars3.githubusercontent.com/u/65199498?s=460&u=86072499fdeedfc6f7f08d29a7e710c38f44755b&v=4" alt="Henrique"/>

                        <div>
                            <strong>Henrique Catunda</strong>
                            <span>Front-end:React</span>
                        </div>
                    </header>

                    <p>
                    olá, Eu sou Henrique Catunda , Es­tu­dan­te de Sis­te­mas de Informação, na Universidade Federal do Ceará(UFC)
                    <br/> <br/>
                    Atual­men­te de­sen­vol­ven­do habi­li­dades vol­tadas à área de Front-End, como HTML(Semântica e Acessibilidade), CSS(Stylus, animações e elementos 3D),JavaScript (ES6/7), Wordpress e Git, Design Responsive, Design UI-UX.
                    </p>

                    <footer>
                        <p>
                            Preço/hora 
                            <strong>R$ 100,00</strong>
                        </p>

                        <button type="button">
                            <img src={WhatsappIcon} alt=""/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;