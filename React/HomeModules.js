const React = require('React')

class TitleBar extends React.Component {
    TitleBar() {
        React.createElement('div', {className: 'TitleBar'}), //<div className = "Title Bar" type="">
        React.createElement('title', {Home}), //<title> HOME </title>
        React.createElement('h1', {}, 'Start Your Resume Here') //<h1> Start Your Resume Here </h1>
    }
}

class TextBox extends React.Component {
    constructor(self) {
        super(self);
        this.text = '';

        this.handleEvent = this.handleChange.bind(this);
    }

    handleEvent(event) {
        this.text = event.target.value; 
    }

    submit(event){
        
    }

    render() {
        return(
            <form>
                <label>
                    <input type="text" value = {this.text} onChange = 
                    {this.handleEvent}/>
                </label>
                <input type = "button" onClick = {this.submit}/>
            </form>

        );
    }
}

ReactDOM.render(TitleBar, TextBox, document.body);
