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
import { IStoreReducer } from '../../redux/storeType'

const ChatScreen = () => {
  const dispatcher = useDispatch()
  const messages = useSelector((state: IStoreReducer) => state.chats.chat?.messages) ?? []

  useEffect(() => {
  }, [])

  return (
    <>
      <SafeAreaView>
        <FlatList
          data={messages}
          renderItem={({ item: chatId }) => {
            console.log(chatId, 'ids render')

            return (
              <></>
            )
          }}>
        </FlatList>
      </SafeAreaView>
    </>
  )
}

const style = StyleSheet.create({})

export default ChatScreen
