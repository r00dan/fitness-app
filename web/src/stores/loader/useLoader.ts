import { useRecoilState } from "recoil";

import { loaderStore } from "./loader.store";

export function useLoader() {
  const [loaderStatus, setLoaderStatus] = useRecoilState(loaderStore);

  const turnOnLoader = () => setLoaderStatus(true);
  const turnOffLoader = () => setLoaderStatus(false);
  const switchLoader = () => setLoaderStatus(!loaderStatus);
  const UNSAFE_forceLoaderStatus = (value: boolean) => setLoaderStatus(value);

  return {
    loaderStatus,
    turnOnLoader,
    turnOffLoader,
    switchLoader,
    UNSAFE_forceLoaderStatus,
  };
}
