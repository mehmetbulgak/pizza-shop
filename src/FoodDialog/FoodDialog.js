import React from "react";
import styled from "styled-components";
import { FoodLabel } from "../Menu/FoodGrid";
import { pizzaRed } from "../styles/colors";
import { Title } from "../styles/title";

const Dialog = styled.div`
  width: 500px;
  background-color: white;
  position: fixed;
  /* height: 500px; */
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
`;

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  /* margin-bottom: 20px; */
  ${({ img }) => (img ? `background-image: url(${img});` : `min-height: 75px;`)}
  background-position: center;
  background-size: cover;
`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  padding: 0px 40px;
  padding-bottom: 80px;
`;

export const DialogFooter = styled.div`
  box-shadow: 0px -2px 10px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ConfirmButton = styled.div`
  margin: 10px;
  color: white;
  height: 30px;
  border-radius: 5px;
  /* padding: 10px; */
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: ${pizzaRed};
  display:flex;
  align-items:center;
  justify-content:center;
  ${({ disabled }) =>
    disabled &&
    `
    opactity: .5; 
    background-color: grey; 
    pointer-events: none; 
  `}
`;

const DialogBannerName = styled(FoodLabel)`
  font-size: 30px;
  padding: 5px 40px;
  top: ${({ img }) => (img ? `100px` : `20px`)};
`;

export function FoodDialog({ openFood, setOpenFood }) {
  function close() {
    setOpenFood()
  }

  if (!openFood) return null;
  return (
    <>
      <DialogShadow onClick={close} />
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogBannerName>{openFood.name}</DialogBannerName>
        </DialogBanner>
        <DialogContent />
        <DialogFooter>
          <ConfirmButton>Add to Order</ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  )
}