import styled from "styled-components";
import { colors, fontSize, lineHeight } from "../scss/stylesheet";

export const PokedexContainer = styled.div`
  border: 1px solid ${colors.grayVeryLight};
  width: 300px;
  font-family: "Helvetica";
`;
export const PokemonEntry = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 12px 20px 12px 30px;

  &:not(::ast-child) {
    border-bottom: 1px solid ${colors.grayVeryLight};
  }
`;

export const TeamNumber = styled.p`
  font-size: ${fontSize.fontSizeMediumLarge};
  line-height: ${lineHeight.lineHeightMediumLarge};
  font-weight: 600;
  color: ${colors.black};
  margin-right: 20px;
`;

export const PokemonImage = styled.img`
  width: 52px;
  height: 52px;
  margin-right: 10px;
`;

export const PokemonNameContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const PokemonName = styled.h3`
  font-size: ${fontSize.fontSizeMediumLarge};
  line-height: ${lineHeight.lineHeightMediumLarge};
  font-weight: 600;
  color: ${colors.black};
  text-transform: capitalize;
  margin-bottom: 5px;
`;

export const PokemonType = styled.span`
  font-size: ${fontSize.fontSizeSmall};
  line-height: ${lineHeight.lineHeightSmall};
  font-weight: 400;
  color: ${colors.grayMedium};
  font-style: italic;

  &:not(:last-child)::after {
    content: ", ";
  }
`;

export const PokemonId = styled.p`
  font-size: ${fontSize.fontSizeSmall};
  line-height: ${lineHeight.fontSizeSmall};
  font-weight: 400;
  color: ${colors.grayHeavy};
`;
