"use client";

import { TopBar } from "@/components/shared/TopBar";
import { BottomNav } from "@/components/shared/BottomNav";
import { MOCK_REPORT_DATA } from "@/app/lib/mock-data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Calendar, CheckCircle2, AlertCircle } from "lucide-react";

export default function AlunoRelatorio() {
  const currentMonth = MOCK_REPORT_DATA[MOCK_REPORT_DATA.length - 1];

  return (
    <div className="pb-20 transition-page">
      <TopBar title="Relatório Mensal" />
      
      <div className="p-4 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 flex flex-col items-center justify-center bg-green-50 border-green-100">
            <CheckCircle2 className="text-green-600 mb-1" />
            <span className="text-2xl font-bold text-green-700">{currentMonth.trips}</span>
            <span className="text-[10px] text-green-600 font-bold uppercase">Viagens Realizadas</span>
          </Card>
          <Card className="p-4 flex flex-col items-center justify-center bg-amber-50 border-amber-100">
            <AlertCircle className="text-amber-600 mb-1" />
            <span className="text-2xl font-bold text-amber-700">{currentMonth.delays}</span>
            <span className="text-[10px] text-amber-600 font-bold uppercase">Atrasos Notificados</span>
          </Card>
        </div>

        <Card>
          <CardHeader className="py-4">
            <CardTitle className="text-sm font-headline flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" /> Histórico Semestral
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[250px] w-full pt-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MOCK_REPORT_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                <YAxis hide />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                />
                <Bar dataKey="trips" radius={[4, 4, 0, 0]}>
                  {MOCK_REPORT_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === MOCK_REPORT_DATA.length - 1 ? '#1971C2' : '#94a3b8'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="p-4 text-sm bg-slate-50 border-dashed">
          <p className="text-muted-foreground italic text-center">
            "Sua frequência média de uso do InfoBus é de 85% este semestre. Mantenha o bom ritmo!"
          </p>
        </Card>
      </div>

      <BottomNav profile="aluno" />
    </div>
  );
}