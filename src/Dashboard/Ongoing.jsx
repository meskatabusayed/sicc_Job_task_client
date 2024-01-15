import OngoingList from "../components/ui/OngoingList";
import useTodo from "../hooks/useTodo";

const Ongoing = () => {
  const { ongoingList } = useTodo();
  console.log(ongoingList);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-10">OngoingList</h1>
      <div>
        {ongoingList?.map((items) => (
          <OngoingList key={items._id} task={items}></OngoingList>
        ))}
      </div>
    </div>
  );
};

export default Ongoing;