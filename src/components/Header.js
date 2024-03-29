import React from 'react'
import '../css/app.min.css'
import '../css/bootstrap.min.css'
import '../css/icons.min.css'
import logoImg from '../images/logo.svg'
import logoDark from '../images/logo-dark.png'
import logoLightP from '../images/logo-light.png'
import logoLightS from '../images/logo-light.svg'

const Header = () => {
 return (
  <>
  <div>

  
   <header id="page-topbar">
    <div className="navbar-header">
     <div className="d-flex">
     
                        <div className="navbar-brand-box">
       <a href="index.html" className="logo logo-dark">
        <span className="logo-sm">
         <img src={logoImg} alt="" height="22" />
                                </span>
         <span className="logo-lg">
          <img src={logoDark} alt="" height="17" />
                                </span>
                            </a>

         <a href="index.html" className="logo logo-light">
          <span className="logo-sm">
           <img src={logoLightS} alt="" height="22" />
                                </span>
           <span className="logo-lg">
            <img src={logoLightP} alt="" height="19" />
                                </span>
                            </a>
                        </div>

          <button type="button" className="btn btn-sm px-3 font-size-16 header-item waves-effect" id="vertical-menu-btn">
           <i className="fa fa-fw fa-bars"></i>
          </button>

          
                        <form className="app-search d-none d-lg-block">
           <div className="position-relative">
            <input type="text" className="form-control" placeholder="Search..." />
             <span className="bx bx-search-alt"></span>
                            </div>
                        </form>

           <div className="dropdown dropdown-mega d-none d-lg-block ms-2">
            <button type="button" className="btn header-item waves-effect" data-bs-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
             <span key="t-megamenu">Mega Menu</span>
             <i className="mdi mdi-chevron-down"></i>
            </button>
            <div className="dropdown-menu dropdown-megamenu">
             <div className="row">
              <div className="col-sm-8">

               <div className="row">
                <div className="col-md-4">
                 <h5 className="font-size-14" key="t-ui-components">UI Components</h5>
                 <ul className="list-unstyled megamenu-list">
                  <li>
                   <a href="#" key="t-lightbox">Lightbox</a>
                  </li>
                  <li>
                   <a href="#" key="t-range-slider">Range Slider</a>
                  </li>
                  <li>
                   <a href="#" key="t-sweet-alert">Sweet Alert</a>
                  </li>
                  <li>
                   <a href="#" key="t-rating">Rating</a>
                  </li>
                  <li>
                   <a href="#" key="t-forms">Forms</a>
                  </li>
                  <li>
                   <a href="#" key="t-tables">Tables</a>
                  </li>
                  <li>
                   <a href="#" key="t-charts">Charts</a>
                  </li>
                 </ul>
                </div>

                <div className="col-md-4">
                 <h5 className="font-size-14" key="t-applications">Applications</h5>
                 <ul className="list-unstyled megamenu-list">
                  <li>
                   <a href="#" key="t-ecommerce">Ecommerce</a>
                  </li>
                  <li>
                   <a href="#" key="t-calendar">Calendar</a>
                  </li>
                  <li>
                   <a href="#" key="t-email">Email</a>
                  </li>
                  <li>
                   <a href="#" key="t-projects">Projects</a>
                  </li>
                  <li>
                   <a href="#" key="t-tasks">Tasks</a>
                  </li>
                  <li>
                   <a href="#" key="t-contacts">Contacts</a>
                  </li>
                 </ul>
                </div>

                <div className="col-md-4">
                 <h5 className="font-size-14" key="t-extra-pages">Extra Pages</h5>
                 <ul className="list-unstyled megamenu-list">
                  <li>
                   <a href="#" key="t-light-sidebar">Light Sidebar</a>
                  </li>
                  <li>
                   <a href="#" key="t-compact-sidebar">Compact Sidebar</a>
                  </li>
                  <li>
                   <a href="#" key="t-horizontal">Horizontal layout</a>
                  </li>
                  <li>
                   <a href="#" key="t-maintenance">Maintenance</a>
                  </li>
                  <li>
                   <a href="#" key="t-coming-soon">Coming Soon</a>
                  </li>
                  <li>
                   <a href="#" key="t-timeline">Timeline</a>
                  </li>
                  <li>
                   <a href="#" key="t-faqs">FAQs</a>
                  </li>

                 </ul>
                </div>
               </div>
              </div>
              <div className="col-sm-4">
               <div className="row">
                <div className="col-sm-6">
                 <h5 className="font-size-14" key="t-ui-components">UI Components</h5>
                 <ul className="list-unstyled megamenu-list">
                  <li>
                   <a href="#" key="t-lightbox">Lightbox</a>
                  </li>
                  <li>
                   <a href="#" key="t-range-slider">Range Slider</a>
                  </li>
                  <li>
                   <a href="#" key="t-sweet-alert">Sweet Alert</a>
                  </li>
                  <li>
                   <a href="#" key="t-rating">Rating</a>
                  </li>
                  <li>
                   <a href="#" key="t-forms">Forms</a>
                  </li>
                  <li>
                   <a href="#" key="t-tables">Tables</a>
                  </li>
                  <li>
                   <a href="#" key="t-charts">Charts</a>
                  </li>
                 </ul>
                </div>

                <div className="col-sm-5">
                 <div>
                 
                                                </div>
                 </div>
                </div>
               </div>
              </div>

             </div>
            </div>
           </div>

           <div className="d-flex">

            <div className="dropdown d-inline-block d-lg-none ms-2">
             <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"
              data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="mdi mdi-magnify"></i>
             </button>
             <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
              aria-labelledby="page-header-search-dropdown">

              <form className="p-3">
               <div className="form-group m-0">
                <div className="input-group">
                 <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                  <div className="input-group-append">
                   <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></button>
                  </div>
                                        </div>
                </div>
                                </form>
                            </div>
             </div>

             <div className="dropdown d-inline-block">
              <button type="button" className="btn header-item waves-effect"
               data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               
                            </button>
               <div className="dropdown-menu dropdown-menu-end">

                
                                <a href="#" className="dropdown-item notify-item language" data-lang="en">
                 {/* <img src="assets/images/flags/us.jpg" alt="user-image" className="me-1" height="12"> <span className="align-middle">English</span> */}
                                </a>
                 
                                <a href="#" className="dropdown-item notify-item language" data-lang="sp">
                  {/* <img src="assets/images/flags/spain.jpg" alt="user-image" className="me-1" height="12"> <span className="align-middle">Spanish</span> */}
                                </a>

                  
                                <a href="#" className="dropdown-item notify-item language" data-lang="gr">
                   {/* <img src="assets/images/flags/germany.jpg" alt="user-image" className="me-1" height="12"> <span className="align-middle">German</span> */}
                                </a>

                   
                                <a href="#" className="dropdown-item notify-item language" data-lang="it">
                    {/* <img src="assets/images/flags/italy.jpg" alt="user-image" className="me-1" height="12"> <span className="align-middle">Italian</span> */}
                                </a>

                    
                                <a href="#" className="dropdown-item notify-item language" data-lang="ru">
                     {/* <img src="assets/images/flags/russia.jpg" alt="user-image" className="me-1" height="12"> <span className="align-middle">Russian</span> */}
                                </a>
                            </div>
                        </div>

                   <div className="dropdown d-none d-lg-inline-block ms-1">
                    <button type="button" className="btn header-item noti-icon waves-effect"
                     data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     <i className="bx bx-customize"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                     <div className="px-lg-2">
                      <div className="row g-0">
                       <div className="col">
                        <a className="dropdown-icon-item" href="index.html#">
                         {/* <img src="assets/images/brands/github.png" alt="Github"> */}
                          <span>GitHub</span>
                                            </a>
                                        </div>
                        <div className="col">
                         <a className="dropdown-icon-item" href="index.html#">
                          {/* <img src="assets/images/brands/bitbucket.png" alt="bitbucket"> */}
                           <span>Bitbucket</span>
                                            </a>
                                        </div>
                         <div className="col">
                          <a className="dropdown-icon-item" href="index.html#">
                           {/* <img src="assets/images/brands/dribbble.png" alt="dribbble"> */}
                            <span>Dribbble</span>
                                            </a>
                                        </div>
                         </div>

                         <div className="row g-0">
                          <div className="col">
                           <a className="dropdown-icon-item" href="index.html#">
                            {/* <img src="assets/images/brands/dropbox.png" alt="dropbox"> */}
                             <span>Dropbox</span>
                                            </a>
                                        </div>
                           <div className="col">
                            <a className="dropdown-icon-item" href="index.html#">
                             {/* <img src="assets/images/brands/mail_chimp.png" alt="mail_chimp"> */}
                              <span>Mail Chimp</span>
                                            </a>
                                        </div>
                            <div className="col">
                             <a className="dropdown-icon-item" href="index.html#">
                              {/* <img src="assets/images/brands/slack.png" alt="slack"> */}
                               <span>Slack</span>
                                            </a>
                                        </div>
                            </div>
                           </div>
                          </div>
                         </div>

                         <div className="dropdown d-none d-lg-inline-block ms-1">
                          <button type="button" className="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
                           <i className="bx bx-fullscreen"></i>
                          </button>
                         </div>

                         <div className="dropdown d-inline-block">
                          <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown"
                           data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           <i className="bx bx-bell bx-tada"></i>
                           <span className="badge bg-danger rounded-pill">3</span>
                          </button>
                          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                           aria-labelledby="page-header-notifications-dropdown">
                           <div className="p-3">
                            <div className="row align-items-center">
                             <div className="col">
                              <h6 className="m-0" key="t-notifications"> Notifications </h6>
                             </div>
                             <div className="col-auto">
                              <a href="index.html#!" className="small" key="t-view-all"> View All</a>
                             </div>
                            </div>
                           </div>
                           <div data-simplebar style={{"maxHeight": "230px"}}>
                            <a href="j#" className="text-reset notification-item">
                             <div className="d-flex">
                              <div className="avatar-xs me-3">
                               <span className="avatar-title bg-primary rounded-circle font-size-16">
                                <i className="bx bx-cart"></i>
                               </span>
                              </div>
                              <div className="flex-grow-1">
                               <h6 className="mb-1" key="t-your-order">Your order is placed</h6>
                               <div className="font-size-12 text-muted">
                                <p className="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                                <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span key="t-min-ago">3 min ago</span></p>
                               </div>
                              </div>
                             </div>
                            </a>
                            <a href="j#" className="text-reset notification-item">
                             <div className="d-flex">
                              {/* <img src="assets/images/users/avatar-3.jpg" */}
                               className="me-3 rounded-circle avatar-xs" alt="user-pic">
                               <div className="flex-grow-1">
                                <h6 className="mb-1">James Lemire</h6>
                                <div className="font-size-12 text-muted">
                                 <p className="mb-1" key="t-simplified">It will seem like simplified English.</p>
                                 <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span key="t-hours-ago">1 hours ago</span></p>
                                </div>
                               </div>
                                        </div>
                                    </a>
                             <a href="j#" className="text-reset notification-item">
                              <div className="d-flex">
                               <div className="avatar-xs me-3">
                                <span className="avatar-title bg-success rounded-circle font-size-16">
                                 <i className="bx bx-badge-check"></i>
                                </span>
                               </div>
                               <div className="flex-grow-1">
                                <h6 className="mb-1" key="t-shipped">Your item is shipped</h6>
                                <div className="font-size-12 text-muted">
                                 <p className="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                                 <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span key="t-min-ago">3 min ago</span></p>
                                </div>
                               </div>
                              </div>
                             </a>

                             <a href="j#" className="text-reset notification-item">
                              <div className="d-flex">
                               {/* <img src="assets/images/users/avatar-4.jpg" */}
                                className="me-3 rounded-circle avatar-xs" alt="user-pic">
                                <div className="flex-grow-1">
                                 <h6 className="mb-1">Salena Layfield</h6>
                                 <div className="font-size-12 text-muted">
                                  <p className="mb-1" key="t-occidental">As a skeptical Cambridge friend of mine occidental.</p>
                                  <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span key="t-hours-ago">1 hours ago</span></p>
                                 </div>
                                </div>
                                        </div>
                                    </a>
                                </div>
                             <div className="p-2 border-top d-grid">
                              <a className="btn btn-sm btn-link font-size-14 text-center" href="#">
                               <i className="mdi mdi-arrow-right-circle me-1"></i> <span key="t-view-more">View More..</span>
                              </a>
                             </div>
                            </div>
                           </div>

                           <div className="dropdown d-inline-block">
                            <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown"
                             data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                             {/* <img className="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg" */}
                              alt="Header Avatar">
                              <span className="d-none d-xl-inline-block ms-1" key="t-henry">Henry</span>
                              <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                            </button>
                             <div className="dropdown-menu dropdown-menu-end">
                              
                                <a className="dropdown-item" href="index.html#"><i className="bx bx-user font-size-16 align-middle me-1"></i> <span key="t-profile">Profile</span></a>
                              <a className="dropdown-item" href="index.html#"><i className="bx bx-wallet font-size-16 align-middle me-1"></i> <span key="t-my-wallet">My Wallet</span></a>
                              <a className="dropdown-item d-block" href="index.html#"><span className="badge bg-success float-end">11</span><i className="bx bx-wrench font-size-16 align-middle me-1"></i> <span key="t-settings">Settings</span></a>
                              <a className="dropdown-item" href="index.html#"><i className="bx bx-lock-open font-size-16 align-middle me-1"></i> <span key="t-lock-screen">Lock screen</span></a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item text-danger" href="index.html#"><i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i> <span key="t-logout">Logout</span></a>
                             </div>
                        </div>

                            <div className="dropdown d-inline-block">
                             <button type="button" className="btn header-item noti-icon right-bar-toggle waves-effect">
                              <i className="bx bx-cog bx-spin"></i>
                             </button>
                            </div>

                           </div>
                          </div>
                          
            </header>
                         </div>
  </>
 )
}


export default Header
