import Header from "@/app/components/landing-page/Header";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import { Rocket } from "lucide-react";

export default function Criar() {
  return (
    <div>
      <Header/>
      <div className="h-screen flex flex-col gap-10 items-center justify-center max-w-xl mx-auto">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-bold text-white">Escolha seu link</h1>
          <Rocket className="size-10"/>
        </div>
        <form className="w-full flex items-center gap-2" action="">
          <span className="text-white">projectin.bio.com</span>
          <Input/>
          <Button className="w-[126px]">Criar</Button>
        </form>
        <div>
          <span className="text-accent-pink">Erro de exemplo</span>
        </div>
      </div>
    </div>
  );
}