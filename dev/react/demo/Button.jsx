var cx = require('classnames');

module.exports = React.createClass({

  displayName: "Button",
  
  getInitialState: function() {
    return {
	  checked: true
	};
  },
  
  handleClick: function() {
    
	
	//DemoComponent.changeText("new text");
	this.props.handleClick();
	this.setState({checked:!this.state.checked});  
  },
  
  render: function(){
    return (
      <button type="button" className={cx("button",{checked:this.state.checked})} onClick={this.handleClick}>
       button
      </button>
    )
  }
  
});