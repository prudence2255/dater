import { createSlice, createSelector } from "@reduxjs/toolkit";
import locations from "store/data/locations";
import {
  login,
  register,
  authUser,
  logout,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
  addUserMeta,
  photoUpload,
  uploadProfilePic,
  getPhotos,
} from "store/actions/userActions";
import Cookies from "universal-cookie";

const countries = locations?.data.map((location) => location.country);
/**
 * user slice// state
 */
const cookies = new Cookies();

const usersSlice = createSlice({
  name: "users",
  initialState: {
    countries: countries,
    cities: [],
    authUser: {},
    user: {},
    users: [],
    usersPag: {},
    photos: [],
    profilePic: {},
    queryParams: "",
    new_messages_count: null,
    new_notifications_count: null,
    notifications_count: null,
    new_views_count: null,
    new_friends_count: null,
  },

  reducers: {
    setCities: (state, action) => {
      locations?.data.map((location) => {
        if (location.country === action.payload) {
          state.cities = location.cities;
        }
      });
    },

    setQueryParams: (state, action) => {
      state.queryParams = action.payload;
    },

    resetUsers: (state, action) => {
      state.users = [];
    },
  },
  extraReducers: {
    [login?.fulfilled]: (state, action) => {
      cookies.set("token", action.payload.data.token, {
        path: "/",
        maxAge: 315360000,
      });
    },

    [logout?.fulfilled]: (state) => {
      cookies.remove("token", { path: "/" });
      state = {};
    },

    [register?.fulfilled]: (state, action) => {
      cookies.set("info", action.payload.data.welcome.data?.info, {
        path: "/",
        maxAge: 315360000,
      });
      cookies.set("token", action.payload.data.token, {
        path: "/",
        maxAge: 315360000,
      });
    },

    [uploadProfilePic?.fulfilled]: (state, action) => {
      console.log("hi");
    },

    [authUser?.fulfilled]: (state, action) => {
      state.authUser = action.payload.data.user;
      state.new_messages_count = action.payload.data.new_messages_count;
      state.new_notifications_count =
        action.payload.data.new_notifications_count;
      state.notifications_count = action.payload.data.notifications_count;
      (state.new_views_count = action.payload.data.new_views_count),
        (state.new_likes_count = action.payload.data.new_likes_count),
        (state.new_friends_count = action.payload.data.new_friends_count);
    },

    [getUser?.fulfilled]: (state, action) => {
      state.user = action.payload.data;
      state.profilePic = action.payload.data?.profile_pictures?.photos ?? {};
    },

    [updateUser?.fulfilled]: (state, action) => {
      state.authUser = action.payload.data;
    },

    [uploadProfilePic?.fulfilled]: (state, action) => {
      state.profilePic = action.payload.data;
    },

    [photoUpload?.fulfilled]: (state, action) => {
      state.photos = [action.payload.data, ...state.photos];
    },

    [getPhotos?.fulfilled]: (state, action) => {
      state.photos = action.payload.data;
    },

    [getUsers?.fulfilled]: (state, action) => {
      state.users = [...state.users, ...action.payload.data.data];
      state.usersPag = action.payload.data.meta;
    },
  },
});

export const { setCities, setQueryParams, resetUsers } = usersSlice.actions;

export const usersSelector = createSelector(
  (state) => ({
    countries: state.users.countries,
    cities: state.users.cities,
    users: state.users.users,
    usersPag: state.users.usersPag,
    authUser: state.users.authUser,
    user: state.users.user,
    photos: state.users.photos,
    profilePic: state.users.profilePic,
    new_messages_count: state.users.new_messages_count,
    new_notifications_count: state.users.new_notifications_count,
    notifications_count: state.users.notifications_count,
    new_views_count: state.users.new_views_count,
    new_likes_count: state.users.new_likes_count,
    new_friends_count: state.users.new_friends_count,
    queryParams: state.users.queryParams,
  }),

  (state) => state
);

export default usersSlice.reducer;
