import { useEffect, useMemo } from "react";
import Card from "../../components/Card/Card";
import { loadCharacters } from "./characters-slice";
import { RootState } from "store";
import { useSelector } from "react-redux";
import { useAppDispatch } from "redux-hooks";
import Spinner from "components/ui/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const CardList = () => {
  const dispatch = useAppDispatch();
  const { characters, status, currentPage } = useSelector(
    (state: RootState) => state.characters
  );
  useEffect(() => {
    dispatch(loadCharacters());
  }, []);

  const loadModeCharacters = () => {
    dispatch(loadCharacters());
  };

  const renderChars = () => {
    return characters.map((item) => <Card {...item} key={item.id} />);
  };

  const cards = useMemo(() => renderChars(), [currentPage]);

  return (
    <InfiniteScroll
      dataLength={characters.length}
      next={loadModeCharacters}
      hasMore={true}
      loader={<Spinner />}
    >
      <div>
        <div className="row" style={{ width: "100%" }}>
          {cards}
        </div>
      </div>
    </InfiniteScroll>
  );
};

export default CardList;
