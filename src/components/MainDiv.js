import React, {Component} from 'react'
import hogs from "../porkers_data";
import SingleHogTile from './SingleHogTile'
import SearchBar from './SearchBar'

 class MainDiv extends Component{
    state = {
        hogsArray: [],
        clickedPigs: [],
        filterA: 'All',
        sort: 'All'
    }

componentDidMount(){ 
    this.setState({ hogsArray : hogs})
  }


clickDetail = (name) => {

this.setState({
   clickedPigs: [...this.state.clickedPigs, name]
})

}

changeFilter = (value) => {
    this.setState({ 
        filterA: value 
      })
}

changeSort = (value) => { 
    this.setState({ 
      sort: value 
    })
  
  }

changeDisplay = () => {
    let newHogs = [...this.state.hogsArray]
    if(this.state.filterA === "true"){
        newHogs = newHogs.filter(hog => {hog.greased === this.state.filterA
            console.log(this.state.filterA)
        }
        )
    }
    

    if(this.state.sort !== "All"){ 

        if(this.state.sort == "Alphabetically") 
           { return newHogs.sort((a,b) => a.name > b.name? 1: -1)}

        if(this.state.sort == "Weight") 
            {return newHogs.sort((a,b) => a.weight < b.weight? 1: -1)}
    
      }
    return newHogs

}


render(){
   
    return(
        <div>
            <div>
                <SearchBar changeFilterProp={this.changeFilter} changeSortProp={this.changeSort} sortState={this.state.sort}/>
            </div>
        <br/>
        <br/>
            <div >
                <SingleHogTile hogs={this.changeDisplay()} detailClick={this.clickDetail} clickedPigs={this.state.clickedPigs}/> 
            </div>
        </div>
    )
}



}
export default MainDiv

{/* <SingleHogTile hogs={this.state.hogsArray}/> */}
// {this.state.hogsArray.map(hog => <SingleHogTile hog={hog}/>)}