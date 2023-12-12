import styled from "styled-components";
import { titleProps } from "./Title";

export const TitlePrimary = styled.h3<titleProps>`

font-size: ${(props) => props.fontSize ? props.fontSize + "px" : "16px"};
padding-bottom:24px;
`