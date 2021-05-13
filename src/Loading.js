import React from 'react'
import Loader from "react-loader-spinner";

export default function Loading() {
    return (
        <div>
            <Loader type="Audio" color="#00BFFF" height={100} width={100} timeout={3000} style={{marginTop:"200px"}}/> 
        </div>
    )
}
