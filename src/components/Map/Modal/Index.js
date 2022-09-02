import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import Departament from "../../../utilities/Departament";
import {
  Background,
  ModalWrapper,
  ModalImg,
  ModalContent,
  CloseModalButton,
  ContentContainer,
} from "./ModalElements";
import Carousel from "better-react-carousel";
import axios from "axios";
import { render } from "@testing-library/react";

export const Modal = ({ showModal, setShowModal, props }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const MyDot = ({ isActive }) => {
    <span
      style={{
        display: "inline-block",
        height: isActive ? "8px" : "5px",
        width: isActive ? "8px" : "5px",
        background: "#1890ff",
        margin: "0px 20px",
      }}
    ></span>;
  };
  let Shops = [];
  function Products() {
    for (let i = 0; i < Departament.stores.length; i++) {
      if (Departament.stores[i]["Nombre_Comercial"].includes("tecnosuper")) {
        if (
          Departament.stores[i]["Municipio.Departamento"] === Departament.name
        ) {
          Shops.push(Departament.stores[i]);
        }
      }
    }
    console.log(Shops);
  }

  let Tecnosuper = [
    {
      name: "Hola",
      lugar: "sapo",
    },
    {
      name: "Dos",
      lugar: "jaja",
    },
  ];

  //console.log(Departament.stores);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <Carousel
                cols={3}
                rows={1}
                gap={1}
                loop
                scrollSnap={true}
                className="Carousel"
                dot={MyDot}
              >
                {Products()}
                {Shops.map((tecnos) => {
                  <Carousel.Item>
                    <ModalContent>
                      <ModalImg
                        src={require("../../../images/women.png")}
                        alt="camera"
                      />
                      <ContentContainer>
                        <h1>{Departament.name}</h1>
                        <p>{tecnos.name}</p>
                        <a href="#"> 📍 visita en google maps</a>
                      </ContentContainer>
                    </ModalContent>
                  </Carousel.Item>;
                })}
              </Carousel>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
