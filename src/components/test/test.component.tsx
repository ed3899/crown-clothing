interface RepeatProps {
  children: (index: number) => React.ReactNode;
  numTimes: number;
}
function Repeat(props: RepeatProps) {
  let items: React.ReactNode[] = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div className="test">{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index: number) => (
        <div key={index}>This is item {index} in the list</div>
      )}
    </Repeat>
  );
}

export default ListOfTenThings;
