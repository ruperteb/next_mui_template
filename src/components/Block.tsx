"use client";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";

interface Props {
  width: number;
  height: number;
  bgColor?: string;
}
const StyledBlock = styled.div<Props>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  background-color: ${(props) => props.bgColor};
`;

const Block = ({ width, height, bgColor }: Props) => {
  const theme = useTheme();
  return (
    <StyledBlock
      width={width}
      height={height}
      bgColor={bgColor || theme.palette.error.main}
    />
  );
};

export default Block;
