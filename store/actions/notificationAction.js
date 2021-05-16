import { createAsyncThunk} from '@reduxjs/toolkit';
import * as http from 'components/Imports';


/**
 * get Notifications
 */

 export const getNotifications = createAsyncThunk(
    'notifications/getNotifications',
      async (data, thunk) => {
        return http.getHttp(data, thunk);
    }
  );

