import React from "react";
import { CardContainer } from "./styles";

interface CardProps {
  text: string;
  index: number;
  id: string;
  columnId: string;
  isPreview?: boolean;
}

export const Card = ({ text, id, index, columnId, isPreview }: CardProps) => {
  return <CardContainer>{text}</CardContainer>;
};
