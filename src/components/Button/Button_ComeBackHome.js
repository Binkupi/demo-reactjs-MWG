import React from 'react'
import {Link} from 'react-router-dom'

const Button_ComeBackHome=()=>{
    return (<>
            
            <Link className="btn btn-success " to={`/`}>
                <span><i className="fas fa-arrow-left"></i></span>Trở về trang quản lý hóa đơn
            </Link>
        </>)
}
export default Button_ComeBackHome;