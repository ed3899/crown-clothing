//% libs

import {useAppSelector, useAppDispatch} from "../../store/hooks";
import {
  decrement,
  fetchPosts,
  increment,
} from "../../store/slices/counter-slice";

import {useGetPostsQuery} from "../../store/query/query";

import styles from "./test-styles.module.scss";
import {useCallback, useState} from "react";

function Counter() {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();
  const [state, setState] = useState(0);

  const memoizedCallback = useCallback(() => {
    console.log(state);
  }, [state]);

  const {data, error, isLoading} = useGetPostsQuery("");

  return (
    <div className={styles.myScopedClass}>
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
        <button onClick={() => memoizedCallback()}>Memo callback</button>
      </div>
    </div>
  );
}

export default Counter;
