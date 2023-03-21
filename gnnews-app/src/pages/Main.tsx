import React from 'react'
import Home from '../components/Home'
import { useParams } from "react-router-dom"

type MainParams = {
    country_code: string
}

const Main = () => {

    const { country_code } = useParams<MainParams>()

    return (
        <>
            <Home/>
        </>
    )
}

export default Main