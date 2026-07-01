"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface TopBarProps {
  title: string;
  showBack?: boolean;
}

export function TopBar({ title, showBack = true }: TopBarProps) {
  const router = useRouter();

  return (
    <header className="sticky top-0 bg-background/80 backdrop-blur-md z-40 px-4 h-14 flex items-center border-b">
      {showBack && (
        <Button variant="ghost" size="icon" onClick={() => router.back()} className="-ml-2">
          <ChevronLeft className="w-6 h-6" />
        </Button>
      )}
      <h1 className="font-headline font-bold text-lg ml-2">{title}</h1>
    </header>
  );
}