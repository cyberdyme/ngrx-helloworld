import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IUserState } from '../state/user.state';

const usersSlice = (state: IAppState) => state.users;
const users =   (state: IUserState) => state.users;
const selectedUser =   (state: IUserState) => state.selectedUser;

export const selectUserList = createSelector(usersSlice, users);
export const selectSelectedUser = createSelector(usersSlice, selectedUser);
