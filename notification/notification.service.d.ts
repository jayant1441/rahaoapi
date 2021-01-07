import * as admin from 'firebase-admin';
import { NotificationEntity } from './notification.entity';
import { Repository } from 'typeorm';
export declare class NotificationService {
    private notificationRepo;
    constructor(notificationRepo: Repository<NotificationEntity>);
    sendFCMToTopic(data: NotificationEntity): Promise<admin.messaging.MessagingTopicResponse>;
    getAllNotification(topic: string): Promise<NotificationEntity[]>;
}
