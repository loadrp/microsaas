import { ProjectCard } from "../commons/Project-card";
import { TotalVisits } from "../commons/Total-visits";
import UserCard from "../commons/User-card";
import Button from "../ui/Button";
import Input from "../ui/Input";

export default function Hero() {
  return (
    <div className="flex m-auto">
      <div className="w-full flex flex-col gap-2 mt-[35vh]">
        <h1 className="text-white leading-[64px] text-5xl font-bold">
          Seus projetos e redes sociais em um único link
        </h1>
        <h2 className="text-content-headline leading-[24px] text-xl font-medium">
          Crie sua própria página de projetos e compartilhe com o mundo.
          <br />
          Acompanhe o engajamento com Analytics de cliques
        </h2>
        <div className="flex items-center gap-2 w-full mt-[10vh]">
          <span className="text-white text-xl"> projectinbio.com</span>
          <Input placeholder="Seu link"/>
          <Button>Criar agora</Button>
        </div>
        </div>
        <div className="w-full flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#4B2DBB,transparent_55%)]">
          <div className="relative">
          <UserCard/>
          <div className="absolute -bottom-[7%] -right-[45%]">
            <TotalVisits/>
          </div>
          <div className="absolute top-[20%] -left-[45%] -z-10">
            <ProjectCard imageSrc="./project1.jpg"/>
          </div>
          <div className="absolute -top-[5%] -left-[55%] -z-10">
            <ProjectCard imageSrc="./project2.jpg"/>
          </div>
          </div>
        </div>
      </div>
  );
}
