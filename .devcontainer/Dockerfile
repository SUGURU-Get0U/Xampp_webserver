FROM mcr.microsoft.com/devcontainers/base:ubuntu
# baixando a imagem do ubuntu

ENV LANG=C.UTF-8
ENV LC_ALL=C.UTF_8
# Variaveis de ambiente

USER root
# Trocar para o usuario ROOT

RUN pip3 install --upgrade pip \
    && pip3 install \
    django \
    pandas \
    jupyter \
    numpy

RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash - \
    && apt-get install -y nodejs
# Baixando o NODEJS, npm

RUN apt-get uptade && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y intsall --no-install-recommends \
        curl \
        wget \
        ca-certificates \
        gnupg \
        lsb-release \
        build-essential \
        python3 \
        python3-pip
# Pacotes uteis para desenvolvimento WEB



RUN npm install -g \
    live-server \
    serve \
    create-react-app \
    @angular/cli
# Pacotes para rodar o server

RUN mkdir -p /workspace
WORKDIR /workspace 
# Cria o arquivo de workspace

RUN echo 'alias ll="ls -alF"' >> ~/.bashrc \
    && echo 'alias ll="ls -A"' >> ~/.bashrc \
    && echo 'alias ll="ls -CF"' >> ~/.bashrc 


RUN chown -R vscode:vscode /workspace
# permissoes do workspace

EXPOSE 3000 5500 8000 8080 3001
# Portas para desenvolvimento

CMD [ "/bin/bash" ]


