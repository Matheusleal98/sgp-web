import { Usuario } from "@/types/interfaces";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface UsuarioContextType {
  usuario: Usuario | null;
  login: (usuario: Usuario) => void; 
  logout: () => void;
}

const UsuarioContext = createContext<UsuarioContextType | undefined>(undefined);

interface UsuarioProviderProps {
  children: ReactNode; 
}

export function UsuarioProvider({ children }: UsuarioProviderProps) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  const login = (usuariosData: Usuario) => {
    setUsuario(usuariosData);
    sessionStorage.setItem('usuario', JSON.stringify(usuariosData));
  }

  const logout = () => {
    setUsuario(null);
    sessionStorage.removeItem('usuario');
  }

  useEffect(() => {
    const usuarioStoraged = sessionStorage.getItem('usuario');
    if (usuarioStoraged) {
      setUsuario(JSON.parse(usuarioStoraged));
    }
  }, []);

  return (
    <UsuarioContext.Provider value={{ usuario, login, logout }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export const useUsuarioContext = () => {
  const context = useContext(UsuarioContext);
  if (context === undefined) {
    throw new Error('useUsuarioContext deve ser usado dentro de um UsuarioProvider');
  }

  return context;
}
