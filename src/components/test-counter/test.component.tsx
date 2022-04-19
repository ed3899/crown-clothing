//% libs

import {useAppSelector, useAppDispatch} from "../../store/hooks";
import {
  decrement,
  fetchPosts,
  increment,
} from "../../store/slices/counter-slice";

import {useGetPostsQuery} from "../../store/query/query";

function Counter() {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  const {data, error, isLoading} = useGetPostsQuery("");

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <br />
        <button onClick={() => dispatch(fetchPosts(1))}>Thunk</button>
      </div>
    </div>
  );
}

export default Counter;
