"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var camelcaseKeys = require("camelcase-keys");
var auth_pb_1 = require("./service/proto_gen/auth/auth_pb");
App({
    globalData: {},
    onLaunch: function () {
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        wx.login({
            success: function (res) {
                console.log(res.code);
                wx.request({
                    url: "http://localhost:8080/v1/auth/login",
                    method: "POST",
                    data: {
                        code: res.code
                    },
                    success: function (res) {
                        var loginResp = auth_pb_1.auth.v1.LoginResponse.fromObject(camelcaseKeys(res.data));
                        console.log(loginResp);
                        wx.request({
                            url: "http://localhost:8080/v1/todo",
                            method: "POST",
                            data: {
                                title: "hello,world!"
                            },
                            header: {
                                authorization: 'Bearer ' + loginResp.accessToken,
                            }
                        });
                    },
                    fail: console.error,
                });
            },
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQStDO0FBQy9DLDREQUF1RDtBQUd2RCxHQUFHLENBQWE7SUFDZCxVQUFVLEVBQUUsRUFBRTtJQUNkLFFBQVEsRUFBUjtRQUVFLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7UUFDeEIsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFHL0IsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNQLE9BQU8sRUFBRSxVQUFBLEdBQUc7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ3JCLEVBQUUsQ0FBQyxPQUFPLENBQUM7b0JBQ1QsR0FBRyxFQUFFLHFDQUFxQztvQkFDMUMsTUFBTSxFQUFFLE1BQU07b0JBQ2QsSUFBSSxFQUFFO3dCQUNKLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtxQkFDVTtvQkFDMUIsT0FBTyxFQUFFLFVBQUEsR0FBRzt3QkFDVixJQUFNLFNBQVMsR0FDYixjQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQzlCLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBYyxDQUFDLENBQ2xDLENBQUE7d0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTt3QkFHdEIsRUFBRSxDQUFDLE9BQU8sQ0FBQzs0QkFDVCxHQUFHLEVBQUUsK0JBQStCOzRCQUNwQyxNQUFNLEVBQUUsTUFBTTs0QkFDZCxJQUFJLEVBQUU7Z0NBQ0osS0FBSyxFQUFFLGNBQWM7NkJBQ1E7NEJBQy9CLE1BQU0sRUFBRTtnQ0FDTixhQUFhLEVBQUUsU0FBUyxHQUFDLFNBQVMsQ0FBQyxXQUFXOzZCQUMvQzt5QkFDRixDQUFDLENBQUE7b0JBQ0osQ0FBQztvQkFDRCxJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUs7aUJBQ3BCLENBQUMsQ0FBQTtZQUNKLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2FtZWxjYXNlS2V5cyBmcm9tIFwiY2FtZWxjYXNlLWtleXNcIlxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuL3NlcnZpY2UvcHJvdG9fZ2VuL2F1dGgvYXV0aF9wYlwiXG5pbXBvcnQgeyB0b2RvIH0gZnJvbSBcIi4vc2VydmljZS9wcm90b19nZW4vdG9kby90b2RvX3BiXCJcbi8vIGFwcC50c1xuQXBwPElBcHBPcHRpb24+KHtcbiAgZ2xvYmFsRGF0YToge30sXG4gIG9uTGF1bmNoKCkge1xuICAgIC8vIOWxleekuuacrOWcsOWtmOWCqOiDveWKm1xuICAgIGNvbnN0IGxvZ3MgPSB3eC5nZXRTdG9yYWdlU3luYygnbG9ncycpIHx8IFtdXG4gICAgbG9ncy51bnNoaWZ0KERhdGUubm93KCkpXG4gICAgd3guc2V0U3RvcmFnZVN5bmMoJ2xvZ3MnLCBsb2dzKVxuXG4gICAgLy8g55m75b2VXG4gICAgd3gubG9naW4oe1xuICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmNvZGUpXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjgwODAvdjEvYXV0aC9sb2dpblwiLFxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgY29kZTogcmVzLmNvZGVcbiAgICAgICAgICB9IGFzIGF1dGgudjEuSUxvZ2luUmVxdWVzdCxcbiAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgY29uc3QgbG9naW5SZXNwOiBhdXRoLnYxLklMb2dpblJlc3BvbnNlID0gXG4gICAgICAgICAgICAgIGF1dGgudjEuTG9naW5SZXNwb25zZS5mcm9tT2JqZWN0KFxuICAgICAgICAgICAgICAgIGNhbWVsY2FzZUtleXMocmVzLmRhdGEgYXMgb2JqZWN0KSxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgY29uc29sZS5sb2cobG9naW5SZXNwKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDmtYvor5XmjqXlj6NcbiAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICAgICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3YxL3RvZG9cIixcbiAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcImhlbGxvLHdvcmxkIVwiXG4gICAgICAgICAgICAgIH0gYXMgdG9kby52MS5JQ3JlYXRlVG9kb1JlcXVlc3QsXG4gICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgIGF1dGhvcml6YXRpb246ICdCZWFyZXIgJytsb2dpblJlc3AuYWNjZXNzVG9rZW4sXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOiBjb25zb2xlLmVycm9yLFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICB9KVxuICB9LFxufSkiXX0=