import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { ChevronLeft, ChevronRight } from 'react-feather'

const PaginationIcons = ({
  NroMensajes,
  variables,
  setVariables,
  mensajes = []
}) => {
  /* eslint-disable*/
  const numberPagesRaw =
    NroMensajes > variables.numberPaginate
      ? NroMensajes / variables.numberPaginate
      : 1
  const numberPages = Number.isInteger(numberPagesRaw)
    ? numberPagesRaw
    : Math.floor(numberPagesRaw) + 1
  /* eslint-enable*/

  const handleNext = () => {
    if (mensajes.length === 0) return
    setVariables((v) => ({ ...v, page: v.page + 1 }))
  }
  const handlePrev = () => {
    if (variables.page === 1) return
    setVariables((v) => ({ ...v, page: v.page - 1 }))
  }
  const handlePage = (p) => {
    if (variables.page === p) return
    setVariables((v) => ({ ...v, page: p }))
  }

  return (
    <Pagination className="d-flex">
      <PaginationItem onClick={handlePrev} disabled={variables.page === 1}>
        <PaginationLink href="#" first>
          <ChevronLeft size={15} />
        </PaginationLink>
      </PaginationItem>
      {/* {Array(numberPages)
        .fill(null)
        .map((_, i) => (
          <PaginationItem
            key={i}
            disabled={variables.page === i + 1}
            active={variables.page === i + 1}
            onClick={() => handlePage(i + 1)}
          >
            <PaginationLink href="#">{i + 1}</PaginationLink>
          </PaginationItem>
        ))} */}
      <PaginationItem
        onClick={handleNext}
        disabled={variables.page === numberPages || mensajes.length === 0}
      >
        <PaginationLink href="#" last>
          <ChevronRight size={15} />
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  )
}
export default PaginationIcons
