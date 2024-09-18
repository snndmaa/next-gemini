"use client"
import React from 'react'
import { Modal, Button } from "flowbite-react";

function TextModal({openModal, setOpenModal, parsedData}) {
  // console.log(parsedData)
  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className='flex flex-row justify-center'>Information Confirmation</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">

            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-center">
              {parsedData}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className='flex flex-row justify-center'>
          <Button color="green" onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>  )
}

export default TextModal