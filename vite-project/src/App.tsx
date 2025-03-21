import { RouterProvider } from 'react-router-dom'
import './App.scss'
import router from './router/router'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';


function App() {
  const queryClient = new QueryClient();
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
    
    </>
  )
}

export default App
