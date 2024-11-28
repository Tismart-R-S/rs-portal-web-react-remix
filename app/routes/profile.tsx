import type { MetaFunction } from '@remix-run/node';

import {
  AccountForm,
  ApplicationForm,
  ResumeSection,
} from '@modules/profile/components';

export const meta: MetaFunction = () => {
  return [
    { title: 'Perfil | R&S' },
    { name: 'description', content: 'Mi perfil' },
  ];
};

export default function Profile() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-center">Mi perfil</h1>
      <div className="flex flex-col gap-10 my-8">
        <AccountForm />
        <hr />
        <ApplicationForm />
        <hr />
        <ResumeSection />
      </div>
    </div>
  );
}
