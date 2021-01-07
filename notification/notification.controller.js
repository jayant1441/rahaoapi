"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationController = void 0;
const common_1 = require("@nestjs/common");
const notification_entity_1 = require("./notification.entity");
const notification_service_1 = require("./notification.service");
let NotificationController = class NotificationController {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    getAllNotificationForTopic(topic) {
        return this.notificationService.getAllNotification(topic);
    }
    test(topic) {
        return {};
    }
    sendFcmToTopic(notificationEntity) {
        return this.notificationService.sendFCMToTopic(notificationEntity);
    }
};
__decorate([
    common_1.Get("/:topic"),
    __param(0, common_1.Param("topic")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NotificationController.prototype, "getAllNotificationForTopic", null);
__decorate([
    common_1.Get("/"),
    __param(0, common_1.Param("topic")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NotificationController.prototype, "test", null);
__decorate([
    common_1.Post("/fcm"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [notification_entity_1.NotificationEntity]),
    __metadata("design:returntype", void 0)
], NotificationController.prototype, "sendFcmToTopic", null);
NotificationController = __decorate([
    common_1.Controller('notification'),
    __metadata("design:paramtypes", [notification_service_1.NotificationService])
], NotificationController);
exports.NotificationController = NotificationController;
//# sourceMappingURL=notification.controller.js.map