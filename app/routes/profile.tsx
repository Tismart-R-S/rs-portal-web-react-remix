import type {
  ActionFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";
import { redirect, json, data } from "@remix-run/node";

import { AccountForm } from "@modules/profile/components";
import { makeDomainFunction } from "domain-functions";
import { createFormAction } from "remix-forms";
import { profileFormValidator } from "~/modules/profile/utils/profile-form.validatior";
import { ProfileLogic } from "~/modules/profile/logic/profile.logic";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Perfil | R&S" },
    { name: "description", content: "Mi perfil" },
  ];
};

const mutation = makeDomainFunction(profileFormValidator)(async (values) => {
  console.log(values);
  return values;
});

const formAction = createFormAction({ redirect, json });

export const action: ActionFunction = async ({ request }) =>
  formAction({
    request,
    schema: profileFormValidator,
    mutation,
    successPath: "/profile",
  });

export default function Profile() {
  const { profile } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1 className="text-2xl font-semibold text-center">Mi perfil</h1>
      <div className="flex flex-col gap-10 my-8">
        <AccountForm formValues={profile} />
      </div>
    </div>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const profile = await ProfileLogic.getProfile(request);

  return data({ profile });
}
