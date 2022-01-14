import { Subjects } from './subjects';

export interface PaymentCompliteEvent {
  subject: Subjects.PaymentCreated;
  data: {
    id: string;
    orderId: string;
    paymentId: string;
  };
}
