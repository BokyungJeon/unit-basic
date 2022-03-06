const productClient = require('./product_client.js');
class ProductService {
  constructor(productClient) {
    this.productClient = productClient;
    // 의존성을 역전시킨다. 외부로부터 가져온 것을 사용.
    // 테스트할 때는 테스트용 productClent를, 실전에서는 실제 productClient를 사용하면 된다.
  }

  fetchAvailableItems() {
    return this.productClient.fetchItems().then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
