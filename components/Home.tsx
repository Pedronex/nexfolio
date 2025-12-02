import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Home() {
  return (
    <main
      id="home"
      className="flex max-w-screen flex-row flex-wrap items-center justify-center gap-4 pt-7"
    >
      <div className="flex p-1 size-1/5 items-center justify-center">
        <Logo width={150} height={150} className="w-full h-full" />
      </div>
      <section className="flex flex-col w-3/4 max-sm:w-full p-2">
        <h1 className="truncate font-semibold text-2xl">Pedro Soares</h1>
        <h2 className="truncate text-lg">
          Desenvolvedor Full Stack (Site, Aplicativo, Servidor, etc)
        </h2>

        <p className="text-lg text-muted-foreground text-justify max-sm:hidden">
          Atuo na área de análise e desenvolvimento de sistemas desde 2020, com
          experiência em criação de APIs, aplicativos, sites e containers.
          <br />
          Estou em busca de novos desafios e oportunidades para crescer
          profissionalmente será que você tem um pra mim?
        </p>
        <div className="flex flex-row gap-4 mt-4 justify-around flex-wrap">
          <Button variant="outline" asChild>
            <Link
              target="_blank"
              aria-label="Email para contato"
              href={"mailto:pedrosoares.nex@gmail.com"}
            >
              Email
            </Link>
          </Button>
          <Button variant={"outline"} asChild>
            <Link
              target="_blank"
              aria-label="WhatsApp para contato"
              href={"https://wa.me/+5562982977804"}
            >
              WhatsApp
            </Link>
          </Button>
          <Button variant={"outline"} asChild>
            <Link
              target="_blank"
              aria-label="LinkedIn para contato"
              href={"https://www.linkedin.com/in/pedronex/"}
            >
              LinkedIn
            </Link>
          </Button>
          <Button variant={"outline"} asChild>
            <Link
              target="_blank"
              aria-label="Github para contato"
              href={"https://github.com/pedronex"}
            >
              Github
            </Link>
          </Button>
          <Button variant={"outline"} asChild>
            <Link
              target="_blank"
              aria-label="Telegram para contato"
              href={"https://t.me/pedronexs"}
            >
              Telegram
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
