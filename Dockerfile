FROM mhart/alpine-node:base

ADD . /app
WORKDIR /app

ARG INSTALL_DEP=true
ENV NODE_ENV="development"

RUN apk add --no-cache curl && \
  mkdir -p /opt && \
  curl -sL https://yarnpkg.com/latest.tar.gz | tar xz -C /opt && \
  mv /opt/dist /opt/yarn && \
  ln -s /opt/yarn/bin/yarn /usr/local/bin && \
  apk del --purge curl

# Set local node_modules binaries directly available
ENV PATH /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/app/node_modules/.bin:/root/.yarn/bin

RUN if [ -n "$INSTALL_DEP" ]; then \
       yarn install --silent --unsafe-perm; \
    fi;


EXPOSE 443

CMD ["/app/docker/run.sh"]
