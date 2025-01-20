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
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
    name: "Estagiário",
    start: "Nov. de 2019",
    end: "Nov. de 2020",
    interval: "1 ano",
  },
  {
    name: "Técnico Administrativo",
    start: "Nov. de 2020",
    end: "Abril de 2022",
    interval: "1 anos e 6 meses",
  },
  {
    name: "Analista e Desenvolvedor de Sistemas",
    start: "Abril de 2022",
    end: "Atualmente",
    interval: `${new Date().getFullYear() - 2022} anos`,
  },
];


export default function About() {
  return (
    <main
        id="about"
        className="grid grid-cols-3 gap-4 grid-rows-2 pt-20 p-5 items-center justify-center h-screen"
      >
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
              <Code size={50} />
              Conhecimentos
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-start justify-around overflow-x-auto flex-wrap gap-3">
            <li>Programação Web</li>
            <li>Programação Mobile</li>
            <li>Programação Desktop</li>
            <li>Programação de Banco de Dados</li>
            <li>Desenvolvimento de APIs</li>
            <li>Publicação de Aplicações Web e Mobile</li>
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
            <li>Português (Nativo)</li>
            <li>Inglês (Intermediário)</li>
          </CardContent>
        </Card>
        <Card className="h-full flex flex-col justify-start">
          <CardHeader>
            <CardTitle className="flex flex-row items-center gap-3">
              <BriefcaseBusiness size={50} />
              Experiência Profissional
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 justify-around overflow-x-auto">
            <h2 className="font-bold text-lg text-center">
              Organização das Voluntárias de Goiás (OVG)
            </h2>
            <Table>
              <TableCaption>Lista de Cargos</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Cargo</TableHead>
                  <TableHead>Início</TableHead>
                  <TableHead>Fim</TableHead>
                  <TableHead className="w-[100px]">Tempo</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.reverse().map((item) => (
                  <TableRow key={item.name}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.start}</TableCell>
                    <TableCell>{item.end}</TableCell>
                    <TableCell>{item.interval}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="bg-secondary h-fit font-bold text-right"
                  >
                    Na OVG há {new Date().getFullYear() - 2019} anos
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </CardContent>
        </Card>

        <Card className="h-full flex flex-col justify-start">
          <CardHeader>
            <CardTitle className="flex flex-row items-center gap-3">
              <Award size={50} />
              Certificados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <li>
              <Link
                target="_blank"
                href="https://app.rocketseat.com.br/certificates/9dd20c6d-1d09-4455-a4d8-7277098c9518"
              >
                NLW IA - Rocketseat
              </Link>
            </li>
            <li>
              Big Data Basico - IFMG (Instituto Federal de Educação, Ciência e
              Tecnologia de Minas Gerais)
            </li>
            <li>
              <Link
                target="_blank"
                href="https://bip.brightspace.com/fdecac0e-4f81-4dae-93e2-f86d3f18dad8/d2l/awards/assertions/4559/view"
              >
                Microsoft AZ-800 + AZ-801: Microsoft Windows Server Hybrid
                Administrator - Green Tecnologia
              </Link>
            </li>
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
                Analise de Campo - Aplicativo Goiás Social</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                  Analise de Campo - Aplicativo Goiás Social</DialogTitle>
                  <DialogDescription>
                    Projeto com o intuito de ajudar os analistas de campo da OVG
                    a realizarem as visitas nas casas dos beneficiários e
                    coletar informações para auxilia-los a receberem benefícios.
                    Devido a necessidade de uma aplicação que pudesse executar
                    tanto online e offline, pensamos em um projeto que
                    utilizasse o armazenamento interno do celular para guardar
                    os dados e eventualmente em um rede estável fizesse a
                    sincronização com o servidor interno da OVG.Projeto com o
                    intuito de ajudar os analistas de campo da OVG a realizarem
                    as visitas nas casas dos beneficiários e coletar informações
                    para auxilia-los a receberem benefícios. Devido a
                    necessidade de uma aplicação que pudesse executar tanto
                    online e offline, pensamos em um projeto que utilizasse o
                    armazenamento interno do celular para guardar os dados e
                    eventualmente em um rede estável fizesse a sincronização com
                    o servidor interno da OVG.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </main>
  )
}