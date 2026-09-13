
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                     '$status $body_bytes_sent "$http_referer" '
                     '"$http_user_agent" "$http_x_forwarded_for"';

    log_format custom '$http_referer';

    # access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        # access_log  logs/host.access.log  main;

        # access_log /var/log/nginx/custom.log custom;

        location / {
            root   html;
            index  index.html index.htm;
        }

        location /kkk {
            return 200 '111';
        }

        # 添加login转发
        location /v1/3rd/api {
            proxy_pass http://localhost:5000;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        location /juhe/api/user/getLoginToken {
            access_log logs/host.access.log custom;
            # 修改 Referer
            proxy_set_header Host "juhe.gateway.yofijoy.com";
            proxy_set_header Origin "https://mlgbcdn.bigrnet.com";
            proxy_set_header Referer "https://mlgbcdn.bigrnet.com/";
            proxy_set_header re-ssk "https://mlgbcdn.bigrnet.com/";
            proxy_redirect off;  # 禁止 302 跳转
            
            proxy_pass https://juhe.gateway.yofijoy.com/juhe/api/user/getLoginToken;
        }

        location /api/v1/webhook {
            proxy_pass https://xz.wps.cn/api/v1/webhook/;
            proxy_redirect off;  # 禁止 302 跳转
        }

        location /test {
            # access_log logs/host.access.log main;
            proxy_pass https://mlgbcdn.bigrnet.com/;
            # proxy_set_header Referer "https://mlgbcdn.bigrnet.com/libs/laya/min/workerloader.min.js";
            proxy_set_header Host mlgbcdn.bigrnet.com;
            proxy_redirect off;  # 禁止 302 跳转
        }

        location /scene {
            # access_log logs/host.access.log main;
            proxy_pass https://mlgbcdn.bigrnet.com/scene;
            # proxy_set_header Referer "https://mlgbcdn.bigrnet.com/libs/laya/min/workerloader.min.js";
            proxy_set_header Host mlgbcdn.bigrnet.com;
            proxy_redirect off;  # 禁止 302 跳转
        }
        
        location /res {
            # access_log logs/host.access.log main;
            proxy_pass https://mlgbcdn.bigrnet.com/res;
            # proxy_set_header Referer "https://mlgbcdn.bigrnet.com/libs/laya/min/workerloader.min.js";
            proxy_set_header Host mlgbcdn.bigrnet.com;
            proxy_redirect off;  # 禁止 302 跳转
        }

        location /res/atlas {
            # access_log logs/host.access.log main;
            proxy_pass https://mlgbcdn.bigrnet.com/res/atlas;
            # proxy_set_header Referer "https://mlgbcdn.bigrnet.com/libs/laya/min/workerloader.min.js";
            proxy_set_header Host mlgbcdn.bigrnet.com;
            proxy_redirect off;  # 禁止 302 跳转
        }

        location /atlas/ui {
            # access_log logs/host.access.log main;
            proxy_pass https://mlgbcdn.bigrnet.com/atlas/ui;
            # proxy_set_header Referer "https://mlgbcdn.bigrnet.com/libs/laya/min/workerloader.min.js";
            proxy_set_header Host mlgbcdn.bigrnet.com;
            proxy_redirect off;  # 禁止 302 跳转
        }

        location /res/audio {
            # access_log logs/host.access.log main;
            proxy_pass https://mlgbcdn.bigrnet.com/res/audio;
            # proxy_set_header Referer "https://mlgbcdn.bigrnet.com/libs/laya/min/workerloader.min.js";
            proxy_set_header Host mlgbcdn.bigrnet.com;
            proxy_redirect off;  # 禁止 302 跳转
        }

        location /res/font1.ttf {
            # access_log logs/host.access.log main;
            proxy_pass https://mlgbcdn.bigrnet.com/res/font1.ttf;
            # proxy_set_header Referer "https://mlgbcdn.bigrnet.com/libs/laya/min/workerloader.min.js";
            proxy_set_header Host mlgbcdn.bigrnet.com;
            proxy_redirect off;  # 禁止 302 跳转
        }

        
        location /106u {
            proxy_pass http://www.106u.com/;
            proxy_redirect off;  # 禁止 302 跳转
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}

}
