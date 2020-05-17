import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as PokeActions } from 'store/modules/pokemons/actions';
import { IState } from 'store/combineReducers';
import { IPokeModel } from 'store/modules/pokemons/models';
import { SearchPokemon } from 'components/blocks';
import CardPokemon from 'components/blocks/CardPokemon';
import { Grid } from '@material-ui/core';
import {
  Box,
  Container,
  Header,
  PaginationStyled,
  TitleStyled,
  WrapperBg,
} from './styles';

const Dashboard: React.FC = () => {
  const pokes = useSelector<IState, IPokeModel[]>(
    (state) => state.pokemons.pokes,
  );
  const pagination = useSelector<IState, number>(
    (state) => state.pokemons.pages,
  );

  const loading = useSelector<IState, string>(
    (state) => state.pokemons.loadingStatus,
  );

  const dispatch = useDispatch();

  const actionGetPokes = useCallback(() => {
    dispatch(PokeActions.getPokes(1));
  }, [dispatch]);

  useEffect(() => {
    actionGetPokes();
  }, [actionGetPokes]);

  const handlePagination = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    dispatch(PokeActions.getPokes(value));
  };

  return (
    <WrapperBg>
      <Container>
        <Header container>
          <Grid item xs={12} md={7}>
            <TitleStyled variant="h2" size="h3">
              Pokedéx
            </TitleStyled>

            <p>
              Search for Pokémon by name or using the National Pokédex number
            </p>
          </Grid>
          <Grid item xs={12} md={5}>
            <SearchPokemon />
          </Grid>
        </Header>
        <Box>
          {pokes.map((data) => (
            <CardPokemon data={data} loading={loading} />
          ))}
        </Box>
        <PaginationStyled
          showFirstButton
          showLastButton
          count={Math.ceil(pagination / 20)}
          onChange={handlePagination}
          disabled={loading === 'loading'}
        />
      </Container>
    </WrapperBg>
  );
};

export default Dashboard;
