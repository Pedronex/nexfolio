import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main
      id="home"
      className="flex max-w-screen flex-row flex-wrap items-center justify-between"
    >
      <section className="flex flex-col lg:w-1/2 w-full p-2 ">
        <h1 className="text-4xl text-primary">Desenvolvedor FullStack</h1>
        <h2 className="text-2xl font-bold text-foreground">Pedro Soares</h2>
        <p className="text-lg text-muted-foreground text-justify">
          Atuo na área de análise e desenvolvimento de sistemas desde 2020, com
          experiência em criação de APIs, aplicativos, sites e containers.
          <br />
          Trabalhei em empresas de relevância estadual, como a Organização das
          Voluntárias de Goiás (OVG). Sou formado em análise e desenvolvimento
          de sistemas pela PUC.
          <br />
          Estou em busca de novos desafios e oportunidades para crescer
          profissionalmente será que você tem um pra mim?
        </p>
        <div className="flex flex-row gap-4 mt-4 justify-around flex-wrap">
          <Button variant="outline" asChild>
            <Link target="_blank" aria-label="Email para contato" href={"mailto:pedrosoares.nex@gmail.com"}>Email</Link>
          </Button>
          <Button variant={"outline"} asChild>
            <Link target="_blank" aria-label="WhatsApp para contato" href={"https://wa.me/+5562982977804"}>WhatsApp</Link>
          </Button>
          <Button variant={"outline"} asChild>
            <Link target="_blank" aria-label="LinkedIn para contato" href={"https://www.linkedin.com/in/pedronex/"}>LinkedIn</Link>
          </Button>
          <Button variant={"outline"} asChild>
            <Link target="_blank" aria-label="Github para contato" href={"https://github.com/pedronex"}>Github</Link>
          </Button>
          <Button variant={"outline"} asChild>
            <Link target="_blank" aria-label="Telegram para contato" href={"https://t.me/pedronexs"}>Telegram</Link>
          </Button>
        </div>
      </section>
      <div className="w-4/5 items-center flex justify-center lg:w-1/2 mx-auto">
        <Logo height={500} width={500} className="animate-pulse" />
      </div>
    </main>
  );
}
