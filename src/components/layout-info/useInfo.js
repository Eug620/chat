/* 
 * @Author       : Eug
 * @Date         : 2021-03-26 16:30:05
 * @LastEditTime : 2021-03-26 18:14:25
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/components/layout-info/useInfo.js
 */
import { reactive, nextTick } from "vue"
import server from '/@/server'
import { cloneDeep } from 'lodash'

export const useAccountStates = (props) => {
  return reactive({
    currentVM: null,
    account: {
      user_name: props.info.name,
      user_email: props.info.email,
      create_time: props.info.time,
      user_password: ''

    },
    isCreate: false
  })
}

export const useAccount = (props, state, { emit }) => {
  const useCloseInfo = () => {
    emit("close")
  }

  // 创建用户
  const useCreateAccount = () => {
    state.isCreate = !state.isCreate
  }

  const mergeCreateProps = () => {
    return {
      user_name: state.account.user_name,
      user_password: state.account.user_password,
      user_email: state.account.user_email
    }
  }

  // 新建用户
  const useUserCreate = async () => {
    try {
      let res = await server.CreateUser(mergeCreateProps())
      if (res.code === 200) {
        useCloseInfo()
        nextTick(() => {
          emit('show-message', {
            msgText: res.result.msg,
            msgIcon: '',
            msgColor: ''
          })
        })
      } else {
        useCloseInfo()
        nextTick(() => {
          emit('show-message', {
            msgText: res.result.msg,
            msgIcon: '',
            msgColor: ''
          })
        })
      }
    } catch (eror) {
      useCloseInfo()
      nextTick(() => {
        emit('show-message', {
          msgText: 'Server Is Error!',
          msgIcon: '',
          msgColor: ''
        })
      })
    }
  }

  const mergeLoginProps = () => {
    return {
      user_name: state.account.user_name,
      user_password: state.account.user_password
    }
  }

  // 用户登录
  const useUserLogin = async () => {
    try {
      let res = await server.Login(mergeLoginProps())
      if (res.code === 200) {
        const data = cloneDeep(res.result.data)
        localStorage.setItem('EUG_USER_INFO', JSON.stringify(data))
        nextTick(() => {
          useCloseInfo()
          emit('show-message', {
            msgText: res.result.msg,
            msgIcon: '',
            msgColor: ''
          })
        })
      } else {
        useCloseInfo()
        nextTick(() => {
          emit('show-message', {
            msgText: res.result.msg,
            msgIcon: '',
            msgColor: ''
          })
        })
      }
    } catch (error) {
      useCloseInfo()
      nextTick(() => {
        emit('show-message', {
          msgText: 'Sever Error!',
          msgIcon: '',
          msgColor: ''
        })
      })
    }
  }

  // 保存
  const useSave = () => {
    if (state.isCreate) {
      useUserCreate()
    } else {
      useUserLogin()
    }
  }
  return {
    useCloseInfo,
    useCreateAccount,
    useSave
  }
}