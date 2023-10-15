import React from 'react'
import Link from '@docusaurus/Link';

const Tag = (props) => {
    const name = props.children || props.name
    return (
        <span>
            <Link to={"/tags/" + name}>
                #{name}
            </Link>
        </span>
    )
}

export default Tag