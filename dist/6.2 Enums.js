"use strict";
//* Enums    DEFINE A SET OF NAMED CONSTANTS
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
const status1 = OrderStatus.DELIVERED;
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
isDelivered(OrderStatus.RETURNED); // return false
// DIFF TYPES OF ENUMS
var Responses;
(function (Responses) {
    Responses[Responses["no"] = 0] = "no";
    Responses[Responses["yes"] = 1] = "yes";
    Responses[Responses["maybe"] = 2] = "maybe";
})(Responses || (Responses = {}));
var Responses2;
(function (Responses2) {
    Responses2[Responses2["no"] = 2] = "no";
    Responses2[Responses2["yes"] = 3] = "yes";
    Responses2[Responses2["maybe"] = 4] = "maybe";
})(Responses2 || (Responses2 = {}));
var Responses3;
(function (Responses3) {
    Responses3[Responses3["no"] = 2] = "no";
    Responses3[Responses3["yes"] = 10] = "yes";
    Responses3[Responses3["maybe"] = 24] = "maybe";
})(Responses3 || (Responses3 = {}));
var ResponsesString;
(function (ResponsesString) {
    ResponsesString["no"] = "NO";
    ResponsesString["yes"] = "YES";
    ResponsesString["maybe"] = "MAYBE";
})(ResponsesString || (ResponsesString = {}));
var ResponsesHeterogen;
(function (ResponsesHeterogen) {
    ResponsesHeterogen["no"] = "NO";
    ResponsesHeterogen["yes"] = "YES";
    ResponsesHeterogen[ResponsesHeterogen["maybe"] = 2] = "maybe";
})(ResponsesHeterogen || (ResponsesHeterogen = {}));
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "up";
    ArrowKeys["DOWN"] = "down";
    ArrowKeys["LEFT"] = "left";
    ArrowKeys["RIGHT"] = "right";
})(ArrowKeys || (ArrowKeys = {}));
