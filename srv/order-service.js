export default class OrderService extends cds.ApplicationService {
  async init() {
    const {
      Orders
    } = this.entities

    this.on("READ", Orders, async (req) => {
      const aribaApi = await cds.connect.to("AribaAPI")
      return aribaApi.tx(req).run(req.query)
    })

    this.after("READ", Orders, orders => {
      orders.$count = orders.length
      console.log(orders)
    })
  }
}