"use client";

import { TopBar } from "@/components/shared/TopBar";
import { BottomNav } from "@/components/shared/BottomNav";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Users, Info } from "lucide-react";

export default function VisualizarRota({ params }: { params: { id: string } }) {
  return (
    <div className="pb-20 transition-page">
      <TopBar title="Detalhes da Rota" />
      
      <div className="p-4 space-y-6">
        <div className="bg-slate-50 p-6 rounded-3xl border border-dashed border-primary/30 flex flex-col items-center">
          <div className="w-full h-40 bg-slate-200 rounded-2xl mb-4 flex items-center justify-center text-muted-foreground overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map/400/200')] bg-cover opacity-50" />
            <span className="relative z-10 font-bold bg-white/80 px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
              <Navigation className="w-4 h-4 text-primary" /> Ver Mapa Interativo
            </span>
          </div>
          <h2 className="text-xl font-bold">Linha Norte - Campus A</h2>
          <Badge className="mt-2">Ativa agora</Badge>
        </div>

        <div className="space-y-4">
          <h3 className="font-headline font-bold">Próximas Paradas</h3>
          {[1, 2, 3].map((p) => (
            <div key={p} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <div className="w-0.5 h-12 bg-primary/20" />
              </div>
              <div className="flex-1 pb-4">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-sm">Parada {p}: Terminal Central</h4>
                  <span className="text-xs font-medium text-primary">07:1{p}</span>
                </div>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  <Users className="w-3 h-3" /> ~{p * 5} alunos aguardando
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 p-4 rounded-2xl flex gap-3">
          <Info className="text-primary shrink-0" />
          <p className="text-xs text-primary leading-relaxed">
            <b>Nota do Sistema:</b> O trânsito está moderado na Av. Principal. Atraso estimado de 3 minutos.
          </p>
        </div>

        <Button variant="outline" className="w-full text-destructive border-destructive hover:bg-destructive/10">
          Encerrar Rota
        </Button>
      </div>

      <BottomNav profile="motorista" />
    </div>
  );
}