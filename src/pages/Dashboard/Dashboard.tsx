import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokes } from 'store/modules/todos/actions';
import { IState } from 'store/combineReducers';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  const pokes = useSelector<IState>((state) => state.todos.pokes);

  const dispatch = useDispatch();

  const actionGetPokes = useCallback(() => {
    dispatch(getPokes());
  }, [dispatch]);

  useEffect(() => {
    actionGetPokes();
  }, [actionGetPokes]);

  console.log('pokes');
  return <Container>sdsd</Container>;
};

export default Dashboard;
