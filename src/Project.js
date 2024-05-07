import React from 'react'
import "./Project.css"
function Project() {
   
    const projectOne = "images/projects/project-one.png"
    const projectTwo = "images/projects/project-two.png"
    const projectThree = "images/projects/project-three.png"
    const projectFour = "images/projects/project-four.png"
    const projectFive = "images/projects/project-five.png"
    const projectSix = "images/projects/project-six.png"
    const projectSeven = "images/projects/project-seven.png"
    const projectEight = "images/projects/project-eight.png"
    const projectNine = "images/projects/project-nine.png";  
    const projectTen = "images/projects/project-ten.png";
    
  return (
    <>
        <section className='project-section container'>
        <div className='project-name'>
            <h2 className='text-center text-md-start'>Projects</h2>
        </div>
        <section className='row project-row'>
            <div className='col-md-6 col-lg-3 project-box'>
                <div className='text-white project-box-inner'>
                    <h3>SafeCam</h3>
                    <div className='project-img'>
                    <img src={projectOne} alt='ss' className='xx'></img>
                    </div>
                    <div className='d-flex justify-content-between px-4 pt-3 pb-2'>
                        <div ><a href='https://parth96k.github.io/safe_cam/' target="_blank" rel="noreferrer"><i className="fa-solid fa-circle-play"></i></a></div>
                        <div><a href='https://github.com/parth96k/safe_cam' target='_blank' rel="noreferrer"><i className="fa-solid fa-code"></i></a></div>
                    </div>
                </div>                   
            </div>
            <div className='col-md-6 col-lg-3 project-box'>
                <div className='text-white project-box-inner'>
                    <h3>LeadMark</h3>
                    <div className='project-img'>
                    <img src={projectTwo} alt='leadmark' className='xx'></img>
                    </div>
                    <div className='d-flex justify-content-between px-4 pt-3 pb-2'>
                    <div><a href='https://parth96k.github.io/lead_mark/' target="_blank" rel="noreferrer"><i className="fa-solid fa-circle-play"></i></a></div>
                    <div><a href='https://github.com/parth96k/lead_mark' target='_blank' rel="noreferrer"><i className="fa-solid fa-code"></i></a></div>
                    </div>
                </div>                   
            </div>
            <div className='col-md-6 col-lg-3 project-box'>
                <div className='text-white project-box-inner'>
                    <h3>BabySitter</h3>
                    <div className='project-img'>
                    <img src={projectThree} alt='ss' className='xx' id='hh'></img>
                    </div>
                    <div className='d-flex justify-content-between px-4 pt-3 pb-2'>
                    <div><a href='https://parth96k.github.io/Babysitter/' target="_blank" rel="noreferrer"><i className="fa-solid fa-circle-play"></i></a></div>
                    <div><a href='https://github.com/parth96k/Babysitter' target='_blank' rel="noreferrer"><i className="fa-solid fa-code"></i></a></div>
                    </div>
                </div>                   
            </div>
            <div className='col-md-6 col-lg-3 project-box'>
                <div className='text-white project-box-inner'>
                    <h3>MultiShop</h3>
                    <div className='project-img'>
                    <img src={projectFour} alt='ss' className='xx'></img>
                    </div>
                    <div className='d-flex justify-content-between px-4 pt-3 pb-2'>
                    <div><a href='https://parth96k.github.io/MultiShop/' target="_blank" rel="noreferrer"><i className="fa-solid fa-circle-play"></i></a></div>
                    <div><a href='https://github.com/parth96k/MultiShop' target='_blank' rel="noreferrer"><i className="fa-solid fa-code"></i></a></div>
                    </div>
                </div>                   
            </div>
            <div className='col-md-6 col-lg-3 project-box'>
                <div className='text-white project-box-inner'>
                    <h3>Atlas</h3>
                    <div className='project-img'>
                    <img src={projectFive} alt='ss' className='xx'></img>
                    </div>
                    <div className='d-flex justify-content-between px-4 pt-3 pb-2'>
                    <div><a href='https://parth96k.github.io/Atlas/' target="_blank" rel="noreferrer"><i className="fa-solid fa-circle-play"></i></a></div>
                    <div><a href='https://github.com/parth96k/Atlas' target='_blank' rel="noreferrer"><i className="fa-solid fa-code"></i></a></div>
                    </div>
                </div>                   
            </div>
            <div className='col-md-6 col-lg-3 project-box'>
                <div className='text-white project-box-inner'>
                    <h3>CLA</h3>
                    <div className='project-img'>
                    <img src={projectSix} alt='ss' className='xx'></img>
                    </div>
                    <div className='d-flex justify-content-between px-4 pt-3 pb-2'>
                    <div><a href='https://parth96k.github.io/CLA/' target="_blank" rel="noreferrer"><i className="fa-solid fa-circle-play"></i></a></div>
                    <div><a href='https://github.com/parth96k/CLA' target='_blank' rel="noreferrer"><i className="fa-solid fa-code"></i></a></div>
                    </div>
                </div>                   
            </div>
            <div className='col-md-6 col-lg-3 project-box'>
                <div className='text-white project-box-inner'>
                    <h3>Portfolio</h3>
                    <div className='project-img'>
                    <img src={projectSeven} alt='ss' className='xx'></img>
                    </div>
                    <div className='d-flex justify-content-between px-4 pt-3 pb-2'>
                    <div><a href='https://01-myportfolio-01.netlify.app/' target="_blank" rel="noreferrer"><i className="fa-solid fa-circle-play"></i></a></div>
                    <div><a href='https://github.com/parth96k/portfolio' target='_blank' rel="noreferrer"><i className="fa-solid fa-code"></i></a></div>
                    </div>
                </div>                   
            </div>
            <div className='col-md-6 col-lg-3 project-box'>
                <div className='text-white project-box-inner'>
                    <h3>Cartzio</h3>
                    <div className='project-img'>
                    <img src={projectEight} alt='ss' className='xx'></img>
                    </div>
                    <div className='d-flex justify-content-between px-4 pt-3 pb-2'>
                    <div><a href='https://cartzio-site.netlify.app/' target="_blank" rel="noreferrer"><i className="fa-solid fa-circle-play"></i></a></div>
                    <div><a href='https://github.com/parth96k/Cartzio' target='_blank' rel="noreferrer"><i className="fa-solid fa-code"></i></a></div>
                    </div>
                </div>                   
            </div>
            <div className='col-md-6 col-lg-3 project-box'>
                <div className='text-white project-box-inner'>
                    <h3>DashBoard</h3>
                    <div className='project-img'>
                    <img src={projectNine} alt='ss' className='xx'></img>
                    </div>
                    <div className='d-flex justify-content-between px-4 pt-3 pb-2'>
                    <div><a href='https://dashboard-pk.netlify.app/' target="_blank" rel="noreferrer"><i className="fa-solid fa-circle-play"></i></a></div>
                    <div><a href='https://github.com/parth96k/dashboard' target='_blank' rel="noreferrer"><i className="fa-solid fa-code"></i></a></div>
                    </div>
                </div>                   
            </div>
            <div className='col-md-6 col-lg-3 project-box'>
                <div className='text-white project-box-inner'>
                    <h3>Weather-app</h3>
                    <div className='project-img'>
                    <img src={projectTen} alt='ss' className='xx'></img>
                    </div>
                    <div className='d-flex justify-content-between px-4 pt-3 pb-2'>
                    <div><a href='https://pk01-weather-app.netlify.app/' target="_blank" rel="noreferrer"><i className="fa-solid fa-circle-play"></i></a></div>
                    <div><a href='https://github.com/parth96k/weather-app' target='_blank' rel="noreferrer"><i className="fa-solid fa-code"></i></a></div>
                    </div>
                </div>                   
            </div>
        </section>
        </section>
    </>
  )
}

export default Project