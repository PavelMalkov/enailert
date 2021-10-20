import React, { Component } from 'react'
import "./myinput.css"
import { SvgSelector } from '../svg/svgSelector'

export default class MyInput extends Component {
    render() {
        return (
            <div className="content">
                <SvgSelector id = "search"/>
                <input className = "input" type="text" size="40" placeholder = "Поиск" />
            </div>
        )
    }
}
