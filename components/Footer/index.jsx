import React from 'react'
import Link from "next/link"
// import { 
//   TO_ABOUT_PAGE,
//   TO_HOME_PAGE,
//   TO_CONTACTUS_PAGE,
//   To_Testimonials_PAGE,
//   TO_BookResearch_PAGE,
//   TO_FeedBack_PAGE,
//   TO_FAQ_PAGE } from "../constants";
// import Link from "next/link";
// const data = {
//   title: "Company Info",
//   links: [
//     {label:"Home", slug:TO_HOME_PAGE},
//     {label:"About Us", slug:TO_ABOUT_PAGE},
//     {label:"Testimonials", slug:To_Testimonials_PAGE},
//     {label:"FAQ", slug:TO_FAQ_PAGE},
//     {label:"BookReaserch", slug:TO_BookResearch_PAGE},
//     {label:"Contact Us", slug:TO_CONTACTUS_PAGE},
//     {label:"Feedback", slug:TO_FeedBack_PAGE}
//   ],
    
// };

const Footer = () => {
  return (
    <>
     <section className="title1 cid-rgVrt4Q0UQ" id="title02-8">
  <div className="container">
    <div className="title align-center">
      <h3 className="mbr-section-title mbr-fonts-style mbr-semibold display-2">Why ImagesBazaar?</h3>
      <h4 className="mbr-text mbr-gray mbr-fonts-style mbr-pt-2 display-7">India's diversity and complexity can be
        witnessed through its people, traditions and values associated with distinctive regional customs,
        habits, lifestyle and festivals. That's why our content reflects the innate expressions of deep-rooted
        feelings of individuals through which spring their day-to-day actions. From contemporary concepts and
        ideas to the broadest range of categories depicting Indians in virtually all walks of life, age groups
        and expressions - you will find it all here! <a href="/aboutus" style={{textDecoration: 'none'}}> Know
          More</a></h4>
    </div>
  </div>
</section>

 <section className="footer1  cid-rhbP4MQmLL" id="footer02-b">
  <div className="container-fluid">
    <div className="text-center" id="Recent_Searches">
      <h5 className="Worlds_Collection">World's largest collection of Creative Indian <b>images</b> &amp; <b>videos</b></h5>
    </div>
    <div className="row jc-c">
      <div className="col-lg-7 col-md-5 col-sm-6 md-pb col1">
        <h3 className="white display-7  Toll_Nmbrs"><strong>All India Toll Free: 1800-11-6869</strong></h3>
        <div className="align-center contacts-block jc-c column">
          <div className="icons-list ">
            <img src="https://ibcdn.imagesbazaar.com/NodeData/assets/images/btn-Help1.png" />
          </div>
          <h3 className="section-title light align-left white fonts-style display-4 Footer_Cntnt">© ImagesBazaar.com. A
            division of Mash Audio Visuals Pvt. Ltd. All rights reserved.</h3>
        </div>
      </div>
      <div className="col-lg-5 col-md-7 col-sm-6 md-pb ">
        <div className="row jc-c">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 md-pb">
            <h3 className="display-7">Company Info</h3>
            <br />
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h5 className="display-4">

<Link href="/">
<a style={{textDecoration: 'none'}}  className="display-4">Home</a>
</Link>
               
                  
                  </h5>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h5 className="display-4"><a style={{textDecoration: 'none'}} href="/aboutus" className="display-4">About Us</a>
                </h5>
              </div>
            
              <div className="col-lg-12 col-md-12 col-sm-12">
       
                <h5 className="display-4">
                <Link href="/testimonials">
                <a style={{textDecoration: 'none'}} className="display-4">Testimonials</a>
</Link>
                 
                </h5>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h5 className="display-4"><a style={{textDecoration: 'none'}} href="/freeresearch" className="display-4">Image
                    Research</a></h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 md-pb">
            <h3 className="display-7">Learn More</h3>
            <br />
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h5 className="display-4"><a style={{textDecoration: 'none'}} href="/ImageVideoSubscription" className="display-4">Pricing</a></h5>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h5 className="display-4"><a style={{textDecoration: 'none'}} href="/licensing" className="display-4">Licensing</a>
                </h5>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h5 className="display-4"><a style={{textDecoration: 'none'}} href="/termsofuse" className="display-4">Terms of
                    Use</a></h5>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h5 className="display-4"><a style={{textDecoration: 'none'}} href="/privacypolicy" className="display-4">Privacy
                    Policy</a></h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 md-pb img_cls">
            <h3 className="display-7">Need Help </h3>
            <br />
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h5 className="display-4"><a style={{textDecoration: 'none'}} href="/contactus" className="display-4">Contact
                    Us</a></h5>
              </div>
              <div className="col-lg-12 col-md-4 col-sm-12">
                <h5 className="display-4"><a style={{textDecoration: 'none'}} href="/searchtips" className="display-4">Search
                    Tips</a></h5>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h5 className="display-4"><a style={{textDecoration: 'none'}} href="/faq" className="display-4">FAQ</a></h5>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h5 className="display-4"><a style={{textDecoration: 'none'}} href="/technical" className="display-4">Technical</a></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Footer
