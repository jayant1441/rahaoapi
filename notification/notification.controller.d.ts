import { NotificationEntity } from './notification.entity';
import { NotificationService } from './notification.service';
export declare class NotificationController {
    private notificationService;
    constructor(notificationService: NotificationService);
    getAllNotificationForTopic(topic: string): Promise<NotificationEntity[]>;
    test(topic: string): {};
    sendFcmToTopic(notificationEntity: NotificationEntity): Promise<import("firebase-admin").messaging.MessagingTopicResponse>;
}
