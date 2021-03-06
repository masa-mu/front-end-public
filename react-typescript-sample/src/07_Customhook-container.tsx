import React, { FC, useEffect, useState } from "react";

import AppComponent from "./07_CustomHook-component";

//Custom Hook 名前は必ずuseで始まらないといけない
const useTimer = (limitSec: number): [number, () => void] => {
  const [timeLeft, setTimeLeft] = useState(limitSec);

  const reset = () => {
    setTimeLeft(limitSec);
  };

  const tick = () => {
    setTimeLeft(prevTime => (prevTime === 0 ? limitSec : prevTime - 1));
  };

  useEffect(() => {
    //初回レンダリング直後に実行される
    const timerId = setInterval(tick, 1000);
    //コンポーネントのアンマウント時に実行される
    return () => clearInterval(timerId);
  }, []);

  return [timeLeft, reset];
};

const AppContainer: FC = () => {
  const LIMIT = 60;
  const [timeLeft, reset] = useTimer(LIMIT);
  return <AppComponent timeLeft={timeLeft} reset={reset} />;
};

export default AppContainer;
