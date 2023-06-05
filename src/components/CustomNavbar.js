import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import Sticky from "react-stickynode";
import { useTranslation } from "react-i18next";

const CustomNavbar = (props) => {
  const { t, i18n } = useTranslation();
  var { mClass, nClass, cClass, slogo, hbtnClass } = props;
  const [lang, setLang] = useState();
  useEffect(() => {
    // setLang();
  }, [i18n.language]);
  useEffect(() => {
    // i18n.changeLanguage(lang);
  }, [lang]);
  const changeLang = (e) => {
    setLang(e.target.value);
  }
  return (
   
      <header className="header_area">
        <div style={{background:"black",height:"30px"}}>
          <p style={{textAlign:"center",color:"white"}}>Special offer for the first 100 community partners ! Learn more </p>
        
        </div>
        <nav className={`navbar navbar-expand-xl menu_one ${mClass}`}>
          <div className={`container ${cClass}`}>
            <Link className={`navbar-brand mr-0 flex-grow-1 ${slogo}`} to="/">
              <img className="logo-image" src={require("../img/our_logo1.png")} alt="" />
              <img className="logo-image" src={require("../img/our_logo2.png")} alt="logo" />
            </Link>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="menu_toggle">
                <span className="hamburger">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <span className="hamburger-cross">
                  <span></span>
                  <span></span>
                </span>
              </span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                <li className="nav-item dropdown submenu mega_menu mega_menu_two">
                  <Link
                    to="./"
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {t("navmenu.products")}
                  </Link>
                  <div className="mega_menu_inner" style={{width:"75%",marginLeft:"13%"}}>
                    <ul className="dropdown-menu container">
                      <li className="nav-item">
                        <div className="row">
                          <div className="col-4">
                            <div className="row" style={{marginTop:"50px"}}>
                            <img className="logo-image" src={require("../img/digital_product.png")} alt="" />
                            </div>
                            <div className="row" style={{marginTop:"20px"}}>
                            <h4 style={{fontWeight:"700",color:"black"}}>Digital Trust & Security Platform</h4>
                            </div>
                            <div className="row" style={{marginTop:"20px"}}>
                              Lorem ipsum dolor sit amet,<br/>
                              consectetur adipisicing elit, sed do <br/>
                              eiusmod tempor incididunt ut labore <br/>
                              et dolore magna aliqua.
                            </div>
                            <div className="row" style={{marginTop:"20px",marginBottom:"100px"}}>
                              <h5 style={{color:"#5c00b7"}}>Learn more</h5>
                              <img className="logo-image" src={require("../img/products/arrow.png")} alt="" style={{marginTop:"-20px"}}></img>
                            </div>
                          </div>
                          <div className="vl"></div>
                          <div className="col-3">
                            <div className="row">
                            <b style={{fontSize:"20px",marginLeft:"100px",marginTop:"30px",fontWeight:"600"}}>PRODUCT SUITES</b>
                            </div>
                            <div className="row" style={{marginLeft:"40px",marginTop:"30px"}}>
                              <img className="logo-image" src={require("../img/products/privacy.png")} alt=""></img>
                              <p style={{marginTop:"15px",marginLeft:"10px",fontWeight:"600"}}>Privacy Protection</p>
                            </div>
                            <div className="row" style={{marginLeft:"40px"}}>
                              <img className="logo-image" src={require("../img/products/identity.png")} alt=""></img>
                              <p style={{marginTop:"15px",marginLeft:"10px",fontWeight:"600"}}>Identity Verification</p>
                              </div>
                            <div className="row" style={{marginLeft:"40px"}}>
                              <img className="logo-image" src={require("../img/products/iddoc.png")} alt=""></img>
                              <p style={{marginTop:"15px",marginLeft:"10px",fontWeight:"600"}}>eID Doc Verification</p>
                            </div>
                            <div className="row" style={{marginLeft:"40px"}}>
                              <img className="logo-image" src={require("../img/products/idexpert.png")} alt=""></img>
                              <p style={{marginTop:"15px",marginLeft:"10px",fontWeight:"600"}}>eID Expert</p>
                            </div>
                            <div className="row" style={{marginLeft:"40px"}}>
                              <img className="logo-image" src={require("../img/products/age.png")} alt=""></img>
                              <p style={{marginTop:"15px",marginLeft:"10px",fontWeight:"600"}}>Age Verification</p>
                            </div>
                            <div className="row" style={{marginLeft:"40px"}}>
                              <img className="logo-image" src={require("../img/products/bio.png")} alt=""></img>
                              <p style={{marginTop:"15px",marginLeft:"10px",fontWeight:"600"}}>Biometric Auth</p>
                            </div>
                          </div>
                          {/* <div className="col-3">
                            <div className="row">
                            <img className="logo-image" src={require("../img/products/privacy.png")} alt=""></img>
                          <p style={{marginTop:"100px",marginLeft:"120px",fontWeight:"600"}}>Fraud & Risk</p>
                            </div>
                            <div className="row">
                            <img className="logo-image" src={require("../img/products/identity.png")} alt=""></img>
                          <p style={{marginTop:"15px",marginLeft:"120px",fontWeight:"600"}}>Device Fingerprint</p>
                            </div>
                            <div className="row">
                            <img className="logo-image" src={require("../img/products/identity.png")} alt=""></img>
                          <p style={{marginTop:"15px",marginLeft:"120px",fontWeight:"600"}}>Cyber Defense</p>
                            </div>
                            <div className="row">
                            <img className="logo-image" src={require("../img/products/identity.png")} alt=""></img>
                          <p style={{marginTop:"15px",marginLeft:"120px",fontWeight:"600"}}>Anti-Bot</p>
                            </div>


                          </div> */}



                          <div className="col-3">
                            <div className="row">
                            {/* <b style={{fontSize:"20px",marginLeft:"100px",marginTop:"30px",fontWeight:"600"}}></b> */}
                            </div>
                            <div className="row" style={{marginLeft:"40px",marginTop:"85px"}}>
                              <img className="logo-image" src={require("../img/products/privacy.png")} alt=""></img>
                              <p style={{marginTop:"15px",marginLeft:"10px",fontWeight:"600"}}>Fraud & Risk</p>
                            </div>
                            <div className="row" style={{marginLeft:"40px"}}>
                              <img className="logo-image" src={require("../img/products/identity.png")} alt=""></img>
                              <p style={{marginTop:"15px",marginLeft:"10px",fontWeight:"600"}}>Device Fingerprint</p>
                              </div>
                            <div className="row" style={{marginLeft:"40px"}}>
                              <img className="logo-image" src={require("../img/products/iddoc.png")} alt=""></img>
                              <p style={{marginTop:"15px",marginLeft:"10px",fontWeight:"600"}}>Cyber Defense</p>
                            </div>
                            <div className="row" style={{marginLeft:"40px"}}>
                              <img className="logo-image" src={require("../img/products/idexpert.png")} alt=""></img>
                              <p style={{marginTop:"15px",marginLeft:"10px",fontWeight:"600"}}>Anti-Bot</p>
                            </div>
                            {/* <div className="row" style={{marginLeft:"40px"}}>
                              <img className="logo-image" src={require("../img/products/age.png")} alt=""></img>
                              <p style={{marginTop:"15px",marginLeft:"10px",fontWeight:"600"}}>Age Verification</p>
                            </div>
                            <div className="row" style={{marginLeft:"40px"}}>
                              <img className="logo-image" src={require("../img/products/bio.png")} alt=""></img>
                              <p style={{marginTop:"15px",marginLeft:"10px",fontWeight:"600"}}>Biometric Auth</p>
                            </div> */}
                          </div>
                        </div>
                        {/* <ul className="dropdown-menu custom-nav-menu mx-lg-0 scroll">
                          <div className="col-4">
                            <br/>
                          
                          <li className="nav-item-title">
                          
                          <img className="logo-image" src={require("../img/our_logo1.png")} alt="" />
                          Platform overview
                          
                       
                          </li>
                          </div>
                          <div className="vl"></div>


                         
                          <div className="col-3">
                            
                          <li className="custom-nav-item">
                            <NavLink
                              to="/Home-chat"
                              exact
                              className="line-block-3"
                            >
                            
                              <div className="text-block-13">{t("products.platform.title")}</div>
                              <div className="text-block-14">
                                Uncover sophisticated fraud rings by visualizing
                                customer networks
                              </div>
                            </NavLink>
                          </li>
                          <li className="custom-nav-item">
                            <NavLink
                              to="/Home-chat"
                              exact
                              className="line-block-3"
                            >
                              <div className="text-block-13">
                                {t("products.fraud&cyber.title")}
                              </div>
                              <div className="text-block-14">
                                Uncover sophisticated fraud rings by visualizing
                                customer networks
                              </div>
                            </NavLink>
                          </li>
                          <li className="custom-nav-item">
                            <NavLink
                              to="/Home-chat"
                              exact
                              className="line-block-3"
                            >
                              <div className="text-block-13">
                                {t("products.digital_verification.title")}
                              </div>
                              <div className="text-block-14">
                                Uncover sophisticated fraud rings by visualizing
                                customer networks
                              </div>
                            </NavLink>
                          </li>
                          </div>
                          <li className="nav-item-title">
                          Platform products suites
                          </li>
                          <div className="col-3">
                          <li className="custom-nav-item">
                            <NavLink
                              to="/Home-chat"
                              exact
                              className="line-block-3"
                            >
                              <div className="text-block-13">
                                {t("products.digital_identity.title")}
                              </div>
                              <div className="text-block-14">
                                Uncover sophisticated fraud rings by visualizing
                                customer networks
                              </div>
                            </NavLink>
                          </li>
                          <li className="custom-nav-item">
                            <NavLink
                              to="/Home-chat"
                              exact
                              className="line-block-3"
                            >
                              <div className="text-block-13">
                                {t("products.biometric_multi-factor.title")}
                              </div>
                              <div className="text-block-14">
                                Uncover sophisticated fraud rings by visualizing
                                customer networks
                              </div>
                            </NavLink>
                          </li>
                          <li className="custom-nav-item">
                            <NavLink
                              to="/Home-chat"
                              exact
                              className="line-block-3"
                            >
                              <div className="text-block-13">
                                {t("products.document_verification.title")}
                              </div>
                              <div className="text-block-14">
                                Uncover sophisticated fraud rings by visualizing
                                customer networks
                              </div>
                            </NavLink>
                          </li>
                          </div>
                   


                          
                        </ul> */}
                      
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item dropdown submenu mega_menu mega_menu_two">
                  <Link
                    to="./"
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {t("navmenu.industries")}
                  </Link>
                  {/* <div className="mega_menu_inner">
                    <ul className="dropdown-menu container">
                      <li className="nav-item">
                        <ul className="dropdown-menu custom-nav-menu mx-lg-0 scroll">
                        <div className="col-3">
                            <br/>
                          <li className="nav-item-title">
                            {t("navmenu.industries")}
                          </li>
                          </div>
                         
                          <div className="v2 "></div>

                          <div className="col-4">
                          <li className="custom-nav-item">
                            <NavLink
                              to="/Home-chat"
                              exact
                              className="line-block-3"
                            >
                              <div className="text-block-13">Graph</div>
                              <div className="text-block-14">
                                Uncover sophisticated fraud rings by visualizing
                                customer networks
                              </div>
                            </NavLink>
                          </li>
                          </div>
                          <div className="col-6">
                          <li className="custom-nav-item">
                            <NavLink
                              to="/Home-chat"
                              exact
                              className="line-block-3"
                            >
                              <div className="text-block-13">Graph</div>
                              <div className="text-block-14">
                                Uncover sophisticated fraud rings by visualizing
                                customer networks
                              </div>
                            </NavLink>
                          </li>
                          </div>
                          <div className="col-3">
                          <li className="custom-nav-item">
                            <NavLink
                              to="/Home-chat"
                              exact
                              className="line-block-3"
                            >
                              <div className="text-block-13">Graph</div>
                              <div className="text-block-14">
                                Uncover sophisticated fraud rings by visualizing
                                customer networks
                              </div>
                            </NavLink>
                          </li>
                          </div>
                          <div className="col-4">
                          <li className="custom-nav-item">
                            <NavLink
                              to="/Home-chat"
                              exact
                              className="line-block-3"
                            >
                              <div className="text-block-13">Graph</div>
                              <div className="text-block-14">
                                Uncover sophisticated fraud rings by visualizing
                                customer networks
                              </div>
                            </NavLink>
                          </li>
                          </div>
                        </ul>
                      </li>
                    </ul>
                  </div> */}
                    <div className="mega_menu_inner" style={{width:"75%",marginLeft:"13%"}}>
                    <ul className="dropdown-menu container">
                      <li className="nav-item">
                        <div className="row">
                          <div className="col-4">
                            <div className="row" style={{marginTop:"50px"}}>
                            <img className="logo-image" src={require("../img/company.png")} alt="" />
                            </div>
                            <div className="row" style={{marginTop:"20px"}}>
                            <h4 style={{fontWeight:"700",color:"black"}}>One platform, many industries</h4>
                            </div>
                            <div className="row" style={{marginTop:"20px"}}>
                              Lorem ipsum dolor sit amet,<br/>
                              consectetur adipisicing elit, sed do <br/>
                              eiusmod tempor incididunt ut labore <br/>
                              et dolore magna aliqua.
                            </div>
                            <div className="row" style={{marginTop:"20px",marginBottom:"100px"}}>
                              <h5 style={{color:"#5c00b7"}}>Learn more</h5>
                              <img className="logo-image" src={require("../img/products/arrow.png")} alt="" style={{marginTop:"-20px"}}></img>
                            </div>
                          </div>
                          <div className="vl"></div>
                          <div className="col-3">
                            <div className="row">
                            <b style={{fontSize:"20px",marginLeft:"100px",marginTop:"30px",fontWeight:"600"}}>INDUSTRIES</b>
                            </div>
                            <div className="row" style={{marginLeft:"40px",marginTop:"30px"}}>
                              <img className="logo-image" src={require("../img/products/privacy.png")} alt=""></img>
                              <p style={{marginTop:"15px",marginLeft:"10px",fontWeight:"600"}}>Public Sector</p>
                            </div>
                            <div className="row" style={{marginLeft:"40px"}}>
                              <img className="logo-image" src={require("../img/products/identity.png")} alt=""></img>
                              <p style={{marginTop:"15px",marginLeft:"10px",fontWeight:"600"}}>Finance Services</p>
                              </div>
                            <div className="row" style={{marginLeft:"40px"}}>
                              <img className="logo-image" src={require("../img/products/iddoc.png")} alt=""></img>
                              <p style={{marginTop:"15px",marginLeft:"10px",fontWeight:"600"}}>Finance</p>
                            </div>
                            <div className="row" style={{marginLeft:"40px"}}>
                              <img className="logo-image" src={require("../img/products/idexpert.png")} alt=""></img>
                              <p style={{marginTop:"15px",marginLeft:"10px",fontWeight:"600"}}>Retail</p>
                            </div>
                            <div className="row" style={{marginLeft:"40px"}}>
                              <img className="logo-image" src={require("../img/products/age.png")} alt=""></img>
                              <p style={{marginTop:"15px",marginLeft:"10px",fontWeight:"600"}}>Travel & Transportation</p>
                            </div>
                            <div className="row" style={{marginLeft:"40px"}}>
                              <img className="logo-image" src={require("../img/products/bio.png")} alt=""></img>
                              <p style={{marginTop:"15px",marginLeft:"10px",fontWeight:"600"}}>Marketplaces</p>
                            </div>
                          </div>                



                          <div className="col-3">
                            <div className="row">
                            {/* <b style={{fontSize:"20px",marginLeft:"100px",marginTop:"30px",fontWeight:"600"}}></b> */}
                            </div>
                            <div className="row" style={{marginLeft:"40px",marginTop:"85px"}}>
                              <img className="logo-image" src={require("../img/products/privacy.png")} alt=""></img>
                              <p style={{marginTop:"15px",marginLeft:"10px",fontWeight:"600"}}>Digital Good & Services</p>
                            </div>
                            <div className="row" style={{marginLeft:"40px"}}>
                              <img className="logo-image" src={require("../img/products/identity.png")} alt=""></img>
                              <p style={{marginTop:"15px",marginLeft:"10px",fontWeight:"600"}}>Telecoms</p>
                              </div>
                            <div className="row" style={{marginLeft:"40px"}}>
                              <img className="logo-image" src={require("../img/products/iddoc.png")} alt=""></img>
                              <p style={{marginTop:"15px",marginLeft:"10px",fontWeight:"600"}}>Sharing Economy</p>
                            </div>
                            <div className="row" style={{marginLeft:"40px"}}>
                              <img className="logo-image" src={require("../img/products/idexpert.png")} alt=""></img>
                              <p style={{marginTop:"15px",marginLeft:"10px",fontWeight:"600"}}> Crypto & NFTs</p>
                            </div>   
                            <div className="row" style={{marginLeft:"40px"}}>
                              <img className="logo-image" src={require("../img/products/idexpert.png")} alt=""></img>
                              <p style={{marginTop:"15px",marginLeft:"10px",fontWeight:"600"}}> Healthcare</p>
                            </div> 
                            <div className="row" style={{marginLeft:"40px"}}>
                              <img className="logo-image" src={require("../img/products/idexpert.png")} alt=""></img>
                              <p style={{marginTop:"15px",marginLeft:"10px",fontWeight:"600"}}> Online Gaming</p>
                            </div>                        
                          </div>
                        </div>
                        
                      
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item dropdown submenu mega_menu mega_menu_two">
                  <Link
                    to="./"
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {t("navmenu.resources")}
                  </Link>
                  <div className="mega_menu_inner">
                    <ul className="dropdown-menu container">

                      <li className="nav-item">
                        <ul className="dropdown-menu custom-nav-menu mx-lg-0 scroll">
                        <div className="col-3">
                            <br/>
                          <li className="nav-item-title">
                            {t("navmenu.resources")}
                          </li>
                          </div>
                          <div className="v3"></div>

                          <div className="col-4">
                          <li className="custom-nav-item">
                            <NavLink
                              to="/Home-chat"
                              exact
                              className="line-block-3"
                            >
                              <div className="text-block-13">
                                {t("resources.blogs.title")}
                              </div>
                              <div className="text-block-14">
                                Uncover sophisticated fraud rings by visualizing
                                customer networks
                              </div>
                            </NavLink>
                          </li>
                     
                          <li className="custom-nav-item">
                            <NavLink
                              to="/Home-chat"
                              exact
                              className="line-block-3"
                            >
                              <div className="text-block-13">
                                {t("resources.documents.title")}
                              </div>
                              <div className="text-block-14">
                                Uncover sophisticated fraud rings by visualizing
                                customer networks
                              </div>
                            </NavLink>
                          </li>
                          </div>
                          <div className="col-4">
                          <li className="custom-nav-item">
                            <NavLink
                              to="/Home-chat"
                              exact
                              className="line-block-3"
                            >
                              <div className="text-block-13">
                                {t("resources.events.title")}
                              </div>
                              <div className="text-block-14">
                                Uncover sophisticated fraud rings by visualizing
                                customer networks
                              </div>
                            </NavLink>
                          </li>
                          
                          <li className="custom-nav-item">
                            <NavLink
                              to="/Home-chat"
                              exact
                              className="line-block-3"
                            >
                              <div className="text-block-13">
                                {t("resources.webinars.title")}
                              </div>
                              <div className="text-block-14">
                                Uncover sophisticated fraud rings by visualizing
                                customer networks
                              </div>
                            </NavLink>
                          </li>
                          </div>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item">
                  <NavLink title="Pricing" className="nav-link" to="/Startup">
                    {t("navmenu.partners")}
                  </NavLink>
                </li>
                <li className="nav-item dropdown submenu mega_menu mega_menu_two">
                  {/* <NavLink title="Pricing" className="nav-link" to="/About">
                    {t("navmenu.company")}
                  </NavLink> */}
                  <Link
                    to="./"
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {t("navmenu.company")}
                  </Link>
                  <div className="mega_menu_inner" style={{width:"75%",marginLeft:"13%"}}>
                    <ul className="dropdown-menu container">
                    <li className="nav-item">
                        <div className="row">
                          <div className="col-4">
                          <div className="row" style={{marginTop:"50px"}}>
                            <img className="logo-image" src={require("../img/company.png")} alt="" />
                            </div>
                            <div className="row" style={{marginTop:"20px"}}>
                            <h4 style={{fontWeight:"700",color:"black"}}>The Privacy-First Digital Trust & Security Pioneer</h4>
                            </div>
                            <div className="row" style={{marginTop:"20px"}}>
                              Lorem ipsum dolor sit amet,<br/>
                              consectetur adipisicing elit, sed do <br/>
                              eiusmod tempor incididunt ut labore <br/>
                              et dolore magna aliqua.
                            </div>
                            <div className="row" style={{marginTop:"20px",marginBottom:"60px"}}>
                              <h5 style={{color:"#5c00b7"}}>Learn more</h5>
                              <img className="logo-image" src={require("../img/products/arrow.png")} alt="" style={{marginTop:"-20px"}}></img>
                            </div>
                            </div>
                            <div className="vl"></div>
                            <div className="col-3">
                            <div className="row">
                            <b style={{fontSize:"20px",marginLeft:"100px",marginTop:"30px",fontWeight:"600"}}>Our Mission</b>
                            </div>
                            <div className="row" style={{marginLeft:"40px",marginTop:"30px"}}>
                              <img className="logo-image" src={require("../img/products/privacy.png")} alt=""></img>
                              <p style={{marginTop:"15px",marginLeft:"10px",fontWeight:"600"}}>About us</p>
                            </div>
                            <div className="row" style={{marginLeft:"40px"}}>
                              <img className="logo-image" src={require("../img/products/identity.png")} alt=""></img>
                              <p style={{marginTop:"15px",marginLeft:"10px",fontWeight:"600"}}>Careers</p>
                              </div>                     
                            </div>
                            <div className="col-3">
                            <div className="row">                        
                            </div>                        

                            <div className="row" style={{marginLeft:"40px",marginTop:"85px"}}>
                              <img className="logo-image" src={require("../img/products/privacy.png")} alt=""></img>
                              <p style={{marginTop:"15px",marginLeft:"10px",fontWeight:"600"}}>News & Press</p>
                            </div>
                           
                            </div>



                            </div>
                            </li>

                      </ul>
                      </div>
                  
                </li>
              </ul>
              <a
                className={`btn_get btn_request bg-transparent  ${hbtnClass}`}
                href="#get-app"
              >
                {t("navmenu.request_demo")}
              </a>
            </div>
            <div className="language-selector__container">
                <select className="js_language_selector" onChange={changeLang} value={lang}>
                  <option value="en">EN</option>
                  <option value="fr">FR</option>
                </select>
            </div>
          </div>
        </nav>
      </header>
    // </Sticky>
  );
};

export default CustomNavbar;
