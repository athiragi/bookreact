import React from 'react'
import Header from './Header'

const Viewbook = () => {
    var booklist=[
        {
            "title":"Wings of Fire",
            "author":"APJ",
            "Price":"200",
        },
        {
            "title":"Micky Mouse",
            "author":"abcd",
            "Price":"100"
        }
    ]
  return (
    <div>
        <Header/>
       <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
                {booklist.map((value,key)=>{
                    return <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div class="card" >
         <img src="..." class="card-img-top" alt="..."/>
             <div class="card-body">
    <h5 class="card-title">{value.title}</h5>
    <p class="card-text">{value.author}</p>
    <a href="#" class="btn btn-primary">Buy</a>
  </div>
</div>
                </div>
                })
                }
               
                
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Viewbook