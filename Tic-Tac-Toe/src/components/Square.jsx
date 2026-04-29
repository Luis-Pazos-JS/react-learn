export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;
  const hunddleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={hunddleClick} className={className}>
      {children}
    </div>
  );
};