import { SquarePen, Save } from 'lucide-react';

import { Button } from '@ui/button';
import { Label } from '@ui/label';
import { Input } from '@ui/input';

const ApplicationForm = () => {
  return (
    <div>
      <div className="flex justify-between items-center pb-4">
        <h5 className="text-md font-semibold">Datos de postulación</h5>
        <Button>
          Guardar <Save />
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="country">País</Label>
          <Input id="country" placeholder="United States" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="city">Ciudad</Label>
          <Input id="city" placeholder="New York" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="document_type">Tipo de documento</Label>
          <Input id="document_type" placeholder="DNI" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="document_number">Nro de documento</Label>
          <Input id="document_number" placeholder="12345678" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="salary_expetation">Expectativa salarial</Label>
          <Input id="salary_expetation" placeholder="1500" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="phone_number">Nro de teléfono / celular</Label>
          <Input id="phone_number" placeholder="987654321" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="profiles">Perfiles de interés</Label>
          <Input
            id="profiles"
            placeholder="Frontend, Backend (Selección mult.)"
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="experience">Años de experiencia</Label>
          <Input
            id="experience"
            placeholder="0 - 1 años, 1 - 2, 2 - 3, 3 - 4, 5 a más"
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="technologies">Tecnologías</Label>
          <Input
            id="technologies"
            placeholder="SQL Server, Java (Selección mult.)"
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="seniority">Seniority</Label>
          <Input id="seniority" placeholder="Junior (middle, senior, lead)" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="modality">Modalidad de trabajo preferida</Label>
          <Input
            id="modality"
            placeholder="Remoto (híbrido, presencial) (Mult.)"
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="english_level">Nivel de Inglés</Label>
          <Input
            id="english_level"
            placeholder="Básico (intermedio, avanzado)"
          />
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
