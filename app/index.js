// var USER_DATA = {
//   name: "Arturo",
//   username: "Meow",
//   image: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/sh0.08/e35/p750x750/12224148_1038380622860602_1611455797_n.jpg?ig_cache_key=MTEyNDIxNjg2NDUyODgzNTkyMA%3D%3D.2"
// }

var React = require('react')
var ReactDOM = require('react-dom')
var routes = require('./config/routes')

ReactDOM.render(
  routes, 
  document.getElementById('app')
)

// var HelloWorld = React.createClass({
//   render: function(){
//     return (
//       <div> 
//         <h1>Hello {this.props.name}!</h1>
//         <button className="btn btn-primary">Bootstrap is Loaded</button> 
//       </div>
//     )
//   }

// })

// var Link = React.createClass({
//   changeUrl: function(){
//     window.location.replace(this.props.href)
//   },
//   render: function(){
//     return(
//       <span style={{color: 'blue', cursor: 'pointer'}} onClick={this.changeUrl}>
//         {this.props.children}
//       </span>
//     )
//   }
// })

// var ProfilePic = React.createClass({

//   render: function(){
//     return (
//     <div>
//       <img src={this.props.imgUrl} style={{height:100, width: 100}}/>
//     </div>
      
//     )
//   }
// })

// var ProfileLink = React.createClass({
//   render: function(){
//     return (
//       <Link href={'http://www.github.com/' + this.props.username}>
//         {this.props.username}
//       </Link>
//     )
//   }
// })

// var ProfileName = React.createClass({

//   render: function(){
//     return <div>{this.props.username}</div>
//   }
// })

// var Avitar = React.createClass({
//   render: function(){
//     return(
//       <div>
//         <ProfilePic imgUrl={this.props.user.image}/>
//         <ProfileName username={this.props.user.name}/>
//         <ProfileLink username={this.props.user.username}/>
//       </div>
//     )
//   }
// })






// ReactDOM.render(<Avitar user={USER_DATA}/>, document.getElementById('app'))




