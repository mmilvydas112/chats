import {
  LayoutStackChildren,
  Navigation,
  Options,
} from 'react-native-navigation'
import { captureException } from '../plugins/errors'

export const push = async (componentId: string, layout: LayoutStackChildren): Promise<boolean> => {
  try {
    await Navigation.push(componentId, layout)
    return true
  } catch (err) {
    captureException(err, 'push')
    return false
  }
}

export const mergeOptions = async (componentId: string, options: Options): Promise<boolean> => {
  try {
    await Navigation.mergeOptions(componentId, options)
    return true
  } catch (err) {
    captureException(err, 'mergeOptions')
    return false
  }
}

export const popToRoot = async (componentId: string): Promise<boolean> => {
  try {
    await Navigation.popToRoot(componentId)
    return true
  } catch (err) {
    captureException(err, 'popToRoot')
    return false
  }
}

export const pop = async (componentId: string): Promise<boolean> => {
  try {
    await Navigation.pop(componentId)
    return true
  } catch (err) {
    captureException(err, 'pop')
    return false
  }
}
