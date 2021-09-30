import React, {Component} from 'react';

class Bars extends React.Component {
  render() {
    return (
        <div onClick={this.props.handleClick} 
             className="flex flex-col mr-5 mb-3 cursor-pointer md:hidden">

                    <i className="text-white">___</i>
                    <i className="text-white -mt-4">___</i>

        </div> 
    )
  }
}

export default Bars