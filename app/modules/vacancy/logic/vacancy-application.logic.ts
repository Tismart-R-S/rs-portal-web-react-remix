import axios from "axios";

export namespace VacancyApplicationLogic {
  export const vacancyApplication = async (
    token: string,
    rqCode: string,
    baseUrl: string
  ) => {
    const response = await axios.post(
      `${baseUrl}/application/${rqCode}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200 || response.status === 201) return true;
    return false;
  };
}
