import React, { Component } from 'react'
import Link from 'next/link';

class NavbarXL extends Component {

    render(){
        return (
          //<div className={`${this.props.none} delay-700`}>
            <nav className="text-gray-300 ease-out duration-500 hidden md:block">
              <ul className="flex items-center">
                <li className="flex justify-center m-3"><Link href="/">O mně</Link></li>
                <li className="flex justify-center m-3"><Link href="/mywork">Práce</Link></li>
                <li className="flex justify-center m-3"><Link href="/articles">Články</Link></li>
                <li className="flex justify-center m-3"><Link href="/technology">Použité technologie</Link></li>
              </ul>
            </nav>
          //</div>
        )}
}

export default NavbarXL;