import React, { useState } from 'react'
import './services.css'

const Services = () => {
    const [toggleState, setToggleState] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index);
    }
    
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Servicios</h2>
        <span className="section__subtitle">Lo que Ofrezco</span>

        <div className="services__container container grid">
            
            {/* CARD 1: DESARROLLO WEB Y UI/UX */}
            <div className="services__content">
                <i className="uil uil-web-grid services_icon"></i>
                <h3 className="services__title">Desarrollo Web <br/> & UI/UX</h3>

                <span className="services__button" onClick={()=> toggleTab(1)}>Ver Más 
                 <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title">Desarrollo Web & UI/UX</h3>
                        <p className="services__modal-description">Construcción de aplicaciones web modernas, funcionales y estéticas, alineadas a metodologías ágiles.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Desarrollo e implementación de interfaces de usuario funcionales.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Creación de aplicaciones web dinámicas y responsivas.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Diseño de maquetación limpia y prototipos orientados a la experiencia del usuario.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Integración de componentes interactivos y consistencia visual.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* CARD 2: ADMINISTRACIÓN DE BASES DE DATOS */}
            <div className="services__content">
                <i className="uil uil-database services_icon"></i>
                <h3 className="services__title">Administración <br/> de Bases de Datos</h3>

                <span className="services__button" onClick={()=> toggleTab(2)}>Ver Más 
                <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title">Administración de Bases de Datos</h3>
                        <p className="services__modal-description">Gestión, optimización y mantenimiento de infraestructura de datos relacionales y automatización de procesos.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Administración y mantenimiento de motores de bases de datos (Oracle, PostgreSQL, MySQL).</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Garantía de continuidad mediante procesos de restauración, optimización y respaldo (backups).</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Construcción avanzada de informes SQL analíticos para la toma de decisiones institucionales.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Desarrollo de scripts en Python para el procesamiento, unificación y automatización de tareas con datos.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Services