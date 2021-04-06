"use strict";
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
                    data: { code: res.code },
                    success: console.log,
                    fail: console.error,
                });
            },
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxHQUFHLENBQWE7SUFDZCxVQUFVLEVBQUUsRUFBRTtJQUNkLFFBQVE7UUFFTixJQUFNLElBQUksR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO1FBQ3hCLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBRy9CLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDUCxPQUFPLEVBQUUsVUFBQSxHQUFHO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUVyQixFQUFFLENBQUMsT0FBTyxDQUFDO29CQUNULEdBQUcsRUFBRSxxQ0FBcUM7b0JBQzFDLE1BQU0sRUFBRSxNQUFNO29CQUNkLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFO29CQUN4QixPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUc7b0JBQ3BCLElBQUksRUFBRSxPQUFPLENBQUMsS0FBSztpQkFDcEIsQ0FBQyxDQUFBO1lBQ0osQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAudHNcbkFwcDxJQXBwT3B0aW9uPih7XG4gIGdsb2JhbERhdGE6IHt9LFxuICBvbkxhdW5jaCgpIHtcbiAgICAvLyDlsZXnpLrmnKzlnLDlrZjlgqjog73liptcbiAgICBjb25zdCBsb2dzID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXVxuICAgIGxvZ3MudW5zaGlmdChEYXRlLm5vdygpKVxuICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdsb2dzJywgbG9ncylcblxuICAgIC8vIOeZu+W9lVxuICAgIHd4LmxvZ2luKHtcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5jb2RlKVxuICAgICAgICAvLyDlj5HpgIEgcmVzLmNvZGUg5Yiw5ZCO5Y+w5o2i5Y+WIG9wZW5JZCwgc2Vzc2lvbktleSwgdW5pb25JZFxuICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3YxL2F1dGgvbG9naW5cIixcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIGRhdGE6IHsgY29kZTogcmVzLmNvZGUgfSxcbiAgICAgICAgICBzdWNjZXNzOiBjb25zb2xlLmxvZyxcbiAgICAgICAgICBmYWlsOiBjb25zb2xlLmVycm9yLFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICB9KVxuICB9LFxufSkiXX0=