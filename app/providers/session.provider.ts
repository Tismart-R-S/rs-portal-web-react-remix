import { Session, SessionData } from "@remix-run/node";

import {
  getSession,
  commitSession,
  destroySession,
} from "@lib/auth/storage.server";
import { UserResponseModel } from "@data/models/user.model";

export namespace SessionProvider {
  export interface SessionDataResponse {
    token: string;
    refreshToken: string;
    isAuthenticated: boolean;
    user: UserResponseModel | null;
  }

  export interface SessionSaveResponse {
    accessToken: string;
    refreshToken: string;
    user: UserResponseModel | null;
  }

  export interface SessionFlashRequest {
    type: string; // alert, modal, toast
    message: string;
    ok: boolean;
  }

  export const save = async (cookie: string, data: SessionSaveResponse) => {
    const session = await getSession(cookie);
    session.set("token", data.accessToken);
    session.set("refreshToken", data.refreshToken);
    session.set("user", data.user);
    return await commitSession(session);
  };

  export const saveToken = async (cookie: string, token: string) => {
    const session = await getSession(cookie);
    session.set("token", token);
    return await commitSession(session);
  };

  export const saveByLabel = async <T>(
    cookie: string,
    label: string,
    value: T
  ) => {
    console.log("------saveByLabel------");
    console.log({ label, value });
    const session = await getSession(cookie);
    session.set(label, value);
    return await commitSession(session);
  };

  export const get = async (cookie: string): Promise<SessionDataResponse> => {
    const session = await getSession(cookie);
    const token: string = session.get("token") || "";
    const refreshToken: string = session.get("refreshToken") || "";
    const user: UserResponseModel | null = session.get("user") || null;
    const isAuthenticated = token ? true : false;

    return { isAuthenticated, token, refreshToken, user };
  };

  export const getByLabel = async (cookie: string, label: string) => {
    const session = await getSession(cookie);
    return session.get(label) || null;
  };

  export const destroy = async (cookie: string) => {
    const session = await getSession(cookie);
    return await destroySession(session);
  };

  export const destroyWithSession = async (
    session: Session<SessionData, SessionData>
  ) => await destroySession(session);

  export const flashMessage = async (
    cookie: string,
    label: string,
    data: SessionFlashRequest
  ) => {
    const session = await getSession(cookie);
    session.flash(label, data);
    return await commitSession(session);
  };

  export const getFlashMessage = async (cookie: string, label: string) => {
    const session = await getSession(cookie);

    if (!session.has(label)) return null;

    const data: SessionFlashRequest = session.get(label);
    const newSession = await commitSession(session);

    return { data, newSession };
  };
}
