import Button from "../ui/Button";

export default function Header() {
  return (
    <div className="absolute top-0 left-0 right-0 max-w-7xl flex items-center justify-between p-4 mx-auto z-50">
      <div className="flex items-center gap-4">
        <img src="./logo.svg" alt="Logo" />
        <h3 className="text-white text-2xl font-bold">Project In Bio</h3>
      </div>
      <div className="flex items-center gap-4">
        <Button>Minha Página</Button>
        <Button>Sair</Button>
      </div>
    </div>
  );
}
