var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

//functional statless component

function Prompt (props) {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group">
            <input
              className='form-control'
              onChange={props.onUpdateUser}
              placeholder='Github Username'
              type='text'
              value={props.username} />
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button
              className="btn btn-block btn-success"
              type="submit">
                Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

Prompt.propTypes = {
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

module.exports = Prompt

// PREVIOUS VERSION
// var Prompt = React.createClass({
//   propTypes: {
//     onSubmitUser: PropTypes.func.isRequired,
//     onUpdateUser: PropTypes.func.isRequired,
//     header: PropTypes.string.isRequired,
//     username: PropTypes.string.isRequired,
//   }
//   render: function(){
//     return (
//       <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles.transparentBg}>
//         <h1>{this.props.header}</h1>
//         <div className="col-sm-12">
//           <form onSubmit={this.props.onSubmitUser}>
//             <div className="form-group">
//               <input 
//                 className="form-control" 
//                 placeholder="Github Username" 
//                 type="text"
//                 onChange={this.props.onUpdateUser}
//                 value={this.props.username}/>
//             </div>
//             <div className="form-group col-sm-4 col-sm-offset-4">
//               <button 
//                   className="btn btn-block btn-success" 
//                   type="submit">
//                     Continue
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     )
//   }
// })

