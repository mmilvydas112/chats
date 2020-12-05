import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {
  colors,
  styles,
  width,
} from '../styles'
import { useSelector } from 'react-redux'
import { IStoreReducer } from '../redux/storeType'
import { TChatId } from '../types/common'
import { ROOT_IDS } from '../navigation/config'
import { chat } from '../navigation/main'
import { push } from '../navigation/helpers'
import { DURATION } from '../plugins/constants'
import { debounce } from 'lodash'

export interface ChatListItemProps {
  chatId: TChatId;
}

const ChatListItem = ({
  chatId,
}: ChatListItemProps) => {

  const navigateTo = async (): Promise<void> => {
    await push(ROOT_IDS.LEFT_MENU_CENTER, chat())
  }

  const { id, messages = [] } = useSelector((state: IStoreReducer) => state.chats.chat[chatId])

  return (
    <TouchableOpacity
      onPress={debounce(navigateTo, DURATION.DEBOUNCE.SHORT)}
      activeOpacity={0.8}
      style={style.containerBtn}>
      <Image
        source={{ uri: 'https://cdn2.iconfinder.com/data/icons/audio-16/96/user_avatar_profile_login_button_account_member-512.png' }}
        resizeMode={'cover'}
        style={style.avatarImage}>
      </Image>
      <View style={style.textView}>
        <Text style={style.text}>
          {`${messages?.length ? messages[0] : `Chat with ${chatId}`}`}
        </Text>
      </View>

    </TouchableOpacity>
  )
}

const style = StyleSheet.create<any>({
  containerBtn: {
    flex: 1,
    width,
    height: 70,
    backgroundColor: colors.blue25,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 999,
  },
  textView: {
    marginLeft: 15,
  },
  text: {
    ...styles.systemFontBold,
    fontSize: 16,
    color: colors.indigo,
  },
})

export default ChatListItem
