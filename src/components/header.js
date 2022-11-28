import "../styles/header.css";
import React from "react";
import { AudioOutlined, BellOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';

const { Search } = Input;

const onSearch = (value) => console.log(value);
const Header = () => {
    return (
        <div className="Header">
            <div className="leftHeader">
                <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix"></img>
                <ul type="none" className="ul">
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse By Language</li>
                </ul>
            </div>
            <div className="rightHeader">
                <ul type="none" className="ul">
                    <li>   <Search
      placeholder="input search text"
      allowClear
      onSearch={onSearch}
      style={{
        width: 250,
      }}
    /></li>
                    <li>Children</li>
                    <li>DVD</li>
                    <li><BellOutlined /></li>
                    <li><UserOutlined /></li>
                </ul>
            </div>
        </div>
    )
}


export default Header;