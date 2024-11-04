import { Button } from "@/components/ui/button";
import { Dialog, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useUsuarioContext } from "@/context/UserContext";
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { LogInIcon } from "lucide-react";
import { FormEvent, useState } from "react";

interface AuthDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthDialog() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { login } = useUsuarioContext();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSignInClick = () => {
    setIsDialogOpen(true);
  }

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const usuarioData = { nome, email, imagemUrl: "" };

    if (isRegistering) {
      console.log("Registrando: ", { nome, email, senha });
    } else {
      console.log("Logando no sistema: ", { email, senha });
    }
  };

  const handleLimpar = () => {
    setNome("");
    setEmail("");
    setSenha("");
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={handleCloseDialog}>
      <DialogTrigger asChild>
        <Button size="icon" onClick={handleSignInClick}>
          <LogInIcon style={{ width: "20px", height: "20px" }} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {isRegistering ? "Registrar novo usuário" : "Login"}
          </DialogTitle>
          <DialogDescription>
            {isRegistering
              ? "Preencha os campos abaixo para registrar uma nova conta."
              : "Preencha os campos abaixo para entrar na sua conta."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          {isRegistering && (
            <Input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="mb-4"
            />
          )}
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mb-4"
          />
          <Input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            className="mb-4"
          />
          <Button type="submit" className="w-full">
            {isRegistering ? "Registrar" : "Login"}
          </Button>
          <Button
            type="button"
            onClick={() => setIsRegistering(!isRegistering)}
            className="mt-4 text-primary"
          >
            {isRegistering
              ? "Já tem uma conta? Faça login"
              : "Não tem uma conta? Registre-se"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
