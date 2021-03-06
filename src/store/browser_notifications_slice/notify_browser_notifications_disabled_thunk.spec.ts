import browserNotificationsReducer, { notifyBrowserNotificationsDisabled } from '.'
import { getMockStoreCreator } from '../../../tests/test_utils'
import { MockStoreEnhanced } from 'redux-mock-store'
import { ThunkDispatch } from '../store'
import { AnyAction } from '@reduxjs/toolkit'
import { setToastSuccess } from 'globalid-react-ui'
import { BrowserNotificationsSlice, StoreTypeMock } from './interfaces'
import { getString } from '../../utils'

const mockStore = getMockStoreCreator<StoreTypeMock>()

describe('notifyBrowserNotificationsDisabled thunk', () => {
  const initialState: StoreTypeMock = {
    browserNotifications: {
      isPromptVisible: true,
    },
  }

  afterAll(() => {
    jest.restoreAllMocks()
  })

  it('should execute actions & update state upon being called', async () => {
    const store: MockStoreEnhanced<StoreTypeMock, ThunkDispatch> = mockStore(initialState)

    const action: AnyAction = await store.dispatch(notifyBrowserNotificationsDisabled())

    const actions: AnyAction[] = store.getActions()

    expect(actions[0]).toBePendingThunkAction(notifyBrowserNotificationsDisabled)
    expect(actions[1]).toBeActionType(setToastSuccess)
    expect(actions[1].payload).toEqual({
      title: getString('browser-notifications-disabled-toast-title'),
      message: getString('browser-notifications-disabled-toast-message'),
    })
    expect(actions[2]).toBeFulfilledThunkAction(notifyBrowserNotificationsDisabled)

    const state: BrowserNotificationsSlice =
      browserNotificationsReducer(store.getState().browserNotifications, action)

    expect(state).toEqual({
      isPromptVisible: false,
    })
  })
})
