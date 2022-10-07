import React from 'react'
import { useRouteError } from 'react-router-dom'
// import Header from './Header'

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error)
  return (
    <>
      <div className='flex flex-col min-h-[700px] justify-center items-center'>
        <h1 className='text-4xl'>Ops! An Error Ocurred!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <br />
        {error && (
          <div>
          <p className='text-red-600 font-mono font-semibold'>{error.statusText || error.message}</p>
          <p className='text-2xl'>{error.status}</p>
        </div>
        )}
      </div>
    </>
  )
}

export default ErrorPage
