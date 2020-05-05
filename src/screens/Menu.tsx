import React from 'react';
import { t } from 'react-native-tailwindcss';
import styled from 'styled-components/native';

const Background = styled.View`
  ${[t.hFull, t.itemsCenter, t.bgGray500, t.p12, t.pT40]}
`;
const Card = styled.View`
  ${[t.bgWhite, t.wFull, t.p6, t.rounded, t.itemsCenter]}
`;
const Title = styled.Text`
  ${[t.textGray800, t.textXl, t.fontMedium, t.mT0]}
`;
const Description = styled.Text`
  ${[t.textGray600, t.textCenter, t.mT2, t.w56]}
`;
const Button = styled.TouchableOpacity`
  ${[t.bgIndigo600, t.wFull, t.pY2, t.itemsCenter, t.roundedSm, t.mT6]}
`;
const ButtonText = styled.Text`
  ${[t.textWhite, t.fontMedium]}
`;

const Menu: React.FC = () => {
  return (
    <Background>
      <Card>
        <Title>Payment successful</Title>
        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Description>
        <Button>
          <ButtonText>Go back to dashboard</ButtonText>
        </Button>
      </Card>
    </Background>
  );
};

export default Menu;
