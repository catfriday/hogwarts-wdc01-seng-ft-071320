import React, {Component} from 'react'


export default class SearchBar extends Component{
    render(){
        return(
    <div>
        <select onChange={(e) => this.props.changeFilter(e.target.value)}>
          <option disabled selected>Select Filter</option>
          <option value="filter">Filter greased hogs</option>
          <option value="name">Sort by Name</option>
          <option value="weight">Sort by Weight</option>
        </select>
      </div>
        )
    }
}