"use client";

import { useEffect, useState, useCallback } from "react";
import { TopBar } from "@/components/shared/TopBar";
import { BottomNav } from "@/components/shared/BottomNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, MapPin, Bus, User, TrendingUp, RefreshCw, AlertCircle } from "lucide-react";
import { dailyScheduleSummary } from "@/ai/flows/daily-schedule-summary";
import { MOCK_SCHEDULES } from "@/app/lib/mock-data";
import Link from "next/link";

export default function AlunoDashboard() {
  const [aiSummary, setAiSummary] = useState<string | null>(null);
  const [loadingAi, setLoadingAi] = useState(false);
  const [errorAi, setErrorAi] = useState(false);

  const fetchAiSummary = useCallback(async () => {
    setLoadingAi(true);
    setErrorAi(false);
    try {
      const scheduleStr = MOCK_SCHEDULES.map(s => `${s.route} saindo as ${s.departure}`).join(", ");
      const result = await dailyScheduleSummary({ scheduleData: scheduleStr });
      setAiSummary(result.summary);
    } catch (e) {
      console.error("Failed to fetch AI summary:", e);
      setErrorAi(true);
      setAiSummary(null);
    } finally {
      setLoadingAi(false);
    }
  }, []);

  useEffect(() => {
    fetchAiSummary();
  }, [fetchAiSummary]);

  return (
    <div className="pb-20 transition-page">
      <TopBar title="InfoBus Aluno" showBack={false} />
      
      <div className="p-4 space-y-6">
        <section className="bg-primary text-white p-6 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold mb-1">Olá, Ana! 👋</h2>
          <p className="text-white/80 text-sm">Seu ônibus da Linha Norte sai em 15 minutos.</p>
        </section>

        <section>
          <Card className="border-none shadow-md overflow-hidden">
            <CardHeader className="bg-accent text-white flex flex-row items-center justify-between space-y-0 pb-2 py-3">
              <CardTitle className="text-sm font-headline flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Transit AI Navigator
              </CardTitle>
              {errorAi && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={fetchAiSummary}
                  className="h-7 text-[10px] text-white hover:bg-white/20"
                >
                  <RefreshCw className="w-3 h-3 mr-1" /> Tentar novamente
                </Button>
              )}
            </CardHeader>
            <CardContent className="pt-4 text-sm leading-relaxed min-h-[80px] flex flex-col justify-center">
              {loadingAi ? (
                <div className="space-y-2 animate-pulse">
                  <div className="h-4 bg-slate-200 rounded w-full"></div>
                  <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                </div>
              ) : errorAi ? (
                <div className="flex flex-col items-center text-center space-y-2 text-muted-foreground">
                  <AlertCircle className="w-5 h-5 text-amber-500" />
                  <p>O resumo automático está temporariamente indisponível devido à alta demanda.</p>
                </div>
              ) : (
                <p>{aiSummary || "Analizando as melhores rotas para você hoje..."}</p>
              )}
            </CardContent>
          </Card>
        </section>

        <section className="grid grid-cols-2 gap-4">
          <Link href="/aluno/horarios" className="block">
            <Card className="p-4 flex flex-col items-center text-center space-y-2 hover:bg-slate-50 active:scale-95 transition-all">
              <MapPin className="text-primary w-8 h-8" />
              <span className="font-semibold text-sm">Horários</span>
            </Card>
          </Link>
          <Link href="/aluno/onibus" className="block">
            <Card className="p-4 flex flex-col items-center text-center space-y-2 hover:bg-slate-50 active:scale-95 transition-all">
              <Bus className="text-primary w-8 h-8" />
              <span className="font-semibold text-sm">Meu Ônibus</span>
            </Card>
          </Link>
          <Link href="/aluno/motorista" className="block">
            <Card className="p-4 flex flex-col items-center text-center space-y-2 hover:bg-slate-50 active:scale-95 transition-all">
              <User className="text-primary w-8 h-8" />
              <span className="font-semibold text-sm">Motorista</span>
            </Card>
          </Link>
          <Link href="/aluno/relatorio" className="block">
            <Card className="p-4 flex flex-col items-center text-center space-y-2 hover:bg-slate-50 active:scale-95 transition-all">
              <TrendingUp className="text-primary w-8 h-8" />
              <span className="font-semibold text-sm">Frequência</span>
            </Card>
          </Link>
        </section>
      </div>

      <BottomNav profile="aluno" />
    </div>
  );
}
