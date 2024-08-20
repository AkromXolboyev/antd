import { useState } from 'react'
import './App.css'
import TableComponent from './table-component'
// import { Route, Routes } from 'react-router-dom'
// import { MainLayout } from "./layout/main-layout"
// import { ExpandedRowRender } from './table-component'
// import { Table } from './pages/home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<div>home</div>} />
          <Route path='/home' element={<Table />} />
          
        </Route>
      </Routes>
 <Table/> */}
 {/* <MainLayout/> */}
 {/* <Table/> */}
 <TableComponent/>
    </>
  )
}

export default App
