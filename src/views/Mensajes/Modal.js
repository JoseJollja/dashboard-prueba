import { useEffect, useState } from 'react'
import {
  Button,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Modal as ModalForm
} from 'reactstrap'

const Modal = ({ isOpen, onClose }) => {
  const [data, setData] = useState(0)

  useEffect(() => {
    const url = 'https://formularioprueba123.herokuapp.com/clientesPromedioEdad'
    fetch(url)
      .then((req) => req.json())
      .then((d) => {
        if (d.promedioEdad) setData(d.promedioEdad)
      })
  }, [isOpen])

  return (
    <ModalForm scrollable isOpen={isOpen} toggle={onClose}>
      <ModalHeader toggle={onClose}>Mensaje</ModalHeader>
      <ModalBody>
        <div className="py-2">
          <h1 className="text-center">El promedio total de edad es</h1>
          <h1 className="text-center"> {parseFloat(data).toFixed(4)} </h1>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" outline onClick={onClose}>
          Salir
        </Button>
      </ModalFooter>
    </ModalForm>
  )
}

export default Modal
