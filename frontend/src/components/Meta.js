import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({title, description, keywords}) => {
    return (
        <Helmet>
            <title>PS | {title}</title>
            <meta name='description' content={description} />
            <meta name='keyword' content={keywords}/>
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Welcome To Proshop',
    description: 'We sell the best products for cheap',
    keywords: 'Electronics, Buy Electronics, Cheap Electronics'
}

export default Meta
