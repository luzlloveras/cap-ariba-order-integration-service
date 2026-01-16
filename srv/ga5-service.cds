using { Orders as DbOrders } from '../db/ga5';

service GA5 {
  entity Orders as projection on DbOrders;
}
