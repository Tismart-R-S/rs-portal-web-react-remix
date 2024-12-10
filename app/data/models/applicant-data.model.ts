export interface ApplicantDataModel {
  uid: string;
  country: string;
  city: string;
  documentType: string;
  documentNumber: string;
  expectedSalary: number;
  phoneNumber: string;
  targetProfiles: string[];
  yearsExperience: string;
  technologies: string[];
  seniority: string;
  workModes: string[];
  englishLevel: string;
}

export interface ApplicantUpdateRequestModel {
  country: string;
  city: string;
  documentType: string;
  documentNumber: string;
  expectedSalary: number;
  phoneNumber: string;
  targetProfiles: string[];
  yearsExperience: string;
  technologies: string[];
  seniority: string;
  workModes: string[];
  englishLevel: string;
}
