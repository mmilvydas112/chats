import React, { useEffect } from 'react'
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
} from 'react-native'
import {
  useDispatch,
  useSelector,
} from 'react-redux'
import ChatListItem from '../../components/ChatListItem'
import { IStoreReducer } from '../../redux/storeType'
import Toast from 'react-native-simple-toast'
import { DURATION } from '../../plugins/constants'
import {
  initNewChat,
  setChatError,
} from '../../redux/actions'

interface ChatListScreenProps {

}

const ChatListScreen = ({}: ChatListScreenProps) => {
  const dispatcher = useDispatch()
  const chatIds = useSelector((state: IStoreReducer) => Object.keys(state.chats.chat)) ?? []
  const chatError = useSelector((state: IStoreReducer) => state.chats.error)

  useEffect(() => {
    dispatcher(initNewChat()) //Creates new chat everytime app loads
  }, [])

  useEffect(() => {
    if (chatError) {
      Toast.showWithGravity(chatError, DURATION.TOAST.MEDIUM, Toast.BOTTOM)
      dispatcher(setChatError())
    }
  }, [chatError])

  return (
    <SafeAreaView>
      <FlatList
        data={chatIds}
        keyExtractor={item => `CLS_${item}_FLAT`}
        renderItem={({ item: chatId }) => {
          return (
            <ChatListItem
              chatId={chatId}
            />
          )
        }}>
      </FlatList>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({})

export default ChatListScreen
