export const TeamCard = (props: {
  teamName: string;
  className: string;
  onClick: () => void;
}) => {
  const { teamName, className, onClick } = props;

  return (
    <>
      <button
        className="border-2 rounded-md h-20 flex justify-center items-center w-full"
        onClick={onClick}
      >
        <div className="flex justify-center items-center h-full">
          <div className={className}>{teamName}</div>
        </div>
      </button>
    </>
  );
};
