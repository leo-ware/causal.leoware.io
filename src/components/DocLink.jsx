import React from 'react'
import Link from '@docusaurus/Link'

export default (props) => {
    return (
        <Link to={props.to}>
            {props.children || props.to}
        </Link>
    )
}