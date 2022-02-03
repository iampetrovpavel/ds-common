import { Subjects } from './subjects'
import { OrderStatus } from './types/order-status'

export interface OrderCompliteEvent {
	subject: Subjects.OrderComplite;
	data: {
		id: string,
		ticketId: string,
        userId: string
	}
}