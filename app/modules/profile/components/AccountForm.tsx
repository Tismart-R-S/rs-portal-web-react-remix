import { SquarePen, Save } from 'lucide-react';

import { Button } from '@ui/button';
import { Label } from '@ui/label';
import { Input } from '@ui/input';

const AccountForm = () => {
  return (
    <div>
      <div className="flex justify-between items-center pb-4">
        <h5 className="text-md font-semibold">Datos de la cuenta</h5>
        <Button>
          Editar <SquarePen />
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Nombres</Label>
          <Input id="name" placeholder="Peter" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="lastname">Apellidos</Label>
          <Input id="lastname" placeholder="Parker" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Correo Electrónico</Label>
          <Input type="email" id="email" placeholder="abc@xyz.com" />
        </div>
      </div>
    </div>
  );
};

export default AccountForm;
