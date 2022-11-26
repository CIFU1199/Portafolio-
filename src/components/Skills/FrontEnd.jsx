import React from 'react'

const FrontEnd = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Desarrollo FrontEnd</h3>
        
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bxl-html5 icon' ></i>
                    <div>
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__level"></span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bxl-css3 icon' ></i>
                    <div>
                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__level"></span>
                    </div>
                </div>
                
                <div className="skills__data">
                    <i class='bx bxl-javascript icon' ></i>
                    <div>
                        <h3 className="skills__name">JavaScript</h3>
                        <span className="skills__level"></span>
                    </div>
                </div>

                
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bxs-dashboard icon' ></i>
                    <div>
                        <h3 className="skills__name">Material UI</h3>
                        <span className="skills__level"></span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bxl-github icon' ></i>
                    <div>
                        <h3 className="skills__name">Git | GitHub</h3>
                        <span className="skills__level"></span>
                    </div>
                </div>
                
                <div className="skills__data">
                    <i class='bx bxl-react icon' ></i>
                    <div>
                        <h3 className="skills__name">React.JS</h3>
                        <span className="skills__level"></span>
                    </div>
                </div>

                
            </div>
        </div>


    </div>
  )
}

export default FrontEnd
