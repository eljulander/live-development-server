#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

#IfWinActive, ahk_exe Brackets.exe
^s::
Send, ^s
WinActivate ahk_exe chrome.exe
CoordMode, Mouse Relative
Click 80,50
WinActivate ahk_exe Brackets.exe
Return


