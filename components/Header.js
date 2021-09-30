import React, {Component} from 'react';

import Bars from '/components/Bars.js';
import Navbar from "/components/Navbar.js";
import NavbarXL from "/components/NavbarXL.js";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { hide: "opacity-0 h-0 -m-5 pointer-events-none", bgColor: ""};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {

    this.setState({ hide: this.state.hide ? "" : "opacity-0 h-0 -m-5 pointer-events-none",
                    bgColor: this.state.bgColor ? "" : "bg-gray-800"}
    );
  }

  render() {
    return (
          <div className="w-full bg-gray-900 backdrop-filter backdrop-blur-xl opacity-95 p-1 mb-0 lg:mb-10 lg:fixed -mt-20 pb-24">
                <header className={`${this.state.bgColor} md:bg-gray-900 h-auto flex items-center
                                justify-between m-0.5 duration-500 delay-300`}>

                    <div className="flex items-center">
                        <div className="text-2xl font-thin text-white cursor-default p-1 m-1 ml-1 rounded-md">
                                                                      Vojtěch
                        <span className="bg-gray-600 font-black text-gray-100 rounded">Kunc</span>
                        </div>
                        <div className="ml-4 text-gray-300"> <span className="mr-1">/</span> můj web</div>
                    </div>

                    <Bars handleClick={this.handleClick} />
                    <NavbarXL />

                </header>

          <Navbar hide={this.state.hide} />

        </div>
    )
  }
}

export default Header