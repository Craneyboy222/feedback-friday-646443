export interface SecurityEvent {
  id: string;
  type: string;
  userId: string;
  timestamp: Date;
  details: string;
}