import React, {
  Ref,
  useEffect,
  useRef,
  useState,
} from 'react'
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import {
  useDispatch,
  useSelector,
} from 'react-redux'
import { IStoreReducer } from '../../redux/storeType'
import { TChatId } from '../../types/common'
import {
  colors,
  styles,
  width,
} from '../../styles'
import { Icon } from 'native-base'
import { TEXTS } from '../../plugins/constants'
import { sendChatMessage } from '../../redux/actions'
import moment from 'moment'
import { hasNotch } from 'react-native-device-info'

export interface ChatScreenProps {
  chatId: TChatId;
}

const ChatScreen = ({
  chatId,
}: ChatScreenProps) => {

  const dispatcher = useDispatch()
  const messages = useSelector((state: IStoreReducer) => state.chats.chat[chatId]?.messages) ?? []
  const [messageText, setMessageText] = useState('')
  const messagesLen = useSelector((state: IStoreReducer) => state.chats.chat[chatId]?.messages?.length ?? 0)
  const listRef: Ref<FlatList> = useRef(null)

  useEffect(() => {
    // listRef?.current?.scrollToOffset({
    //   offset: 999999999,
    // })
  }, [messagesLen])

  const onChangeText = (text: string): void => {
    setMessageText(text)
  }

  const onSendMessage = (): void => {
    if (messageText) {
      Keyboard.dismiss()
      setMessageText('')
      dispatcher(sendChatMessage(chatId, messageText))
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.flex1}
      keyboardVerticalOffset={64 + (hasNotch() ? 24 : 0)} //TODO: needs constants
      behavior={'padding'}>
      <SafeAreaView style={style.container}>
        <FlatList
          data={messages}
          ref={listRef}
          style={styles.flex1}
          keyExtractor={item => `${item.id}_FLAT`}
          renderItem={({ item: chatObj }) => {
            return (
              <View style={style.messageContainer}>
                <View style={style.messageBodyContainer}>
                  <Text style={style.messageText}>{chatObj.message}</Text>
                </View>
                <Text style={style.messageDate}>{moment(chatObj.createdAt).format('HH:mm')}</Text>
              </View>
            )
          }}>
        </FlatList>
        <View style={style.bottomInputView}>
          <TextInput
            placeholder={TEXTS.ENTER_MESSAGE}
            multiline={true}
            autoCorrect={false}
            style={style.textInput}
            onChangeText={onChangeText}
            value={messageText}
          />
          <TouchableOpacity
            onPress={onSendMessage}
            style={style.actionBtn}>
            <Icon
              type={'MaterialIcons'}
              name={'send'}
              style={style.actionBtnIcon}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

const style = StyleSheet.create({
  messageText: {
    color: colors.white,
    // right: -5,
  },
  messageDate: {
    color: colors.grey25,
  },
  messageContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  messageBodyContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: colors.grey900,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 888,
  },
  bottomInputView: {
    height: 50,
    width: width,
    flexDirection: 'row',
    backgroundColor: colors.grey900,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    top: 0,
  },
  actionBtn: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderRadius: 999,
    borderColor: colors.blue800,
    backgroundColor: colors.green300,
    justifyContent: 'center',
    alignItems: 'center',
    left: 5,
  },
  actionBtnIcon: {
    color: colors.indigo,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textInput: {
    width: width - 40 - 20,
    height: 40,
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 15,
    backgroundColor: colors.grey25,
    borderColor: colors.black,
    justifyContent: 'center',
    paddingTop: 10,
    textAlignVertical: 'center',
  },
})

ChatScreen.options = {
  topBar: {
    backButton: {
      visible: true,
    },
  },
}

export default ChatScreen
