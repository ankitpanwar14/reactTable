import { format } from 'date-fns'
import { ColumnFilter } from './ColumnFilter'

export const COLUMNS = [
  {
    Header: 'Id',
    accessor: 'id',
    disableFilters: true,
    sticky: 'left',
    Filter: ColumnFilter
  },
  {
    Header: 'First Name',
    accessor: 'first_name',
    sticky: 'left',
    Filter: ColumnFilter
  },
  {
    Header: 'Last Name',
    accessor: 'last_name',
    sticky: 'left',
    Filter: ColumnFilter
  },
  {
    Header: 'Date of Birth',
    accessor: 'date_of_birth',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy')
    },
    Filter: ColumnFilter
  },
  {
    Header: 'Country',
    accessor: 'country',
    Filter: ColumnFilter
  },
  {
    Header: 'Phone',
    accessor: 'phone',
    Filter: ColumnFilter
  },
  {
    Header: 'Email',
    accessor: 'email',
    Filter: ColumnFilter
  },
  {
    Header: 'Age',
    accessor: 'age',
    Filter: ColumnFilter
  },
]