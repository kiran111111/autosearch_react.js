import React,{Component} from 'react';
import Countries from "./Country"
import './App.css';

export default class AutoCompletedText extends React.Component{
 constructor(props){
   super(props);
   this.state={
     suggestions:[],
     text:''
   }
   this.onTextChange = this.onTextChange.bind(this.onTextChange)
 }


 onTextChange=(e) => {
  let suggestions = [];
  let value = e.target.value;
  if(value.length > 0){
    let patt = new RegExp(`^${value}`,'i')
    suggestions = Countries.filter(v => patt.test(v));
  }

   this.setState({
     text:e.target.value,
     suggestions : suggestions
   })
 }
 

 selectedItem = (value) =>{
  this.setState({
    text:value,
    suggestions:[]
  })
}


 renderSuggestions = () => {
  //  let suggestions = this.state;
   if(this.state.suggestions.length == 0){
     return null;
   }
   else{
     return (
       <ul className="list">
         {
           this.state.suggestions.map((item,index)=>
          //  there should be no brackets here*****
           <li key={index}  onClick={() => this.selectedItem(item)}>{item}</li>
           )
         }
       </ul>
     )
   }
 }





render(){
  const {suggestions,text} = this.state;
   return(
     <div id="notebooks">
      <h2>AutoCompleted</h2>
      <input id="query" type="text" value={text} onChange={this.onTextChange} />
      {this.renderSuggestions()}
      <br></br>
      <p id="count">suggestions : {suggestions.length}</p>
     </div>
   )
 }
}


