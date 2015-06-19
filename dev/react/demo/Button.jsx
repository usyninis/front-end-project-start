

module.exports = React.createClass({

  displayName: "Button",
  
/*   handleClick: function() {
    
	//DemoComponent.changeText("new text");
	this.props.handleClick();
	
  }, */
  
  render: function(){
    return (
      <button type="button" onClick={this.props.handleClick}>
       button
      </button>
    )
  }
  
});