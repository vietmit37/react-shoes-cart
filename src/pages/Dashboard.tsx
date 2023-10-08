import Button from '@components/Button';
import ImageElement from '@components/ImageElement';
import Typography from '@components/Typography';

// helpers
import { canAction } from '../helpers/canAction';

function Dashboard() {
  const canAddToCart = canAction('view', 'button-add-to-cart');

  return (
    <>
      <div className="card">
        <div className="cardTop">
          <img
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
          />
        </div>

        <Typography text="Our Product" className="cardTitle" />

        <div className="cardBody">
          <div className="shopItem">

            <ImageElement name="product" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png" />

            <Typography text="Nike Air Zoom Pegasus 36" className="shopItem_name" />
            <Typography
              text="  The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh
              that targets breathability across high-heat areas. A slimmer heel
              collar and tongue reduce bulk, while exposed cables give you a
              snug fit at higher speeds."
              className="shopItem_description"
            />

            <div className="shopItem_bottom">
              <Typography text="$108.97" className="shopItem_price" />

              {canAddToCart && (
                <Button buttonText="ADD TO CART" className="shopItem_button" />
              )}

            </div>
          </div>
        </div>
      </div>

      {/* cart */}
      <div className="card">
        <div className="cardTop">
          <img
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
          />
          <div>Total: 10</div>
        </div>

        <div className="cardTitle">
          <span>Your cart</span>
          <span className="card_amount">$89.97</span>
        </div>

        <div className="cardBody">
          <div className="cardItem">
            <div className="cardItem_left">
              <div className="cardItem_image">
                <img
                  alt=""
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-shield-mens-running-shoe-24FBGb__1_-removebg-preview.png"
                />
              </div>
            </div>
            <div className="cardItem_right">
              <div className="cardItem_name">
                Nike Air Zoom Pegasus 36 Shield
              </div>
              <div className="cardItem_price">$89.97</div>
              <div className="cartItem_actions">
                <div className="cartItem_count">
                  <div className="cartItem_button">-</div>
                  <div className="cartItem_number">1</div>
                  <div className="cartItem_button">+</div>
                </div>
                <div className="carItem_remove">
                  <img
                    alt=""
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALISURBVHic7Zs9bxNBEIYfgyUKAhhQUhDRICEBCh0fgkhBNIT8gPwZ6Gig5y8QCUhH5AqE3EZJgQRKEDSpKEAQkTMdcijGRvi8Z+/e3eze4X2kKe40t/Pu+LRfN4bIdNNQbLsJ3ATOFWznC7AJ/C6syCMngC3gsCTb7LdZGx5SXucH9kBD6BGNRoGrNWlTLQEa7R5VaFMtAbXBZwLWkVnHxtZ9iZr6N6Bp6TcHXAOOW/qfz7i36un5X8A28NXSfywrQJfypzVtS4D7ZSRgpwKdyWsfJnXOZincxf7VrxoJcHKcg80g2ClFShg6ZTQyD2xQr3GgC7yi+EYs8t+TZ329gKwJfiLzbRU4Cywh/fmuGegpw/PssmYwS5aAfURTD3ikFegKo4PNe61gDrxjWFMPuGj7sMte4JLh3mWH57VYSF03cDg7cEmAabxQ2aM7UkjX1O8GfSRgHmgjM8YO4wfOFWC379umYguZVcyrrkm0U/4JMGvwm2N0tblh0b5Jk+222csbcCd1PYOsI9KYzhvuqij6Bx8JMO0kZyz91HehcRAMLSA0MQGhBYQmJiC0gNDEBIQWEJqYgNACQhMTEFpAaGICQgsITUxAaAGhiQnwEMP0+axr6af+6c1HAjqp6wQpo02zxWhi3moIykveU+FBfUGCfEq7N8Z3GSlrSbD/vl/oVNiFvAnQpvLH4pUmJsDBN2tEDlnHn1UBZppljLgkYC/j/i2HNspmMeP+nkawY8ABowPOa41gFjSQaTKt5wDRqsKaIeAh8Bjd/x+laQBPMrQ80wy8iJSgmAK/QWpzW4rxW8gndNMvPyiPua0YH4DnGcGrYGuK/f7LGeBjgM5Nsl3gtGK/h7gAfFbukIt96mvySgt4WVB4UesBL4BTyn0dy42+iEGxog/bR8ai60XFlzl1NZFiyllknNDgB/ANKbaq1V9pI1XlD82w8ru3YIVHAAAAAElFTkSuQmCC"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
