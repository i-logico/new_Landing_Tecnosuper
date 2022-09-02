import React from "react";
import {
  MdOutlineCreditCardOff,
  MdOutlineReceiptLong,
  MdOutlineRequestPage,
  MdOutlineAod
} from "react-icons/md";
import {
  InfoContainer,
  InfoContentOne,
  InfoContentTwo,
  InfoContentCredit,
  CreditH1,
  CreditP,
  InfoContentMan,
  InfoContentThree,
  ThreeH1,
  ThreeP,
  InfoContentFour,
  InfoContentWomen,
  InfoContentPlanes,
  PlanesH1,
  PlanesP,
  InfoContentFive,
  InfoContentEquipment,
  EquipmentH1,
  EquipmentP,
  CardIconContainer,
  ReceiptIconContainer,
  RequestIconContainer,
  AodIconContainer
} from "./InfoElements";

const InfoSection = () => {
  return (
    <InfoContainer>
      <InfoContentOne>
        Conoce todos los beneficios que tenemos para ti
      </InfoContentOne>
      <InfoContentTwo>
        <InfoContentCredit>
          <CardIconContainer>
            <MdOutlineCreditCardOff />
          </CardIconContainer>
          <CreditH1>Crédito para reportados</CreditH1>
          <CreditP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sit
            itaque dicta laborum porro? Possimus cumque repellat, perspiciatis
            porro voluptates hic voluptate deserunt voluptatibus ducimus
            accusantium reiciendis, est tempore cupiditate!
          </CreditP>
        </InfoContentCredit>
        <InfoContentMan />
      </InfoContentTwo>
      <InfoContentThree>
        <ReceiptIconContainer>
          <MdOutlineReceiptLong />
        </ReceiptIconContainer>
        <ThreeH1>Cuota Inicial del 30%</ThreeH1>
        <ThreeP>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur a
          nisi repellendus quis quae illo, asperiores voluptates harum dolores.
          Itaque sed suscipit neque nam! Cumque eaque doloremque itaque
          doloribus totam.
        </ThreeP>
      </InfoContentThree>
      <InfoContentFour>
        <InfoContentWomen />
        <InfoContentPlanes>
          <RequestIconContainer>
            <MdOutlineRequestPage/>
          </RequestIconContainer>
          <PlanesH1>Diversos planes de pago</PlanesH1>
          <PlanesP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            ratione nemo alias unde voluptates voluptatibus facilis
            reprehenderit vitae, earum rerum, beatae eveniet excepturi! Deserunt
            molestiae temporibus mollitia commodi nesciunt animi?
          </PlanesP>
        </InfoContentPlanes>
      </InfoContentFour>
      <InfoContentFive>
        <InfoContentEquipment>
          <AodIconContainer>
            <MdOutlineAod/>
          </AodIconContainer>
          <EquipmentH1>Equipos Originales e Importados</EquipmentH1>
          <EquipmentP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            ratione nemo alias unde voluptates voluptatibus facilis
            reprehenderit vitae, earum rerum, beatae eveniet excepturi! Deserunt
            molestiae temporibus mollitia commodi nesciunt animi?
          </EquipmentP>
        </InfoContentEquipment>
      </InfoContentFive>
    </InfoContainer>
  );
};

export default InfoSection;
