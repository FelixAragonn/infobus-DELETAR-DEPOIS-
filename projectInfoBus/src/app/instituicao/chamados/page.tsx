"use client";

import { useState } from "react";
import { TopBar } from "@/components/shared/TopBar";
import { BottomNav } from "@/components/shared/BottomNav";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock } from "lucide-react";

export default function ChamadosInstituicao() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({ title: "Operação realizada com sucesso", description: "O registro foi gravado no sistema central." });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="pb-20 transition-page">
      <TopBar title="Chamados e Suporte" />
      
      <div className="p-4">
        <Tabs defaultValue="novo" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="novo">Novo Chamado</TabsTrigger>
            <TabsTrigger value="lista">Em Aberto</TabsTrigger>
          </TabsList>

          <TabsContent value="novo">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label>Assunto Principal</Label>
                <Input placeholder="Resumo da solicitação" required />
              </div>

              <div className="space-y-2">
                <Label>Prioridade</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Baixa</SelectItem>
                    <SelectItem value="medium">Média</SelectItem>
                    <SelectItem value="high">Alta (Urgente)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Setor Destino</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o setor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="logistics">Logística / Frotas</SelectItem>
                    <SelectItem value="it">TI / Aplicativo</SelectItem>
                    <SelectItem value="academic">Acadêmico / Cadastro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Relatório Detalhado</Label>
                <Textarea placeholder="Descreva os fatos e anexe provas se necessário..." rows={6} required />
              </div>

              <Button className="w-full h-12 text-lg bg-teal-600 hover:bg-teal-700" disabled={loading}>
                {loading ? "Processando..." : "Abrir Chamado Institucional"}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="lista" className="space-y-4">
            <Card className="p-4 border-l-4 border-l-amber-400">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-sm">Ajuste de Rota Campus Norte</h4>
                <Badge variant="outline" className="text-[10px] uppercase">Pendente</Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-3">Solicitada alteração de horário das 18h para 18h30.</p>
              <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground">
                <Clock className="w-3 h-3" /> Criado em 14/06/2024
              </div>
            </Card>

            <Card className="p-4 border-l-4 border-l-green-400">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-sm">Manutenção de Ar-condicionado</h4>
                <Badge variant="outline" className="text-[10px] uppercase text-green-600 border-green-200">Resolvido</Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-3">Veículo BUS-2024 passou por reparos no sistema térmico.</p>
              <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground">
                <CheckCircle2 className="w-3 h-3" /> Concluído em 12/06/2024
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <BottomNav profile="instituicao" />
    </div>
  );
}
