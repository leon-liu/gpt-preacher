FROM node:17.6.0
# 创建工作目录
RUN groupadd -r app && useradd -r -g app app; \
  mkdir -p /var/app \
  && chown -R app:app /var/app

COPY ./ /var/app/

WORKDIR /var/app/

CMD ["npm", "start"]
