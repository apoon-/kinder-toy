AppBody = React.createClass({
  render() {
    return (
      <div className="ionic-body">
        <div className="bar bar-header bar-light">
          <ReactRouter.Link className="button button-icon icon ion-navicon" to={"/settings"}></ReactRouter.Link>
          <ReactRouter.Link className="button wagon" to={"/other"}><img src="wagon.png"/></ReactRouter.Link>
          <ReactRouter.Link className="h1 title logo" to={"/"}><img src="logo.png"/></ReactRouter.Link>
        </div>

        <div className="view">
          <div className="scroll-content ionic-scroll">
            <div className="content overflow-scroll has-header">
              <ReactRouter.RouteHandler />
            </div>
          </div>
        </div>
      </div>
    )
  }
})
