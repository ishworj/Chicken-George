import React from 'react'
const Footer = () => {
  return (
    <div>
        <footer className='bg-dark d-flex flex-column text-white px-5 py-3 '>
        <div className='d-flex justify-content-around'>
        <div>
                <h5>Shop</h5>
                <ul className='p-0'>
                    <li>Login</li>
                    <li>OurProducts</li>
                    <li>OrderNow</li>
                </ul>
            </div>
            <div>
                <h5>Links</h5>
                <ul className='p-0'>
                    <li>Home</li>
                    <li>Faqs</li>
                    <li>About</li>
                </ul>
            </div>

            <div>
                <h5>Social</h5>
                <ul className='p-0'>
                    <li>Instagram</li>
                    <li>Phone</li>
                    <li>Mail</li>
                </ul>
            </div>

        </div>

        <div className='text-center'>
            <span>@ Copy right all reserved 2025 || Chicken george</span>
        </div>

        </footer>
    </div>
  )
}

export default Footer