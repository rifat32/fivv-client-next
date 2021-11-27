import React from 'react'
import Link from "next/link"
import { sectionBeforeFooterData } from './SectionBeforeFooterData';
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
const companyInfoData = {
  title: "Company Info",
  links: [
    {label:"Home", slug:"/"},
    {label:"About Us", slug:"/about"},
    {label:"Testimonials", slug:"testimonials"},
    {label:"FAQ", slug:"faq"},
    {label:"BookReaserch", slug:"bookresearch"},
    {label:"Contact Us", slug:"contact-form"},
    {label:"Feedback", slug:"https://us1.list-manage.com/survey?u=24dc39f132c498d9e38ad1665&id=bae23faa1d&attribution=false"}
  ],
    
};
const learnMoredata = {
  title: "Learn More",
  links: [
    "Pricing",
    "Licensing",
    "Terms of Use",
    "Privacy Policy"
  ],
};
const needHelpData = {
  title: "Need Help",
  links: [
    //{label:"Contact Us", slug:TO_CONTACTUS_PAGE},
    { text: "99 Address XYZ. USA", icon: "/location.svg" },
    { text: "(1234) 654-00000", icon: "/phone.svg" },
    { text: "support@cheapbookdeals.com", icon: "/inbox.svg" },
    { text: "Mon - Sat 09:00 - 17:00", icon: "/time.svg" },
  ]
};

const Footer = () => {
  return (
    <>
     <section className="section-before-footer" >
  <div className="container">
   
      <h2 className="text-center">{sectionBeforeFooterData.title}</h2>
      <h4 className="sectionBeforeFooterDescription text-center w-100"
          >{sectionBeforeFooterData.description}</h4>
    
  </div>
</section>

 <section className="footerSection "  >
  <div className="footerDiv container">
    <div className="text-center">
      {/* <h5 className="footerTitle">World{`'`}s largest collection of Creative Indian <b>images</b> &amp; <b>videos</b></h5> */}
    </div>
    <div className="row">
      <div className="col-lg-6 col-md-5 col-sm-6 md-pb col1">
        <h3  style={{color:"#fff"}}><strong>
        liberty university login,jerry falwell library,jfl,luoa,liberty university library,jerry falwell library database,jfl library,luoa login,loua,liberty edu email,wlu library,liberty university bookstore,liberty bookstore,liberty university apparel.{}
          
          </strong>
          
          </h3>
       
      </div>
      <div className="col-lg-5 col-md-7 col-sm-6">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <h3 className="footerLinkTitle">Company Info</h3>
            <br />
            <div className="row">
             
              {
                companyInfoData.links.map((el,index) => {
                  return (
                    <div className="col-lg-12 col-md-12 col-sm-12" key={el.index}>
                  <h5 className="footerLinks">
                <Link href={el.slug}>
                <a style={{textDecoration: 'none'}} className="footerLinks">{el.label}</a>
</Link>
                 
                </h5>
                  </div>
                  )
                })
              }
            
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 md-pb">
            <h3 className="footerLinkTitle">Learn More</h3>
            <br />
            <div className="row">

            
              {
            learnMoredata.links.map((el,index) => {
                  return (
                    <div className="col-lg-12 col-md-12 col-sm-12" key={el.index}>
                    <h5 className="footerLinks">
                 
                  <a style={{textDecoration: 'none'}} className="footerLinks">{el}</a>
  
                   
                  </h5>
                    </div>
                  )
                })
              }
           
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 md-pb img_cls">
            <h3 className="footerLinkTitle">Need Help </h3>
            <br />
            <div className="row">
            
              {
            needHelpData.links.map((el,index) => {
                  return (
                    <div className="col-lg-12 col-md-12 col-sm-12" key={el.index}>
                    <h5 className="footerLinks">
                
                  <a style={{textDecoration: 'none'}} className="footerLinks">{el.text}</a>
  
                   
                  </h5>
                    </div>
                  )
                })
              }
             
         
           
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
