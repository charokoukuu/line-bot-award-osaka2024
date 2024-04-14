export const TeamCard = (props: { groupName: string; className: string }) => {
  const { groupName, className } = props;
  return (
    <div>
      <div className="flex justify-center items-center h-full">
        <div className={className}>{groupName}</div>
      </div>
    </div>
  );
};
