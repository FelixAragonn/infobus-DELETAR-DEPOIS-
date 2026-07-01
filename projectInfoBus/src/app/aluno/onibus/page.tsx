"use client";

import { TopBar } from "@/components/shared/TopBar";
import { BottomNav } from "@/components/shared/BottomNav";
import { MOCK_BUS } from "@/app/lib/mock-data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bus as BusIcon, Wifi, Wind, BatteryCharging, Wrench } from "lucide-react";

export default function BusDetails() {
  return (
    <div className="pb-20 transition-page">
      <TopBar title="Informações do Ônibus" />
      
      <div className="p-4 space-y-6">
        <div className="bg-slate-100 p-8 rounded-3xl flex flex-col items-center relative overflow-hidden">
          <BusIcon className="w-24 h-24 text-primary opacity-20 absolute -right-4 -bottom-4" />
          <h2 className="text-4xl font-headline font-bold text-primary mb-2">{MOCK_BUS.plate}</h2>
          <Badge variant="outline" className="text-primary border-primary">{MOCK_BUS.model}</Badge>
        </div>

        <div className="space-y-4">
          <h3 className="font-headline font-bold text-lg">Comodidades</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col items-center bg-white p-3 rounded-2xl border shadow-sm">
              <Wifi className="text-primary w-5 h-5 mb-1" />
              <span className="text-[10px] font-medium">Wi-Fi</span>
            </div>
            <div className="flex flex-col items-center bg-white p-3 rounded-2xl border shadow-sm">
              <Wind className="text-primary w-5 h-5 mb-1" />
              <span className="text-[10px] font-medium">Ar Cond.</span>
            </div>
            <div className="flex flex-col items-center bg-white p-3 rounded-2xl border shadow-sm">
              <BatteryCharging className="text-primary w-5 h-5 mb-1" />
              <span className="text-[10px] font-medium">USB</span>
            </div>
          </div>
        </div>

        <Card className="p-4 space-y-4">
          <div className="flex justify-between items-center pb-2 border-b">
            <span className="text-sm text-muted-foreground">Capacidade</span>
            <span className="font-bold">{MOCK_BUS.capacity} lugares</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Wrench className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Última Revisão</span>
            </div>
            <span className="font-bold">{MOCK_BUS.lastMaintenance}</span>
          </div>
        </Card>
      </div>

      <BottomNav profile="aluno" />
    </div>
  );
}