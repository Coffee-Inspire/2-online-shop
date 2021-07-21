import React from 'react'
import Skeleton from 'react-loading-skeleton';

function SkeletonBase({type}) {

    let classes = `${type}`

    return (
        <Skeleton className={`skeleton ${classes}`}/>        
    )
}

export default SkeletonBase
