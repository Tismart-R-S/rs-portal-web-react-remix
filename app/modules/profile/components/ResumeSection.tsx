import { File } from 'lucide-react';

import { Button } from '@ui/button';

const ResumeSection = () => {
  return (
    <div>
      <h5 className="text-md font-semibold mb-5">Currículum</h5>
      <div className="flex flex-col gap-3">
        <span className="text-muted-foreground">Fulanito - CV.pdf</span>
        <Button className="me-auto">
          Subir archivo PDF <File />
        </Button>
      </div>
    </div>
  );
};

export default ResumeSection;
