import React from 'react'
import logo from '../assets/logo.png';
import { REPO_LINK } from '../Constants';

function Header() {
    return (
        <div>
            <img src={logo} width="100em" alt="logo" />
            <h1>Take-home Test</h1>
            <hr />
            <div className="alert alert-primary" role="alert">
                <a href={REPO_LINK} target='_blank' rel="noreferrer">{REPO_LINK}</a>
            </div>
        </div>
    )
}

export default Header
