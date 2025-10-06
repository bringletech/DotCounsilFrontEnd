import React from 'react'
import SalesContainer from '../components/sales/SalesContainer'
import List from '../components/ui/List'
import { paymentList } from '../constants/constants'

function Sales() {
  return (
    <>
    <SalesContainer>
        <List Data={paymentList}></List>
    </SalesContainer>
    </>
  )
}

export default Sales