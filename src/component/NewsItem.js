import React from 'react'
// import Spinner from './spinner';
import logo from './noimgavl.jpg'

const NewsItem=(props)=> {

 
    let {title,description,imgurl,newsurl,aurthor,date}= props;

    return (
    <>
     <div style={{margin:'auto'}} >
            <div  className="card" style={{width: '19rem'}}>
                <img src={!imgurl?logo:imgurl} className="card-img-top" alt="..." id='apiimg'/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                <div id='dateauthor' className="card-footer text-body-secondary">by {!aurthor?'unknown':aurthor} on {new Date(date).toGMTString()}</div>
            </div>
                    <a href={newsurl} target='blank' id='mybtnread' className="btn btn-sm btn-dark">Read More</a>
                  
                </div>


      </div>
    </>
    )
  
}
export default NewsItem
