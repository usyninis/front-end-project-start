var Button = require('./Button');

module.exports = React.createClass({
  
  displayName: "DemoComponent",
  
  getInitialState: function() {
    
	return {
	  text: "DemoComponent"
	};
	
  },
  
  changeText: function() {
    
	var text = "new text 2";
	this.setState({
	  text:text
	});
	
  },
  
  render: function(){
    return (
      <div>
        {this.state.text}
		<Button handleClick={this.changeText} />
      </div>
    )
  }
});