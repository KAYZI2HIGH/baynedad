import { CircularProgress } from '@mui/material'
import React from 'react'

const Loader = () => {
  return (
    <div className="w-full flex justify-center items-center my-14">
      <CircularProgress />
    </div>
  )
}

export default Loader