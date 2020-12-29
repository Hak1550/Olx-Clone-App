import React from 'react'
import '../Css/Footer.css'
import OlxMarket from '../Images/OlxMarketing.png'
import Footr from '../Images/Footr.png'
import '../Css/Footer.css'

const Footer = () => {
    return (
        <div className="Footer">
        <img src={OlxMarket} alt="Marketing" className="Marketing" />
        <img src={Footr} alt="Footer" className="Footer-Part"/>
    </div>
    )
}
export default Footer
