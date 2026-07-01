"use client";

import { TopBar } from "@/components/shared/TopBar";
import { BottomNav } from "@/components/shared/BottomNav";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Users, Hash } from "lucide-react";

export default function ComunidadesPage() {
  const comms = [
    { name: "Caronas Campus Norte", members: 154, category: "Caronas" },
    { name: "Perdidos e Achados", members: 320, category: "Utilidade" },
    { name: "Eventos Universitários", members: 850, category: "Social" },
  ];

  return (
    <div className="pb-20 transition-page">
      <TopBar title="Comunidades" />
      
      <div className="p-4 space-y-6">
        <section>
          <h3 className="font-headline font-bold text-lg mb-4">Minhas Comunidades</h3>
          <div className="space-y-3">
            {comms.map((c, i) => (
              <Card key={i} className="p-4 flex items-center justify-between hover:bg-slate-50 cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="bg-slate-100 p-3 rounded-xl">
                    <Users className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{c.name}</h4>
                    <p className="text-xs text-muted-foreground">{c.members} membros</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-slate-100 text-[10px]">{c.category}</Badge>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h3 className="font-headline font-bold text-lg mb-4">Destaques do dia</h3>
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://picsum.photos/seed/user1/200" />
              </Avatar>
              <span className="text-xs font-bold">@marcos_eng</span>
              <span className="text-[10px] text-muted-foreground">• 1h</span>
            </div>
            <p className="text-sm text-slate-700">
              Alguém esqueceu um carregador de iPhone no ônibus das 07:15 hoje? Deixei com o motorista Carlos! 🔌
            </p>
            <div className="mt-3 flex gap-4">
              <button className="flex items-center gap-1 text-xs text-muted-foreground">
                <MessageSquare className="w-4 h-4" /> 12
              </button>
              <button className="flex items-center gap-1 text-xs text-muted-foreground">
                <Hash className="w-4 h-4" /> achados
              </button>
            </div>
          </Card>
        </section>
      </div>

      <BottomNav profile="aluno" />
    </div>
  );
}
