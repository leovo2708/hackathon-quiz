import { useState } from 'react'
import { MessageTemplateButtonItem } from '@globalid/messaging-service-sdk'
import { ButtonElementsState, ButtonTypes, UseCardViewMessageHookResult, MessageCardType } from './interfaces'
import { ButtonState, setToastError, setToastSuccess } from 'globalid-react-ui'
import { retrieveMessageCardTypeFromLink } from '../helpers'
import { useBooleanState } from '../../../../../hooks/use_boolean_state'
import { BooleanState } from '../../../../../hooks/interfaces'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '../../../../../store'
import { handleRejectInvitation as handleRejectInvitationHelper, handleInvitationButtonClick } from './group_invitation_helpers'
import { handleMeetingButtonClick } from './meeting_helpers'
import { postAnswer } from '../../../../../services/api/game_api'
import { isAxiosError } from '../../../../../utils'

export const handleAnswerClick = async (
  button: MessageTemplateButtonItem,
  dispatch: ThunkDispatch,
): Promise<void> => {
  try {
    const link = button.cta_link

    await postAnswer(link)
    dispatch(setToastSuccess({
      title: 'Your answer has been sent!',
    }))
  } catch (error) {
    if (isAxiosError(error))
    {
      dispatch(setToastError({
        title: error.response?.data.message,
      }))
    }
  }
}

export const useCardViewMessage = (channelId: string): UseCardViewMessageHookResult => {
  const [rejectInvitationDialogOpen, openRejectInvitationDialog, closeRejectInvitationDialog]: BooleanState = useBooleanState(false)
  const [invitationUuid, setInvitationUuid] = useState<string>('')

  const dispatch: ThunkDispatch = useDispatch()

  const [buttonElementsState, setButtonState] = useState<ButtonElementsState>({
    [ButtonTypes.PRIMARY]: ButtonState.DEFAULT,
    [ButtonTypes.SECONDARY]: ButtonState.DEFAULT,
    [ButtonTypes.ADDITIONAL]: ButtonState.DEFAULT,
  })

  const cardTypeToActionMap: {
    [key: string]:
    (button: MessageTemplateButtonItem) => Promise<void>
  } = {
    [MessageCardType.GROUP_INVITATION]:  async (button: MessageTemplateButtonItem) =>
      handleInvitationButtonClick(button, setInvitationUuid, dispatch, openRejectInvitationDialog),
    [MessageCardType.MEETING_INVITATION]:  async (button: MessageTemplateButtonItem) =>
      handleMeetingButtonClick(channelId, button, dispatch),
    [MessageCardType.GAME]:  async (button: MessageTemplateButtonItem) =>
      handleAnswerClick(button, dispatch),
  }

  const handleClickToButtons = async (button: MessageTemplateButtonItem): Promise<void> => {
    setButtonState((prev: ButtonElementsState) => ({
      ...prev,
      [button.mode]: ButtonState.INPROGRESS,
    }))

    const messageCardType: MessageCardType = retrieveMessageCardTypeFromLink(button.cta_link)

    await cardTypeToActionMap[messageCardType](button)

    setButtonState((prev: ButtonElementsState) => ({
      ...prev,
      [button.mode]: ButtonState.DEFAULT,
    }))
  }

  return {
    handleClickToButtons,
    buttonElementsState,
    handleRejectInvitation: async () => handleRejectInvitationHelper(invitationUuid, dispatch, closeRejectInvitationDialog),
    openRejectInvitationDialog,
    closeRejectInvitationDialog,
    rejectInvitationDialogOpen,
  }
}
