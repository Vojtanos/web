import React, { Component } from 'react'
import Link from 'next/link';

class Navbar extends Component {

    render(){
        return (
            <nav className={`py-5 bg-gray-900 text-gray-300 ${this.props.hide}`}>
              <ul className="flex flex-col items-center">
                <hr className="w-full border-gray-600"/>
                <li className="flex justify-center m-3"><Link href="/about">O mně</Link></li>
                <hr className="w-11/12 border-gray-600"/>
                <li className="flex justify-center m-3"><Link href="/mywork">Práce</Link></li>
                <hr className="w-11/12 border-gray-600"/>
                <li className="flex justify-center m-3"><Link href="/articles">Články</Link></li>
                <hr className="w-11/12 border-gray-600"/>
                <li className="flex justify-center m-3"><Link href="/technology">Použité technologie</Link></li>
              </ul>
            </nav>
        )}
}

export default Navbar;