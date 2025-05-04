import React from 'react'
import Header from './Header'

const LandingPage = () => {
  return (
    <>
        <Header/>
        <div className="bg-gradient-to-l from-blue-500 to-purple-500">
            <div>
                <h1 className="text-4xl text-white font-bold text-center pt-20">
                    Welcome to our website
                </h1>
            </div>
        </div>
    </>
  )
}

export default LandingPage