import React from 'react'
import './index.less'

export default class Life extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count:0
        };
      }

    //   state = {
    //       count:0
    //   }

    handleAdd=()=>{
        this.setState({
            count: this.state.count + 1
        })
    }

    handleClick(){
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return <div className="a">
            <p>zhouwi</p>
            <button onClick={this.handleAdd}>cli</button>
            <button onClick={this.handleClick.bind(this)}>cli</button>
            <p>{this.state.count}</p>
        </div>
    }
}