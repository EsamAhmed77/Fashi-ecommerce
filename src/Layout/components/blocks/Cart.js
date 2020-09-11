import React from "react";
import "./style/Cart.scss";
import Container from "react-bootstrap/Container";
import Footer from "../Footer";

class Cart extends React.Component {
  state = { menNumbers: 1, numbers: 1 };
  onInputChange = (e) => {
    this.setState({ menNumbers: e.target.value, numbers: e.target.value });
  };
  render() {
    return (
      <Container className="p-0 m-0" fluid>
        <div className="cart">
          <div
            className="cart-banner"
            style={{
              backgroundImage: `url(${"img/heading-pages-01.jpg"})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <h1>Cart</h1>
          </div>
          <Container>
            <div className="table-container">
              <div className="selling-items">
                <table>
                  <colgroup span="4"></colgroup>
                  <tbody>
                    <tr className="remove-border">
                      <th className="cell-1"></th>
                      <th className="cell-2">products</th>
                      <th className="cell-3">price</th>
                      <th className="cell-4">quantity</th>
                      <th className="cell-5">total</th>
                    </tr>
                    <tr>
                      <td className="cell-1">
                        <div className="cart-items">
                          <img
                            className="w-100"
                            src="img/item-10.jpg"
                            alt="product"
                          />
                        </div>
                      </td>
                      <td className="cell-2">Men Tshirt</td>
                      <td className="cell-3">$36.00</td>
                      <td className="cell-4">
                        <div className="items-counter">
                          <button
                            className="counter-indicators"
                            onClick={() => {
                              if (this.state.menNumbers > 1) {
                                this.setState({
                                  menNumbers: this.state.menNumbers - 1,
                                });
                              }
                            }}
                          >
                            <i className="fas fa-minus"></i>
                          </button>
                          <input
                            className="items-number"
                            type="number"
                            name="items counter"
                            value={this.state.menNumbers}
                            onChange={this.onInputChange}
                          />
                          <button
                            onClick={() =>
                              this.setState({
                                menNumbers: this.state.menNumbers + 1,
                              })
                            }
                            className="counter-indicators"
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                      </td>
                      <td className="cell-5">
                        ${this.state.menNumbers * 36}.00
                      </td>
                    </tr>
                    <tr>
                      <td className="cell-1">
                        <div className="cart-items">
                          <img
                            className="w-100"
                            src="img/item-05.jpg"
                            alt="product"
                          />
                        </div>
                      </td>
                      <td className="cell-2">Mug Adventure</td>
                      <td className="cell-3">$16.00</td>
                      <td className="cell-4">
                        <div className="items-counter">
                          <button
                            className="counter-indicators"
                            onClick={() => {
                              if (this.state.numbers > 1) {
                                this.setState({
                                  numbers: this.state.numbers - 1,
                                });
                              }
                            }}
                          >
                            <i className="fas fa-minus"></i>
                          </button>
                          <input
                            className="items-number"
                            type="number"
                            name="items counter"
                            value={this.state.numbers}
                            onChange={this.onInputChange}
                          />
                          <button
                            onClick={() =>
                              this.setState({
                                numbers: this.state.numbers + 1,
                              })
                            }
                            className="counter-indicators"
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                      </td>
                      <td className="cell-5">${this.state.numbers * 16}.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="coupon-container">
              <div className="coupon">
                <div className="coupon-input">
                  <input type="text" name="coupon" placeholder="Coupon Code" />
                </div>
                <div className="submit-coupon">
                  <button className="cart-btn">apply coupon</button>
                </div>
              </div>
              <div className="check-cart">
                <button className="cart-btn">update cart</button>
              </div>
            </div>
            <div className="cart-totals">
              <div className="cart-header">
                <h3>CART TOTALS</h3>
              </div>
              <div className="prices">
                <span>subtotal:</span>
                <span>$39.00</span>
              </div>
              <div className="items-shipping">
                <span>shipping:</span>
                <div className="shipping-help-info">
                  <p>
                    There are no shipping methods available. Please double check
                    your address, or contact us if you need any help.
                  </p>
                  <div className="shipping-address">
                    <label htmlFor="address-select">CALCULATE SHIPPING</label>
                    <select name="address" id="address-select">
                      <option value="">select a country...</option>
                      <option value="US">US</option>
                      <option value="UK">UK</option>
                      <option value="Japan">Japan</option>
                    </select>
                    <input type="text" placeholder="State/Country" />
                    <input type="text" placeholder="Postcode/Zip" />
                    <button className="cart-btn update-btn">update cart</button>
                  </div>
                </div>
              </div>
              <div className="total-price">
                <div className="prices">
                  <span>total:</span>
                  <span>$39.00</span>
                </div>
                <div className="checkout-btn-container">
                  <button className="cart-btn checkout-btn">
                    proceed to checkout
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <Footer />
      </Container>
    );
  }
}
export default Cart;
