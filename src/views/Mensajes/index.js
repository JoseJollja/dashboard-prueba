import { useEffect, useState } from 'react'
import { Mail } from 'react-feather'
import { Card, CardBody, Table, Button, Tooltip } from 'reactstrap'

import Modal from './Modal'
import Pagination from '../../components/Pagination'

import './styles.scss'

const BtnTooltip = ({ id, onClick }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false)
  const toggle = () => setTooltipOpen(!tooltipOpen)
  return (
    <>
      <Button
        color="primary"
        onClick={onClick}
        id={`verMensaje-${id}`}
        className="btn-icon"
      >
        <Mail size={15} />
      </Button>
      <Tooltip
        toggle={toggle}
        placement="bottom"
        isOpen={tooltipOpen}
        target={`verMensaje-${id}`}
      >
        Ver Mensaje
      </Tooltip>
    </>
  )
}

const Mensajes = () => {
  const [mensajes, setMensajes] = useState([])
  const [NroMensajes, setNroMensajes] = useState(20)

  const [isOpen, setIsOpen] = useState(false)
  const [variables, setVariables] = useState({ numberPaginate: 10, page: 1 })
  const [activeMensaje, setActiveMensaje] = useState({
    email: '',
    nombres: '',
    nroCelular: ''
  })

  useEffect(() => {
    const url = 'https://formularioprueba123.herokuapp.com/clientes/1/10'
    fetch(url)
      .then((res) => res.json())
      .then((d) => {
        if (d.clientes) setMensajes(d.clientes)
      })
  }, [])

  useEffect(() => {
    const url = `https://formularioprueba123.herokuapp.com/clientes/${variables.page}/${variables.numberPaginate}`
    fetch(url)
      .then((res) => res.json())
      .then((d) => {
        if (d.clientes) setMensajes(d.clientes)
      })
  }, [variables])

  const onClose = () => setIsOpen(false)

  return (
    <>
      <Modal {...{ onClose, isOpen }} />
      <Card className="mensajes__card">
        <CardBody>
          <div className="d-flex justify-content-between mb-2">
            <h1>Mensajes</h1>

            <div>
              <button
                className="btn btn-primary"
                onClick={() => setIsOpen(true)}
              >
                Calcular promedio de edad
              </button>
            </div>
          </div>

          <div className="mensaje__flex">
            <Table className="w-full" responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre Completo</th>
                  <th>fecha Nacimiento</th>
                </tr>
              </thead>
              <tbody>
                {mensajes.map((m) => (
                  <tr key={m.clienteid}>
                    <td>{m.clienteid}</td>
                    <td>
                      {m.nombres} {m.apellidos}
                    </td>
                    <td>{m.fechanacimiento}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Pagination
              {...{ NroMensajes, variables, setVariables, mensajes }}
            />
          </div>
        </CardBody>
      </Card>
    </>
  )
}

export default Mensajes
