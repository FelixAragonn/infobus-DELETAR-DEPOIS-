"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Calendar, Bell, Users, Map, UserCircle, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface BottomNavProps {
  profile: 'aluno' | 'motorista' | 'instituicao';
}

export function BottomNav({ profile }: BottomNavProps) {
  const pathname = usePathname();

  const links = {
    aluno: [
      { icon: Home, label: "Home", href: "/aluno" },
      { icon: Calendar, label: "Horários", href: "/aluno/horarios" },
      { icon: Bell, label: "Avisos", href: "/aluno/avisos" },
      { icon: Users, label: "Comunidade", href: "/aluno/comunidades" },
    ],
    motorista: [
      { icon: Home, label: "Home", href: "/motorista" },
      { icon: Map, label: "Rotas", href: "/motorista/rotas" },
      { icon: Bell, label: "Avisos", href: "/motorista/avisos" },
      { icon: UserCircle, label: "Perfil", href: "/motorista/perfil" },
    ],
    instituicao: [
      { icon: Home, label: "Home", href: "/instituicao" },
      { icon: Users, label: "Alunos", href: "/instituicao/alunos" },
      { icon: Settings, label: "Admin", href: "/instituicao/chamados" },
      { icon: Bell, label: "Avisos", href: "/instituicao/avisos" },
    ],
  };

  return (
    <nav className="glass-nav fixed bottom-0 left-0 right-0 h-16 flex items-center justify-around px-4 z-50 max-w-[480px] mx-auto">
      {links[profile].map((link) => {
        const Icon = link.icon;
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex flex-col items-center justify-center space-y-1 w-16 transition-all",
              isActive ? "text-primary" : "text-muted-foreground"
            )}
          >
            <Icon className={cn("w-6 h-6", isActive && "stroke-[2.5px]")} />
            <span className="text-[10px] font-medium">{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}