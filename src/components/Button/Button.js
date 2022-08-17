import styled from "styled-components";
import { typography, spacing } from "../shared/styles";

const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 8px;
  padding: ${spacing.s3} ${spacing.m4};
  font: inherit;
  font-size: ${typography.type.m1};
  font-weight: 800;
  letter-spacing: ${typography.tracking.m1};
  line-height: ${typography.leading.s5};
  cursor: pointer;

  &:focus {
    box-shadow: ${(props) => props.theme.strokeFocus};
  }
`;

const BackgroundButton = styled(Button)`
  &:hover {
    background-color: ${(props) => props.theme.primaryHover};
    color: ${(props) => props.theme.textOnPrimary};
  }

  &:active {
    background-color: ${(props) => props.theme.primaryActive};
  }

  &:disabled {
    background-color: ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.textOnDisabled};
  }
`;

const PrimaryButton = styled(BackgroundButton)`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.textOnPrimary};
`;

export const SecondaryButton = styled(BackgroundButton)`
  background-color: ${(props) => props.theme.primaryL1};
  color: ${(props) => props.theme.primary};
`;

export const TertiaryButton = styled(Button)`
  background-color: transparent;
  color: ${(props) => props.theme.primary};

  &:hover {
    color: ${(props) => props.theme.primaryHover};
  }

  &:active {
    color: ${(props) => props.theme.primaryActive};
  }

  &:disabled {
    color: ${(props) => props.theme.textOnDisabled};
  }
`;

export default PrimaryButton;
