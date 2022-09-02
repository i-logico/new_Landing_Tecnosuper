import React, { useState } from "react";
import { VectorMap } from "@south-paw/react-vector-maps";
import colombia from "./colombia.json";
import { Modal } from "./Modal/Index";
import Departament from "../../utilities/Departament";
import {
  ColombiaMap,
  SectionMap,
  MapInfo,
  MapH1,
  MapP,
  ContainerMap,
  ContainerMaps,
} from "./MapElements";
import axios from "axios";

const Map = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = ({ target }) => {
    const ids = [
      "co-ama",
      "co-ant",
      "co-ces",
      "co-nsa",
      "co-san",
      "co-boy",
      "co-cun",
      "co-dc",
      "co-vac",
      "co-cau",
      "co-met",
      "co-guv",
    ];

    Departament.name = target.attributes.name.value;
    const id = target.attributes.id.value;
    ids.forEach((e) => {
      if (e === id) {
        setShowModal((prev) => !prev);
      }
    });
  };

  return (
    <>
      <SectionMap>
        <MapInfo>
          <MapH1>Tenemos presencia en muchas partes del país</MapH1>
          <MapP>
            Da Click en tu departamento para ver la ubicación de nuestras
            tiendas
          </MapP>
        </MapInfo>
        <ContainerMaps>
          <ContainerMap>
            <VectorMap {...colombia} />
          </ContainerMap>
          <ColombiaMap>
            <VectorMap {...colombia} onClick={openModal} />
          </ColombiaMap>
        </ContainerMaps>
        <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
      </SectionMap>
    </>
  );
};

export default Map;
