import { createBrowserRouter } from 'react-router-dom'

import Home from '../../modules/Home'
import HomePage from '../../modules/HomePage'
import { LayoutBase } from '../layout/layoutBase'
import LayoutBaseCard from '../layout/layoutCard'
import RegisterClient from '../../modules/client'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutBase />,
    children: [
      {
        path: 'cadastro',
        element: <LayoutBaseCard />,
        children: [
          {
            path: '',
            element: <HomePage />,
          },
          {
            path: 'interesses',
            element: <RegisterClient/>,
          },
          {
            path: 'dados-pessoais',
            element: <Home />,
          },
          {
            path: 'concluido',
            element: <h1>Concluído</h1>,
          },
        ],
      },
    ],
  },
])
