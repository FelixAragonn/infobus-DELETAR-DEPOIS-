"use client";

import { TopBar } from "@/components/shared/TopBar";
import { BottomNav } from "@/components/shared/BottomNav";
import { MOCK_SCHEDULES } from "@/app/lib/mock-data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin } from "lucide-react";

export default function HorariosPage() {
  return (
    <div className="pb-20 transition-page">
      <TopBar title="Horários e Locais" />
      
      <div className="p-4 space-y-4">
        {MOCK_SCHEDULES.map((s) => (
          <Card key={s.id} className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg text-primary">{s.route}</h3>
              <Badge variant={s.status === "No horário" ? "default" : "destructive"}>
                {s.status}
              </Badge>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>Saída: {s.departure}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Chegada: {s.arrival}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <BottomNav profile="aluno" />
    </div>
  );
}