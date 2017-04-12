/*
 * SonarQube
 * Copyright (C) 2009-2017 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
// @flow
import { keyBy } from 'lodash';

type Issue = { key: string };

type ReceiveIssuesAction = {
  type: 'RECEIVE_ISSUES',
  issues: Array<Issue>
};

type Action = ReceiveIssuesAction;

type State = { [key: string]: Issue };

export const receiveIssues = (issues: Array<Issue>): ReceiveIssuesAction => ({
  type: 'RECEIVE_ISSUES',
  issues
});

const reducer = (state: State = {}, action: Action) => {
  switch (action.type) {
    case 'RECEIVE_ISSUES':
      return { ...state, ...keyBy(action.issues, 'key') };
    default:
      return state;
  }
};

export default reducer;

export const getIssueByKey = (state: State, key: string): ?Issue => state[key];