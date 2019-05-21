import React, { useState } from "react";
import UsersList from "./listComponent";
import Details from "./detailsComponent";

// users mockados
const mockUsers = [
  {
    id: 1,
    name: "Val Blakely",
    address: "50 Nova Avenue",
    email: "vblakely0@bloglovin.com",
    gender: "Male",
    description:
      "Introduction of Other Gas into Genitourinary Tract, Via Natural or Artificial Opening Endoscopic"
  },
  {
    id: 2,
    name: "Jesse Downgate",
    address: "69 Springview Junction",
    email: "jdowngate1@altervista.org",
    gender: "Male",
    description: "Removal of Packing Material on Left Lower Arm"
  },
  {
    id: 3,
    name: "Brandi Aimer",
    address: "6 Ruskin Point",
    email: "baimer2@xinhuanet.com",
    gender: "Female",
    description:
      "Insertion of Radioactive Element into Left Lung, Percutaneous Endoscopic Approach"
  },
  {
    id: 4,
    name: "Lauralee McQuie",
    address: "17269 Del Sol Junction",
    email: "lmcquie3@tinypic.com",
    gender: "Female",
    description:
      "Bypass Stomach to Ileum with Autologous Tissue Substitute, Via Natural or Artificial Opening Endoscopic"
  },
  {
    id: 5,
    name: "Amy Eyles",
    address: "4 Bunting Avenue",
    email: "aeyles4@addtoany.com",
    gender: "Female",
    description:
      "Dilation of Pulmonary Trunk with Intraluminal Device, Open Approach"
  },
  {
    id: 6,
    name: "Toddie Hryniewicki",
    address: "64979 Evergreen Crossing",
    email: "thryniewicki5@wikimedia.org",
    gender: "Male",
    description:
      "Restriction of Left Innominate Vein with Intraluminal Device, Percutaneous Approach"
  },
  {
    id: 7,
    name: "Eyde Bodell",
    address: "11 Harper Alley",
    email: "ebodell6@usnews.com",
    gender: "Female",
    description:
      "Supplement Left Diaphragm with Autologous Tissue Substitute, Open Approach"
  },
  {
    id: 8,
    name: "Roscoe Lindro",
    address: "42789 Mayer Place",
    email: "rlindro7@delicious.com",
    gender: "Male",
    description: "Drainage of Right Upper Arm Skin, External Approach"
  },
  {
    id: 9,
    name: "Elisabet Pagel",
    address: "77 Fuller Place",
    email: "epagel8@naver.com",
    gender: "Female",
    description:
      "Revision of Nonautologous Tissue Substitute in Urethra, Open Approach"
  },
  {
    id: 10,
    name: "Ivar Andren",
    address: "768 Ryan Way",
    email: "iandren9@irs.gov",
    gender: "Male",
    description: "Drainage of Ileum, Percutaneous Endoscopic Approach"
  }
];


function Container() {
  const [selected, useSelected] = useState({});

  console.log(selected);
  return (
    
    <div>
      <UsersList users={mockUsers} selected={useSelected} />
      {
        selected ? <Details user={selected} /> : '' 
      }
    </div>
  );
}

export default Container;
