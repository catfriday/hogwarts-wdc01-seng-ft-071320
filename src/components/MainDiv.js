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

// changeFilter = (value) => {
//     this.setState({ 
//         filterA: value 
//       })
// }

// changeSort = (value) => { 
//     this.setState({ 
//       sort: value 
//     })
  
//   }

changeFilter = (value) => {
    console.log(value)
    switch(value){
        case 'filter':
            this.setState({
                hogsArray: this.state.hogsArray.filter(hog => hog.greased)
            })
            break
        case 'name':
            this.setState({
                hogsArray: this.state.hogsArray.sort((a, b) => a.name.localeCompare(b.name))
            })
            break
        case 'weight': 
            this.setState({
                hogs: this.state.hogsArray.sort((a, b) => a.weight - b.weight )
            })
        default:
            // console.log("Not a choice")
    }

}


render(){
   
    return(
        <div>
            <div>
                <SearchBar changeFilter={this.changeFilter} />
            </div>
        <br/>
        <br/>
            <div >
                <SingleHogTile hogs={this.state.hogsArray} detailClick={this.clickDetail} clickedPigs={this.state.clickedPigs}/> 
            </div>
        </div>
    )
}



}
export default MainDiv

{/* <SingleHogTile hogs={this.state.hogsArray}/> */}
// {this.state.hogsArray.map(hog => <SingleHogTile hog={hog}/>)}