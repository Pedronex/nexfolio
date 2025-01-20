import { AtSign, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-muted text-muted-foreground">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Informações principais */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Pedro Soares Silva
            </h3>
            <p className="text-muted-foreground">Desenvolvedor Full Stack</p>
          </div>

          {/* Links de navegação */}
          <div className="flex flex-col items-center md:items-start gap-2">

            <Link
              href="#home"
              className="hover:text-foreground transition-colors"
            >
              Início
            </Link>
            <Link
              href="#about"
              className="hover:text-foreground transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="#contact"
              className="hover:text-foreground transition-colors"
            >
              Contato
            </Link>
          </div>

          {/* Redes sociais e contato */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4 justify-between">
              <a
                href="https://github.com/pedronex"
                className="hover:text-foreground transition-colors"
              >
                <Image
                  src={"/github.svg"}
                  alt="GitHub"
                  width={24}
                  height={24}
                  className="dark:invert"
                />
              </a>
              <a
                href="https://linkedin.com/in/pedronex"
                className="hover:text-foreground transition-colors"
              >
                <Image
                  src={"/linkedin.svg"}
                  alt="Linkedin"
                  width={24}
                  height={24}
                  className="dark:invert"
                />
              </a>
              <a
                href="mailto:pedrosoares.nex@gmail.com"
                className="hover:text-foreground transition-colors"
              >
                <AtSign size={24} />
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={16} />
              <span>Goiânia, GO, Brasil</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Pedro Soares Silva. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
