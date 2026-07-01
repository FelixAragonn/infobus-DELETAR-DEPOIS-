"use client";

import { useState } from "react";
import { TopBar } from "@/components/shared/TopBar";
import { BottomNav } from "@/components/shared/BottomNav";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function CriarAvisoMotorista() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({ title: "Operação realizada com sucesso", description: "Seu aviso foi enviado aos alunos da linha." });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="pb-20 transition-page">
      <TopBar title="Enviar Comunicado" />
      
      <form onSubmit={handleSubmit} className="p-4 space-y-6">
        <div className="space-y-2">
          <Label>Título do Alerta</Label>
          <Input placeholder="Ex: Pequeno atraso na Linha Sul" required />
        </div>

        <div className="space-y-3">
          <Label>Tipo de Urgência</Label>
          <RadioGroup defaultValue="info" className="grid grid-cols-3 gap-2">
            <div>
              <RadioGroupItem value="info" id="info" className="peer sr-only" />
              <Label htmlFor="info" className="flex items-center justify-center px-3 py-2 border rounded-xl peer-data-[state=checked]:bg-blue-50 peer-data-[state=checked]:border-blue-500 cursor-pointer text-xs font-bold">
                Informativo
              </Label>
            </div>
            <div>
              <RadioGroupItem value="warning" id="warning" className="peer sr-only" />
              <Label htmlFor="warning" className="flex items-center justify-center px-3 py-2 border rounded-xl peer-data-[state=checked]:bg-amber-50 peer-data-[state=checked]:border-amber-500 cursor-pointer text-xs font-bold">
                Atenção
              </Label>
            </div>
            <div>
              <RadioGroupItem value="urgent" id="urgent" className="peer sr-only" />
              <Label htmlFor="urgent" className="flex items-center justify-center px-3 py-2 border rounded-xl peer-data-[state=checked]:bg-red-50 peer-data-[state=checked]:border-red-500 cursor-pointer text-xs font-bold">
                Urgente
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label>Conteúdo do Comunicado</Label>
          <Textarea placeholder="Descreva brevemente a situação..." rows={4} required />
        </div>

        <Button className="w-full h-12 text-lg" disabled={loading}>
          {loading ? "Enviando..." : "Publicar Aviso"}
        </Button>
      </form>

      <BottomNav profile="motorista" />
    </div>
  );
}