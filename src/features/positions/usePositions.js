import { useSelector } from "react-redux";
import { selectVisiblePositions } from "./positionSlice";

import { selectFilters } from "features/filter/filterSlice";

export const usePositions = () => {
  const cuttentFilters = useSelector(selectFilters);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, cuttentFilters)
  );

  return positions;
};
