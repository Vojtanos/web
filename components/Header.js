import React, {Component} from 'react';
import Link from 'next/link';

import Navbar from "/components/Navbar.js"


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { hide: "hidden", bgColor: "" };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {

    this.setState({ hide: this.state.hide ? "" : "hidden",
                    bgColor: this.state.bgColor ? "" : "bg-gray-800"}
    );
  }

  render() {
    return (
        <div>

          <div className="bg-gray-900 p-1">
            <header className={`${this.state.bgColor} h-auto flex items-center justify-between m-0.5 rounded-md`}>
              <div className="flex items-center">
                <logo className="text-2xl font-thin text-white cursor-default bg-gray-900 p-1 m-1 ml-1 rounded-md">
                                                                  Vojtěch
                  <span className="bg-gray-600 font-black text-gray-100 rounded">Kunc</span>
                </logo>
                <div className="ml-4 text-gray-300"> <span className="mr-1">/</span> můj web</div>
              </div>

                  <div onClick={this.handleClick} 
                       className="flex flex-col mr-5 mb-3 cursor-pointer">

                    <i class="text-white">___</i>
                    <i class="text-white -mt-4">___</i>

                  </div> 

            </header>
          </div>

          <Navbar hide={this.state.hide} />

        </div>
    )
  }
}

export default Header