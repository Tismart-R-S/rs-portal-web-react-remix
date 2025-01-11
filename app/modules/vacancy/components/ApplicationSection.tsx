import {
  ApplicationButton,
  ApplicationSentButton,
  WarningMessage,
} from "./application-section.components";

interface ApplicationSectionProps {
  applied: boolean;
  hasApplicantData: boolean;
  handleVacancyApplication: () => Promise<void>;
}

const ApplicationSection = ({
  hasApplicantData,
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
          errors={!hasApplicantData}
        />
      )}
      {!hasApplicantData && <WarningMessage />}
    </div>
  );
};

export default ApplicationSection;

