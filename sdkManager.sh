#!/bin/sh

# /etc/profile.d/sdkManager.sh
export ANDROID_HOME=/opt/Android
export PATH="${PATH}:${ANDROID_HOME}:${ANDROID_HOME}/tools:${ANDROID_HOME}/tools/bin:${ANDROID_HOME}/platform-tools"
