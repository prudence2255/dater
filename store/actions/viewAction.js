import { createAsyncThunk} from '@reduxjs/toolkit';
import * as http from 'components/Imports';


/**
 * get Views
 */

 export const getViews = createAsyncThunk(
    'views/getViews',
      async (data, thunk) => {
        return http.getHttp(data, thunk);
    }
  );

