@echo off
chcp 65001 >nul
cd /d %~dp0
echo ================================================
echo   英语预习小助手 - 本地服务器
echo ================================================
echo.
echo 本机的 IP 地址（在下面找 IPv4 那一行）：
ipconfig | findstr /C:"IPv4"
echo.
echo 平板/手机与电脑连同一个 WiFi，在平板浏览器里打开：
echo     http://上面显示的IPv4地址:8642
echo 例如： http://192.168.1.5:8642
echo.
echo 然后在平板浏览器里选「添加到主屏幕」即可。
echo 关闭本窗口即停止服务。
echo.
start "" http://localhost:8642
py -m http.server 8642 2>nul || python -m http.server 8642
