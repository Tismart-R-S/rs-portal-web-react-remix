import {
  ApplicationButton,
  ApplicationSentButton,
  WarningMessage,
} from './application-section.components';

const ApplicationSection = () => {
  const applied = false;
  const errors = !applied && true;

  return (
    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
      {applied ? (
        <ApplicationSentButton />
      ) : (
        <ApplicationButton errors={errors} />
      )}
      {errors && <WarningMessage />}
    </div>
  );
};

export default ApplicationSection;
