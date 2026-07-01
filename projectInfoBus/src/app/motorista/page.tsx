"use client";

import { TopBar } from "@/components/shared/TopBar";
import { BottomNav } from "@/components/shared/BottomNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Map, PlusCircle, Bell, PhoneCall, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function MotoristaDashboard() {
  return (
    <div className="pb-20 transition-page">
      <TopBar title="InfoBus Motorista" showBack={false} />
      
      <div className="p-4 space-y-6">
        <section className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-1">Olá, Carlos!</h2>
            <p className="text-white/60 text-xs">Próxima rota em 40 minutos</p>
          </div>
          <div className="bg-primary p-3 rounded-2xl">
            <Map className="w-6 h-6" />
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4">
          <Link href="/motorista/rotas/criar">
            <Button className="w-full h-16 text-lg rounded-2xl flex gap-3 shadow-md" variant="default">
              <PlusCircle className="w-6 h-6" />
              Iniciar Nova Rota
            </Button>
          </Link>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/motorista/rotas" className="block">
              <Card className="p-6 flex flex-col items-center text-center space-y-2 hover:bg-slate-50 active:scale-95 transition-all">
                <Map className="text-primary w-8 h-8" />
                <span className="font-semibold text-sm">Minhas Rotas</span>
              </Card>
            </Link>
            <Link href="/motorista/avisos/criar" className="block">
              <Card className="p-6 flex flex-col items-center text-center space-y-2 hover:bg-slate-50 active:scale-95 transition-all">
                <Bell className="text-primary w-8 h-8" />
                <span className="font-semibold text-sm">Criar Aviso</span>
              </Card>
            </Link>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="font-headline font-bold text-lg">Suporte Rápido</h3>
          <Link href="/motorista/chamado">
            <Card className="p-4 border-l-4 border-l-orange-500 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <PhoneCall className="text-orange-500" />
                <div>
                  <h4 className="font-bold text-sm">Abrir Chamado</h4>
                  <p className="text-xs text-muted-foreground">Suporte técnico ou mecânico</p>
                </div>
              </div>
              <AlertTriangle className="text-orange-200 w-8 h-8" />
            </Card>
          </Link>
        </section>
      </div>

      <BottomNav profile="motorista" />
    </div>
  );
}