//* Enums    DEFINE A SET OF NAMED CONSTANTS

enum OrderStatus { //* EACH ONE ASSIGNED A NUMBER
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const status1 = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED); // return false

// DIFF TYPES OF ENUMS

enum Responses {
  no, // = 0
  yes, // = 1
  maybe, // = 2
}

enum Responses2 {
  no = 2, // = 2
  yes, // = 3
  maybe, // = 4
}

enum Responses3 {
  no = 2, // = 2
  yes = 10, // = 10
  maybe = 24, // = 24
}

enum ResponsesString {
  no = "NO", // = 'NO'
  yes = "YES", // = 'YES'
  maybe = "MAYBE", // = 'MAYBE'
}

enum ResponsesHeterogen {
  no = "NO", // = 'NO'
  yes = "YES", // = 'YES'
  maybe = 2, // = 2
}

enum ArrowKeys{
    UP = 'up',
    DOWN = 'down',
    LEFT = 'left',
    RIGHT = 'right'
}