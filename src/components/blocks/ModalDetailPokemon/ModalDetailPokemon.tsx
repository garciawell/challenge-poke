import React from 'react';
import { useSelector } from 'react-redux';
import { IPokeModel, IPokeTypes } from 'store/modules/pokemons/models';
import { IState } from 'store/combineReducers';
import {
  Container,
  List,
  ListAbilities,
  Bar,
  CustomTitle,
  Left,
  Right,
  CustomSubTitle,
  Img,
  Relative,
} from './styles';

const ModalDetailPokemon: React.FC = () => {
  const detailPokemon = useSelector<IState, IPokeModel>(
    (state) => state.pokemons.currentPokemon,
  );

  function getPrimaryColor(values: IPokeTypes[]): any {
    const getPrimaryNameType = values.find((v) => v.slot === 1)?.type.name;

    return getPrimaryNameType;
  }

  return (
    <>
      <Container container>
        <Left item xs={6} color={getPrimaryColor(detailPokemon.types)}>
          <Relative>
            <CustomTitle as="h2">{detailPokemon.name}</CustomTitle>

            <Img src={detailPokemon.img} alt={detailPokemon.name} />

            <CustomSubTitle white as="h3">
              Abilities
            </CustomSubTitle>
            <ListAbilities color={getPrimaryColor(detailPokemon.types)}>
              {detailPokemon.abilities.map((item) => (
                <li>{item.ability.name}</li>
              ))}
            </ListAbilities>
          </Relative>
        </Left>

        <Right item xs={6}>
          <CustomSubTitle as="h3">Base Stats</CustomSubTitle>
          <List>
            {detailPokemon.stats.map((item) => (
              <li>
                {item.stat.name} {item.base_stat}
                <Bar size={item.base_stat} />
              </li>
            ))}
          </List>
        </Right>
      </Container>
    </>
  );
};

export default ModalDetailPokemon;