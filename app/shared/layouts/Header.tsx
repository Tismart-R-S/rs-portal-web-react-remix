import { Link } from '@remix-run/react';

import { Button } from '@ui/button';
import { ProfileButtons, CommonButtons } from './components';
import { HeaderProps } from './layout-props.interface';
import { UserResponseModel } from '@data/models/user.model';

const Header = ({ user }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
      <div className="flex justify-between items-center px-4 py-3 max-w-[1536px] xl:mx-auto">
        <h3 className="text-2xl font-bold">
          <Link to="/">R&S</Link>
        </h3>
        <div className="flex gap-3">
          <Button asChild variant="ghost">
            <Link to="/">Vacantes</Link>
          </Button>
          {user ? <ProfileButtons user={user} /> : <CommonButtons />}
        </div>
      </div>
    </header>
  );
};

export default Header;
