import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import {
  HeartIcon,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  ScrollTextIcon,
} from "lucide-react";
import { Separator } from "./ui/separator";

export function Header() {
  const handleSignInClick = () => {
    console.log("clicou para entrar no sistema.");
  };

  return (
    <div className="flex items-center justify-between h-20">
      <Link to="/">
        <div className="relative h-10 w-[130px]">
          <img
            src="/logo.png"
            alt="FSW Foods"
            sizes="100%"
            className="object-cover"
          />
        </div>
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            className="border-none bg-transparent"
          >
            <MenuIcon style={{ width: "20px", height: "20px" }} />
          </Button>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-left">Menu</SheetTitle>
          </SheetHeader>

          <div className="flex items-center justify-between pt-10">
            <h2 className="font-semibold">Olá, Faça seu login!</h2>
            <Button size="icon" onClick={handleSignInClick}>
              <LogInIcon style={{ width: "20px", height: "20px" }} />
            </Button>
          </div>

          <div className="py-6">
            <Separator />
          </div>

          <div>
            <Link to="/">
              <Button
                variant="ghost"
                className="w-full justify-start space-x-3 rounded-full text-sm font-normal mb-2"
              >
                <HomeIcon style={{ width: "20px", height: "20px" }} />
                <span className="block text-base">Início</span>
              </Button>
            </Link>

            <Link to="/">
              <Button
                variant="ghost"
                className="w-full justify-start space-x-3 rounded-full text-sm font-normal mb-2"
              >
                <ScrollTextIcon style={{ width: "20px", height: "20px" }} />
                <span className="block text-base">Meus Pedidos</span>
              </Button>
            </Link>

            <Link to="/">
              <Button
                variant="ghost"
                className="w-full justify-start space-x-3 rounded-full text-sm font-normal mb-2"
              >
                <HeartIcon style={{ width: "20px", height: "20px" }} />
                <span className="block text-base">Restaurantes Favoritos</span>
              </Button>
            </Link>

            <div className="py-6">
              <Separator />
            </div>

            <Link to="/">
              <Button
                variant="ghost"
                className="w-full justify-start space-x-3 rounded-full text-sm font-normal mb-2"
              >
                <LogOutIcon style={{ width: "20px", height: "20px" }} />
                <span className="block text-base">Sair da conta</span>
              </Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
