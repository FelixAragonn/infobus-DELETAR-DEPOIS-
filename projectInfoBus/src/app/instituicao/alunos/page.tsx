"use client";

import { TopBar } from "@/components/shared/TopBar";
import { BottomNav } from "@/components/shared/BottomNav";
import { MOCK_STUDENTS } from "@/app/lib/mock-data";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, MoreHorizontal, User } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ListaAlunos() {
  return (
    <div className="pb-20 transition-page">
      <TopBar title="Gestão de Alunos" />
      
      <div className="p-4 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input placeholder="Buscar por nome ou RA..." className="pl-10" />
        </div>

        <div className="space-y-3">
          {MOCK_STUDENTS.map((s) => (
            <Card key={s.id} className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-slate-100 p-2 rounded-full">
                  <User className="text-slate-500 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">{s.name}</h4>
                  <p className="text-xs text-muted-foreground">{s.course} • {s.id}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={cn(
                  "text-[10px] font-bold px-2 py-0.5 rounded-full",
                  s.status === "Ativo" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                )}>
                  {s.status}
                </span>
                <MoreHorizontal className="text-muted-foreground w-4 h-4" />
              </div>
            </Card>
          ))}
        </div>
      </div>

      <BottomNav profile="instituicao" />
    </div>
  );
}
