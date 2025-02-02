import { Github, Instagram, Linkedin, Twitter, Plus } from "lucide-react";
import Button from "../ui/Button";

const icons = [<Github />, <Instagram />, <Linkedin />, <Twitter />, <Plus />];

export default function UserCard() {
  return (
    <div className="w-[348px] flex flex-col gap-5 items-center p-5 border border-white border-opacity-10 bg-[#121212] rounded-3xl text-white">
      <div className="size-48">
        <img
          className="rounded-full object-cover w-full h-full "
          src="https://github.com/diego3g.png"
          alt="Profile"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-2">
          <h3 className="text-3xl font-bold min-w-0 overflow-hidden">
            Lucas Dev
          </h3>
        </div>
        <p className="opacity-40">"Eu faço projetos para internet"</p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <span className="uppercase text-xs font-medium">Links</span>
        <div className="flex gap-3">
          {icons.map((icon, index) => (
            <button
              key={index}
              className="p-3 rounded-xl bg-[#1e1e1e] hover:bg-[#2e2e2e]"
            >
              {icon}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full h-[172px]">
        <div className="w-full flex flex-col items-center gap-3">
          <Button className="w-full">Templates SaaS - Compre agora</Button>
          <Button>
            <Plus />
          </Button>
        </div>
      </div>
    </div>
  );
}
