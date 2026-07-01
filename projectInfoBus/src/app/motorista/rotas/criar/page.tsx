"use client";

import { useState } from "react";
import { TopBar } from "@/components/shared/TopBar";
import { BottomNav } from "@/components/shared/BottomNav";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function CriarRota() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({ title: "Operação realizada com sucesso", description: "Nova rota foi programada." });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="pb-20 transition-page">
      <TopBar title="Programar Rota" />
      
      <form onSubmit={handleSubmit} className="p-4 space-y-6">
        <div className="space-y-2">
          <Label>Nome da Rota</Label>
          <Input placeholder="Ex: Linha Norte Noturno" required />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Saída</Label>
            <Input type="time" required />
          </div>
          <div className="space-y-2">
            <Label>Previsão Chegada</Label>
            <Input type="time" required />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Veículo</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o ônibus" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bus1">BUS-2024 (Mercedes)</SelectItem>
              <SelectItem value="bus2">BUS-2025 (Volkswagen)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Observações de Trânsito</Label>
          <Textarea placeholder="Obras, desvios ou alertas..." />
        </div>

        <Button className="w-full h-12 text-lg" disabled={loading}>
          {loading ? "Processando..." : "Confirmar Rota"}
        </Button>
      </form>

      <BottomNav profile="motorista" />
    </div>
  );
}