import * as camelcaseKeys from "camelcase-keys"
import { auth } from "./service/proto_gen/auth/auth_pb"
import { todo } from "./service/proto_gen/todo/todo_pb"
// app.ts
App<IAppOption>({
  globalData: {},
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        wx.request({
          url: "http://localhost:8080/v1/auth/login",
          method: "POST",
          data: {
            code: res.code
          } as auth.v1.ILoginRequest,
          success: res => {
            const loginResp: auth.v1.ILoginResponse = 
              auth.v1.LoginResponse.fromObject(
                camelcaseKeys(res.data as object),
              )
            console.log(loginResp)
            
            // 测试接口
            wx.request({
              url: "http://localhost:8080/v1/todo",
              method: "POST",
              data: {
                title: "hello,world!"
              } as todo.v1.ICreateTodoRequest,
              header: {
                authorization: 'Bearer '+loginResp.accessToken,
              }
            })
          },
          fail: console.error,
        })
      },
    })
  },
})