import React from "react"   
import { Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import { Home, Account  } from "./pages"

function App() {
    return <>
        <Routes>
            <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/accounts' element={<Account />} />
            </Route>
        </Routes>
    </>
}

export default App