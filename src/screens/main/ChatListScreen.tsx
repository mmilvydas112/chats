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
import store from '../../redux/store'
import { IStoreReducer } from '../../redux/storeType'
import Toast from 'react-native-simple-toast'
import { DURATION } from '../../plugins/constants'
import { setChatError } from '../../redux/actions'

const ChatListScreen = () => {
  const dispatcher = useDispatch()
  const chatIds = useSelector((state: IStoreReducer) => Object.keys(state.chats.chat)) ?? []
  const chatError = useSelector((state: IStoreReducer) => state.chats.error)

  useEffect(() => {
    console.log(store.getState().user, 'user?')
    // if (!store.getState().user.id) {
    //   dispatcher(initNewChat())
    // } else {
    //   dispatcher(initNewChat())
    // }
  }, [])

  useEffect(() => {
    if (chatError) {
      Toast.showWithGravity(chatError, DURATION.TOAST.MEDIUM, Toast.BOTTOM)
      dispatcher(setChatError())
    }
  }, [chatError])

  return (
    <>
      <SafeAreaView>
        <FlatList
          data={chatIds}
          renderItem={({ item: chatId }) => {
            return (
              <ChatListItem
                chatId={chatId}
              />
            )
          }}>
        </FlatList>
      </SafeAreaView>
    </>
  )
}

const style = StyleSheet.create({})

export default ChatListScreen
