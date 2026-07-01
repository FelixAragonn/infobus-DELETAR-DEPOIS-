"use client";

import { TopBar } from "@/components/shared/TopBar";
import { BottomNav } from "@/components/shared/BottomNav";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Plus, Trash2 } from "lucide-react";
import { MOCK_ANNOUNCEMENTS } from "@/app/lib/mock-data";
import { useToast } from "@/hooks/use-toast";

export default function AvisosInstituicao() {
  const { toast } = useToast();

  const handleDelete = () => {
    toast({ title: "Operação realizada com sucesso", description: "O aviso foi removido do mural." });
  };

  return (
    <div className="pb-20 transition-page">
      <TopBar title="Gestão de Mural" />
      
      <div className="p-4 space-y-6">
        <Button className="w-full h-12 flex gap-2 bg-teal-600">
          <Plus className="w-5 h-5" /> Novo Aviso Global
        </Button>

        <div className="space-y-4">
          <h3 className="font-headline font-bold text-lg">Avisos Ativos</h3>
          {MOCK_ANNOUNCEMENTS.map((a) => (
            <Card key={a.id} className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <div className="bg-teal-50 p-1.5 rounded-lg text-teal-600">
                    <Bell className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm">{a.title}</h4>
                </div>
                <button onClick={handleDelete}>
                  <Trash2 className="w-4 h-4 text-muted-foreground hover:text-red-500 transition-colors" />
                </button>
              </div>
              <p className="text-xs text-muted-foreground mb-2">{a.content}</p>
              <span className="text-[10px] font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded uppercase">
                Para: Todos os Perfis
              </span>
            </Card>
          ))}
        </div>
      </div>

      <BottomNav profile="instituicao" />
    </div>
  );
}