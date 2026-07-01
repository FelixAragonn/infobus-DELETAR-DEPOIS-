"use client";

import { TopBar } from "@/components/shared/TopBar";
import { BottomNav } from "@/components/shared/BottomNav";
import { MOCK_ANNOUNCEMENTS } from "@/app/lib/mock-data";
import { Card } from "@/components/ui/card";
import { Bell, Info } from "lucide-react";

export default function AvisosPage() {
  return (
    <div className="pb-20 transition-page">
      <TopBar title="Mural de Avisos" />
      
      <div className="p-4 space-y-4">
        {MOCK_ANNOUNCEMENTS.map((a) => (
          <Card key={a.id} className="p-4 flex gap-4 items-start relative overflow-hidden">
            <div className="bg-primary/10 p-2 rounded-xl text-primary">
              <Bell className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-bold text-slate-800">{a.title}</h4>
                <span className="text-[10px] text-muted-foreground uppercase">{a.date}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.content}</p>
            </div>
          </Card>
        ))}

        <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl flex gap-3 items-center">
          <Info className="text-primary shrink-0" />
          <p className="text-xs text-primary font-medium">
            Ative as notificações para receber alertas de atraso em tempo real.
          </p>
        </div>
      </div>

      <BottomNav profile="aluno" />
    </div>
  );
}