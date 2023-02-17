import React from 'react'
import { followUs, getInTouch, listItems } from './FooterData'


const Footer = () => {


    return (
        <div className='footer-container'>
            <div className='footer-row'>
                <div className='get-in-touch'>
                    <h3 className='getin-touch-h3'>GET IN TOUCH</h3>
                    <p className='getin-touch-p'>
                        Thank you for your interest in our ecommerce store! We would love to hear from you and are here to help with any questions or concerns you may have.
                    </p>
                    {getInTouch.map((contact) => {
                        const { id, content, Icon } = contact
                        return (
                            <div className='contacts-address' key={id}>
                                <Icon size={20} color="#FFC300" />
                                <h2 className='contacts-h2'>{content}</h2>
                            </div>
                        )
                    })}
                </div>
                <div className='quick-shop'>
                    <h3 className='getin-touch-h3'>QUICK SHOP</h3>
                    {listItems.map((list) => {
                        const { id, link, Icon } = list
                        return (
                            <div className='quick-shop-l1' key={id}>
                                <Icon size={20} color="#fff" />
                                <p className='home-p'>{link}</p>
                            </div>
                        )
                    })}
                </div>

                <div className='news-letter'>
                    <h3 className='getin-touch-h3'>NEWSLETTER</h3>
                    <p className='getin-touch-p'>Multi Shop news letter subscription goes here</p>
                    <div className='newslettter-fields'>
                        <div className='input'>
                            <input type="text" className='input-field' placeholder='Sign up for newsletter' />
                        </div>
                        <div className='input-btn'>Sign Up</div>
                    </div>
                </div>
                <div className='follow-us'>
                    <p className='follow-us-p'>FOLLOW US</p>
                    <div className='follow-icons-row'>
                        {followUs.map((icons) => {
                            const { id, Icon } = icons
                            return (
                                <div className='icon' key={id}>
                                    <Icon size={20} color="#535353" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
