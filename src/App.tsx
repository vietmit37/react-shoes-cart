import './App.css';
import Test from '@components/test';
import { useEffect, useState } from 'react';
import axios from 'axios';

 interface Idata {
  _id: string,
  title: string,
  description: string,
  price: number,
  image: string
}
export default function App() {
  const [data, setData] = useState<Idata[]>();
  useEffect(() => {
    axios.get('http://localhost:8080/test')
      .then((res) => setData(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="mainContent">
      <div className="card">
        <div className="cardTop">
          <Test />
          <img
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
          />
        </div>

        <div className="cardTitle">Our Products</div>

        <div className="cardBody">
          {data?.map((item) => (
            <div className="shopItem" key={item._id}>
              <div
                className="shopItem_image"
                style={{ backgroundColor: 'rgb(212, 215, 214)' }}
              >
                <img
                  alt=""
                  src={item.image}
                />
              </div>
              <div className="shopItem_name">{item.title}</div>
              <div className="shopItem_description">
                {item.description}
              </div>
              <div className="shopItem_bottom">
                <div className="shopItem_price">{item.price}</div>
                <div className="shopItem_button">
                  <p>ADD TO CART</p>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="shopItem"> */}
          {/*   <div */}
          {/*     className="shopItem_image" */}
          {/*     style={{ backgroundColor: 'rgb(212, 215, 214)' }} */}
          {/*   > */}
          {/*     <img */}
          {/*       alt="" */}
          {/*       src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png" */}
          {/*     /> */}
          {/*   </div> */}
          {/*   <div className="shopItem_name">Nike Air Zoom Pegasus 36</div> */}
          {/*   <div className="shopItem_description"> */}
          {/*     The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh */}
          {/*     that targets breathability across high-heat areas. A slimmer heel */}
          {/*     collar and tongue reduce bulk, while exposed cables give you a */}
          {/*     snug fit at higher speeds. */}
          {/*   </div> */}
          {/*   <div className="shopItem_bottom"> */}
          {/*     <div className="shopItem_price">$108.97</div> */}
          {/*     <div className="shopItem_button"> */}
          {/*       <p>ADD TO CART</p> */}
          {/*     </div> */}
          {/*   </div> */}
          {/* </div> */}
          {/* <div className="shopItem"> */}
          {/*   <div */}
          {/*     className="shopItem_image" */}
          {/*     style={{ backgroundColor: 'rgb(34, 175, 220)' }} */}
          {/*   > */}
          {/*     <img */}
          {/*       alt="" */}
          {/*       src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png" */}
          {/*     /> */}
          {/*   </div> */}
          {/*   <div className="shopItem_name">Nike Air Zoom Pegasus 36</div> */}
          {/*   <div className="shopItem_description"> */}
          {/*     The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh */}
          {/*     that targets breathability across high-heat areas. A slimmer heel */}
          {/*     collar and tongue reduce bulk, while exposed cables give you a */}
          {/*     snug fit at higher speeds. */}
          {/*   </div> */}
          {/*   <div className="shopItem_bottom"> */}
          {/*     <div className="shopItem_price">$108.97</div> */}
          {/*     <div className="shopItem_button"> */}
          {/*       <p>ADD TO CART</p> */}
          {/*     </div> */}
          {/*   </div> */}
          {/* </div> */}
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
              <div className="cardItem_name">Nike Air Zoom Pegasus 36 Shield</div>
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
    </div>
  );
}
