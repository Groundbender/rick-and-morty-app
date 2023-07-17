import { useEffect, useMemo } from "react";
import Card from "../../components/Card/Card";
import {
  clearCharacters,
  loadCharacters,
  setCurrentPage,
} from "./characters-slice";
import { RootState } from "store";
import { useSelector } from "react-redux";
import { useAppDispatch } from "redux-hooks";
import Spinner from "components/ui/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import Error from "components/Error";

const CardList = () => {
  const dispatch = useAppDispatch();
  const { characters, loadingStatus, currentPage } = useSelector(
    (state: RootState) => state.characters
  );

  const { species, gender, status } = useSelector(
    (state: RootState) => state.filters
  );

  useEffect(() => {
    dispatch(clearCharacters());
    dispatch(setCurrentPage(1));
    dispatch(loadCharacters({ species, gender, status }));
  }, [species, gender, status]);

  const loadModeCharacters = () => {
    dispatch(loadCharacters({ species, gender, status }));
  };

  const renderChars = () => {
    return characters.map((item) => <Card {...item} key={item.id} />);
  };

  const cards = useMemo(
    () => renderChars(),
    [currentPage, gender, status, species]
  );

  return (
    <>
      <InfiniteScroll
        dataLength={characters.length}
        next={loadModeCharacters}
        hasMore={loadingStatus === "success" || loadingStatus === "loading"}
        loader={<Spinner />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b className="text-primary">Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="row" style={{ width: "100%" }}>
          {cards}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default CardList;
