import React from "react"

export const ColumnFilter = ({column}) =>{
    const {search, setSearch} = column
    return(
        <span>
            search:{''}
            <input value={search || ''} onChange={e=> setSearch(e.target.value)}/> 
        </span>
    )
}