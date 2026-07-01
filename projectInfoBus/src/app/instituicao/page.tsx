"use client";

import { TopBar } from "@/components/shared/TopBar";
import { BottomNav } from "@/components/shared/BottomNav";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, FileText, Bell, BarChart3, TrendingUp, AlertCircle } from "lucide-react";
import Link from "next/link";
import { MOCK_REPORT_DATA } from "@/app/lib/mock-data";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

export default function InstituicaoDashboard() {
  return (
    <div className="pb-20 transition-page">
      <TopBar title="Painel Gestor" showBack={false} />
      
      <div className="p-4 space-y-6">
        <section className="bg-teal-600 text-white p-6 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold mb-1">Campus Central</h2>
          <p className="text-white/80 text-sm">Visão geral do sistema de transporte</p>
        </section>

        <section className="grid grid-cols-2 gap-4">
          <Link href="/instituicao/alunos">
            <Card className="p-4 flex flex-col items-center space-y-2 hover:bg-slate-50 transition-all">
              <Users className="text-teal-600 w-8 h-8" />
              <span className="font-bold text-sm">Alunos</span>
            </Card>
          </Link>
          <Link href="/instituicao/chamados">
            <Card className="p-4 flex flex-col items-center space-y-2 hover:bg-slate-50 transition-all">
              <FileText className="text-teal-600 w-8 h-8" />
              <span className="font-bold text-sm">Chamados</span>
            </Card>
          </Link>
        </section>

        <section>
          <Card>
            <CardHeader className="py-4">
              <CardTitle className="text-sm font-headline flex items-center justify-between">
                <span>Engajamento Mensal</span>
                <TrendingUp className="w-4 h-4 text-teal-600" />
              </CardTitle>
            </CardHeader>
            <CardContent className="h-[180px] w-full pt-0">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={MOCK_REPORT_DATA}>
                  <XAxis dataKey="name" hide />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{borderRadius: '12px', border: 'none', fontSize: '10px'}}
                  />
                  <Line type="monotone" dataKey="trips" stroke="#0D9488" strokeWidth={3} dot={{r: 4, fill: "#0D9488"}} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-3">
          <h3 className="font-headline font-bold">Alertas Críticos</h3>
          <Card className="p-4 flex items-start gap-3 bg-red-50 border-red-100">
            <AlertCircle className="text-red-500 shrink-0 w-5 h-5" />
            <div>
              <h4 className="font-bold text-xs text-red-700">Manutenção Vencida</h4>
              <p className="text-[10px] text-red-600 mt-1">O veículo BUS-1022 atingiu o limite de quilometragem.</p>
            </div>
          </Card>
        </section>
      </div>

      <BottomNav profile="instituicao" />
    </div>
  );
}