import {
  ApplicationButton,
  ApplicationSentButton,
  WarningMessage,
  WarningMessageResume,
} from "./application-section.components";

interface ApplicationSectionProps {
  applied: boolean;
  hasApplicantData: boolean;
  hasResume:boolean;
  handleVacancyApplication: () => Promise<void>;
}

const ApplicationSection = ({
  hasApplicantData,
  hasResume,
  applied,
  handleVacancyApplication,
}: ApplicationSectionProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
      {applied ? (
        <ApplicationSentButton />
      ) : (
        <ApplicationButton
          handleVacancyApplication={handleVacancyApplication}
          errors={!hasApplicantData || !hasResume}
        />
      )}
      {!hasApplicantData && <WarningMessage />}
      {!hasResume && <WarningMessageResume />}
    </div>
  );
};

export default ApplicationSection;

