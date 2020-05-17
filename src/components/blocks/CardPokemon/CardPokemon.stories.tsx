import React from 'react';
import { storiesOf } from '@storybook/react';
import CardPokemon from './index';
import jsonMock from '../../../../.storybook/jsonMockStore';

const stories = storiesOf('components/blocks', module);
stories.add(`CardPokemon`, () => (
  <CardPokemon data={jsonMock.pokemons.pokes[0]} loading="LOADED" />
));
