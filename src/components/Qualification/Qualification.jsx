import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className="qualification section">
      <h2 className="section__title">Calificación</h2>
      <span className="section__subtitle">Mi Viaje Personal</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          
          <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
            onClick={()=> toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon qualification__active"></i>
            Educación
          </div>

          <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
          onClick={()=> toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experiencia
          </div>
        </div>

        <div className="qualification__sections">
          {/* ==================== CONTENIDO EDUCACIÓN ==================== */}
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
            
            {/* Dato 1: Ingeniería */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Ingeniero de Sistemas</h3>
                <span className="qualification__subtitle">UNISANGIL</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2022 
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Dato 2: Bootcamp MinTIC 2023 */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Bootcamp de Programación</h3>
                <span className="qualification__subtitle">MinTIC / Asociación Nacional para el Desarrollo Social</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023
                </div>
              </div>
            </div>

            {/* Dato 3: Certificado 2025 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Programación Intermedia</h3>
                <span className="qualification__subtitle">MinTIC / Asociación Nacional para el Desarrollo Social</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          {/* ==================== CONTENIDO EXPERIENCIA ==================== */}
          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
            
            {/* Dato 1: Monitoría (Pasado) */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Monitor de Programación</h3>
                <span className="qualification__subtitle">UNISANGIL</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Dato 2: Docente */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Docente de Tecnología e Informática</h3>
                <span className="qualification__subtitle">Colegio Liceo Superior Rafael Pombo</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 
                </div>
              </div>
            </div>

            {/* Dato 3: Desarrollador Web */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Desarrollador Web</h3>
                <span className="qualification__subtitle">Primera Experiencia IT</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Dato 4: Analista UNISANGIL */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Analista de Software</h3>
                <span className="qualification__subtitle">UNISANGIL</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - 2024
                </div>
              </div>
            </div>

            {/* Dato 5: DBA UNISANGIL */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Administrador de Bases de Datos</h3>
                <span className="qualification__subtitle">UNISANGIL</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024 - Presente
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  )
}

export default Qualification