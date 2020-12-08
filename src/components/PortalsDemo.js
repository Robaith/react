import React from 'react'
import ReactDom from 'react-dom'

function PortalsDemo() {
    return ReactDom.createPortal(
        <h1>
            Hellow Portals Demo
        </h1>, document.getElementById('portals-root')
    )
}

export default PortalsDemo
