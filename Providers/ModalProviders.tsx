


"use client"
import ModalStore from '@/components/Modal/ModalStore'
import React, { useEffect, useState } from 'react'

const ModalProviders = () => {
const [isMouted, setisMouted] = useState(false)


    useEffect(() => {
        setisMouted(true)
    }, [])
    if (!isMouted) {
      return null
    }
  return (
    <>
    <ModalStore/>
    </>
  )
}

export default ModalProviders