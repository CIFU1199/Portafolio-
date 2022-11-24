import React from 'react'

const BackEnd = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Desarrollo BackEnd</h3>
        
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bxl-nodejs icon' ></i>
                    <div>
                        <h3 className="skills__name">Node.JS</h3>
                        <span className="skills__level">Medio</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-server icon' ></i>
                    <div>
                        <h3 className="skills__name">Express</h3>
                        <span className="skills__level">Medio</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bxs-data icon' ></i>
                    <div>
                        <h3 className="skills__name">FireBase</h3>
                        <span className="skills__level">Medio</span>
                    </div>
                </div>
                

                
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bxs-data icon' ></i>
                    <div>
                        <h3 className="skills__name">MySQL</h3>
                        <span className="skills__level">Medio</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bxl-mongodb icon' ></i>
                    <div>
                        <h3 className="skills__name">MongoDB</h3>
                        <span className="skills__level">Medio</span>
                    </div>
                </div>
                
                

                
            </div>
        </div>


    </div>
  )
}

export default BackEnd