import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineSearch } from "react-icons/ai"
import { GrClose } from "react-icons/gr"

const SecondHeader = () => {
    const [open, setOpen] = useState(false)

    const handleToggle = () => {
        setOpen(!open)
    }

    return (
        <>
            <div className='header'>
                <div className='header-title'>
                    <div className='multi-text'>MULTI</div>
                    <div className='shop-text'>SHOP</div>
                </div>
                <div className='search'>
                    <input type="text" className='input-field' placeholder='Search Product' />
                    <div className='search-icon'>
                        <AiOutlineSearch size={22} color="#FFC300" />
                    </div>
                </div>
                <div className='customer-service-side'>
                    <p className='customer-text'>Customer Service</p>
                    <p className='customer-num'>+35389763336</p>
                </div>

                {!open ? (
                    <div className='icon-hamburger' onClick={handleToggle}>
                        <GiHamburgerMenu size={24} color="#999" />
                    </div>
                ) : (
                    <div className='icon-hamburger' onClick={handleToggle}>
                        <GrClose size={24} color="#999" />
                    </div>
                )}

            </div>
            {open ? (
                <div className='navmobile-dropdown'>
                    <ul className='navmobile-dropdown-text'>
                        <li className='navmobile-dropdown-list'>Home</li>
                        <li className='navmobile-dropdown-list'>About</li>
                        <li className='navmobile-dropdown-list'>Contact</li>
                        <li className='navmobile-dropdown-list'>FAQS</li>
                    </ul>
                </div>
            ) : null}
        </>
    )
}

export default SecondHeader
