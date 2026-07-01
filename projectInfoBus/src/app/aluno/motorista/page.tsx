"use client";

import { TopBar } from "@/components/shared/TopBar";
import { BottomNav } from "@/components/shared/BottomNav";
import { MOCK_DRIVER } from "@/app/lib/mock-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Star, Phone, ShieldCheck } from "lucide-react";

export default function DriverDetails() {
  return (
    <div className="pb-20 transition-page">
      <TopBar title="Detalhes do Motorista" />
      
      <div className="p-6 flex flex-col items-center">
        <Avatar className="w-32 h-32 mb-4 border-4 border-primary">
          <AvatarImage src="https://picsum.photos/seed/driver/200" />
          <AvatarFallback>CF</AvatarFallback>
        </Avatar>
        <h2 className="text-2xl font-bold">{MOCK_DRIVER.name}</h2>
        <div className="flex items-center gap-1 text-orange-500 mt-1">
          <Star className="w-5 h-5 fill-current" />
          <span className="font-bold text-lg">{MOCK_DRIVER.rating}</span>
          <span className="text-muted-foreground text-sm ml-1">(450 viagens)</span>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full mt-8">
          <Card className="p-4 flex flex-col items-center space-y-1">
            <ShieldCheck className="text-primary w-6 h-6" />
            <span className="text-xs text-muted-foreground uppercase">Habilitação</span>
            <span className="font-bold">{MOCK_DRIVER.license}</span>
          </Card>
          <Card className="p-4 flex flex-col items-center space-y-1">
            <Clock className="text-primary w-6 h-6" />
            <span className="text-xs text-muted-foreground uppercase">Experiência</span>
            <span className="font-bold">{MOCK_DRIVER.experience}</span>
          </Card>
        </div>

        <Card className="w-full mt-4 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Phone className="text-primary" />
            <span className="font-medium">{MOCK_DRIVER.phone}</span>
          </div>
          <span className="text-xs text-green-600 font-bold bg-green-50 px-2 py-1 rounded">Disponível</span>
        </Card>
      </div>

      <BottomNav profile="aluno" />
    </div>
  );
}

function Clock(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}