import React from 'react';
import { useRouteError } from 'react-router';

import { ErrorPageWrapper, Title, Text } from './styles';

interface Props {
  data: string;
  status: string;
  statusText: string;
}

const ErrorPage: React.FunctionComponent = () => {
  const error = useRouteError() as Props | null;

  return (
    <ErrorPageWrapper data-testid="error-page">
      <Title>
        Oops! {(error as { status: string }).status}{' '}
        {(error as { statusText: string }).statusText}
      </Title>
      <Text>Sorry, an unexpected error has occurred.</Text>
      <Text>{(error as { data: string }).data}</Text>
    </ErrorPageWrapper>
  );
};

export default ErrorPage;
