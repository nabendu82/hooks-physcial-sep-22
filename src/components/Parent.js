import React, { useContext } from 'react'
import { ChannelContext, UserContext } from '../App'
import Child from './Child'

const Parent = () => {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);

    return (
        <>
            <h1>useContext Ex - {user} - {channel}</h1>
            <Child />
        </>
    )
}

export default Parent