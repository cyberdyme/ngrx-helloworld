import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IConfigState } from '../state/config.state';

const configSlice = (state: IAppState) => state.config;
const config = (state: IConfigState) => state.config;

export const selectConfig = createSelector(configSlice, config);
