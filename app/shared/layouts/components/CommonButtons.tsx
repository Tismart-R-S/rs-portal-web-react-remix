import { Link } from '@remix-run/react';

import { Button } from '@ui/button';

const CommonButtons = () => {
  return (
    <>
      <Button asChild variant="ghost">
        <Link to="/register">Registrarse</Link>
      </Button>
      <Button asChild>
        <Link to="/login">Iniciar Sesión</Link>
      </Button>
    </>
  );
};

export default CommonButtons;
