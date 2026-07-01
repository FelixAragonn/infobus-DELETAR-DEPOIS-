"use client";

import { useState } from "react";
import { TopBar } from "@/components/shared/TopBar";
import { BottomNav } from "@/components/shared/BottomNav";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function CriarChamadoMotorista() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({ title: "Operação realizada com sucesso", description: "O suporte institucional foi notificado." });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="pb-20 transition-page">
      <TopBar title="Abrir Chamado" />
      
      <form onSubmit={handleSubmit} className="p-4 space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 text-orange-800 text-sm">
          Use este formulário para relatar problemas mecânicos, incidentes na via ou necessidades administrativas.
        </div>

        <div className="space-y-2">
          <Label>Categoria do Chamado</Label>
          <Select required>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o problema" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mechanical">Problema Mecânico</SelectItem>
              <SelectItem value="accident">Incidente / Acidente</SelectItem>
              <SelectItem value="admin">Dúvida Administrativa</SelectItem>
              <SelectItem value="route">Alteração de Rota</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Descrição Detalhada</Label>
          <Textarea placeholder="Relate o ocorrido com o máximo de detalhes..." rows={5} required />
        </div>

        <Button className="w-full h-12 text-lg bg-orange-600 hover:bg-orange-700" disabled={loading}>
          {loading ? "Enviando Chamado..." : "Enviar para Suporte"}
        </Button>
      </form>

      <BottomNav profile="motorista" />
    </div>
  );
}