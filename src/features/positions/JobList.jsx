import { useDispatch } from "react-redux";
import { JobPosition } from "./JobPosition";
import { addFilter } from "features/filter/filterSlice";
import { usePositions } from "./usePositions";
import { useFetchPositions } from "./useFetchPositions";

const JobList = () => {
  useFetchPositions();
  const positions = usePositions();
  const dispatch = useDispatch();

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition onFilter={handleAddFilter} key={item.id} {...item} />
      ))}
    </div>
  );
};

export { JobList };
