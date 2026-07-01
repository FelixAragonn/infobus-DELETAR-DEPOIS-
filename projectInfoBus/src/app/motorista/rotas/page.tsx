"use client";

import { TopBar } from "@/components/shared/TopBar";
import { BottomNav } from "@/components/shared/BottomNav";
import { MOCK_SCHEDULES } from "@/app/lib/mock-data";
import { Card } from "@/components/ui/card";
import { Eye, MapPin, Navigation } from "lucide-react";
import Link from "next/link";

export default function MotoristaRotas() {
  return (
    <div className="pb-20 transition-page">
      <TopBar title="Minhas Rotas" />
      
      <div className="p-4 space-y-4">
        {MOCK_SCHEDULES.map((r) => (
          <Link key={r.id} href={`/motorista/rotas/${r.id}`}>
            <Card className="p-4 mb-4 flex items-center justify-between hover:bg-slate-50 active:scale-[0.98] transition-all">
              <div className="flex items-center gap-4">
                <div className="bg-blue-50 p-3 rounded-2xl">
                  <Navigation className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{r.route}</h4>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> 12 paradas • {r.departure}
                  </p>
                </div>
              </div>
              <Eye className="text-muted-foreground w-5 h-5" />
            </Card>
          </Link>
        ))}
      </div>

      <BottomNav profile="motorista" />
    </div>
  );
}