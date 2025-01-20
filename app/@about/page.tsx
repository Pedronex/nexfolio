import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Award,
  BookMarked,
  BriefcaseBusiness,
  Code,
  GraduationCap,
  Languages,
} from "lucide-react";
import Link from "next/link";

const tableData = [
  {
    name: "Analista e Desenvolvedor de Sistemas",
    start: "Abril de 2022",
    end: "Atualmente",
  },
  {
    name: "Técnico Administrativo",
    start: "Nov. de 2020",
    end: "Abril de 2022",
  },
  {
    name: "Estagiário",
    start: "Nov. de 2019",
    end: "Nov. de 2020",
  },
];

export default function About() {
  return (
    <main
      id="about"
      className="grid max-sm:grid-cols-1 grid-cols-2 gap-4 pt-20 p-5 items-center justify-center h-fit"
    >
      <Card className="h-full flex flex-col justify-start">
        <CardHeader>
          <CardTitle className="flex flex-row items-center gap-3">
            <BriefcaseBusiness size={50} />
            Experiência Profissional
          </CardTitle>
        </CardHeader>
        <CardContent className="w-full flex flex-col gap-3 justify-around overflow-x-auto">
          <h2 className="font-bold text-lg text-center">
            Organização das Voluntárias de Goiás (OVG)
          </h2>

          {tableData.map((item) => (
            <div
              className="flex flex-col justify-between w-full"
              key={item.name}
            >
              <span className="font-bold">{item.name}</span>
              <span>
                {item.start} - {item.end}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="h-full flex flex-col justify-start">
        <CardHeader>
          <CardTitle className="flex flex-row items-center gap-3">
            <BookMarked size={50} />
            Projetos
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant={"outline"}>Natal do Bem - Sorteio</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Natal do Bem - Sorteio</DialogTitle>
                <DialogDescription>
                  Sistema desenvolvido para realizar o sorteio de mais de 500
                  bicicletas para o publico em geral, com monitoramento de
                  pulseiras, controle de entrada e saída, registro de retirada
                  do prêmio e consulta do resultado em tempo real.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant={"outline"}>
                Analise de Campo <br /> Aplicativo Goiás Social
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  Analise de Campo - Aplicativo Goiás Social
                </DialogTitle>
                <DialogDescription>
                  Projeto com o intuito de ajudar os analistas de campo da OVG a
                  realizarem as visitas nas casas dos beneficiários e coletar
                  informações para auxilia-los a receberem benefícios. Devido a
                  necessidade de uma aplicação que pudesse executar tanto online
                  e offline, pensamos em um projeto que utilizasse o
                  armazenamento interno do celular para guardar os dados e
                  eventualmente em um rede estável fizesse a sincronização com o
                  servidor interno da OVG.Projeto com o intuito de ajudar os
                  analistas de campo da OVG a realizarem as visitas nas casas
                  dos beneficiários e coletar informações para auxilia-los a
                  receberem benefícios. Devido a necessidade de uma aplicação
                  que pudesse executar tanto online e offline, pensamos em um
                  projeto que utilizasse o armazenamento interno do celular para
                  guardar os dados e eventualmente em um rede estável fizesse a
                  sincronização com o servidor interno da OVG.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
      <Card className="h-full flex flex-col">
        <CardHeader>
          <CardTitle className="flex flex-row items-center gap-3">
            <GraduationCap size={50} />
            Formação Acadêmica
          </CardTitle>
          <CardDescription>Ensino Superior</CardDescription>
        </CardHeader>
        <CardContent>
          <strong>Pontifícia Universidade Católica de Goiás</strong>
          <p>Graduado em Tecnólogo, Análise e Desenvolvimento de Sistemas</p>
        </CardContent>
        <CardFooter className="text-xs self-end text-muted-foreground mt-auto">
          Fevereiro de 2018 - Dezembro de 2021
        </CardFooter>
      </Card>

      <Card className="h-full flex flex-col justify-start">
        <CardHeader>
          <CardTitle className="flex flex-row items-center gap-3">
            <Award size={50} />
            Certificados
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Link
            target="_blank"
            className="hover:text-foreground transition-colors ring-1 ring-foreground rounded p-1"
            href="https://app.rocketseat.com.br/certificates/9dd20c6d-1d09-4455-a4d8-7277098c9518"
          >
            NLW IA - Rocketseat
          </Link>
          <span className="hover:text-foreground transition-colors ring-1 ring-foreground rounded p-1">
            Big Data Basico - IFMG (Instituto Federal de Educação, Ciência e
            Tecnologia de Minas Gerais)
          </span>
          <Link
            target="_blank"
            className="hover:text-foreground transition-colors ring-1 ring-foreground rounded p-1"
            href="https://bip.brightspace.com/fdecac0e-4f81-4dae-93e2-f86d3f18dad8/d2l/awards/assertions/4559/view"
          >
            Microsoft AZ-800 + AZ-801: Microsoft Windows Server Hybrid
            Administrator - Green Tecnologia
          </Link>
        </CardContent>
      </Card>

      <Card className="h-full flex flex-col justify-start">
        <CardHeader>
          <CardTitle className="flex flex-row items-center gap-3">
            <Code size={50} />
            Conhecimentos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-wrap gap-3">
            <li>TypeScript</li>
            <li>React</li>
            <li>React Native</li>
            <li>Next.js</li>
            <li>Expo CLI</li>
            <li>Node.js</li>
            <li>SQL</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Docker</li>
            <li>TailwindCSS</li>
            <li>Banco de dados SQL</li>
            <li>Banco de dados NoSQL</li>
            <li>Drizzle ORM / Prisma ORM</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="h-full flex flex-col justify-start">
        <CardHeader>
          <CardTitle className="flex flex-row items-center gap-3">
            <Languages size={50} />
            Idiomas
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col flex-wrap gap-3 justify-around">
          <ul className="flex flex-col flex-wrap gap-3">
            <li>Português (Nativo)</li>
            <li>Inglês (Intermediário)</li>
          </ul>
        </CardContent>
      </Card>
    </main>
  );
}
