"use client";

import { useRouter } from "next/navigation";
import { GraduationCap, Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function ProfileSelection() {
  const router = useRouter();

  const profiles = [
    { id: "aluno", label: "Aluno", icon: GraduationCap, color: "bg-blue-500", href: "/aluno" },
    { id: "motorista", label: "Motorista", icon: SteeringWheel, color: "bg-orange-500", href: "/motorista" },
    { id: "instituicao", label: "Instituição", icon: Building2, color: "bg-teal-500", href: "/instituicao" },
  ];

  return (
    <div className="p-6 flex flex-col min-h-screen transition-page">
      <header className="mb-10 mt-8">
        <h1 className="font-headline text-3xl font-bold mb-2">Quem é você?</h1>
        <p className="text-muted-foreground">Escolha seu perfil para continuar</p>
      </header>

      <div className="grid gap-4">
        {profiles.map((p) => {
          const Icon = p.icon;
          return (
            <Card
              key={p.id}
              onClick={() => router.push(p.href)}
              className="p-6 flex items-center space-x-4 cursor-pointer hover:border-primary transition-all active:scale-95 border-2"
            >
              <div className={`${p.color} p-4 rounded-2xl text-white`}>
                <Icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-xl">{p.label}</h3>
                <p className="text-sm text-muted-foreground">Acesso ao painel de {p.label.toLowerCase()}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

// Stub for steering wheel icon since lucide might not have it or it might be different
function SteeringWheel(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2v20" />
      <path d="M2 12h20" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
