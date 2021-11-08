import {
  Item,
  Container,
  Inner,
  Pane,
  Title,
  SubTitle,
  Image,
} from "./styles/jumbotron";

// The main Jumbotron element that hold single Jumbotrons
const Jumbotron = ({ children, direction = "row", ...restProps }) => (
  <Item {...restProps}>
    <Inner direction={direction}>{children}</Inner>
  </Item>
);

// Container that holds the whole Jumbotron
Jumbotron.Container = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

// Pane holds the certain groups of elements
Jumbotron.Pane = ({ children, ...restProps }) => (
  <Pane {...restProps}>{children}</Pane>
);

// Title element for the Jumbotron
Jumbotron.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);

// Subtitle element for the Jumbotron
Jumbotron.SubTitle = ({ children, ...restProps }) => (
  <SubTitle {...restProps}>{children}</SubTitle>
);

// Image element for the Jumbotron
Jumbotron.Image = ({ children, ...restProps }) => <Image {...restProps} />;

export default Jumbotron;
