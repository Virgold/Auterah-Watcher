import React from 'react'
import { Link, Link as RouterLink } from 'react-router-dom';

function Herosection() {
  return (
    <div>
       <div className="py-md-5">
        <div className="container vh-75">
            <div className="row py-md-5">
                <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="mb-4 mb-xl-0 text-center text-md-start">
                        <h1 className="display-4 fw-bold mb-3 ls-sm ">Track Wallet <br/>
                        Events
                        </h1>
                        <p className="mb-4 lead">
                            Watch out your Wallet events more Effectively with Auterah-Watcher
                        </p>

                        <Link
                            className="btn btn-primary btn-lg display-5 px-4 mt-5 rounded-pill shadow-lg text-light" to="/register">GET STARTED</Link>
                    </div>
                </div>
                <div className="offset-xl-1 col-xl-5 col-lg-6 col-md-12">
                        <div className="d-block mt-n5 text-center">
                            <a href='https://www.youtube.com/watch?v=JRzWRZahOVU' className='text-dark mt-5'>

                              {/* <Icon icon="gg:play-button" className='display-3 border rounded-circle shadow-sm mt-5'/> */}
                              </a>
                        </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Herosection