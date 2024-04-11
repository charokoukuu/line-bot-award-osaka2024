export interface TicketTypes {
  id: string;
  title: string;
  date: string;
  time: string;
  status?: string;
}

export interface TicketSubscribeTypes {
  id: string;
  title: string;
  date: string;
  time: string;
  status: "scanned" | "failed" | "success";
}
