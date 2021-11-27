import React from 'react'
import {TestimonialData} from './TestimonialData'
import Image from 'next/image'



const TestimonialComponent = () => {
    return (
        <>
              <div className="row">
        <div className="col-md-9 col-sm-9 col-xs-12" style={{marginLeft:"9rem"}}>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <h4 className="page_title"><span><i className="fa fa-user-plus" /><b>Testimonials</b></span></h4>
        </div>
      </div>
      <div className="testimonial_box">
      {TestimonialData.map((el,index) => {
 return (
    <div key={index} className="row" style={{margin: 0}}>
    <div className="testimonial">
      <div className="col-md-2 col-sm-4 pad0">
      <Image src={el.img} alt="profile-pic" quality={1} placeholder="blur"  layout="responsive" priority  />
      </div>
      <div className="col-md-10 col-sm-8">
        <h3>{el.title}
           
            
             </h3>
             <span>
             {
             el.rating <=5 &&
          (<> 
          
          {
            Array.from(Array(el.rating), (e, i) => {
return <>
<span className="fa fa-star checked"></span>
</>
})}
 {
            Array.from(Array(5 - el.rating), (e, i) => {
return <>
<span className="fa fa-star"></span>
</>
})}


</>
 )
}
 </span>        
            
             
       
        
        <p> 
       {
           el.comment
       }
        </p>
        <h4>{el.name}</h4>
      </div>
    </div>
  </div>
 )
})}
       
        
   
     

    
     
      </div>
      <div className="col-md-12 col-sm-12 col-xs-12" style={{paddingLeft: 0, paddingBottom: 15}}>
        <h3>What{`'`}s your Story?</h3>
        <p style={{marginBottom: 0}}>We are looking forward to know about your experience with
          ImagesBazaar. Simply email us your thoughts at <a href="mailto:bindu@imagesbazaar.com">bindu@imagesbazaar.com.</a> We would be honored to
          have your inputs to include with the testimonials of our esteemed clients! Kindly feel free
          to <a href="/contactus">contact us</a> for any query.</p>
      </div>
    </div>
    
    
    
    </div>
        </>
    )
}

export default TestimonialComponent
