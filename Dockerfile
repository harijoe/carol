FROM markadams/chromium-xvfb-js:latest
ADD . /app
WORKDIR /app

ARG INSTALL_DEP=true
ARG NODE_ENV=dev

RUN if [ -n "$INSTALL_DEP" ]; then \
       npm install --silent --unsafe-perm && \
       npm build; \
    fi;

# Set local node_modules binaries directly available
ENV PATH /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/app/node_modules/.bin

EXPOSE 8080

ENV HEADLESS_MIKE 1
CMD ["/app/docker/run.sh"]
