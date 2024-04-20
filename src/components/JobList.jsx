import { useSelector, useDispatch } from "react-redux";

import { JobPosition } from "./JobPosition";
import { selectVisiblePositions } from "store/positions/positionSelectors";
import { addFilter } from "store/filters/filterActions";
import { selectFilters } from "store/filters/filterSelectors";

const JobList = () => {
  const cuttentFilters = useSelector(selectFilters);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, cuttentFilters)
  );
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
