import { AtSign, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="bg-muted text-muted-foreground">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16">
          {/* Informações principais */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Pedro Soares Silva
            </h3>
            <p className="text-muted-foreground">Desenvolvedor Full Stack</p>
          </div>

          {/* Links de navegação */}
          <div className="flex flex-col items-center md:items-start gap-2 md:gap-4">
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
          <div className="flex flex-col items-center md:items-end gap-4 md:gap-8">
            <div className="flex gap-4 justify-between">
              <Link
                href="https://github.com/pedronex"
                className="hover:text-foreground transition-colors"
                aria-label="GitHub de Pedro Soares"
              >
                <Image
                  src={"/github.svg"}
                  alt="GitHub"
                  width={24}
                  height={24}
                  className="dark:invert"
                />
              </Link>
              <Link
                href="https://linkedin.com/in/pedronex"
                aria-label="LinkedIn de Pedro Soares"
                className="hover:text-foreground transition-colors"
              >
                <Image
                  src={"/linkedin.svg"}
                  alt="Linkedin"
                  width={24}
                  height={24}
                  className="dark:invert"
                />
              </Link>
              <Link
                aria-label="Email para contato"
                href="mailto:pedrosoares.nex@gmail.com"
                className="hover:text-foreground transition-colors"
              >
                <AtSign size={24} />
              </Link>
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
            &copy; {new Date().getFullYear()} Pedro Soares Silva. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
