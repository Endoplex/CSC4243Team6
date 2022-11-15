const React = require('React')

class TitleBar extends React.Component {
    constructor(self) { 
        super(self) 
    }

    TitleBar() {
        React.createElement('div', {className: 'TitleBar'}), //<div className = "Title Bar" type="">
        React.createElement('title', {Home}), //<title> HOME </title>
        React.createElement('h1', {}, 'Start Your Resume Here') //<h1> Start Your Resume Here </h1>
    }
}

class body extends React.Component {
    render() {
        return ( <div id="root"></div> );
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
        //create saving mechanism later
        try { console.log('submitted');
        } catch(err) {
            console.log('error, no data');
        }
    }

    render() {
        return(
            <form>
                <label>
                    <input type="text" value = {this.text} onChange = 
                    {this.handleEvent()}/>
                </label>
                <input type = "submit" onClick = {this.submit}/>
            </form>
        );
    }
}

ReactDOM.render({TitleBar, TextBox}, body.getIdByElement(root));
