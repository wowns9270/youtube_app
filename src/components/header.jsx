
import React, { Component } from 'react';
import '../app.css'

class Header extends Component {

    render (){



        const logo_imgUrl = "/images/logo.png";
        const search_imgUrl = "/images/search.png";

        return (

            <div className ='header'>
                <img className ='logo_img' src={logo_imgUrl} alt="" ></img>
                <span className='header_text'>youtube</span>

                <input className='header_inp' type="text" name="" id="" placeholder="Search..." />
                <button className ='header_btn'>
                    <img className ='search_img' src= {search_imgUrl} alt="" ></img>
                </button>

            </div>


        )
    }
}

export default Header
