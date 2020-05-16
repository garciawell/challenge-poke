import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addedTodo } from 'store/modules/todos/actions';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      addedTodo({
        description: 'OLÀ PESSOAS',
        id: 22,
      }),
    );
  });

  return <Container>Dashboard</Container>;
};

export default Dashboard;
