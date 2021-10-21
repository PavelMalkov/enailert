import React, { Component } from 'react'
import "./myinput.css"
import { SvgSelector } from '../svg/svgSelector'
import { SvgIcon } from '../svg/SvgIcon'


export default class MyInput extends Component {
    render() {
        return (
            <div className="content">
                <SvgIcon id = "search"/>
                <input className = "input" type="text" size="40" placeholder = "Поиск" />
            </div>
        )
    }
}
