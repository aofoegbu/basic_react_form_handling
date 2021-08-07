import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EssayForm from './text_area';
import FlavourForm from './select_form'
import reportWebVitals from './reportWebVitals';

class NameForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }
  handleSubmit(event){
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render(){
    return (
      <div>
        <br />
        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        </form>
        <br />
        <br/>
      </div>
    );
  }
}

ReactDOM.render(
    <NameForm />,
  document.getElementById('root')
);
ReactDOM.render(
  <EssayForm />,
  document.getElementById('root1')
);
ReactDOM.render(
  <FlavourForm />,
  document.getElementById('root2')
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
