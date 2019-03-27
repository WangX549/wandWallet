import React from 'react'
import Button from 'antd/lib/button'
import './index.less'
import 'antd/dist/antd.css'

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
            <Button type="primary">Button</Button>
            <button onClick={this.handleAdd}>click</button>
            <button onClick={this.handleClick.bind(this)}>click</button>
            <p>{this.state.count}</p>
        </div>
    }
}