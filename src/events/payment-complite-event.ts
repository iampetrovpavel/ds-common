import { Subjects } from './subjects';

export interface PaymentCompliteEvent {
  subject: Subjects.PaymentComplite;
  data: {
    id: string;
    orderId: string;
    paymentId: string;
  };
}
