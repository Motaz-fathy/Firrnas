import "./whyFirrnasCard.css";
import img from "../../assets/card-homePage.avif";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import GlobalServiceSection from "./whyFirrnasLeftCard";
import FutureHere from "./FutureHere";

function WhyFirrnasCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      title: "Card 1",
      text: "Experience the future with our advanced technology.",
      image: img,
      object: "spaces",
      value: `per M`
    },
    {
      title: "Card 2",
      text: "Seamlessly integrate digital solutions into your world.",
      image: img,
      object: "object",
      value: "per model"
    },
    {
      title: "Card 3",
      text: "Unlock endless possibilities with our platform.",
      image: img,
      object: "realm",
      value: "per project"
    },
  ];




  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + cards.length) % cards.length);
  };

  return (
    <>
      <section className="firrnas-cards">
        <div className="container ">
          <div className="row " >
            <div className="firrnas-left col-lg-6 col-12 ">
              <div className="firrnas-left-content " style={{
                marginBottom: "80px"
              }}>
                <h3 style={{
                  fontSize: "17px",
                  color: "var(--main--color)",
                  fontWeight: "600",
                  lineHeight: "30px"
                }}>Unlock the future with your very own digital twin</h3>
                <p style={{
                  fontSize: "14px",
                  color: "var(--second--color)",
                  lineHeight: "20px",

                }}>Our cutting-edge technology brings your physical world to life in the digital realm.</p>
              </div>
              <div className="firrnas-left-carousel">
                <div className="carousel">
                  <div
                    className="carousel-track"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  >
                    {cards.map((card, index) => (
                      <Card
                        key={index}
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          width: "260px",
                        }}
                        className="carousel-card"
                      >

                        <Card.Img src={card.image} style={{ width: "240px", borderRadius: "19px",height:"250px" }} />
                        <Card.Body className="row" style={{
                          width: "250px",
                          background: " linear - gradient(96.756deg, rgba(147, 144, 183, 0.28) 0 %, rgba(143, 140, 174, 0.06) 100 %)",
                          maxHeight: "70px",
                          padding: "2px",
                          margin: " 10px 0", borderBottomWidth: "1px",
                          borderColor: "rgb(130, 106, 146)",
                          borderLeftWidth: "1px",
                          borderRightWidth: "1px",
                          borderStyle: "solid",
                          borderTopWidth: "1px",
                          backdropFilter: "blur(7.5px)",
                    
borderRadius: "15px",
                          opacity: "1",
                          borderRadius: "19px"
                        }}>
                          <div className="model-side col-6" style={{ fontSize: "12px" }}>
                            <p className="title" style={{
                              marginBottom: "-3px",
                              color:"var(--second--color)"
                            }}>
                              digital twin
                            </p>
                            <p className="disc" style={{
                              fontWeight: "700", color: "var(--main--color)"
                            }}>
                              {card.object}
                            </p>
                          </div>
                          <div className="per-side col-6" style={{ fontSize: "12px" }}>
                            <p className="title" style={{
                              marginBottom: "-3px",
                              color: "var(--second--color)"
                            }}>
                              pricing
                            </p>
                            <p className="disc" style={{
                              fontWeight: "700", color: "var(--main--color)"
                            }}>
                              {card.value}
                            </p>
                          </div>
                        </Card.Body>
                      </Card>

                    ))}
                  </div>
                </div>
                <button className="carousel-button prev" onClick={handlePrev}>
                  ←
                </button>
                <button className="carousel-button next" onClick={handleNext}>
                  →
                </button>



              </div>
            </div>
            <div className="firrnas-right col-lg-6 col-12" style={{
              display: 'flex',
              flexDirection: "column",
    alignItems: 'center'}}>
              <div className="top-side " style={{backgroundColor:"transparent",height:"40%",marginBottom:"10px"}}>

                <FutureHere />
              </div>
              <div className="top-side " style={{
                 border: "1px solid rgb(41, 38, 73)",

                backgroundColor: "rgb(21, 19, 41)",
                borderRadius: "20px",
                opacity: "1",
                height: "45%",
                maxWidth: "720px",
                overflow: "hidden",
                position: "relative",
                width: "400px",
                padding: '25px',
                willChange: "transform",}}>

              <GlobalServiceSection/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyFirrnasCards;
