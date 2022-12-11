import { Fragment, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import reactLogo from './assets/react.svg'

import router from "./routes/router"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Fragment>
      <RouterProvider router={router}/>
    </Fragment>
  )
}

export default App
