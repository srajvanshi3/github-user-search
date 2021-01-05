import React from 'react'

function Users(props) {

    return (
        <div>
               <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5">
                    <img src={props.img} alt="product" className="card-img-top"></img>
                     </div>
                      <div className='card-footer d-flex justify-content-between'> 
                      <h3 className="align-self-center mb-0">
                          Username : {props.id}
                      </h3>

                      </div>
                </div>
            </div>
        </div>
    )
}

export default Users
