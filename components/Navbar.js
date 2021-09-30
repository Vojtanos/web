import React, { Component } from 'react'
import Link from 'next/link';

class Navbar extends Component {

    render(){
        return (
          //<div className={`${this.props.none} delay-700`}>
            <nav className={`py-5 bg-gray-900 text-gray-300 ${this.props.hide} ease-out duration-500 md:hidden`}>
              <ul className="flex flex-col items-center">
                <hr className="w-full border-gray-600"/>
                <li className="flex justify-center m-3 hover:text-white"><Link href="/">O mně</Link></li>
                <hr className="w-11/12 border-gray-600"/>
                <li className="flex justify-center m-3 hover:text-white"><Link href="/mywork">Práce</Link></li>
                <hr className="w-11/12 border-gray-600"/>
                <li className="flex justify-center m-3 hover:text-white"><Link href="/articles">Články</Link></li>
                <hr className="w-11/12 border-gray-600"/>
                <li className="flex justify-center m-3 hover:text-white"><Link href="/technology">Použité technologie</Link></li>
              </ul>
            </nav>
          //</div>
        )}
}

export default Navbar;