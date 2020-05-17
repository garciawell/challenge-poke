import React from 'react';
import { IPokeModel, IPokeTypes } from 'store/modules/pokemons/models';
import Skeleton from '@material-ui/lab/Skeleton';
import { Wrapper, Title, NumberStyled } from './styles';
import TypesPokemon from '../TypesPokemon';

interface ICardProps {
  data: IPokeModel;
  loading: string;
}

const CardPokemon: React.FC<ICardProps> = ({ data, loading }) => {
  function getPrimaryColor(values: IPokeTypes[]): any {
    const getPrimaryNameType = values.find((v) => v.slot === 1)?.type.name;

    return getPrimaryNameType;
  }

  return (
    <Wrapper
      key={data.id}
      color={getPrimaryColor(data.types)}
      loading={loading}
    >
      <div>
        {loading === 'loading' ? (
          <Skeleton animation="wave" variant="text" width={50} height={25} />
        ) : (
          <NumberStyled>#{data.id}</NumberStyled>
        )}

        {loading === 'loading' ? (
          <Skeleton animation="wave" variant="text" width={125} height={43} />
        ) : (
          <Title as="h2">{data.name}</Title>
        )}

        <TypesPokemon loading={loading} data={data.types} />
      </div>

      <div>
        {loading === 'loading' ? (
          <Skeleton animation="wave" variant="circle" width={96} height={96} />
        ) : (
          <img src={data.img} alt={data.name} />
        )}
      </div>
    </Wrapper>
  );
};

export default CardPokemon;
