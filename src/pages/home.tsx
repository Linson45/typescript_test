import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Container } from 'reactstrap';
import IPageProps from '../interfaces/page';

const HomePage: React.FunctionComponent<IPageProps> = props => {
    return (<>
        {/* <Container>
            <Card>
                <CardBody>
                    <p>
                        Welcome to this page.
                    </p>
                    <p>
                        Change your password <Link to="/change">here</Link>.
                    </p>
                    <p>
                        Click <Link to='/logout'>here</Link> to logout.
                    </p>
                </CardBody>
            </Card>
        </Container> */}
        <div>
        {/* Navigation*/}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
          <a className="navbar-brand" href="index.html">Start Bootstrap</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
              <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
                <a className="nav-link" href="index.html">
                  <i className="fa fa-fw fa-dashboard" />
                  <span className="nav-link-text">Dashboard</span>
                </a>
              </li>
              <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
                <a className="nav-link" href="charts.html">
                  <i className="fa fa-fw fa-area-chart" />
                  <span className="nav-link-text">Charts</span>
                </a>
              </li>
              <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
                <a className="nav-link" href="tables.html">
                  <i className="fa fa-fw fa-table" />
                  <span className="nav-link-text">Tables</span>
                </a>
              </li>
              <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
                <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseComponents" data-parent="#exampleAccordion">
                  <i className="fa fa-fw fa-wrench" />
                  <span className="nav-link-text">Components</span>
                </a>
                <ul className="sidenav-second-level collapse" id="collapseComponents">
                  <li>
                    <a href="navbar.html">Navbar</a>
                  </li>
                  <li>
                    <a href="cards.html">Cards</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Example Pages">
                <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseExamplePages" data-parent="#exampleAccordion">
                  <i className="fa fa-fw fa-file" />
                  <span className="nav-link-text">Example Pages</span>
                </a>
                <ul className="sidenav-second-level collapse" id="collapseExamplePages">
                  <li>
                    <a href="login.html">Login Page</a>
                  </li>
                  <li>
                    <a href="register.html">Registration Page</a>
                  </li>
                  <li>
                    <a href="forgot-password.html">Forgot Password Page</a>
                  </li>
                  <li>
                    <a href="blank.html">Blank Page</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Menu Levels">
                <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseMulti" data-parent="#exampleAccordion">
                  <i className="fa fa-fw fa-sitemap" />
                  <span className="nav-link-text">Menu Levels</span>
                </a>
                <ul className="sidenav-second-level collapse" id="collapseMulti">
                  <li>
                    <a href="#">Second Level Item</a>
                  </li>
                  <li>
                    <a href="#">Second Level Item</a>
                  </li>
                  <li>
                    <a href="#">Second Level Item</a>
                  </li>
                  <li>
                    <a className="nav-link-collapse collapsed" data-toggle="collapse" href="#collapseMulti2">Third Level</a>
                    <ul className="sidenav-third-level collapse" id="collapseMulti2">
                      <li>
                        <a href="#">Third Level Item</a>
                      </li>
                      <li>
                        <a href="#">Third Level Item</a>
                      </li>
                      <li>
                        <a href="#">Third Level Item</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Link">
                <a className="nav-link" href="#">
                  <i className="fa fa-fw fa-link" />
                  <span className="nav-link-text">Link</span>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav sidenav-toggler">
              <li className="nav-item">
                <a className="nav-link text-center" id="sidenavToggler">
                  <i className="fa fa-fw fa-angle-left" />
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle mr-lg-2" id="messagesDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-fw fa-envelope" />
                  <span className="d-lg-none">Messages
                    <span className="badge badge-pill badge-primary">12 New</span>
                  </span>
                  <span className="indicator text-primary d-none d-lg-block">
                    <i className="fa fa-fw fa-circle" />
                  </span>
                </a>
                <div className="dropdown-menu" aria-labelledby="messagesDropdown">
                  <h6 className="dropdown-header">New Messages:</h6>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    <strong>David Miller</strong>
                    <span className="small float-right text-muted">11:21 AM</span>
                    <div className="dropdown-message small">Hey there! This new version of SB Admin is pretty awesome! These messages clip off when they reach the end of the box so they don't overflow over to the sides!</div>
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    <strong>Jane Smith</strong>
                    <span className="small float-right text-muted">11:21 AM</span>
                    <div className="dropdown-message small">I was wondering if you could meet for an appointment at 3:00 instead of 4:00. Thanks!</div>
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    <strong>John Doe</strong>
                    <span className="small float-right text-muted">11:21 AM</span>
                    <div className="dropdown-message small">I've sent the final files over to you for review. When you're able to sign off of them let me know and we can discuss distribution.</div>
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item small" href="#">View all messages</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-fw fa-bell" />
                  <span className="d-lg-none">Alerts
                    <span className="badge badge-pill badge-warning">6 New</span>
                  </span>
                  <span className="indicator text-warning d-none d-lg-block">
                    <i className="fa fa-fw fa-circle" />
                  </span>
                </a>
                <div className="dropdown-menu" aria-labelledby="alertsDropdown">
                  <h6 className="dropdown-header">New Alerts:</h6>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    <span className="text-success">
                      <strong>
                        <i className="fa fa-long-arrow-up fa-fw" />Status Update</strong>
                    </span>
                    <span className="small float-right text-muted">11:21 AM</span>
                    <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    <span className="text-danger">
                      <strong>
                        <i className="fa fa-long-arrow-down fa-fw" />Status Update</strong>
                    </span>
                    <span className="small float-right text-muted">11:21 AM</span>
                    <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    <span className="text-success">
                      <strong>
                        <i className="fa fa-long-arrow-up fa-fw" />Status Update</strong>
                    </span>
                    <span className="small float-right text-muted">11:21 AM</span>
                    <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item small" href="#">View all alerts</a>
                </div>
              </li>
              <li className="nav-item">
                <form className="form-inline my-2 my-lg-0 mr-lg-2">
                  <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search for..." />
                    <span className="input-group-append">
                      <button className="btn btn-primary" type="button">
                        <i className="fa fa-search" />
                      </button>
                    </span>
                  </div>
                </form>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="modal" data-target="#exampleModal">
                  <i className="fa fa-fw fa-sign-out" /><Link to='/logout'>Logout here</Link></a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="content-wrapper">
          <div className="container-fluid">
            {/* Breadcrumbs*/}
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">My Dashboard</li>
            </ol>
            {/* Icon Cards*/}
            <div className="row">
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-primary o-hidden h-100">
                  <div className="card-body">
                    <div className="card-body-icon">
                      <i className="fa fa-fw fa-comments" />
                    </div>
                    <div className="mr-5">26 New Messages!</div>
                  </div>
                  <a className="card-footer text-white clearfix small z-1" href="#">
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-warning o-hidden h-100">
                  <div className="card-body">
                    <div className="card-body-icon">
                      <i className="fa fa-fw fa-list" />
                    </div>
                    <div className="mr-5">11 New Tasks!</div>
                  </div>
                  <a className="card-footer text-white clearfix small z-1" href="#">
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-success o-hidden h-100">
                  <div className="card-body">
                    <div className="card-body-icon">
                      <i className="fa fa-fw fa-shopping-cart" />
                    </div>
                    <div className="mr-5">123 New Orders!</div>
                  </div>
                  <a className="card-footer text-white clearfix small z-1" href="#">
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-danger o-hidden h-100">
                  <div className="card-body">
                    <div className="card-body-icon">
                      <i className="fa fa-fw fa-support" />
                    </div>
                    <div className="mr-5">13 New Tickets!</div>
                  </div>
                  <a className="card-footer text-white clearfix small z-1" href="#">
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* Area Chart Example*/}
            <div className="card mb-3">
              <div className="card-header">
                <i className="fa fa-area-chart" /> Area Chart Example</div>
              <div className="card-body">
                <canvas id="myAreaChart" width="100%" height={30} />
              </div>
              <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                {/* Example Bar Chart Card*/}
                <div className="card mb-3">
                  <div className="card-header">
                    <i className="fa fa-bar-chart" /> Bar Chart Example</div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-8 my-auto">
                        <canvas id="myBarChart" width={100} height={50} />
                      </div>
                      <div className="col-sm-4 text-center my-auto">
                        <div className="h4 mb-0 text-primary">$34,693</div>
                        <div className="small text-muted">YTD Revenue</div>
                        <hr />
                        <div className="h4 mb-0 text-warning">$18,474</div>
                        <div className="small text-muted">YTD Expenses</div>
                        <hr />
                        <div className="h4 mb-0 text-success">$16,219</div>
                        <div className="small text-muted">YTD Margin</div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                </div>
                {/* Card Columns Example Social Feed*/}
                <div className="mb-0 mt-4">
                  <i className="fa fa-newspaper-o" /> News Feed</div>
                <hr className="mt-2" />
                <div className="card-columns">
                  {/* Example Social Card*/}
                  <div className="card mb-3">
                    <a href="#">
                      <img className="card-img-top img-fluid w-100" src="https://unsplash.it/700/450?image=610" alt="" />
                    </a>
                    <div className="card-body">
                      <h6 className="card-title mb-1"><a href="#">David Miller</a></h6>
                      <p className="card-text small">These waves are looking pretty good today!
                        <a href="#">#surfsup</a>
                      </p>
                    </div>
                    <hr className="my-0" />
                    <div className="card-body py-2 small">
                      <a className="mr-3 d-inline-block" href="#">
                        <i className="fa fa-fw fa-thumbs-up" />Like</a>
                      <a className="mr-3 d-inline-block" href="#">
                        <i className="fa fa-fw fa-comment" />Comment</a>
                      <a className="d-inline-block" href="#">
                        <i className="fa fa-fw fa-share" />Share</a>
                    </div>
                    <hr className="my-0" />
                    <div className="card-body small bg-faded">
                      <div className="media">
                        <img className="d-flex mr-3" src="http://placehold.it/45x45" alt="" />
                        <div className="media-body">
                          <h6 className="mt-0 mb-1"><a href="#">John Smith</a></h6>Very nice! I wish I was there! That looks amazing!
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a href="#">Like</a>
                            </li>
                            <li className="list-inline-item">??</li>
                            <li className="list-inline-item">
                              <a href="#">Reply</a>
                            </li>
                          </ul>
                          <div className="media mt-3">
                            <a className="d-flex pr-3" href="#">
                              <img src="http://placehold.it/45x45" alt="" />
                            </a>
                            <div className="media-body">
                              <h6 className="mt-0 mb-1"><a href="#">David Miller</a></h6>Next time for sure!
                              <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                  <a href="#">Like</a>
                                </li>
                                <li className="list-inline-item">??</li>
                                <li className="list-inline-item">
                                  <a href="#">Reply</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer small text-muted">Posted 32 mins ago</div>
                  </div>
                  {/* Example Social Card*/}
                  <div className="card mb-3">
                    <a href="#">
                      <img className="card-img-top img-fluid w-100" src="https://unsplash.it/700/450?image=180" alt="" />
                    </a>
                    <div className="card-body">
                      <h6 className="card-title mb-1"><a href="#">John Smith</a></h6>
                      <p className="card-text small">Another day at the office...
                        <a href="#">#workinghardorhardlyworking</a>
                      </p>
                    </div>
                    <hr className="my-0" />
                    <div className="card-body py-2 small">
                      <a className="mr-3 d-inline-block" href="#">
                        <i className="fa fa-fw fa-thumbs-up" />Like</a>
                      <a className="mr-3 d-inline-block" href="#">
                        <i className="fa fa-fw fa-comment" />Comment</a>
                      <a className="d-inline-block" href="#">
                        <i className="fa fa-fw fa-share" />Share</a>
                    </div>
                    <hr className="my-0" />
                    <div className="card-body small bg-faded">
                      <div className="media">
                        <img className="d-flex mr-3" src="http://placehold.it/45x45" alt="" />
                        <div className="media-body">
                          <h6 className="mt-0 mb-1"><a href="#">Jessy Lucas</a></h6>Where did you get that camera?! I want one!
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a href="#">Like</a>
                            </li>
                            <li className="list-inline-item">??</li>
                            <li className="list-inline-item">
                              <a href="#">Reply</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer small text-muted">Posted 46 mins ago</div>
                  </div>
                  {/* Example Social Card*/}
                  <div className="card mb-3">
                    <a href="#">
                      <img className="card-img-top img-fluid w-100" src="https://unsplash.it/700/450?image=281" alt="" />
                    </a>
                    <div className="card-body">
                      <h6 className="card-title mb-1"><a href="#">Jeffery Wellings</a></h6>
                      <p className="card-text small">Nice shot from the skate park!
                        <a href="#">#kickflip</a>
                        <a href="#">#holdmybeer</a>
                        <a href="#">#igotthis</a>
                      </p>
                    </div>
                    <hr className="my-0" />
                    <div className="card-body py-2 small">
                      <a className="mr-3 d-inline-block" href="#">
                        <i className="fa fa-fw fa-thumbs-up" />Like</a>
                      <a className="mr-3 d-inline-block" href="#">
                        <i className="fa fa-fw fa-comment" />Comment</a>
                      <a className="d-inline-block" href="#">
                        <i className="fa fa-fw fa-share" />Share</a>
                    </div>
                    <div className="card-footer small text-muted">Posted 1 hr ago</div>
                  </div>
                  {/* Example Social Card*/}
                  <div className="card mb-3">
                    <a href="#">
                      <img className="card-img-top img-fluid w-100" src="https://unsplash.it/700/450?image=185" alt="" />
                    </a>
                    <div className="card-body">
                      <h6 className="card-title mb-1"><a href="#">David Miller</a></h6>
                      <p className="card-text small">It's hot, and I might be lost...
                        <a href="#">#desert</a>
                        <a href="#">#water</a>
                        <a href="#">#anyonehavesomewater</a>
                        <a href="#">#noreally</a>
                        <a href="#">#thirsty</a>
                        <a href="#">#dehydration</a>
                      </p>
                    </div>
                    <hr className="my-0" />
                    <div className="card-body py-2 small">
                      <a className="mr-3 d-inline-block" href="#">
                        <i className="fa fa-fw fa-thumbs-up" />Like</a>
                      <a className="mr-3 d-inline-block" href="#">
                        <i className="fa fa-fw fa-comment" />Comment</a>
                      <a className="d-inline-block" href="#">
                        <i className="fa fa-fw fa-share" />Share</a>
                    </div>
                    <hr className="my-0" />
                    <div className="card-body small bg-faded">
                      <div className="media">
                        <img className="d-flex mr-3" src="http://placehold.it/45x45" alt="" />
                        <div className="media-body">
                          <h6 className="mt-0 mb-1"><a href="#">John Smith</a></h6>The oasis is a mile that way, or is that just a mirage?
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a href="#">Like</a>
                            </li>
                            <li className="list-inline-item">??</li>
                            <li className="list-inline-item">
                              <a href="#">Reply</a>
                            </li>
                          </ul>
                          <div className="media mt-3">
                            <a className="d-flex pr-3" href="#">
                              <img src="http://placehold.it/45x45" alt="" />
                            </a>
                            <div className="media-body">
                              <h6 className="mt-0 mb-1"><a href="#">David Miller</a></h6>
                              <img className="img-fluid w-100 mb-1" src="https://unsplash.it/700/450?image=789" alt="" />I'm saved, I found a cactus. How do I open this thing?
                              <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                  <a href="#">Like</a>
                                </li>
                                <li className="list-inline-item">??</li>
                                <li className="list-inline-item">
                                  <a href="#">Reply</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer small text-muted">Posted yesterday</div>
                  </div>
                </div>
                {/* /Card Columns*/}
              </div>
              <div className="col-lg-4">
                {/* Example Pie Chart Card*/}
                <div className="card mb-3">
                  <div className="card-header">
                    <i className="fa fa-pie-chart" /> Pie Chart Example</div>
                  <div className="card-body">
                    <canvas id="myPieChart" width="100%" height={100} />
                  </div>
                  <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                </div>
                {/* Example Notifications Card*/}
                <div className="card mb-3">
                  <div className="card-header">
                    <i className="fa fa-bell-o" /> Feed Example</div>
                  <div className="list-group list-group-flush small">
                    <a className="list-group-item list-group-item-action" href="#">
                      <div className="media">
                        <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt="" />
                        <div className="media-body">
                          <strong>David Miller</strong>posted a new article to
                          <strong>David Miller Website</strong>.
                          <div className="text-muted smaller">Today at 5:43 PM - 5m ago</div>
                        </div>
                      </div>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#">
                      <div className="media">
                        <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt="" />
                        <div className="media-body">
                          <strong>Samantha King</strong>sent you a new message!
                          <div className="text-muted smaller">Today at 4:37 PM - 1hr ago</div>
                        </div>
                      </div>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#">
                      <div className="media">
                        <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt="" />
                        <div className="media-body">
                          <strong>Jeffery Wellings</strong>added a new photo to the album
                          <strong>Beach</strong>.
                          <div className="text-muted smaller">Today at 4:31 PM - 1hr ago</div>
                        </div>
                      </div>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#">
                      <div className="media">
                        <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt="" />
                        <div className="media-body">
                          <i className="fa fa-code-fork" />
                          <strong>Monica Dennis</strong>forked the
                          <strong>startbootstrap-sb-admin</strong>repository on
                          <strong>GitHub</strong>.
                          <div className="text-muted smaller">Today at 3:54 PM - 2hrs ago</div>
                        </div>
                      </div>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#">View all activity...</a>
                  </div>
                  <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                </div>
              </div>
            </div>
            {/* Example DataTables Card*/}
            <div className="card mb-3">
              <div className="card-header">
                <i className="fa fa-table" /> Data Table Example</div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                      </tr>
                    </tfoot>
                    <tbody>
                      <tr>
                        <td>Tiger Nixon</td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td>61</td>
                        <td>2011/04/25</td>
                        <td>$320,800</td>
                      </tr>
                      <tr>
                        <td>Garrett Winters</td>
                        <td>Accountant</td>
                        <td>Tokyo</td>
                        <td>63</td>
                        <td>2011/07/25</td>
                        <td>$170,750</td>
                      </tr>
                      <tr>
                        <td>Ashton Cox</td>
                        <td>Junior Technical Author</td>
                        <td>San Francisco</td>
                        <td>66</td>
                        <td>2009/01/12</td>
                        <td>$86,000</td>
                      </tr>
                      <tr>
                        <td>Cedric Kelly</td>
                        <td>Senior Javascript Developer</td>
                        <td>Edinburgh</td>
                        <td>22</td>
                        <td>2012/03/29</td>
                        <td>$433,060</td>
                      </tr>
                      <tr>
                        <td>Airi Satou</td>
                        <td>Accountant</td>
                        <td>Tokyo</td>
                        <td>33</td>
                        <td>2008/11/28</td>
                        <td>$162,700</td>
                      </tr>
                      <tr>
                        <td>Brielle Williamson</td>
                        <td>Integration Specialist</td>
                        <td>New York</td>
                        <td>61</td>
                        <td>2012/12/02</td>
                        <td>$372,000</td>
                      </tr>
                      <tr>
                        <td>Herrod Chandler</td>
                        <td>Sales Assistant</td>
                        <td>San Francisco</td>
                        <td>59</td>
                        <td>2012/08/06</td>
                        <td>$137,500</td>
                      </tr>
                      <tr>
                        <td>Rhona Davidson</td>
                        <td>Integration Specialist</td>
                        <td>Tokyo</td>
                        <td>55</td>
                        <td>2010/10/14</td>
                        <td>$327,900</td>
                      </tr>
                      <tr>
                        <td>Colleen Hurst</td>
                        <td>Javascript Developer</td>
                        <td>San Francisco</td>
                        <td>39</td>
                        <td>2009/09/15</td>
                        <td>$205,500</td>
                      </tr>
                      <tr>
                        <td>Sonya Frost</td>
                        <td>Software Engineer</td>
                        <td>Edinburgh</td>
                        <td>23</td>
                        <td>2008/12/13</td>
                        <td>$103,600</td>
                      </tr>
                      <tr>
                        <td>Jena Gaines</td>
                        <td>Office Manager</td>
                        <td>London</td>
                        <td>30</td>
                        <td>2008/12/19</td>
                        <td>$90,560</td>
                      </tr>
                      <tr>
                        <td>Quinn Flynn</td>
                        <td>Support Lead</td>
                        <td>Edinburgh</td>
                        <td>22</td>
                        <td>2013/03/03</td>
                        <td>$342,000</td>
                      </tr>
                      <tr>
                        <td>Charde Marshall</td>
                        <td>Regional Director</td>
                        <td>San Francisco</td>
                        <td>36</td>
                        <td>2008/10/16</td>
                        <td>$470,600</td>
                      </tr>
                      <tr>
                        <td>Haley Kennedy</td>
                        <td>Senior Marketing Designer</td>
                        <td>London</td>
                        <td>43</td>
                        <td>2012/12/18</td>
                        <td>$313,500</td>
                      </tr>
                      <tr>
                        <td>Tatyana Fitzpatrick</td>
                        <td>Regional Director</td>
                        <td>London</td>
                        <td>19</td>
                        <td>2010/03/17</td>
                        <td>$385,750</td>
                      </tr>
                      <tr>
                        <td>Michael Silva</td>
                        <td>Marketing Designer</td>
                        <td>London</td>
                        <td>66</td>
                        <td>2012/11/27</td>
                        <td>$198,500</td>
                      </tr>
                      <tr>
                        <td>Paul Byrd</td>
                        <td>Chief Financial Officer (CFO)</td>
                        <td>New York</td>
                        <td>64</td>
                        <td>2010/06/09</td>
                        <td>$725,000</td>
                      </tr>
                      <tr>
                        <td>Gloria Little</td>
                        <td>Systems Administrator</td>
                        <td>New York</td>
                        <td>59</td>
                        <td>2009/04/10</td>
                        <td>$237,500</td>
                      </tr>
                      <tr>
                        <td>Bradley Greer</td>
                        <td>Software Engineer</td>
                        <td>London</td>
                        <td>41</td>
                        <td>2012/10/13</td>
                        <td>$132,000</td>
                      </tr>
                      <tr>
                        <td>Dai Rios</td>
                        <td>Personnel Lead</td>
                        <td>Edinburgh</td>
                        <td>35</td>
                        <td>2012/09/26</td>
                        <td>$217,500</td>
                      </tr>
                      <tr>
                        <td>Jenette Caldwell</td>
                        <td>Development Lead</td>
                        <td>New York</td>
                        <td>30</td>
                        <td>2011/09/03</td>
                        <td>$345,000</td>
                      </tr>
                      <tr>
                        <td>Yuri Berry</td>
                        <td>Chief Marketing Officer (CMO)</td>
                        <td>New York</td>
                        <td>40</td>
                        <td>2009/06/25</td>
                        <td>$675,000</td>
                      </tr>
                      <tr>
                        <td>Caesar Vance</td>
                        <td>Pre-Sales Support</td>
                        <td>New York</td>
                        <td>21</td>
                        <td>2011/12/12</td>
                        <td>$106,450</td>
                      </tr>
                      <tr>
                        <td>Doris Wilder</td>
                        <td>Sales Assistant</td>
                        <td>Sidney</td>
                        <td>23</td>
                        <td>2010/09/20</td>
                        <td>$85,600</td>
                      </tr>
                      <tr>
                        <td>Angelica Ramos</td>
                        <td>Chief Executive Officer (CEO)</td>
                        <td>London</td>
                        <td>47</td>
                        <td>2009/10/09</td>
                        <td>$1,200,000</td>
                      </tr>
                      <tr>
                        <td>Gavin Joyce</td>
                        <td>Developer</td>
                        <td>Edinburgh</td>
                        <td>42</td>
                        <td>2010/12/22</td>
                        <td>$92,575</td>
                      </tr>
                      <tr>
                        <td>Jennifer Chang</td>
                        <td>Regional Director</td>
                        <td>Singapore</td>
                        <td>28</td>
                        <td>2010/11/14</td>
                        <td>$357,650</td>
                      </tr>
                      <tr>
                        <td>Brenden Wagner</td>
                        <td>Software Engineer</td>
                        <td>San Francisco</td>
                        <td>28</td>
                        <td>2011/06/07</td>
                        <td>$206,850</td>
                      </tr>
                      <tr>
                        <td>Fiona Green</td>
                        <td>Chief Operating Officer (COO)</td>
                        <td>San Francisco</td>
                        <td>48</td>
                        <td>2010/03/11</td>
                        <td>$850,000</td>
                      </tr>
                      <tr>
                        <td>Shou Itou</td>
                        <td>Regional Marketing</td>
                        <td>Tokyo</td>
                        <td>20</td>
                        <td>2011/08/14</td>
                        <td>$163,000</td>
                      </tr>
                      <tr>
                        <td>Michelle House</td>
                        <td>Integration Specialist</td>
                        <td>Sidney</td>
                        <td>37</td>
                        <td>2011/06/02</td>
                        <td>$95,400</td>
                      </tr>
                      <tr>
                        <td>Suki Burks</td>
                        <td>Developer</td>
                        <td>London</td>
                        <td>53</td>
                        <td>2009/10/22</td>
                        <td>$114,500</td>
                      </tr>
                      <tr>
                        <td>Prescott Bartlett</td>
                        <td>Technical Author</td>
                        <td>London</td>
                        <td>27</td>
                        <td>2011/05/07</td>
                        <td>$145,000</td>
                      </tr>
                      <tr>
                        <td>Gavin Cortez</td>
                        <td>Team Leader</td>
                        <td>San Francisco</td>
                        <td>22</td>
                        <td>2008/10/26</td>
                        <td>$235,500</td>
                      </tr>
                      <tr>
                        <td>Martena Mccray</td>
                        <td>Post-Sales support</td>
                        <td>Edinburgh</td>
                        <td>46</td>
                        <td>2011/03/09</td>
                        <td>$324,050</td>
                      </tr>
                      <tr>
                        <td>Unity Butler</td>
                        <td>Marketing Designer</td>
                        <td>San Francisco</td>
                        <td>47</td>
                        <td>2009/12/09</td>
                        <td>$85,675</td>
                      </tr>
                      <tr>
                        <td>Howard Hatfield</td>
                        <td>Office Manager</td>
                        <td>San Francisco</td>
                        <td>51</td>
                        <td>2008/12/16</td>
                        <td>$164,500</td>
                      </tr>
                      <tr>
                        <td>Hope Fuentes</td>
                        <td>Secretary</td>
                        <td>San Francisco</td>
                        <td>41</td>
                        <td>2010/02/12</td>
                        <td>$109,850</td>
                      </tr>
                      <tr>
                        <td>Vivian Harrell</td>
                        <td>Financial Controller</td>
                        <td>San Francisco</td>
                        <td>62</td>
                        <td>2009/02/14</td>
                        <td>$452,500</td>
                      </tr>
                      <tr>
                        <td>Timothy Mooney</td>
                        <td>Office Manager</td>
                        <td>London</td>
                        <td>37</td>
                        <td>2008/12/11</td>
                        <td>$136,200</td>
                      </tr>
                      <tr>
                        <td>Jackson Bradshaw</td>
                        <td>Director</td>
                        <td>New York</td>
                        <td>65</td>
                        <td>2008/09/26</td>
                        <td>$645,750</td>
                      </tr>
                      <tr>
                        <td>Olivia Liang</td>
                        <td>Support Engineer</td>
                        <td>Singapore</td>
                        <td>64</td>
                        <td>2011/02/03</td>
                        <td>$234,500</td>
                      </tr>
                      <tr>
                        <td>Bruno Nash</td>
                        <td>Software Engineer</td>
                        <td>London</td>
                        <td>38</td>
                        <td>2011/05/03</td>
                        <td>$163,500</td>
                      </tr>
                      <tr>
                        <td>Sakura Yamamoto</td>
                        <td>Support Engineer</td>
                        <td>Tokyo</td>
                        <td>37</td>
                        <td>2009/08/19</td>
                        <td>$139,575</td>
                      </tr>
                      <tr>
                        <td>Thor Walton</td>
                        <td>Developer</td>
                        <td>New York</td>
                        <td>61</td>
                        <td>2013/08/11</td>
                        <td>$98,540</td>
                      </tr>
                      <tr>
                        <td>Finn Camacho</td>
                        <td>Support Engineer</td>
                        <td>San Francisco</td>
                        <td>47</td>
                        <td>2009/07/07</td>
                        <td>$87,500</td>
                      </tr>
                      <tr>
                        <td>Serge Baldwin</td>
                        <td>Data Coordinator</td>
                        <td>Singapore</td>
                        <td>64</td>
                        <td>2012/04/09</td>
                        <td>$138,575</td>
                      </tr>
                      <tr>
                        <td>Zenaida Frank</td>
                        <td>Software Engineer</td>
                        <td>New York</td>
                        <td>63</td>
                        <td>2010/01/04</td>
                        <td>$125,250</td>
                      </tr>
                      <tr>
                        <td>Zorita Serrano</td>
                        <td>Software Engineer</td>
                        <td>San Francisco</td>
                        <td>56</td>
                        <td>2012/06/01</td>
                        <td>$115,000</td>
                      </tr>
                      <tr>
                        <td>Jennifer Acosta</td>
                        <td>Junior Javascript Developer</td>
                        <td>Edinburgh</td>
                        <td>43</td>
                        <td>2013/02/01</td>
                        <td>$75,650</td>
                      </tr>
                      <tr>
                        <td>Cara Stevens</td>
                        <td>Sales Assistant</td>
                        <td>New York</td>
                        <td>46</td>
                        <td>2011/12/06</td>
                        <td>$145,600</td>
                      </tr>
                      <tr>
                        <td>Hermione Butler</td>
                        <td>Regional Director</td>
                        <td>London</td>
                        <td>47</td>
                        <td>2011/03/21</td>
                        <td>$356,250</td>
                      </tr>
                      <tr>
                        <td>Lael Greer</td>
                        <td>Systems Administrator</td>
                        <td>London</td>
                        <td>21</td>
                        <td>2009/02/27</td>
                        <td>$103,500</td>
                      </tr>
                      <tr>
                        <td>Jonas Alexander</td>
                        <td>Developer</td>
                        <td>San Francisco</td>
                        <td>30</td>
                        <td>2010/07/14</td>
                        <td>$86,500</td>
                      </tr>
                      <tr>
                        <td>Shad Decker</td>
                        <td>Regional Director</td>
                        <td>Edinburgh</td>
                        <td>51</td>
                        <td>2008/11/13</td>
                        <td>$183,000</td>
                      </tr>
                      <tr>
                        <td>Michael Bruce</td>
                        <td>Javascript Developer</td>
                        <td>Singapore</td>
                        <td>29</td>
                        <td>2011/06/27</td>
                        <td>$183,000</td>
                      </tr>
                      <tr>
                        <td>Donna Snider</td>
                        <td>Customer Support</td>
                        <td>New York</td>
                        <td>27</td>
                        <td>2011/01/25</td>
                        <td>$112,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
            </div>
          </div>
          {/* /.container-fluid*/}
          {/* /.content-wrapper*/}
          <footer className="sticky-footer">
            <div className="container">
              <div className="text-center">
                <small>Copyright ?? Your Website 2018</small>
              </div>
            </div>
          </footer>
          {/* Scroll to Top Button*/}
          <a className="scroll-to-top rounded" href="#page-top">
            <i className="fa fa-angle-up" />
          </a>
          {/* Logout Modal*/}
          <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                  <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">??</span>
                  </button>
                </div>
                <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                  <a className="btn btn-primary" href="login.html">Logout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        

</>
);



    }
                export default HomePage;