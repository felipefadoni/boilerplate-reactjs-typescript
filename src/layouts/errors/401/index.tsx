import { useEffect } from 'react';
import { PageError401Container } from './styles';

export function PageError401() {
  useEffect(() => {
    sessionStorage.clear();
  }, []);

  return (
    <PageError401Container>
      <h1>Error 401</h1>
      <p>Sorry, but is not authorized to access this page. </p>
    </PageError401Container>
  );
}
