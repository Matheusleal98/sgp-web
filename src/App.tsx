import './index.css';

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { UsuarioProvider } from './context/UserContext';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UsuarioProvider> 
        <RouterProvider router={router} />
      </UsuarioProvider> 
    </QueryClientProvider> 
  )
}