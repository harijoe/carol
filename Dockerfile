FROM mhart/alpine-node:latest
ADD . /app
WORKDIR /app

ARG INSTALL_DEP=true
ENV NODE_ENV="development"

RUN if [ -n "$INSTALL_DEP" ]; then \
       npm install --silent --unsafe-perm; \
    fi;

# Set local node_modules binaries directly available
ENV PATH /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/app/node_modules/.bin

EXPOSE 80 443

CMD ["/app/docker/run.sh"]
