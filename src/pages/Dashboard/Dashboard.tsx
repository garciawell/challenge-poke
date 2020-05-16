import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import { Creators as PokeActions } from 'store/modules/pokemons/actions';
import { IState } from 'store/combineReducers';
import { IPokeModel, IPokeTypes } from 'store/modules/pokemons/models';
import Skeleton from '@material-ui/lab/Skeleton';
import { Container, Title, Wrapper } from './styles';

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

  function getPrimaryColor(values: IPokeTypes[]): string | undefined {
    const getPrimaryNameType = values.find((v) => v.slot === 1)?.type.name;

    return getPrimaryNameType;
  }

  return (
    <>
      <Container>
        {pokes.map((item) => (
          <Wrapper key={item.id} color={getPrimaryColor(item.types)}>
            {loading === 'loading' ? (
              <Skeleton variant="text" width={125} />
            ) : (
              <Title>{item.name}</Title>
            )}

            {item.types.map((item) => (
              <span>{item.type.name}</span>
            ))}

            {loading === 'loading' ? (
              <Skeleton variant="rect" width={96} height={96} />
            ) : (
              <img src={item.img} alt={item.name} />
            )}
          </Wrapper>
        ))}
      </Container>
      <Pagination
        showFirstButton
        showLastButton
        count={Math.ceil(pagination / 20)}
        onChange={handlePagination}
        disabled={loading === 'loading'}
      />
    </>
  );
};

export default Dashboard;
