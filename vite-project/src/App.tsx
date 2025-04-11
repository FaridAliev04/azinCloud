import { RouterProvider } from 'react-router-dom'
import './App.scss'
import router from './router/router'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import useGlobalStyles from './assets/styles/style';


function App() {
  const queryClient = new QueryClient();

  useGlobalStyles();

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
    
    </>
  )
}

export default App
