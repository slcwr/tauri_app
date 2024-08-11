FROM mcr.microsoft.com/devcontainers/base:jammy

ENV DISPLAY=:1

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
    # https://tauri.app/v1/guides/getting-started/prerequisites#1-system-dependencies
    libwebkit2gtk-4.0-dev \
    build-essential \
    curl \
    wget \
    libssl-dev \
    libgtk-3-dev \
    libayatana-appindicator3-dev \
    librsvg2-dev \
    # GUI
    lxde \
    # TigerVNC
    tigervnc-standalone-server \
    tigervnc-common \
    tigervnc-tools \
    # noVNC
    novnc \
    websockify
