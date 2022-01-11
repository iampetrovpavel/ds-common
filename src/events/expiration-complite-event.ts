import { Subjects } from './subjects'

export interface ExpirationCompliteEvent {
    subject: Subjects.ExpirationComplite,
    data: {
        orderId: string
    }
}