import { useEffect } from 'react';

import { useExercise, useLoader, useSchedule, useUser } from 'stores';

export function useInit() {
  const { user } = useUser();
  const { turnOnLoader, turnOffLoader } = useLoader();
  const { loadExercises, loadingExercises } = useExercise();
  const { loadSchedule, loadingSchedule } = useSchedule();

  useEffect(() => {
    if (user && user.id) {
      const fetchAndStoreAllData = async () => {
        turnOnLoader();
        
        Promise.all([
          loadExercises(),
          loadSchedule(user.id!),
        ]);

        if (!loadingExercises && !loadingSchedule) {
          turnOffLoader();
        }

      };
      
      fetchAndStoreAllData();
    }
  }, [user?.id]);

  return {};
}
