import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom'
import Resize from "../context/Resize";

const Test = () => {
    const { isBig } = useContext(Resize)
    return (
        <>
            { isBig ? 'big' : 'small' }
        </>
    )
}

export default withRouter(Test)