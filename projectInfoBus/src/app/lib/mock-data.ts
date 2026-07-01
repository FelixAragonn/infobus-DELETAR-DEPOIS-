export const MOCK_SCHEDULES = [
  { id: 1, route: "Linha Norte - Campus A", departure: "07:00", arrival: "07:45", status: "No horário" },
  { id: 2, route: "Linha Sul - Campus B", departure: "07:15", arrival: "08:10", status: "Atraso 5min" },
  { id: 3, route: "Circular Central", departure: "08:00", arrival: "08:20", status: "No horário" },
  { id: 4, route: "Expresso Noturno", departure: "18:30", arrival: "19:15", status: "No horário" },
];

export const MOCK_DRIVER = {
  name: "Carlos Ferreira",
  experience: "12 anos",
  rating: 4.9,
  license: "Cat. D",
  phone: "(11) 98765-4321",
};

export const MOCK_BUS = {
  plate: "BUS-2024",
  model: "Mercedes-Benz OF-1721",
  capacity: 44,
  features: ["Wi-Fi", "Ar Condicionado", "USB"],
  lastMaintenance: "15/05/2024",
};

export const MOCK_ANNOUNCEMENTS = [
  { id: 1, title: "Manutenção Preventiva", content: "A linha Norte terá horários reduzidos na próxima terça-feira.", date: "2 horas atrás" },
  { id: 2, title: "Novas Paradas", content: "Implementamos um novo ponto de embarque próximo à Biblioteca Central.", date: "Ontem" },
  { id: 3, title: "Evento Campus", content: "Haverá ônibus extras para o festival cultural no sábado.", date: "2 dias atrás" },
];

export const MOCK_STUDENTS = [
  { id: "AL001", name: "Ana Silva", course: "Engenharia", status: "Ativo" },
  { id: "AL002", name: "Bruno Souza", course: "Direito", status: "Ativo" },
  { id: "AL003", name: "Carla Oliveira", course: "Medicina", status: "Suspenso" },
  { id: "AL004", name: "Diego Santos", course: "Arquitetura", status: "Ativo" },
];

export const MOCK_REPORT_DATA = [
  { name: 'Jan', trips: 45, delays: 2 },
  { name: 'Fev', trips: 52, delays: 5 },
  { name: 'Mar', trips: 48, delays: 3 },
  { name: 'Abr', trips: 61, delays: 1 },
];