import React from "react";
import "../assets/styles/mainStyle.css";
import restFood from "../assets/restauranfood.jpg";
import greekSalad from "../assets/greek salad.jpg";
import bruschetta from "../assets/bruchetta.svg";
import lemonDesert from "../assets/lemon dessert.jpg";
import { RiEBike2Fill } from "react-icons/ri";
import StarRatings from "react-star-ratings";
import maria from "../assets/Maria.jpg";
import antony from "../assets/Antony.jpg";
import tamika from "../assets/Tomika.jpg";
import brandon from "../assets/Brandon.jpg";
import workers1 from "../assets/Mario and Adrian A.jpg";
import workers2 from "../assets/Mario and Adrian b.jpg";
const Main = () => {
  return (
    <main>
      <section id="hero">
        <div className="container">
          <div id="heroinfo">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <button>Reserve a Table</button>
          </div>
          <img src={restFood} alt="Restaurant food"></img>
        </div>
      </section>
      <section id="specials">
        <div className="container">
          <div id="row">
            <span>Specials</span>
            <button> Order Online</button>
          </div>
          <div id="row1">
            <div className="card">
              <div className="cover">
                <img src={greekSalad} alt="greek Salad"></img>
              </div>
              <div className="body">
                <div>
                  <span>Greek Salad</span>
                  <span id="price">$12.99</span>
                </div>
                <p>
                  The famous greek salad Of crispy lettuce, peppers, olives and
                  our Chicago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons.
                </p>
                <p>
                  Order a delivery
                  <RiEBike2Fill style={{ marginLeft: 5, marginBottom: -2 }} />
                </p>
              </div>
            </div>
            <div className="card">
              <div className="cover">
                <img src={bruschetta} alt="Bruschetta"></img>
              </div>
              <div className="body">
                <div>
                  <span>Bruschetta</span>
                  <span id="price">$5.99</span>
                </div>
                <p>
                  Our Bruschetta is made from grilled bread that has been
                  smeared with garlic and seasoned with salt and olive oil.
                </p>
                <p>
                  Order a delivery
                  <RiEBike2Fill style={{ marginLeft: 5, marginBottom: -2 }} />
                </p>
              </div>
            </div>
            <div className="card">
              <div className="cover">
                <img src={lemonDesert} alt="Lemon Desert"></img>
              </div>
              <div className="body">
                <div>
                  <span>Lemon Desert</span>
                  <span id="price">$5.00</span>
                </div>
                <p>
                  This comes straight from grandma's recipe book, every last
                  ingredient has been sourced and is as authentic as can be
                  imagined.
                </p>
                <p>
                  Order a delivery
                  <RiEBike2Fill style={{ marginLeft: 5, marginBottom: -2 }} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials">
        <div className="container">
          <h1>What people say about us!</h1>
          <div className="row">
            <div className="card">
              <div className="cover">
                <img src={maria} alt="maria"></img>
                <h4>Maria Sanchez</h4>
              </div>
              <div className="body">
                <StarRatings
                  rating={4}
                  starDimension="16px"
                  starSpacing="1px"
                  starRatedColor="orange"
                  numberOfStars={5}
                  name="rating"
                />

                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua."
                </p>
              </div>
            </div>
            <div className="card">
              <div className="cover">
                <img src={antony} alt="Antony"></img>
                <h4>Antony Clifton</h4>
              </div>
              <div className="body">
                <StarRatings
                  rating={4}
                  starDimension="16px"
                  starSpacing="1px"
                  starRatedColor="orange"
                  numberOfStars={5}
                  name="rating"
                />

                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua."
                </p>
              </div>
            </div>
            <div className="card">
              <div className="cover">
                <img src={tamika} alt="Tamika"></img>
                <h4>Tamika Jackson</h4>
              </div>
              <div className="body">
                <StarRatings
                  rating={4}
                  starDimension="16px"
                  starSpacing="1px"
                  starRatedColor="orange"
                  numberOfStars={5}
                  name="rating"
                />

                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua."
                </p>
              </div>
            </div>
            <div className="card">
              <div className="cover">
                <img src={brandon} alt="Brandon"></img>
                <h4>Brandon Ming</h4>
              </div>
              <div className="body">
                <StarRatings
                  rating={4}
                  starDimension="16px"
                  starSpacing="1px"
                  starRatedColor="orange"
                  numberOfStars={5}
                  name="rating"
                />

                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="info">
        <div className="container">
          <div id="infoinfo">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
          <div className="images">
            <img src={workers2} img alt="workers 1" />
            <img src={workers1} img alt="workers 2" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
