import React from "react";
import { AiOutlineCheck, AiOutlineCheckCircle } from "react-icons/ai";
import Menu from "./Menu";
import Hero from "../../assets/hero.png";
import cust1 from "../../assets/customers/customer-1.jpg";
import cust2 from "../../assets/customers/customer-2.jpg";
import cust3 from "../../assets/customers/customer-3.jpg";
import cust4 from "../../assets/customers/customer-4.jpg";
import cust5 from "../../assets/customers/customer-5.jpg";
import cust6 from "../../assets/customers/customer-6.jpg";

import screen1 from "../../assets/app/app-screen-1.png";
import screen2 from "../../assets/app/app-screen-2.png";
import screen3 from "../../assets/app/app-screen-3.png";
import meal1 from "../../assets/burger/threeBurger.jpg";
import meal2 from "../../assets/burger/twoBurger.jpg";
import ben from "../../assets/customers/ben.jpg";
import dev from "../../assets/customers/dave.jpg";
import steve from "../../assets/customers/steve.jpg";
import hannah from "../../assets/customers/hannah.jpg";

import gallery1 from "../../assets/collection/one.jpg";
import gallery2 from "../../assets/collection/two.jpg";
import gallery3 from "../../assets/collection/four.jpg";
import gallery4 from "../../assets/collection/three.jpg";
import gallery5 from "../../assets/collection/five.jpg";
import gallery6 from "../../assets/collection/six.jpg";
import gallery7 from "../../assets/collection/seven.jpg";
import gallery8 from "../../assets/collection/eight.jpg";
import gallery9 from "../../assets/collection/nine.jpg";
import gallery10 from "../../assets/collection/ten.jpg";
import gallery12 from "../../assets/collection/twelv.jpg";
import gallery13 from "../../assets/collection/therteen.jpg";
import gallery14 from "../../assets/collection/fourteen.jpg";
import gallery15 from "../../assets/collection/fifteen.jpg";
import gallery16 from "../../assets/collection/sixteen.jpg";

const Home = () => {
  return (
    <>
      <section class="section-hero">
        <div class="hero">
          <div class="hero-text-box">
            <h1 class="heading-primary">
              A best burger delivered to your door, every time you asked .
            </h1>
            <p class="hero-description">
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </p>
            <a href="#menucard" class="btn btn--full margin-right-sm">
              Start eating well
            </a>
            <a href="#" class="btn btn--outline">
              Learn more &darr;
            </a>
            <div class="delivered-meals">
              <div class="delivered-imgs">
                <img src={cust1} alt="Customer_photo" />
                <img src={cust2} alt="Customer_photo" />
                <img src={cust3} alt="Customer_photo" />
                <img src={cust4} alt="Customer_photo" />
                <img src={cust5} alt="Customer_photo" />
                <img src={cust6} alt="Customer_photo" />
              </div>
              <p class="delivered-text">
                <span>250,000+</span> meals delivered last year!
              </p>
            </div>
          </div>
          <div class="hero-img-box">
            <img src={Hero} class="hero-img" alt="hero_image" />
          </div>
        </div>
      </section>

      <section class="section-how">
        <div class="container">
          <span class="subheading">How we make healthy</span>
          <h2 class="heading-secondary">We follow simple approach</h2>
        </div>

        <div class="container grid grid--2-cols grid--center-v">
          {/* <!-- STEP 01 --> */}
          <div class="step-text-box">
            <p class="step-number">01</p>
            <h3 class="heading-tertiary">
              Tell us what you like (and what not)
            </h3>
            <p class="step-description">
              Never again waste time thinking about what to eat! Our AI will
              create a 100% personalized Burger for you. It makes sure you get
              all the nutrients and vitamins you need, no matter what diet you
              follow!
            </p>
          </div>

          <div class="step-img-box">
            <img
              src={screen1}
              class="step-img"
              alt="iPhone app
            preferences selection screen"
            />
          </div>

          {/* <!-- STEP 02 --> */}
          <div class="step-img-box">
            <img
              src={screen2}
              class="step-img"
              alt="iPhone app
            meal approving plan screen"
            />
          </div>
          <div class="step-text-box">
            <p class="step-number">02</p>
            <h3 class="heading-tertiary">
              Approve your Choise for ingredients
            </h3>
            <p class="step-description">
              Once you order, approve the ingredients we collect your data
              accordingly you'll get the choices in future orders that inhamce
              your experience
            </p>
          </div>

          {/* <!-- STEP 03 --> */}
          <div class="step-text-box">
            <p class="step-number">03</p>
            <h3 class="heading-tertiary">
              Receive Burger at anytime at your Door
            </h3>
            <p class="step-description">
              After selecting all the sufficent choices for your self just go to
              cart accordingly set the quantity and the price accordingly and et
              the burger at your door in 30min.
            </p>
          </div>
          <div class="step-img-box">
            <img
              src={screen3}
              class="step-img"
              alt="iPhone app
            delivery screen"
            />
          </div>
        </div>
      </section>

      <section class="section-meals">
        <div class="container center-text">
          <span class="subheading">Meals</span>
          <h2 class="heading-secondary">
            We are offering best ingredients possible
          </h2>
        </div>

        <div class="container grid grid--3-cols margin-bottom-md">
          <div class="meal">
            <img src={meal1} class="meal-img" alt="Japanese Gyozas" />
            <div class="meal-content">
              <div class="meal-tags">
                <span class="tag tag--vegetarian">Vegetarian</span>
              </div>
              <p class="meal-title">Vegan Burger</p>
              <ul class="meal-attributes">
                <li class="meal-attribute">
                  <AiOutlineCheck class="meal-icon" />
                  <span>
                    <strong>650</strong> calories
                  </span>
                </li>
                <li class="meal-attribute">
                  <AiOutlineCheck class="meal-icon" />
                  <span>
                    NutriScore &reg; <strong>74</strong>
                  </span>
                </li>
                <li class="meal-attribute">
                  <AiOutlineCheck class="meal-icon" />
                  <span>
                    <strong>4.9</strong> rating (537)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div class="meal">
            <img src={meal2} class="meal-img" alt="Burger " />
            <div class="meal-content">
              <div class="meal-tags">
                <span class="tag tag--vegan">Vegan</span>
                <span class="tag tag--paleo">Paleo</span>
              </div>
              <p class="meal-title">Cheese Burger</p>
              <ul class="meal-attributes">
                <li class="meal-attribute">
                  <AiOutlineCheck class="meal-icon" />
                  <span>
                    <strong>400</strong> calories
                  </span>
                </li>
                <li class="meal-attribute">
                  <AiOutlineCheck class="meal-icon" />
                  <span>
                    NutriScore &reg; <strong>92</strong>
                  </span>
                </li>
                <li class="meal-attribute">
                  <AiOutlineCheck class="meal-icon" />
                  <span>
                    <strong>4.8</strong> rating (441)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div class="diets">
            <h3 class="heading-tertiary">Cheat your diet</h3>
            <ul class="list">
              <li class="list-item">
                <AiOutlineCheckCircle class="meal-icon" />
                <span>Vegetarian</span>
              </li>
              <li class="list-item">
                <AiOutlineCheckCircle class="meal-icon" />
                <span>Vegan</span>
              </li>
              <li class="list-item">
                <AiOutlineCheckCircle class="meal-icon" />
                <span>Pescatarian</span>
              </li>
              <li class="list-item">
                <AiOutlineCheckCircle class="meal-icon" />
                <span>Gluten-free</span>
              </li>
              <li class="list-item">
                <AiOutlineCheckCircle class="meal-icon" />
                <span>Lactose-free</span>
              </li>
              <li class="list-item">
                <AiOutlineCheckCircle class="meal-icon" />
                <span>Keto</span>
              </li>
              <li class="list-item">
                <AiOutlineCheckCircle class="meal-icon" />
                <span>Paleo</span>
              </li>
              <li class="list-item">
                <AiOutlineCheckCircle class="meal-icon" />
                <span>Low FODMAP</span>
              </li>
              <li class="list-item">
                <AiOutlineCheckCircle class="meal-icon" />
                <span>Kid-friendly</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="container all-recipes">
          <a href="#" class="link">
            See all recipes &rarr;
          </a>
        </div>
      </section>

      <section class="section-testimonials">
        <div class="testimonials-container">
          <span class="subheading">Testimonials</span>
          <h2 class="heading-secondary">Once you try it, you can't go back</h2>

          <div class="testimonials">
            <div class="testimonial">
              <img
                class="testimonial-img"
                alt="Phot_of_customerDaveBryson"
                src={dev}
              />
              <blockquote class="testimonial-text">
                Inexpensive, healthy and great-tasting meals, without even
                having to order manually! It feels truly magical.
              </blockquote>
              <p class="testimonial-name">&mdash; Dave Bryson</p>
            </div>

            <div class="testimonial">
              <img
                class="testimonial-img"
                alt="PhotoofcustomerBenHadley"
                src={ben}
              />
              <blockquote class="testimonial-text">
                The AI algorithm is crazy good, it chooses the right meals for
                me every time. It's amazing not to worry about food anymore!
              </blockquote>
              <p class="testimonial-name">&mdash; Ben Hadley</p>
            </div>

            <div class="testimonial">
              <img
                class="testimonial-img"
                alt="PhotoofcustomerSteveMiller"
                src={steve}
              />
              <blockquote class="testimonial-text">
                Omnifood is a life saver! I just started a company, so there's
                no time for cooking. I couldn't live without my daily meals now!
              </blockquote>
              <p class="testimonial-name">&mdash; Steve Miller</p>
            </div>

            <div class="testimonial">
              <img
                class="testimonial-img"
                alt="PhotoofcustomerHannahSmith"
                src={hannah}
              />
              <blockquote class="testimonial-text">
                I got Omnifood for the whole family, and it frees up so much
                time! Plus, everything is organic and vegan and without plastic.
              </blockquote>
              <p class="testimonial-name">&mdash; Hannah Smith</p>
            </div>
          </div>
        </div>

        <div class="gallery">
          <div class="gallery-item">
            <img
              src={gallery1}
              alt="Photoofbeautifully
            arranged food"
            />
            {/* <!-- <figcaption>Caption</figcaption> --> */}
          </div>
          <div class="gallery-item">
            <img
              src={gallery2}
              alt="Photoofbeautifully
            arranged food"
            />
          </div>
          <div class="gallery-item">
            <img
              src={gallery3}
              alt="Photoofbeautifully
            arranged food"
            />
          </div>
          <div class="gallery-item">
            <img
              src={gallery4}
              alt="Photoofbeautifully
            arranged food"
            />
          </div>
          <div class="gallery-item">
            <img
              src={gallery5}
              alt="Photoofbeautifully
            arranged food"
            />
          </div>
          <div class="gallery-item">
            <img
              src={gallery6}
              alt="Photoofbeautifully
            arranged food"
            />
          </div>
          <div class="gallery-item">
            <img
              src={gallery7}
              alt="Photoofbeautifully
            arranged food"
            />
          </div>
          <div class="gallery-item">
            <img
              src={gallery8}
              alt="Photoofbeautifully
            arranged food"
            />
          </div>
          <div class="gallery-item">
            <img
              src={gallery9}
              alt="Photoofbeautifully
            arranged food"
            />
          </div>
          <div class="gallery-item">
            <img
              src={gallery10}
              alt="Photoofbeautifully
            arranged food"
            />
          </div>
          <div class="gallery-item">
            <img
              src={gallery15}
              alt="Photoofbeautifully
            arranged food"
            />
          </div>
          <div class="gallery-item">
            <img
              src={gallery12}
              alt="Photoofbeautifully
            arranged food"
            />
          </div>
          <div class="gallery-item">
            <img
              src={gallery13}
              alt="Photoofbeautifully
            arranged food"
            />
          </div>
          <div class="gallery-item">
            <img
              src={gallery14}
              alt="Photoofbeautifully
            arranged food"
            />
          </div>
          <div class="gallery-item">
            <img
              src={gallery16}
              alt="Photoofbeautifully
            arranged food"
            />
          </div>
        </div>
      </section>

      {/* <Founder /> */}

      <Menu />
    </>
  );
};

export default Home;
