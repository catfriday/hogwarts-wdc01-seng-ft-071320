import React, {Component} from 'react'


export default class SingleHogTile extends Component{

    // pigDetail(){

    //     console.log('you made it!')
    //     }


    render(){
        // let pigPic = this.props.hogs.map(hog => hog.name.replace(/ /g, "_" ).toLowerCase()) 
        // console.log(pigPic)
        // let pigImage = require(`../hog-imgs/${pigPic}.jpg`) //how can we dynamically generate the filename?


        return(

            <div className="ui grid container">
            {this.props.hogs.map(hog =>{

                let pigPic = hog.name.replace(/ /g, "_" ).toLowerCase()
                let pigImage = require(`../hog-imgs/${pigPic}.jpg`)
                

               return <div className="ui eight wide column" onClick={() => this.props.detailClick(hog.name)}>
                    <h2>{hog.name}</h2>
                    <img src={pigImage}></img>
                    {this.props.clickedPigs.includes(hog.name) ? 
                   <div>
                       <p>{hog.specialty}</p>
                       <p>{hog.weight}</p>
                    <p>{hog['highest medal achieved']}</p>
                    {hog.greased ? <p>Greased: Yes</p> : <p>Greased: No</p>}
                    
                      
                   </div>: null}
                </div>


            })}
                
            </div>
        )
    }
}

// specialty: 'Mediocre magic',
// greased: false,
// weight: 2.0,
// 'highest medal achieved': 'bronze'