import React, {Component} from 'react'


export default class SearchBar extends Component{
    render(){
        return(
    <div>
        <br/>
        <br/>
        <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={this.props.sortState == "Alphabetically"} onChange={(e) => this.props.changeSortProp(e.target.value)} />
        Name
      </label>
      <label>
        <input type="radio" value="Weight" checked={this.props.sortState == "Weight"} onChange={(e) => this.props.changeSortProp(e.target.value)} />
        Weight
      </label>
      <label>
      <input type="radio" value="All" checked={this.props.sortState == "All"} onChange={(e) => this.props.changeSortProp(e.target.value)} />
        All
      </label>
      <br/>
      <br/>

    <label>
        <strong>Filter:</strong>
        <select onChange={(e)=> this.props.changeFilterProp(e.target.value)}>
          <option value="All">All</option>
          <option value="true">Greased</option>
          <option value="false">Not Greased</option>

          
        </select>
      </label>




            </div>
        )
    }
}